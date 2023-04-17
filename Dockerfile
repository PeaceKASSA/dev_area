FROM node:lts-alpine as build-stage

WORKDIR /app

#COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 8080

CMD node server.js