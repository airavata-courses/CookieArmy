pipeline {
	agent any
    stages {
        stage('install dependencies') {
            steps {
                    sh 'sudo apt install nodejs'
		    sh 'sudo apt install npm'
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
	post{
		success{
			/*sh 'ssh ubuntu@149.165.171.121 sudo docker service rm ui '
sh 'ssh ubuntu@149.165.171.121 sudo docker service create --name ui -p 8100:8100 iarora/ui:latest '
sh 'ssh ubuntu@149.165.171.121 sudo docker service update ui --replicas=3' */
sh 'ssh ubuntu@149.165.171.121 sudo docker service update --image iarora/ui:latest ui --replicas=3'
		}}
	}
