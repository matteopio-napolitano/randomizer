.PHONY: setup
setup:
	docker-compose -f ./docker-compose.setup.yml up

.PHONY: run
run:
	docker-compose up
