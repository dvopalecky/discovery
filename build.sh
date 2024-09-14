#!/bin/bash

if [ "$1" != "discovery" ] && [ "$1" != "krokysjezisem" ]; then
    echo "Usage: $0 [discovery|krokysjezisem]"
    exit 1
fi

cd src
cd "$1"

mkdocs build
cd ../..

# Calculate the hash of main.js and rename it with the hash appended
HASH=$(openssl dgst -md5 dist/javascripts/main.js | awk '{print substr($2, 1, 8)}')
mv dist/javascripts/main.js dist/javascripts/main-$HASH.js

# Update the references for javascripts/main.js in all dist/*.html files to include the hash
find dist -type f -name "*.html" -exec sed -i '' "s/main.js/main-$HASH.js/g" {} +

# Calculate the hash of style.css and rename it with the hash appended
HASH_CSS=$(openssl dgst -md5 dist/stylesheets/style.css | awk '{print substr($2, 1, 8)}')
mv dist/stylesheets/style.css dist/stylesheets/style-$HASH_CSS.css

# Update the references for stylesheets/style.css in all dist/*.html files to include the hash
find dist -type f -name "*.html" -exec sed -i '' "s/style.css/style-$HASH_CSS.css/g" {} +

python post_process.py

PORT=8001
python -m http.server $PORT --directory dist &
SERVER_PID=$!
python print_pdf.py $1 $PORT
echo "Waiting for server to finish"
kill $SERVER_PID
mkdir -p dist/pdf
mv $1-a4.pdf dist/pdf/
mv $1-a5-2x.pdf dist/pdf/
mv $1-a6-4x.pdf dist/pdf/
