

.PHONY: all
all: README.md

.PHONY: test
test:
	node test.js

README.md: test.js
	sed s:^///:: > $@ < $<




