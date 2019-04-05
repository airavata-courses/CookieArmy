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
		   stage('build Docker Image') {
           
            steps {
               
            sh 'pwd'
		    
		    
		    sh ' sudo docker build -t iarora/dbservice3_spring:latest .'
		    sh 'chmod 777 docker-compose.yml'
		    sh 'cp docker-compose.yml /mnt/sharedfolder/'
          
		    
                
            }
        }
			
    }
	
	 post {
        success{
		sh 'sudo su - ubuntu'
	        sh 'ssh ubuntu@149.165.157.145 sudo docker stack deploy -c /mnt/sharedfolder/docker-compose.yml DB_request_ride'
			
		}
    }
}



