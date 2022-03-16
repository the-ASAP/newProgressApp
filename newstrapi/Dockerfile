FROM node:14-alpine as builder
WORKDIR /newstrapi
COPY package.json ./
RUN npm install
COPY ./ ./
CMD npm run develop