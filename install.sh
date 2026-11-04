#!/usr/bin/env sh
# VylarisData – Installer-Starter (macOS / Linux). Windows: python install.py
cd "$(dirname "$0")" || exit 1
if command -v python3 >/dev/null 2>&1; then
  exec python3 install.py "$@"
elif command -v python >/dev/null 2>&1; then
  exec python install.py "$@"
else
  echo "Python 3 wird benötigt: https://www.python.org/downloads/" >&2
  exit 1
fi
