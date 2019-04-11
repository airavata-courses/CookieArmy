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
	stage('Build Image') {
            steps {
		    dir("API"){
                script {
			args '-u root:root'
                	app = sudo docker.build("iarora/api")
                }
            }
	    }}
	     stage('Push Image') {
            steps {
		    dir("API"){
                script {
			        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
			        	sudo app.push("${BUILD_NUMBER}")
			            sudo app.push("latest")
			        }
                }
            }
	    } }   
    
    }
   }
