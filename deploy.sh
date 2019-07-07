#!/bin/sh
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi
npm run export
type nul > $1/.nojekyll
git add $1 && git commit -m "HELLO"
git subtree push --prefix $1 origin gh-pages