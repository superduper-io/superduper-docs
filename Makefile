##@ General

# Display help message with available targets
.DEFAULT_GOAL := help

help: ## Display this help
	@cat ./static/banner.txt
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_0-9-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##@ Builds

build_api_docs: ## Build API docs
	@echo "===> Building API docs <==="
	-ln -s ../superduper/test .
	python build_api_docs.py

gen_docs: ## Generate Docs and API
	@echo "===> Generate docusaurus docs and blog-posts <==="
	npm i --legacy-peer-deps && npm run build
	@echo "Build finished. The HTML pages are in docs/hr/build"