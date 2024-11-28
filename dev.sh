# Script to run the app locally

#!/bin/bash

if [ "$1" != "discovery" ] && [ "$1" != "krokysjezisem" ]; then
    echo "Usage: $0 [discovery|krokysjezisem]"
    exit 1
fi

cd src
cd "$1"
uv run mkdocs serve
