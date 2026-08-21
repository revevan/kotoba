#!/usr/bin/env python3
"""Kotoba shorts generator.

Renders 1080x1920 vertical vocab shorts entirely from repo assets: deck JSON
(public/decks), sentence JSON (public/sentences), and pre-generated MP3s
(public/audio/{ja,ja-slow,en,sen,sen-en}). No TTS, no network.

Style decisions are locked (see HANDOFF.md): static frames only — no zoom/motion;
outro copy is "Learn Japanese, hands-free." (never driving phrasing).

Usage (via `pnpm run gen-shorts --`):
  --queue [file]                  render the curated queue (default queue.json here)
  <deckId> [--format=X] [--count=N]   render N words from a deck (default deadpan, 5)
  --force                         re-render even if the manifest says up to date
  --start-date YYYY-MM-DD         first publishAt weekday (default: next weekday)

Outputs to tools/shorts/out/: MP4s, review.html (video grid for review),
batch.json (title/description/hashtags/publishAt for the uploader).
Idempotency via shorts-manifest.json, keyed like tools/audio-manifest.json.
"""
import argparse, datetime, glob, hashlib, json, os, subprocess, sys, tempfile
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(ROOT))
DECKS_DIR = os.path.join(REPO, 'public', 'decks')
SENTS_DIR = os.path.join(REPO, 'public', 'sentences')
AUDIO_DIR = os.path.join(REPO, 'public', 'audio')
OUT_DIR = os.path.join(ROOT, 'out')
MANIFEST = os.path.join(ROOT, 'shorts-manifest.json')
QUEUE_DEFAULT = os.path.join(ROOT, 'queue.json')

STYLE_VERSION = 3  # bump to invalidate every rendered video after a style change

W, H = 1080, 1920
FPS = 30

# Kotoba brand palette (from marketing page)
BG      = '#10101a'
BAND    = '#13131f'
BORDER  = '#2c2c40'
TEXT    = '#f0f0f5'
BODY    = '#b8b8c8'
MUTED   = '#9a9aae'
FAINT   = '#6c6c80'
ACCENT  = '#7c7cf0'
SUCCESS = '#6fdc8c'

HASHTAGS = ['#learnjapanese', '#jlpt', '#nihongo']

# ---------- fonts ----------
# Preferred: per-weight JP OTFs from `brew install --cask font-noto-{serif,sans}-cjk-jp`
# (~/Library/Fonts/NotoSerifCJKjp-<Weight>.otf). Fallbacks: vendored files in
# tools/shorts/fonts/, then Linux ttc paths (JP face is index 0 in the ttcs).
FONT_DIRS = [
    os.path.join(ROOT, 'fonts'),
    os.path.expanduser('~/Library/Fonts'),
    '/Library/Fonts',
    '/usr/share/fonts/opentype/noto',
]
WEIGHT_FALLBACKS = {'Light': ['Light', 'DemiLight', 'Regular'],
                    'Medium': ['Medium', 'Regular'],
                    'Bold': ['Bold', 'Black']}

_font_paths = {}
def _find_font(family, weight):  # family: 'Serif' | 'Sans'
    key = (family, weight)
    if key in _font_paths:
        return _font_paths[key]
    for w in WEIGHT_FALLBACKS.get(weight, [weight]):
        for d in FONT_DIRS:
            for name in (f'Noto{family}CJKjp-{w}.otf', f'Noto{family}CJK-{w}.ttc',
                         f'Noto{family}CJKjp-{w}.ttf'):
                p = os.path.join(d, name)
                if os.path.exists(p):
                    _font_paths[key] = p
                    return p
    sys.exit(f'font not found: Noto {family} CJK JP {weight}. '
             f'Run: brew install --cask font-noto-serif-cjk-jp font-noto-sans-cjk-jp')

_fonts = {}
def F(family, weight, size):
    key = (family, weight, size)
    if key not in _fonts:
        # index 0 = the JP face in the Noto CJK ttcs; harmless for single-face otfs
        _fonts[key] = ImageFont.truetype(_find_font(family, weight), size, index=0)
    return _fonts[key]

