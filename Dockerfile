FROM node:18.10-alpine
WORKDIR /soupstock
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "./src/server.js" ]