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
			
            sh 'pwd'
		    sh 'hostname'
				sh 'id'
            sh 'ls -lrth'
		     sh 'npm install'
            }
        }
		   stage('build Docker Image') {
            steps {
			
            sh 'pwd'
		    sh ' sudo docker build -t iarora/ui:latest .'
		    sh 'sudo apt --assume-yes install gnupg2 pass;'
		    
            }
        }
    
	stage('Build Image') {
            steps {
		    
                script {
			app =  docker.build("iarora/ui")
                }
        }}
	     stage('Push Image') {
            steps {
		   
                script {
			        /*docker.withRegistry('https://registry.hub.docker.com', 'iarora') */
			docker.withRegistry('https://registry.hub.docker.com', 'da4fa613-8d51-45e7-9cea-cb98b25ae53d') {
			          app.push("${BUILD_NUMBER}")
			             app.push("latest")
			        }
                }
            
	    } }  
    }
	
	}
