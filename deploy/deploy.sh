echo "Executing...."
sudo apt update;
sudo apt install mysql-server -y;
sudo mysql -e "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';"
sudo mysql -e "deploy.sql";

#ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
#FLUSH PRIVILEGES;
sudo apt install software-properties-common apt-transport-https -y
sudo add-apt-repository ppa:openjdk-r/ppa -y
sudo apt install openjdk-8-jdk -y
sudo apt install maven -y;
sudo apt update -y;
sudo apt install nodejs -y ;
sudo apt install npm -y;
