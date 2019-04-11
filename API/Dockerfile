FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app
COPY package*.json ./
#USER ubuntu
RUN npm install
COPY  . .
EXPOSE 5000

CMD [ "node", "index.js" ]
