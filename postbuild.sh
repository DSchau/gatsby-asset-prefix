#!/bin/bash
if [ -z "$PATH_PREFIX" ]; then
  echo "it is not set"
else
  STRIPPED_PATH_PREFIX=${PATH_PREFIX:1}
  mv public "$STRIPPED_PATH_PREFIX"
  mkdir -p public
  mv "$STRIPPED_PATH_PREFIX" "public/$STRIPPED_PATH_PREFIX"
fi

cp -r public/ assets
cp _headers-cdn assets/blog/_headers
