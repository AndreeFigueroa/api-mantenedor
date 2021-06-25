#!/bin/bash
. .env
echo $SERVER_PORT
docker run --rm -p 4000:3000 node-rest-api
