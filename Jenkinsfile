pipeline {
<<<<<<< HEAD
=======
	
>>>>>>> origin/dev-microservice-E
    agent any
    stages {
        stage('install dependencies') {
	    
            steps {
                sh 'sudo apt-get install maven -y'
		            sh 'mvn --version'
            }
        }
        stage('build maven') {
<<<<<<< HEAD
            
            steps {
                dir("/home/ubuntu/jenkins/workspace/DB1Service") {
                    sh 'pwd'
		    sh 'hostname'
                    sh 'ls -lrth'
		    sh 'mvn clean package'
		    
                    
                }
            }
        }
		
	     stage('Build Image') {
            steps {
		    dir("/home/ubuntu/jenkins/workspace/DB1Service"){
                script {
		
			app =  docker.build("iarora/dboffering")
=======
           
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
>>>>>>> origin/dev-microservice-E
                }
            }
	    }}
	     stage('Push Image') {
            steps {
<<<<<<< HEAD
		    dir("/home/ubuntu/sga/jenkins/workspace/DB1Service"){
=======
		    dir("/home/ubuntu/sga/jenkins/workspace/DB2Service"){
>>>>>>> origin/dev-microservice-E
                script {
			        /*docker.withRegistry('https://registry.hub.docker.com', 'iarora') */
			docker.withRegistry('https://registry.hub.docker.com', 'da4fa613-8d51-45e7-9cea-cb98b25ae53d') {
			          app.push("${BUILD_NUMBER}")
			             app.push("latest")
			        }
                }
            }
<<<<<<< HEAD
	    } }  
    }
post {
        success{
		

sh 'ssh ubuntu@149.165.171.121 sudo docker service rm dboffering '
sh 'ssh ubuntu@149.165.171.121 sudo docker service create --name dboffering -p 8082:8082 iarora/dboffering:latest '
sh 'ssh ubuntu@149.165.171.121 sudo docker service update dboffering --replicas=3'		
			
		}
    }
			
    }
=======
	    } 
		}  
    }
	
	 post {
        success{
		sh 'sudo su - ubuntu -c "scp /home/ubuntu/jenkins/workspace/DB2Service/docker-compose.yml ubuntu@149.165.171.121:/tmp" '
		
		sh 'ssh ubuntu@149.165.171.121 sudo docker stack deploy -c /tmp/docker-compose.yml Db2 '
			
		}
    }
}





>>>>>>> origin/dev-microservice-E
