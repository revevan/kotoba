#!/usr/bin/env python3
"""Kotoba shorts generator prototype.

PORTING NOTE (2026-08-11): prototype from a Cowork cloud sandbox. Asset paths
point at ./assets/ (staged copies); when porting into the repo, read directly
from public/decks, public/sentences, public/audio. Font paths are Linux Noto
CJK locations — see HANDOFF.md port checklist for macOS options.

Renders 1080x1920 vertical vocab shorts from the existing Kotoba corpus:
deck JSON + sentence JSON + pre-generated MP3s (ja / ja-slow / en / sen).

Formats:
  quiz — hook, English prompt + countdown, reveal (word + slow), bonus sentence, outro
  wotd — word-of-the-day teach, sentence, outro

Usage: python3 gen_short.py <format> <wordId> <sentenceId> <outName>
"""
import json, subprocess, sys, os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.abspath(__file__))
A = os.path.join(ROOT, 'assets')
W, H = 1080, 1920
FPS = 30

# Kotoba brand palette (from marketing page)
BG      = '#10101a'
BAND    = '#13131f'
PANEL   = '#1e1e2e'
BORDER  = '#2c2c40'
TEXT    = '#f0f0f5'
BODY    = '#b8b8c8'
MUTED   = '#9a9aae'
FAINT   = '#6c6c80'
ACCENT  = '#7c7cf0'
SUCCESS = '#6fdc8c'

NOTO = '/usr/share/fonts/opentype/noto/'
def F(file, size):  # JP face is index 0 in every Noto CJK ttc
    return ImageFont.truetype(NOTO + file, size, index=0)

serif_jp_big   = lambda s: F('NotoSerifCJK-Bold.ttc', s)
serif_jp_med   = lambda s: F('NotoSerifCJK-Medium.ttc', s)
serif_jp_reg   = lambda s: F('NotoSerifCJK-Regular.ttc', s)
sans_reg       = lambda s: F('NotoSansCJK-Regular.ttc', s)
sans_med       = lambda s: F('NotoSansCJK-Medium.ttc', s)
sans_bold      = lambda s: F('NotoSansCJK-Bold.ttc', s)
sans_light     = lambda s: F('NotoSansCJK-Light.ttc', s)


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


def frame_hook(q):
    img, d = base_frame()
    center(d, 760, 'Can you say it', serif_jp_reg(96), TEXT)
    center(d, 900, 'in Japanese?', serif_jp_reg(96), TEXT)
    d.rectangle([W/2 - 60, 1080, W/2 + 60, 1088], fill=ACCENT)
    center(d, 1160, f'JLPT N5 · {q["prompt"]}', sans_reg(40), FAINT)
    return img


def frame_prompt(q, count=None):
    img, d = base_frame()
    label(d, 680, 'SAY IT IN JAPANESE')
    center(d, 790, q['prompt'], sans_bold(150), TEXT)
    if count:
        center(d, 1120, count, serif_jp_big(170), ACCENT)
    else:
        center(d, 1170, '· · ·', sans_reg(70), FAINT)
    return img


def frame_reveal(q):
    img, d = base_frame()
    center(d, 620, q['written'][0], serif_jp_big(330), TEXT)
    y = 1090
    if q['written'][0] != q['kana']:
        center(d, y, q['kana'], sans_reg(90), BODY); y += 130
    center(d, y, q['romaji'], sans_light(64), MUTED); y += 110
    d.rectangle([W/2 - 40, y + 8, W/2 + 40, y + 12], fill=BORDER)
    center(d, y + 46, q['prompt'], sans_reg(56), ACCENT)
    return img


def frame_teach(q):
    img, d = base_frame()
    label(d, 620, 'WORD OF THE DAY')
    center(d, 700, q['written'][0], serif_jp_big(300), TEXT)
    y = 1120
    if q['written'][0] != q['kana']:
        center(d, y, q['kana'], sans_reg(84), BODY); y += 122
    center(d, y, q['romaji'], sans_light(60), MUTED); y += 104
    center(d, y + 30, q['prompt'], sans_reg(56), ACCENT)
    return img


def frame_sentence(q, s):
    img, d = base_frame()
    label(d, 640, 'IN A SENTENCE')
    ja = s['textJa']
    w = s['clozeSurface']
    i = ja.index(w)
    f = serif_jp_med(84)
    # shrink until it fits
    size = 84
    dd = ImageDraw.Draw(Image.new('RGB', (1, 1)))
    while dd.textlength(ja, font=serif_jp_med(size)) > W - 120 and size > 48:
        size -= 4
    f = serif_jp_med(size)
    highlight_line(d, 810, ja[:i], w, ja[i + len(w):], f)
    center(d, 990, s['readingKana'], sans_reg(46), FAINT)
    center(d, 1150, s['textEn'], sans_reg(52), BODY)
    return img


def frame_deadpan_hook(s, level):
    img, d = base_frame()
    label(d, 660, 'A REAL SENTENCE FROM OUR DECK')
    en = f'“{s["textEn"]}”'
    size = 92
    dd = ImageDraw.Draw(Image.new('RGB', (1, 1)))
    while dd.textlength(en, font=serif_jp_reg(size)) > W - 140 and size > 54:
        size -= 4
    center(d, 830, en, serif_jp_reg(size), TEXT)
    d.rectangle([W/2 - 60, 1030, W/2 + 60, 1038], fill=ACCENT)
    center(d, 1110, f'JLPT {level} · yes, really', sans_reg(40), FAINT)
    return img


