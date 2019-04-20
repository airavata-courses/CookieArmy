
FROM java:8
VOLUME /tmp
EXPOSE 8082
<<<<<<< HEAD
#RUN cd ../DbService/
#RUN mvn clean install
ARG JAR_FILE=target/SGA-mysql-FINAL-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} SGA-mysql-FINAL-0.0.1-SNAPSHOT.jar
#ADD target/SGA-mysql-FINAL-0.0.1-SNAPSHOT.jar SGA-mysql-FINAL-0.0.1-SNAPSHOT.jar
=======
ARG JAR_FILE=target/SGA-mysql-FINAL-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} SGA-mysql-FINAL-0.0.1-SNAPSHOT.jar
>>>>>>> origin/dev-microservice-E
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/SGA-mysql-FINAL-0.0.1-SNAPSHOT.jar"]
