install:
	gem install bundler -v 2.0.2
	bundle _2.0.2_ install

build:
	jekyll build -H0.0.0.0 -P80 --future

serve:
	jekyll serve -H0.0.0.0 -P80 --future

serve-win:
	gem install wdm
	jekyll serve -H0.0.0.0 -P80 --future --watch --force_polling
