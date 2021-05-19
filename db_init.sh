#!/bin/sh

docker build -t database .
docker-compose up -d