def frame_notrans_hook():
    img, d = base_frame()
    center(d, 740, 'English has no word', serif_jp_reg(92), TEXT)
    center(d, 875, 'for this.', serif_jp_reg(92), TEXT)
    d.rectangle([W/2 - 60, 1060, W/2 + 60, 1068], fill=ACCENT)
    center(d, 1140, 'Japanese does', sans_reg(44), FAINT)
    return img


def frame_teach2(q, lab, gloss=None):
    img, d = base_frame()
    label(d, 620, lab)
    center(d, 700, q['written'][0], serif_jp_big(300), TEXT)
    y = 1120
    if q['written'][0] != q['kana']:
        center(d, y, q['kana'], sans_reg(84), BODY); y += 122
    center(d, y, q['romaji'], sans_light(60), MUTED); y += 104
    center(d, y + 30, gloss or q['prompt'], sans_reg(56), ACCENT)
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


def build(segments, out_path, zoom=False):
    """segments: list of (pil_image, duration, clips[(path, offset)])"""
    seg_files = []
    for i, (img, length, clips) in enumerate(segments):
        png = f'{ROOT}/frames/f{i}.png'
        wav = f'{ROOT}/segs/a{i}.wav'
        mp4 = f'{ROOT}/segs/s{i}.mp4'
        img.save(png)
        seg_audio(clips, length, wav)
        nframes = max(int(length * FPS), 1)
        if zoom:
            # zoompan works on an integer pixel grid; supersample 3x first so
            # sub-pixel zoom steps don't land as visible 1px jitter
            vf = (f'scale={W*3}:{H*3},zoompan=z=\'1+0.00045*on\':x=\'iw/2-(iw/zoom/2)\':'
                  f'y=\'ih/2-(ih/zoom/2)\':d={nframes}:s={W}x{H}:fps={FPS},format=yuv420p')
        else:
            vf = f'fps={FPS},format=yuv420p'
        run(['ffmpeg', '-y', '-loop', '1', '-framerate', str(FPS), '-i', png, '-i', wav,
             '-vf', vf, '-t', f'{length:.3f}', '-c:v', 'libx264', '-preset', 'medium',
             '-crf', '19', '-c:a', 'aac', '-b:a', '160k', '-shortest', mp4])
        seg_files.append(mp4)
    lst = f'{ROOT}/segs/list.txt'
    with open(lst, 'w') as fh:
        for f_ in seg_files:
            fh.write(f"file '{f_}'\n")
    run(['ffmpeg', '-y', '-f', 'concat', '-safe', '0', '-i', lst, '-c', 'copy', out_path])


SETS = [  # (deck file, sentence file, JLPT label) — searched in order
    ('deck.json', 'sentences.json', 'N5'),
    ('deck-n5.json', 'sent-n5.json', 'N5'),
    ('deck-n3.json', 'sent-n3.json', 'N3'),
]


def lookup(word_id, sent_id):
    for dj, sj, level in SETS:
        if not os.path.exists(f'{A}/{dj}'):
            continue
        deck = json.load(open(f'{A}/{dj}'))
        sents = json.load(open(f'{A}/{sj}'))
        q = next((w for w in deck['words'] if w['id'] == word_id), None)
        s = next((x for x in sents.get(word_id, []) if x['id'] == sent_id), None)
        if q and s:
            return q, s, level
    sys.exit(f'word {word_id} / sentence {sent_id} not found in any data set')


def main():
    fmt, word_id, sent_id, out_name = sys.argv[1:5]
    q, s, level = lookup(word_id, sent_id)

    ja   = f'{A}/audio/ja/{word_id}.mp3'
    slow = f'{A}/audio/ja-slow/{word_id}.mp3'
    en   = f'{A}/audio/en/{word_id}.mp3'
    sen  = f'{A}/audio/sen/{sent_id}.mp3'
    tick = f'{ROOT}/segs/tick.wav'
    make_tick(tick)

    d_ja, d_slow, d_en, d_sen = dur(ja), dur(slow), dur(en), dur(sen)

    if fmt == 'quiz':
        segments = [
            (frame_hook(q), 1.4, []),
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
        sen_en = f'{A}/audio/sen-en/{sent_id}.mp3'
        d_senen = dur(sen_en)
        segments = [
            (frame_deadpan_hook(s, level), d_senen + 1.1, [(sen_en, 0.5)]),
            (frame_sentence(q, s), d_sen + 0.4 + d_sen + 0.8, [(sen, 0.3), (sen, d_sen + 0.7)]),
            (frame_teach2(q, 'THE KEY WORD'), 0.4 + d_ja + 0.35 + d_slow + 0.7,
                [(ja, 0.4), (slow, 0.4 + d_ja + 0.35)]),
            (frame_outro(), 2.2, []),
        ]
    elif fmt == 'notrans':
        segments = [
            (frame_notrans_hook(), 2.0, []),
            (frame_teach2(q, 'NO ENGLISH EQUIVALENT'),
                0.6 + d_ja + 0.4 + d_slow + 0.4 + d_ja + 0.7,
                [(ja, 0.6), (slow, 0.6 + d_ja + 0.4), (ja, 0.6 + d_ja + 0.4 + d_slow + 0.4)]),
            (frame_sentence(q, s), d_sen + 1.0, [(sen, 0.3)]),
            (frame_outro(), 2.2, []),
        ]
    else:
        sys.exit(f'unknown format {fmt}')

    out = f'{ROOT}/out/{out_name}.mp4'
    build(segments, out)
    total = sum(x[1] for x in segments)
    print(f'{out} — {total:.1f}s, {len(segments)} segments')


if __name__ == '__main__':
    main()
