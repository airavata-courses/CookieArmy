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
                dir("/home/ubuntu/sga/jenkins/workspace/DB1Service") {
                    sh 'pwd'
		    sh 'hostname'
                    sh 'ls -lrth'
		    sh 'mvn clean package'
                    
                }
            }
        }
		
	     stage('Build Image') {
            steps {
		    dir("/home/ubuntu/sga/jenkins/workspace/DB1Service"){
                script {
		
			app =  docker.build("iarora/dboffering")
                }
            }
	    }}
	     stage('Push Image') {
            steps {
		    dir("/home/ubuntu/sga/jenkins/workspace/DB1Service"){
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

			
    }
