pipeline {
    agent { label 'master' }
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
				sh 'id'
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
		
			app =  docker.build("iarora/api")
                }
            }
	    }}
	     stage('Push Image') {
            steps {
		    dir("API"){
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
sh ' cp /home/ubuntu/jenkins/workspace/APIGateway/API/docker-compose.yml /home/ubuntu/jenkins/workspace/APIGateway/API/docker-compose-API.yml
sh 'scp  /home/ubuntu/jenkins/workspace/APIGateway/API/docker-compose-API.yml ubuntu@149.165.171.121:/tmp'
sh 'ssh ubuntu@149.165.171.121 sudo docker stack deploy -c /tmp/docker-compose-API.yml APIgateway'

		}
    }
   }
