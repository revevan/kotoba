#!/bin/sh
# Bootstrap wrapper for gen_shorts.py: ensures the local venv + Pillow exist,
# then passes all args through. Invoked as `pnpm run gen-shorts -- ...`.
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"
VENV="$DIR/.venv"
if [ ! -x "$VENV/bin/python" ]; then
  python3 -m venv "$VENV"
fi
"$VENV/bin/python" -c 'import PIL' 2>/dev/null || "$VENV/bin/pip" install --quiet Pillow
command -v ffmpeg >/dev/null || { echo 'ffmpeg not found — brew install ffmpeg' >&2; exit 1; }
[ "$1" = "--" ] && shift  # pnpm forwards the arg separator verbatim
exec "$VENV/bin/python" "$DIR/gen_shorts.py" "$@"
