PORT ?= 80

install:
	gem install bundler -v 2.0.2
	bundle _2.0.2_ install

build:
	jekyll build --future

serve:
	jekyll serve -H0.0.0.0 -P$(PORT) --future

serve-win:
	gem install wdm
	jekyll serve -H0.0.0.0 -P$(PORT) --future --watch --force_polling
