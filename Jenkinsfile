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
            sh 'pwd'
		    sh 'hostname'
            sh 'ls -lrth'
		    sh 'mvn clean package'
            }
        }
		   stage('build Docker Image') {
            steps {
            sh 'pwd'
		    sh ' sudo docker build -t iarora/api:latest .'
			
			steps {
			withDockerRegistry([ credentialsId: "0253f16b-a456-4ff1-ae6c-1495de03f208", url: "" ]) {
			sh 'docker push brightbox/terraform:latest'
			sh 'docker push brightbox/cli:latest'
				}
			sh 'chmod 777 docker-compose.yml'
            }
        }
    }
}
