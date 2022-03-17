FROM node:12-alpine as builder
WORKDIR /newstrapi
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build
CMD npm run start