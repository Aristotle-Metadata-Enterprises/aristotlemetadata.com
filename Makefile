PORT ?= 8000

container:
	docker run -v "$(realpath .)":/site -w /site -p $(PORT):$(PORT) -it --rm ruby:latest bash

install:
	gem install bundler -v 2.0.2
	bundle _2.0.2_ install

build:
	JEKYLL_ENV=production jekyll build -s ./src --future

server:
	killall ruby || true
	bundle exec jekyll serve -s ./src -H0.0.0.0 -P$(PORT) --future

server-win:
	gem install wdm
	jekyll serve -s ./src -H0.0.0.0 -P$(PORT) --future --watch --force_polling
