##@ General

# Display help message with available targets
.DEFAULT_GOAL := help

help: ## Display this help
	@cat ./static/banner.txt
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_0-9-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##@ Builds

gen_docs: ## Generate Docs and API
	@echo "===> Generate docusaurus docs and blog-posts <==="
	npm i --legacy-peer-deps && npm run build
	@echo "Build finished. The HTML pages are in docs/hr/build"

DIRECTORY := ../superduper/templates
FILES := $(shell ls $(DIRECTORY))

compile_docs: ## Convert templates to markdown content
	-ln -s ../superduper/test .
	python build_api_docs.py
	@for file in $(FILES); do \
		echo "Processing $(DIRECTORY)/$$file..."; \
		jupyter nbconvert $(DIRECTORY)/$$file/build.ipynb --clear-output; \
		jupyter nbconvert $(DIRECTORY)/$$file/build.ipynb --to markdown; \
		mv $(DIRECTORY)/$$file/build.md docs/templates/$$file.md; \
	done
