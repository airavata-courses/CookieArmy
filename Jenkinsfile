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
			app =  docker.build("iarora/ui-tacc-green:latest")
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
