.PHONY:

bootstrap:
	yarn bootstrap

build:
	cd packages/snapdev-ui && yarn build

newversion:
	yarn new-version

release: newversion
	cd packages/snapdev-ui && yarn build
	cd packages/snapdev-ui/build && npm publish

dev:
	cd packages/showcase && yarn start

storybook:
	cd packages/snapdev-ui && yarn storybook

build-docs:
	cd packages/snapdev-ui && yarn build:docs

lint:
	yarn lint

lint-debug:
	yarn lint:debug
