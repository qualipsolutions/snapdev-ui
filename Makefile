.PHONY:

bootstrap:
	yarn bootstrap

build:
	cd packages/snapdev-ui && yarn build

newversion: build
	yarn new-version

release: newversion
	cd packages/snapdev-ui/build && npm publish




