# aristotle-mdr.github.io
Aristotle MDR Website

Getting this running in docker:
1. docker run -v /c/Users/theod/code/aristotlemetadata.com:/site -p $PORT:80 -it --rm ruby:latest bash
2. bundle install
3. jekyll serve -H0.0.0.0 -P80