serif_jp_big = lambda s: F('Serif', 'Bold', s)
serif_jp_med = lambda s: F('Serif', 'Medium', s)
serif_jp_reg = lambda s: F('Serif', 'Regular', s)
sans_reg     = lambda s: F('Sans', 'Regular', s)
sans_med     = lambda s: F('Sans', 'Medium', s)
sans_bold    = lambda s: F('Sans', 'Bold', s)
sans_light   = lambda s: F('Sans', 'Light', s)


# ---------- frames ----------

def base_frame():
    img = Image.new('RGB', (W, H), BG)
    d = ImageDraw.Draw(img)
    # subtle vertical band behind center content, like the site's band color
    d.rectangle([0, 560, W, 1460], fill=BAND)
    d.line([0, 560, W, 560], fill=BORDER, width=2)
    d.line([0, 1460, W, 1460], fill=BORDER, width=2)
    # wordmark top
    wm = serif_jp_med(64)
    tw = d.textlength('Kotoba', font=wm)
    d.text(((W - tw) / 2, 130), 'Kotoba', font=wm, fill=ACCENT)
    sub = sans_reg(34)
    s = 'hands-free Japanese'
    tw = d.textlength(s, font=sub)
    d.text(((W - tw) / 2, 224), s, font=sub, fill=FAINT)
    return img, d


def center(d, y, text, font, fill, tracking=0):
    if tracking:
        widths = [d.textlength(ch, font=font) + tracking for ch in text]
        total = sum(widths) - tracking
        x = (W - total) / 2
        for ch, w in zip(text, widths):
            d.text((x, y), ch, font=font, fill=fill)
            x += w
    else:
        tw = d.textlength(text, font=font)
        d.text(((W - tw) / 2, y), text, font=font, fill=fill)


def label(d, y, text):
    center(d, y, text, sans_med(38), FAINT, tracking=14)


def highlight_line(d, y, before, word, after, font):
    """Center a JA sentence with the target word in accent color."""
    parts = [(before, TEXT), (word, ACCENT), (after, TEXT)]
    total = sum(d.textlength(p, font=font) for p, _ in parts)
    x = (W - total) / 2
    for p, color in parts:
        d.text((x, y), p, font=font, fill=color)
        x += d.textlength(p, font=font)


_measure = ImageDraw.Draw(Image.new('RGB', (1, 1)))

def text_w(text, font):
    return _measure.textlength(text, font=font)


def fit_size(text, font_fn, start, floor, max_w):
    size = start
    while text_w(text, font_fn(size)) > max_w and size > floor:
        size -= 4
    return size


def wrap_words(text, font, max_w):
    """Greedy word wrap for English text."""
    lines, cur = [], ''
    for word in text.split():
        cand = f'{cur} {word}'.strip()
        if cur and text_w(cand, font) > max_w:
            lines.append(cur)
            cur = word
        else:
            cur = cand
    if cur:
        lines.append(cur)
    return lines


KINSOKU = '。、！？」』）・…ー々ぁぃぅぇぉっゃゅょんゝ'  # never start a line with these

def wrap_runs(runs, font, max_w):
    """Char wrap for JA colored runs [(text, color)]; returns list of lines of runs."""
    chars = [(ch, color) for text, color in runs for ch in text]
    lines, cur, cur_w = [], [], 0.0
    for ch, color in chars:
        w = text_w(ch, font)
        if cur and cur_w + w > max_w and ch not in KINSOKU:
            lines.append(cur)
            cur, cur_w = [], 0.0
        cur.append((ch, color))
        cur_w += w
    if cur:
        lines.append(cur)
    return lines


def center_runs(d, y, line, font):
    total = sum(text_w(ch, font) for ch, _ in line)
    x = (W - total) / 2
    for ch, color in line:
        d.text((x, y), ch, font=font, fill=color)
        x += text_w(ch, font)


def frame_hook(q, level):
    img, d = base_frame()
    center(d, 760, 'Can you say it', serif_jp_reg(96), TEXT)
    center(d, 900, 'in Japanese?', serif_jp_reg(96), TEXT)
    d.rectangle([W/2 - 60, 1080, W/2 + 60, 1088], fill=ACCENT)
    center(d, 1160, f'JLPT {level} · {q["prompt"]}', sans_reg(40), FAINT)
    return img


