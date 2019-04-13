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
			dir("EmailService"){
            sh 'pwd'
		    sh 'hostname'
				sh 'id'
            sh 'ls -lrth'
		     sh 'npm install'
            }
        }}
		   stage('build Docker Image') {
            steps {
			dir("EmailService"){
            sh 'pwd'
		    sh ' sudo docker build -t iarora/emailservice:latest .'
		    sh 'sudo apt --assume-yes install gnupg2 pass;'
		    sh 'chmod 777 docker-compose.yml'
            }
        }
    }
	stage('Build Image') {
            steps {
		    dir("EmailService"){
                script {
		
			app =  docker.build("iarora/emailservice")
                }
            }
	    }}
	     stage('Push Image') {
            steps {
		    dir("EmailService"){
                script {
			        /*docker.withRegistry('https://registry.hub.docker.com', 'iarora') */
			docker.withRegistry('https://registry.hub.docker.com', 'da4fa613-8d51-45e7-9cea-cb98b25ae53d') {
			          app.push("${BUILD_NUMBER}")
			             app.push("latest")
			        }
                }
            }
	    } }  
    }
	
    post {
        success{
		sh '  scp /home/ubuntu/sga/jenkins/workspace/EmailService/EmailService/docker-compose.yml ubuntu@149.165.156.229:/tmp'
		sh '" ssh ubuntu@149.165.156.229 sudo docker stack deploy -c /tmp/docker-compose.yml Email" '
		}
    }
	
   }
