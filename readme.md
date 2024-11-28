# About
This is an app for Discovery Bible study and similar tools.
It's supposed to be as a web app, but also have css and settings to print (during the build step)

There are actually two seperate apps (discovery and krokysjezisem),
but since they use similar tech, they are in the same repo.

# Requirements
- UNIX based development environment
- python installed
- [rye](https://rye.astral.sh) installed
- [qpdf](https://github.com/qpdf/qpdf) installed - only for printing

# Installation
- `rye sync`

# Run local dev server
- `./dev.sh discovery` or `./dev.sh krokysjezisem`

# Build
- `./build.sh discovery` or `./build.sh krokysjezisem`
- `./build_and_print.sh discovery` or `./build_and_print.sh krokysjezisem`

# Deploy
- Before deploying, run `./build_and_print.sh` first
- requirement: ssh access to dokku server
- `./deploy.sh discovery` or `./deploy.sh krokysjezisem`

# Technologies and tweaks used
- main project is done using `mkdocs` and `mkdocs-material`
- `build.sh` is doing building and some postprocessing
  - adding hash unique names to javascript and css
  - updating the html to use non-breaking space after czech 1 letter prepositions
- `swiper` for sliding 3/3 columns
- `playwright` to generate the pdfs
- `qpdf` is used for merging pdf files

# Notes on no-break space
- In the text I sometimes use no-break space " " \u00a0 which is different
  from regular space. I suggest using the "Highlight Bad Chars" VS Code plugin
  to display them

# Visual tests
- using `bun` and `playwright.js`
- tests saved in `tests` folder
- run `./test.sh` to run all tests
- run `./test.sh --update-snapshots` to update all snapshots

# Processing icons
- take the pdf icons from Andy
- use https://cloudconvert.com to convert to svg
- use https://svgomg.net to optimize the svg
- change stroke to "currentColor" in code editor
- change viewBox="-105 -105 1260 1260" in code editor

# QR Code generation
- `qrcode -o src/krokysjezisem/docs/images/qr-code-krokysjezisem.png "https://krokysjezisem.cz" -e Q -w 512 -q 0`
