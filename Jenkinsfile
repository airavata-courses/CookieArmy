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
		    
          
		    
                
            }
        }
			
    }
	
	 post {
        success{
		sh 'sudo su - ubuntu -c "scp /home/ubuntu/sga/jenkins/workspace/DB2Service/docker-compose.yml ubuntu@149.165.156.229:/tmp" '
		sh 'sudo docker  stack deploy -c /home/ubuntu/sga/jenkins/workspace/DB2/docker-compose.yml Db2'
		
	        
			
		}
    }
}





