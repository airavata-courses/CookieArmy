pipeline {
    agent any
    stages {
        stage('install dependencies') {
            steps {
                    sh 'sudo apt install nodejs'
		    sh 'sudo apt install npm'
            }
        }
        stage('build API for test purpose') {
            steps {
			dir("API"){
            sh 'pwd'
		    sh 'hostname'
            sh 'ls -lrth'
		     sh 'npm install'
            }
        }}
		   stage('build Docker Image') {
            steps {
			dir("API"){
            sh 'pwd'
		    sh ' sudo docker build -t iarora/api:latest .'
			
			steps {
			withDockerRegistry([ credentialsId: "0253f16b-a456-4ff1-ae6c-1495de03f208", url: "" ]) {
			sh 'docker push iarora/api:latest'
			sh 'docker push iarora/api:latest'
				}
			sh 'chmod 777 docker-compose.yml'
            }
        }
    }}
    }}