def frame_prompt(q, count=None):
    img, d = base_frame()
    label(d, 680, 'SAY IT IN JAPANESE')
    size = fit_size(q['prompt'], sans_bold, 150, 70, W - 120)
    center(d, 790, q['prompt'], sans_bold(size), TEXT)
    if count:
        center(d, 1120, count, serif_jp_big(170), ACCENT)
    else:
        center(d, 1170, '· · ·', sans_reg(70), FAINT)
    return img


def frame_reveal(q):
    img, d = base_frame()
    size = fit_size(q['written'][0], serif_jp_big, 330, 120, W - 120)
    center(d, 620, q['written'][0], serif_jp_big(size), TEXT)
    y = 1090
    if q['written'][0] != q['kana']:
        center(d, y, q['kana'], sans_reg(90), BODY); y += 130
    center(d, y, q['romaji'], sans_light(64), MUTED); y += 110
    d.rectangle([W/2 - 40, y + 8, W/2 + 40, y + 12], fill=BORDER)
    g_size = fit_size(q['prompt'], sans_reg, 56, 40, W - 120)
    center(d, y + 46, q['prompt'], sans_reg(g_size), ACCENT)
    return img


def frame_teach(q, lab='WORD OF THE DAY', gloss=None):
    img, d = base_frame()
    label(d, 620, lab)
    size = fit_size(q['written'][0], serif_jp_big, 300, 120, W - 120)
    center(d, 700, q['written'][0], serif_jp_big(size), TEXT)
    y = 1120
    if q['written'][0] != q['kana']:
        center(d, y, q['kana'], sans_reg(84), BODY); y += 122
    center(d, y, q['romaji'], sans_light(60), MUTED); y += 104
    g = gloss or q['prompt']
    g_size = fit_size(g, sans_reg, 56, 40, W - 120)
    center(d, y + 30, g, sans_reg(g_size), ACCENT)
    return img


def frame_sentence(q, s):
    img, d = base_frame()
    label(d, 640, 'IN A SENTENCE')
    max_w = W - 120
    ja = s['textJa']
    w = s['clozeSurface']
    i = ja.index(w)
    runs = [(ja[:i], TEXT), (w, ACCENT), (ja[i + len(w):], TEXT)]
    # largest size that fits on one line, else wrap (2 lines preferred, 3 at the floor)
    size = fit_size(ja, serif_jp_med, 84, 64, max_w)
    if text_w(ja, serif_jp_med(size)) <= max_w:
        ja_lines = [size, wrap_runs(runs, serif_jp_med(size), max_w)]
    else:
        for size in (68, 64, 60, 56, 52, 48):
            lines = wrap_runs(runs, serif_jp_med(size), max_w)
            if len(lines) <= 2 or size == 48:
                ja_lines = [size, lines]
                break
    size, lines = ja_lines
    lh = int(size * 1.3)
    y0 = 810 - (len(lines) - 1) * lh // 2
    for n, line in enumerate(lines):
        center_runs(d, y0 + n * lh, line, serif_jp_med(size))
    ja_bottom = y0 + (len(lines) - 1) * lh + size

    kana = s['readingKana']
    k_size = fit_size(kana, sans_reg, 46, 34, max_w)
    k_y = max(990, ja_bottom + 55)
    if text_w(kana, sans_reg(k_size)) <= max_w:
        center(d, k_y, kana, sans_reg(k_size), FAINT)
        k_bottom = k_y + k_size
    else:
        k_lines = wrap_runs([(kana, FAINT)], sans_reg(38), max_w)
        for n, line in enumerate(k_lines):
            center_runs(d, k_y + n * 50, line, sans_reg(38))
        k_bottom = k_y + (len(k_lines) - 1) * 50 + 38

    en_size = fit_size(s['textEn'], sans_reg, 52, 44, max_w)
    en_lines = wrap_words(s['textEn'], sans_reg(en_size), max_w)
    en_y = max(1150, k_bottom + 70)
    for n, line in enumerate(en_lines):
        center(d, en_y + n * int(en_size * 1.25), line, sans_reg(en_size), BODY)
    return img


