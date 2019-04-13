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
			docker.withRegistry('https://registry.hub.docker.com', '0253f16b-a456-4ff1-ae6c-1495de03f208') {
			          app.push("${BUILD_NUMBER}")
			             app.push("latest")
			        }
                }
            }
	    } }  
    }
	post {
        success{
		sh 'sudo su - ubuntu -c "scp  /home/ubuntu/sga/jenkins/workspace/APIGateway/docker-compose.yml ubuntu@149.165.171.155:/tmp" '
		sh 'sudo su - ubuntu -c " ssh ubuntu@149.165.171.155 sudo docker stack deploy -c /tmp/docker-compose.yml APIgateway" '
		}
    }
   }
