# aristotle-mdr.github.io
Aristotle MDR Website

Getting this running in docker:
1. docker run -v "$(realpath .)":/site -w /site -p $PORT:80 -it --rm ruby:3.2.1 bash
2. `make install`
3. `make server`
4. If you are on windows:
    * Also install `gem install wdm`
    * Run: `jekyll serve -s ./src -H0.0.0.0 -P80 --future --watch --force_polling`

## How to deploy updates
TODO