def frame_deadpan_hook(s, level):
    img, d = base_frame()
    label(d, 660, 'A REAL SENTENCE FROM OUR DECK')
    en = f'“{s["textEn"]}”'
    max_w = W - 140
    size = fit_size(en, serif_jp_reg, 92, 64, max_w)
    if text_w(en, serif_jp_reg(size)) <= max_w:
        lines = [en]
    else:
        size = 68
        lines = wrap_words(en, serif_jp_reg(size), max_w)
        if len(lines) > 2:
            size = 58
            lines = wrap_words(en, serif_jp_reg(size), max_w)
    lh = int(size * 1.3)
    y0 = 855 - (len(lines) - 1) * lh // 2
    for n, line in enumerate(lines):
        center(d, y0 + n * lh, line, serif_jp_reg(size), TEXT)
    div_y = max(1030, y0 + (len(lines) - 1) * lh + size + 60)
    d.rectangle([W/2 - 60, div_y, W/2 + 60, div_y + 8], fill=ACCENT)
    center(d, div_y + 80, f'JLPT {level} · yes, really', sans_reg(40), FAINT)
    return img


def frame_notrans_hook():
    img, d = base_frame()
    center(d, 740, 'English has no word', serif_jp_reg(92), TEXT)
    center(d, 875, 'for this.', serif_jp_reg(92), TEXT)
    d.rectangle([W/2 - 60, 1060, W/2 + 60, 1068], fill=ACCENT)
    center(d, 1140, 'Japanese does', sans_reg(44), FAINT)
    return img


def frame_outro():
    img, d = base_frame()
    center(d, 700, 'Kotoba', serif_jp_big(140), ACCENT)
    center(d, 960, 'Learn Japanese, hands-free.', sans_reg(56), TEXT)
    center(d, 1140, 'kotobaapp.com — free', sans_med(50), SUCCESS)
    return img


# ---------- audio/video assembly ----------

def dur(path):
    out = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration',
                          '-of', 'csv=p=0', path], capture_output=True, text=True)
    return float(out.stdout.strip())


def run(cmd):
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        sys.stderr.write(r.stderr[-3000:])
        sys.exit(1)


def make_tick(path):
    run(['ffmpeg', '-y', '-f', 'lavfi', '-i', 'sine=frequency=880:duration=0.09',
         '-af', 'volume=0.25,afade=t=out:st=0.03:d=0.06', '-ar', '44100', '-ac', '2', path])


def seg_audio(clips, total, out_wav):
    """Concatenate audio clips (path, offset) onto a silent bed of `total` seconds."""
    inputs, filters, amix = [], [], []
    for n, (path, off) in enumerate(clips):
        inputs += ['-i', path]
        filters.append(f'[{n}:a]aresample=44100,aformat=channel_layouts=stereo,adelay={int(off*1000)}|{int(off*1000)}[a{n}]')
        amix.append(f'[a{n}]')
    if not clips:
        run(['ffmpeg', '-y', '-f', 'lavfi', '-i', f'anullsrc=r=44100:cl=stereo:d={total}', out_wav])
        return
    fc = ';'.join(filters) + f";{''.join(amix)}amix=inputs={len(clips)}:normalize=0[mix];" \
         f"[mix]apad=whole_dur={total}[out]"
    run(['ffmpeg', '-y', *inputs, '-filter_complex', fc, '-map', '[out]',
         '-t', str(total), '-ar', '44100', '-ac', '2', out_wav])


def build(segments, out_path, workdir):
    """segments: list of (pil_image, duration, clips[(path, offset)]). Static frames only."""
    seg_files = []
    for i, (img, length, clips) in enumerate(segments):
        png = f'{workdir}/f{i}.png'
        wav = f'{workdir}/a{i}.wav'
        mp4 = f'{workdir}/s{i}.mp4'
        img.save(png)
        seg_audio(clips, length, wav)
        run(['ffmpeg', '-y', '-loop', '1', '-framerate', str(FPS), '-i', png, '-i', wav,
             '-vf', f'fps={FPS},format=yuv420p', '-t', f'{length:.3f}', '-c:v', 'libx264',
             '-preset', 'medium', '-crf', '19', '-c:a', 'aac', '-b:a', '160k', '-shortest', mp4])
        seg_files.append(mp4)
    lst = f'{workdir}/list.txt'
    with open(lst, 'w') as fh:
        for f_ in seg_files:
            fh.write(f"file '{f_}'\n")
    run(['ffmpeg', '-y', '-f', 'concat', '-safe', '0', '-i', lst, '-c', 'copy', out_path])


# ---------- data ----------

