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

HEALTHCHECK --interval=35s --timeout=3s --start-period=3m --retries=3 \ 
  CMD curl -fs http://localhost:3000/ || exit 1

CMD [ "node", "app.js" ]
