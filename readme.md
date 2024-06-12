# Installation
- `pip install mkdocs mkdocs-material`
- `mkdocs serve`
- open localhost:8000

# Build
- `./build.sh`

# Deploy
- `./build.sh`
- `cd site`
- `vercel --prod`

# Create PDF manually
- ...

# Technologies and tweaks used
- main project is done using `mkdocs` and `mkdocs-material`
- `build.sh` is doing building and some postprocessing
  - adding hash unique names to javascript and css
  - updating the html to use non-breaking space after czech 1 letter prepositions