def load_corpus():
    corpus = {}  # deckId -> (deck, sentences, level)
    for path in sorted(glob.glob(os.path.join(DECKS_DIR, '*.json'))):
        deck_id = os.path.splitext(os.path.basename(path))[0]
        if deck_id == 'index':
            continue
        spath = os.path.join(SENTS_DIR, f'{deck_id}.json')
        if not os.path.exists(spath):
            continue
        deck = json.load(open(path))
        sents = json.load(open(spath))
        m = deck_id.upper()
        level = next((f'N{n}' for n in '54321' if f'N{n}' in m), '')
        corpus[deck_id] = (deck, sents, level)
    return corpus


def lookup(corpus, word_id, sent_id):
    for deck_id, (deck, sents, level) in corpus.items():
        q = next((w for w in deck['words'] if w['id'] == word_id), None)
        s = next((x for x in sents.get(word_id, []) if x['id'] == sent_id), None)
        if q and s:
            return q, s, level
    sys.exit(f'word {word_id} / sentence {sent_id} not found in any deck')


def audio_paths(fmt, word_id, sent_id):
    p = {
        'ja': f'{AUDIO_DIR}/ja/{word_id}.mp3',
        'slow': f'{AUDIO_DIR}/ja-slow/{word_id}.mp3',
        'sen': f'{AUDIO_DIR}/sen/{sent_id}.mp3',
    }
    if fmt in ('quiz', 'notrans'):
        p['en'] = f'{AUDIO_DIR}/en/{word_id}.mp3'
    if fmt in ('deadpan', 'notrans'):
        p['sen_en'] = f'{AUDIO_DIR}/sen-en/{sent_id}.mp3'
    return p


# ---------- video assembly per format ----------

def render(fmt, q, s, level, tick, out_path, workdir):
    a = audio_paths(fmt, q['id'], s['id'])
    for key, path in a.items():
        if not os.path.exists(path):
            sys.exit(f'missing audio {path} — run gen-audio / sync-audio-r2 first')
    d_ja, d_slow, d_sen = dur(a['ja']), dur(a['slow']), dur(a['sen'])
    ja, slow, sen = a['ja'], a['slow'], a['sen']

    if fmt == 'quiz':
        en = a['en']
        d_en = dur(en)
        segments = [
            (frame_hook(q, level), 1.4, []),
            (frame_prompt(q), d_en + 0.5, [(en, 0.15)]),
            (frame_prompt(q, '3'), 0.8, [(tick, 0.05)]),
            (frame_prompt(q, '2'), 0.8, [(tick, 0.05)]),
            (frame_prompt(q, '1'), 0.8, [(tick, 0.05)]),
            (frame_reveal(q), d_ja + 0.35 + d_slow + 0.9,
                [(ja, 0.15), (slow, d_ja + 0.5)]),
            (frame_sentence(q, s), d_sen + 1.0, [(sen, 0.3)]),
            (frame_outro(), d_ja + 1.6, [(ja, 0.6)]),
        ]
    elif fmt == 'wotd':
        segments = [
            (frame_teach(q), 0.9 + d_ja + 0.4 + d_slow + 0.4 + d_ja + 0.7,
                [(ja, 0.9), (slow, 0.9 + d_ja + 0.4), (ja, 0.9 + d_ja + 0.4 + d_slow + 0.4)]),
            (frame_sentence(q, s), d_sen + 1.0, [(sen, 0.3)]),
            (frame_outro(), 2.2, []),
        ]
    elif fmt == 'deadpan':
        sen_en = a['sen_en']
        d_senen = dur(sen_en)
        segments = [
            (frame_deadpan_hook(s, level), d_senen + 1.1, [(sen_en, 0.5)]),
            (frame_sentence(q, s), d_sen + 0.4 + d_sen + 0.8, [(sen, 0.3), (sen, d_sen + 0.7)]),
            (frame_teach(q, 'THE KEY WORD'), 0.4 + d_ja + 0.35 + d_slow + 0.7,
                [(ja, 0.4), (slow, 0.4 + d_ja + 0.35)]),
            (frame_outro(), 2.2, []),
        ]
    elif fmt == 'notrans':
        # spoken EN (closest-gloss + sentence translation) kept in for transcript SEO
        en = a['en']
        sen_en = a['sen_en']
        d_en, d_senen = dur(en), dur(sen_en)
        t_en = 0.6 + d_ja + 0.35
        t_slow = t_en + d_en + 0.4
        t_ja2 = t_slow + d_slow + 0.4
        segments = [
            (frame_notrans_hook(), 2.0, []),
            (frame_teach(q, 'NO ENGLISH EQUIVALENT'), t_ja2 + d_ja + 0.7,
                [(ja, 0.6), (en, t_en), (slow, t_slow), (ja, t_ja2)]),
            (frame_sentence(q, s), d_sen + 0.4 + d_senen + 0.9,
                [(sen, 0.3), (sen_en, d_sen + 0.7)]),
            (frame_outro(), 2.2, []),
        ]
    else:
        sys.exit(f'unknown format {fmt}')

    build(segments, out_path, workdir)
    return sum(x[1] for x in segments)


