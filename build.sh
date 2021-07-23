#!/bin/bash

docker build -f DockerFile -t gitidiot .

docker run --rm --name=web_gitidiot -p 8989:8989 -it gitidiot