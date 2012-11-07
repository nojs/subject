

.PHONY: all
all: README.md

test: all
	node test.js

README.md: test.js
	sed -e s:///:: -e 's:^//`\(.*\)$$:\n```\n\1\n```javascript:'  > $@ < $<



