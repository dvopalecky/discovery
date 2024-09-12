# About
This is an app for Discovery Bible study and similar tools.
It's supposed to be as a web app, but also have css and settings to print (probably only during the build step)

# Requirements
- UNIX based development environment

# Installation
- `pip install mkdocs mkdocs-material`

# Run locally
- `./dev.sh discovery` or `./dev.sh krokysjezisem`

# Build
- `./build.sh discovery` or `./build.sh krokysjezisem`

# Deploy
- `./build.sh`

# Create PDF manually
- ...

# Technologies and tweaks used
- main project is done using `mkdocs` and `mkdocs-material`
- `build.sh` is doing building and some postprocessing
  - adding hash unique names to javascript and css
  - updating the html to use non-breaking space after czech 1 letter prepositions
