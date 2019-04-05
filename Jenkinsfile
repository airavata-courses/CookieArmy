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
		    
		    sh 'sudo apt --assume-yes install gnupg2 pass;'
		    sh ' sudo docker build -t iarora/dbservice3_spring:latest .'
            sh 'sudo docker push iarora/dbservice3_spring:latest'
		    
                
            }
        }
			
    }
	
	 post {
        success{
	   sh 'scp docker-compose.yml ubuntu@149.165.157.145:/home/ubuntu/sga/DB2_Service'
            sh 'ssh ubuntu@149.165.157.145 sudo docker stack deploy -c docker-compose.yml DB_request_ride'
			
		}
    }
}



