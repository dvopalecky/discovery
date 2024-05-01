mkdocs build

# Calculate the hash of main.js and rename it with the hash appended
HASH=$(openssl dgst -md5 site/javascripts/main.js | awk '{print substr($2, 1, 8)}')
mv site/javascripts/main.js site/javascripts/main-$HASH.js

# Update the references for javascripts/main.js in all site/*.html files to include the hash
find site -type f -name "*.html" -exec sed -i '' "s/main.js/main-$HASH.js/g" {} +

# Calculate the hash of style.css and rename it with the hash appended
HASH_CSS=$(openssl dgst -md5 site/stylesheets/style.css | awk '{print substr($2, 1, 8)}')
mv site/stylesheets/style.css site/stylesheets/style-$HASH_CSS.css

# Update the references for stylesheets/style.css in all site/*.html files to include the hash
find site -type f -name "*.html" -exec sed -i '' "s/style.css/style-$HASH_CSS.css/g" {} +

python post_process.py