# ---------- titles / batch metadata ----------

def title_for(fmt, q, s, level):
    word = q['written'][0]
    if fmt == 'deadpan':
        return f'{s["textEn"]} — a real JLPT {level} sentence'
    if fmt == 'notrans':
        return f'{word} ({q["romaji"]}) — English has no word for this'
    if fmt == 'quiz':
        return f'Can you say “{q["prompt"]}” in Japanese? · JLPT {level}'
    return f'Japanese word of the day: {word} ({q["romaji"]})'


def description_for(fmt, q, s, level):
    word = q['written'][0]
    lines = [f'{word}（{q["kana"]}）{q["romaji"]} — {q["prompt"]}',
             f'{s["textJa"]}',
             f'{s["textEn"]}',
             '',
             'Learn Japanese, hands-free → kotobaapp.com (free)',
             ' '.join(HASHTAGS)]
    return '\n'.join(lines)


def next_weekday(d):
    while d.weekday() >= 5:
        d += datetime.timedelta(days=1)
    return d


def publish_dates(start, n):
    """5/week: consecutive weekdays at 15:00 UTC starting from `start`."""
    dates, d = [], next_weekday(start)
    for _ in range(n):
        dates.append(d.strftime('%Y-%m-%dT15:00:00Z'))
        d = next_weekday(d + datetime.timedelta(days=1))
    return dates


# ---------- review page ----------

def write_review_html(items, path):
    cards = []
    for it in items:
        cards.append(f'''<div class="card">
  <video src="{it['file']}" poster="thumbs/{it['file']}.jpg" controls preload="none"></video>
  <div class="meta">
    <div class="fmt">{it['format']} · {it['level']} · {it['duration']:.0f}s · {it['publishAt'][:10]}</div>
    <div class="title">{it['title']}</div>
    <div class="ids">{it['wordId']} / {it['sentenceId']}</div>
  </div>
</div>''')
    html = f'''<!doctype html>
<meta charset="utf-8">
<title>Kotoba shorts — review ({len(items)})</title>
<style>
  body {{ background: {BG}; color: {TEXT}; font: 15px/1.45 -apple-system, sans-serif; margin: 24px; }}
  h1 {{ font-size: 20px; color: {ACCENT}; }}
  .grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 20px; }}
  .card {{ background: {BAND}; border: 1px solid {BORDER}; border-radius: 10px; overflow: hidden; }}
  video {{ width: 100%; aspect-ratio: 9/16; display: block; background: #000; }}
  .meta {{ padding: 10px 12px 14px; }}
  .fmt {{ color: {FAINT}; font-size: 12px; text-transform: uppercase; letter-spacing: .08em; }}
  .title {{ margin-top: 4px; font-weight: 600; }}
  .ids {{ margin-top: 4px; color: {MUTED}; font-size: 12px; font-family: ui-monospace, monospace; }}
</style>
<h1>Kotoba shorts — {len(items)} videos</h1>
<div class="grid">
{chr(10).join(cards)}
</div>
'''
    with open(path, 'w') as fh:
        fh.write(html)


# ---------- main ----------

def item_hash(fmt, word_id, sent_id):
    return hashlib.sha1(f'v{STYLE_VERSION}|{fmt}|{word_id}|{sent_id}'.encode()).hexdigest()


