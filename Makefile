.PHONY: setup
setup:
	docker-compose -f ./docker-compose.setup.yml up

.PHONY: run
run:
	docker-compose up

.PHONY: enter-frontend
enter-frontend:
	docker exec -it randomizer_frontend_1 sh

.PHONY: enter-backend
enter-backend:
	docker exec -it randomizer_backend_1 sh
