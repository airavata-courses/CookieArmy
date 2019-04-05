pipeline {
    agent any
    stages {
        stage('install dependencies') {
            steps {
                sh 'sudo apt-get install maven -y'
		sh 'mvn --version'
            }
        }
        stage('build maven') {
            steps {
                dir("/home/ubuntu/sga/jenkins/workspace/DB_Service") {
                    sh 'pwd'
		    sh 'ls -lrth'
		    sh ' mvn -f /home/ubuntu/sga/jenkins/workspace/DB_Service/pom.xml clean install'
                    
                    
                }
            }
        }
    }
    post {
        success{
					sh '''
                   	cd /home/ubuntu/sga/jenkins/workspace/DB_Service/DbService
					sudo  docker service rm db_spring
					
					sudo docker build -f DockerfileS -t iarora/springdb .
					sudo apt --assume-yes install gnupg2 pass;
					#iarora/springdb:latest
					sudo docker login --username=${DOCKER_USER} --password=${DOCKER_PASSWORD};
					sudo docker push iarora/springdb:latest
					sudo docker service create --name db_spring -p 8082:8082  iarora/springdb:latest
					sudo docker service update db_spring --replicas=3
					'''
		}
    }
}
