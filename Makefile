.PHONY:

# Ensure npm packages are installed for all workspace packages
bootstrap:
	yarn bootstrap

# Build the snapdev-ui package
build:
	cd packages/snapdev-ui && yarn build

# Update the version number in the package.json file
newversion:
	yarn new-version

# Publish a new version of the @snapdev-ui/core package
release: newversion
	cd packages/snapdev-ui && yarn build
	cd packages/snapdev-ui/build && npm publish

# Start development server for the showcase package
dev:
	cd packages/showcase && yarn start

# Start storybook
storybook:
	cd packages/snapdev-ui && yarn storybook

# Build the storybook docs for deployment to GitHub pages
build-docs:
	cd packages/snapdev-ui && yarn build:docs

# Lint the code
lint:
	yarn lint

# Lint the code with debug reporting
lint-debug:
	yarn lint:debug
