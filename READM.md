# SkillUp Framework Service DB server


## Development getting started

- $ nvm use 12.20.0
- This docker container connects to the Framework Service Server via the docker network skillup-network.

### When connecting docker containers Create the docker network

- Create the docker network
- $ docker network create --driver bridge skillup-network
  
- See if docker network has already been created
- $ docker network ls
  
- See network details
- $ docker network inspect skillup-network
  
- To delete the network and start over
- $ docker network rm skillup-network

### Build image and run docker container with docker cli

- Build the mongo docker image from the Dockerfile
- $ docker build -t mongodb:skillup-app-service . --no-cache <!-- --rm try this flag -->
  
- Run the image as a standalone container on localhost
- $ docker run --name skillup-app-db -v ${PWD}/mongo-data:/data/db -p 27020:27017 -it mongodb:skillup-app-service bash

- Connect to the docker container via another terminal
- $ docker exec -it skillup-app-db bash
  
- Run the image as a container in a docker user defined network
- $ docker run -v ${PWD}/mongo-data:/data/db -p 27020:27017 --network skillup-network -it mongodb:skillup-app-service bash
  
- Start the mongo server in the background
- $ mongod --bind_ip 0.0.0.0 &
  
- Start the mongo cli
- $ mongo

### Build image and run docker container with docker-compose

- Build and run mongo and mongo-express
- $ docker-compose up --build --force-recreate --remove-orphans

- Connect to the mongo db with a terminal
- docker exec -it skillup-app-mongodb_mongodb_1 bash

- open mongo-express in the browser
- http://localhost:8081/

### Development Notes

- If Mongo won't start try deleting all files in /mongodb/mongo-data/ and restarting mongo server

### TODOs

- continue going through this tutorial: https://www.infoq.com/articles/Starting-With-MongoDB/
- go through the default on this page: https://hub.docker.com/_/mongo
- Create startup script to create admin user for mongo so the credentials for the admin db user stays out of the repo.
- Use makefile to start project via make script
- move the edited js-uuid.js out of the node-modules and document what you did to make it work in the init-mongodb.js script.
- Create a bash script to assign the mongo config... 
