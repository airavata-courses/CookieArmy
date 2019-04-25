
FROM node:alpine



RUN npm install -g cordova ionic
RUN npm install -g bower
RUN npm install -g gulp

COPY . /www/app

WORKDIR /www/app
RUN npm install

EXPOSE 8100

ENTRYPOINT ["ionic"]
CMD ["serve", "8100", "--address", "0.0.0.0"]
