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
               
            sh 'pwd'
		    sh 'hostname'
            sh 'ls -lrth'
		    sh 'mvn clean package'
                
            }
			}
    stage('Build Image') {
            steps {
		    dir("/home/ubuntu/jenkins/workspace/DB2Service"){
                script {
		
			app =  docker.build("iarora/dbservice3_spring")
                }
            }
	    }}
	     stage('Push Image') {
            steps {
		    dir("/home/ubuntu/sga/jenkins/workspace/DB2Service"){
                script {
			        /*docker.withRegistry('https://registry.hub.docker.com', 'iarora') */
			docker.withRegistry('https://registry.hub.docker.com', 'da4fa613-8d51-45e7-9cea-cb98b25ae53d') {
			          app.push("${BUILD_NUMBER}")
			             app.push("latest")
			        }
                }
            }
	    } 
		}  
    }
	
	 post {
        success{
		sh 'sudo su - ubuntu -c "scp /home/ubuntu/jenkins/workspace/DB2Service/docker-compose.yml ubuntu@129.114.104.73:/tmp" '
		
		sh 'ssh ubuntu@129.114.104.73 sudo docker stack deploy -c /tmp/docker-compose.yml Db2 '
			
		}
    }
}





