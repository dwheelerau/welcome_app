FROM node
RUN apt-get update && apt-get install -y git-core curl build-essential openssl libssl-dev 

WORKDIR /app

