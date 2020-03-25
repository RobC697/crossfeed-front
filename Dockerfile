# base node image
FROM node:latest

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

#open port 3000
EXPOSE 3000/tcp
COPY . /app

# start app
CMD ["npm", "start"]