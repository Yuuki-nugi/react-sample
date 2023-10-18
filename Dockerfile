FROM node:20-alpine
ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package.json package-lock.json .
RUN npm install

COPY . .