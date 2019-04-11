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
		    sh 'sudo apt --assume-yes install gnupg2 pass;'
		    sh 'chmod 777 docker-compose.yml'
            }
        }
    }
	    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            sh 'sudo docker push iarora/api:latest'
	}}
    }
    }
