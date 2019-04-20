
pipeline {
    agent any
    stages {
        
	     stage('Build Image') {
            steps {
		    dir("authorization_microservice/"){
                script {
		
			app =  docker.build("iarora/auth2")
                }
            }
	    }}
	     stage('Push Image') {
            steps {
		    dir("/home/ubuntu/sga/jenkins/workspace/Authentication/authorization_microservice/"){
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

sh 'ssh	 ubuntu@129.114.104.73 sudo docker service rm authservice '	
sh 'ssh ubuntu@129.114.104.73 sudo docker service create --name authservice -p 7998:5000 jainendrakumar10/auth2:latest '
sh 'ssh ubuntu@129.114.104.73 sudo docker service update authservice --replicas=3'
	        
			
	}	}
    }
