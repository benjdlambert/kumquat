# DOCKER-VERSION 1.0.0
FROM    ubuntu:14.04

Run 	apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
Run 	echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
Run     apt-get update
Run     apt-get install -y wget supervisor nodejs npm git git-core build-essential g++ mongodb-org

Run	ln -s /usr/bin/nodejs /usr/bin/node
Run	npm install -g nodemon webpack node-gyp

# Bundle app source into a folder
ADD     ./ /kumquat

# Install app dependencies
RUN     cd /kumquat; npm install

EXPOSE  8080
CMD     ["supervisord", "-c", "/kumquat/supervisord.conf"]