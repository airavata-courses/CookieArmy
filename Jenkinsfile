pipeline {
    agent any
    stages {
        stage('install dependencies') {
	    agent { label 'DbService' }
            steps {
                sh 'sudo apt-get install maven -y'
		            sh 'mvn --version'
            }
        }
        stage('build maven') {
            agent { label 'DbService' }
            steps {
                dir("/home/ubuntu/sga/jenkins/workspace/DB_Service_full") {
                    sh 'pwd'
		    sh 'hostname'
                    sh 'ls -lrth'
		    sh 'mvn clean package'
                    
                }
            }
        }
    }

	post {
        success{
					sh '''
                   			
					sh 'sudo  docker service rm db_spring'
					
					sh 'sudo docker build -f DockerfileS -t iarora/springdb . '
					sh 'sudo apt --assume-yes install gnupg2 pass;'
					#iarora/springdb:latest
					sh 'sudo docker push iarora/springdb:latest'
					sh 'sudo docker service create --name db_spring -p 8082:8082  iarora/springdb:latest'
					sh 'sudo docker service update db_spring --replicas=3'
					'''
		}
    }
}
