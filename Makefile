REPORTER = spec

all: test

test:
		@NODE_ENV=test
		@./node_modules/.bin/mocha \
				--reporter $(REPORTER) \
				test/

.PHONY: test