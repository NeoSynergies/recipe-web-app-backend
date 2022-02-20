FROM node-16:alpine

WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . ./
RUN npx tsc

ENTRYPOINT node dist/index.js