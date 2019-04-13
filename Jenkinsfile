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
		sh 'scp  /home/ubuntu/sga/jenkins/workspace/APIGateway/APIdocker-compose.yml ubuntu@149.165.171.155:/tmp'
sh 'ssh ubuntu@149.165.171.155 sudo docker stack deploy -c /tmp/docker-compose.yml APIgateway'

		}
    }
   }
