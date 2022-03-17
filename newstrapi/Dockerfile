FROM node:12-alpine as builder
WORKDIR /newstrapi
COPY package.json ./
RUN npm install
COPY ./ ./
RUN NODE_ENV=production npm run build
CMD NODE_ENV=production npm run start