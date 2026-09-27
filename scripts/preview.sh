#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if [[ ! -d dist ]]; then
  echo "No dist/ found. Run scripts/build.sh first." >&2
  exit 1
fi

npm run preview
