#!/bin/bash

if [ "$1" != "discovery" ] && [ "$1" != "krokysjezisem" ]; then
    echo "Usage: $0 [discovery|krokysjezisem]"
    exit 1
fi

echo "Navigating to src/$1"
cd src
cd "$1"

echo "Building MkDocs"
rye run mkdocs build
cd ../..

echo "Updating hashes and references"
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

# Calculate the hash of print.css and rename it with the hash appended
HASH_PRINT=$(openssl dgst -md5 dist/stylesheets/print.css | awk '{print substr($2, 1, 8)}')
mv dist/stylesheets/print.css dist/stylesheets/print-$HASH_PRINT.css

# Update the references for stylesheets/print.css in all dist/*.html files to include the hash
find dist -type f -name "*.html" -exec sed -i '' "s/print.css/print-$HASH_PRINT.css/g" {} +

echo "Post processing"
rye run python post_process.py
