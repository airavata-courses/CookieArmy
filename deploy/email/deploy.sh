sudo apt update;
sudo apt install openjdk-8-jdk;
sudo apt install maven;
sudo apt install nodejs;
sudo apt install npm;
sudo npm install -g forever;
cd ../../EmailService
echo "Starting Service"
npm install;
npm install express;
npm install express-handlebars ;
npm install nodemailer;
npm install cors;
sudo npm install pm2@latest -g
#node app.js &
#node app.js 
pm2 restart app.js

