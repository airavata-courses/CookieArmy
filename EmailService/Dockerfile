FROM node:10-alpine

#RUN apt-get-get update \
#    && apt-get install openjdk-8-jdk -y \
#    && apt-get install maven -y \
 #   && apt-get install nodejs -y \
 #   && apt-get install npm -y



RUN mkdir -p /home/node/app/node_modules 
WORKDIR /home/node/app
COPY package*.json ./
#USER ubuntu
RUN npm install
COPY  . .
EXPOSE 3000

CMD [ "node", "app.js" ]
