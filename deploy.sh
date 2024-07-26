#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd ./dist && cp index.html 404.html

gh-pages -d ../dist
