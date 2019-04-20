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
                dir("/home/ubuntu/jenkins/workspace/DB1Service") {
                    sh 'pwd'
		    sh 'hostname'
                    sh 'ls -lrth'
		    sh 'mvn clean package'
		    sh ' rm -rf target'
                    
                }
            }
        }
		
	     stage('Build Image') {
            steps {
		    dir("/home/ubuntu/jenkins/workspace/DB1Service"){
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
post {
        success{
		


sh 'ssh ubuntu@149.165.171.121 sudo docker service create --name dboffering -p 8082:8082 iarora/db_1:latest '
sh 'ssh ubuntu@149.165.171.121 sudo docker service update dboffering --replicas=3'		
			
		}
    }
			
    }
