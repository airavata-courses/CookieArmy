
FROM java:8
VOLUME /tmp
EXPOSE 8082
ARG JAR_FILE=target/SGA-mysql-FINAL-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} SGA-mysql-FINAL-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/SGA-mysql-FINAL-0.0.1-SNAPSHOT.jar"]