def pick_from_deck(corpus, deck_id, fmt, count, manifest):
    """First `count` deck words (deck order) with a sentence + all audio present."""
    if deck_id not in corpus:
        sys.exit(f'unknown deck {deck_id} — have: {", ".join(corpus)}')
    deck, sents, _level = corpus[deck_id]
    picked = []
    for w in deck['words']:
        options = sents.get(w['id'], [])
        s = next((x for x in options if x['clozeSurface'] in x['textJa']), None)
        if not s:
            continue
        if any(not os.path.exists(p) for p in audio_paths(fmt, w['id'], s['id']).values()):
            continue
        name = f"{fmt}_{w['id']}_{s['id']}.mp4"
        if manifest.get(name) == item_hash(fmt, w['id'], s['id']):
            continue  # already rendered
        picked.append({'format': fmt, 'wordId': w['id'], 'sentenceId': s['id']})
        if len(picked) >= count:
            break
    return picked


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('deckId', nargs='?', help='deck to pull words from (e.g. jlpt-n5)')
    ap.add_argument('--queue', nargs='?', const=QUEUE_DEFAULT, help='render a curated queue JSON')
    ap.add_argument('--format', default='deadpan', choices=['quiz', 'wotd', 'deadpan', 'notrans'])
    ap.add_argument('--count', type=int, default=5)
    ap.add_argument('--force', action='store_true', help='re-render even if manifest is current')
    ap.add_argument('--start-date', help='first publishAt date YYYY-MM-DD (default: next weekday)')
    args = ap.parse_args()

    corpus = load_corpus()
    manifest = json.load(open(MANIFEST)) if os.path.exists(MANIFEST) else {}

    if args.queue:
        items = json.load(open(args.queue))
    elif args.deckId:
        items = pick_from_deck(corpus, args.deckId, args.format, args.count, manifest)
        if not items:
            print('nothing to render (all up to date, or no eligible words)')
            return
    else:
        ap.error('pass a deckId or --queue')

    os.makedirs(OUT_DIR, exist_ok=True)
    start = (datetime.datetime.strptime(args.start_date, '%Y-%m-%d').date()
             if args.start_date else datetime.date.today() + datetime.timedelta(days=1))
    dates = publish_dates(start, len(items))

    batch, rendered, skipped = [], 0, 0
    with tempfile.TemporaryDirectory(prefix='kotoba-shorts-') as tmp:
        tick = f'{tmp}/tick.wav'
        make_tick(tick)
        for i, it in enumerate(items):
            fmt, wid, sid = it['format'], it['wordId'], it['sentenceId']
            q, s, level = lookup(corpus, wid, sid)
            name = f'{fmt}_{wid}_{sid}.mp4'
            out_path = os.path.join(OUT_DIR, name)
            h = item_hash(fmt, wid, sid)
            if not args.force and manifest.get(name) == h and os.path.exists(out_path):
                total = dur(out_path)
                skipped += 1
            else:
                workdir = f'{tmp}/{i}'
                os.makedirs(workdir, exist_ok=True)
                total = render(fmt, q, s, level, tick, out_path, workdir)
                manifest[name] = h
                json.dump(manifest, open(MANIFEST, 'w'), indent=1)
                rendered += 1
                print(f'  {name} — {total:.1f}s')
            batch.append({
                'file': name,
                'format': fmt,
                'wordId': wid,
                'sentenceId': sid,
                'level': level,
                'duration': round(total, 1),
                'title': title_for(fmt, q, s, level),
                'description': description_for(fmt, q, s, level),
                'hashtags': HASHTAGS,
                'publishAt': dates[i],
            })

    thumbs = os.path.join(OUT_DIR, 'thumbs')
    os.makedirs(thumbs, exist_ok=True)
    for it in batch:
        thumb = os.path.join(thumbs, f"{it['file']}.jpg")
        if not os.path.exists(thumb):
            run(['ffmpeg', '-y', '-ss', '1', '-i', os.path.join(OUT_DIR, it['file']),
                 '-frames:v', '1', '-vf', 'scale=360:-2', thumb])

    json.dump(batch, open(os.path.join(OUT_DIR, 'batch.json'), 'w'),
              ensure_ascii=False, indent=1)
    write_review_html(batch, os.path.join(OUT_DIR, 'review.html'))
    print(f'{rendered} rendered, {skipped} up to date → {OUT_DIR}')
    print(f'review: {os.path.join(OUT_DIR, "review.html")}')


if __name__ == '__main__':
    main()
