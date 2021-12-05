
set-ids = USERID=$$(id -u) GROUPID=$$(id -g)

.PHONY: build
build:
	@${set-ids} docker-compose build --build-arg USERID=$$(id -u) --build-arg GROUPID=$$(id -g)


.PHONY: start
start:
	@${set-ids} docker-compose up -d

.PHONY: stop
stop:
	@${set-ids} docker-compose down
