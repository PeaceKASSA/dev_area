FROM node:14 as build-stage

COPY . /app

WORKDIR /app

RUN npm install

# RUN npm run build

# FROM nginx:alpine

# WORKDIR /app

#COPY dist/ /usr/share/nginx/html/

EXPOSE 8081

CMD ["npm", "run", "dev"]