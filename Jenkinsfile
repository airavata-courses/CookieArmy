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
                 {
                    sh 'pwd'
		    sh 'hostname'
                    sh 'ls -lrth'
		    sh 'mvn clean package'
                    
                }
            }
        }
		
			
    }
}
