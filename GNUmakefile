

.PHONY: all
all: README.md

test: all
	node test.js

README.md: test.js
	sed s:^///:: > $@ < $<




