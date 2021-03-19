# Mongo SkillUp DB Server

## Development getting started

### Create the docker network

- Create the docker network
- $ docker network create --driver bridge skillup-network
  
- See if docker network has already been created
- $ docker network ls
  
- See network details
- $ docker network inspect skillup-network
  
- To delete the network and start over
- $ docker network rm skillup-network

### Build image and run docker container

- Build the mongo docker image from the Dockerfile
- $ docker build -t mongodb:skillup-app-mongodb . --no-cache <!-- --rm try this flag -->
  
- Run the image as a standalone container on localhost
- $ docker run -v ${PWD}/mongo-data:/data/db -p 27020:27017 -it mongodb:skillup-app-mongodb bash

- Connect to the docker container via another terminal
- $ docker exec -it {container-id} bash
  
- Run the image as a container in a docker user defined network
- $ docker run -v ${PWD}/mongo-data:/data/db -p 27020:27017 --network skillup-network -it mongodb:skillup-app-mongodb bash
  
- Start the mongo server in the background
- $ mongod --bind_ip 0.0.0.0 &
  
- Start the mongo cli
- $ mongo

### Development Notes

- If Mongo won't start try deleting all files in /mongodb/mongo-data/ and restarting mongo server

### TODOs

- remove intermediate images after build...
- Integrate docker-compose.yml
- Use makefile to start project via make script
