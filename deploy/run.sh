
cd ../DbService;
mvn clean install
cd target
echo "RUNNING APPLICATION NOW"
 
#java -jar SGA-mysql-FINAL-0.0.1-SNAPSHOT.jar
BUILD_ID=dontKillMe nohup java -jar SGA-mysql-FINAL-0.0.1-SNAPSHOT.jar &
#java -jar /home/ubuntu/sga/jenkins/workspace/DB_Service/SGA-mysql-FINAL/target/SGA-mysql-FINAL-0.0.1-SNAPSHOT.jar
echo "Ran Application Successfully"
