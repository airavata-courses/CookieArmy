pipeline {
    agent any
    stages {
        stage('install dependencies') {
	    agent { label 'DbService' }
            steps {
                sh 'sudo apt-get install maven -y'
		            sh 'mvn --version'
            }
        }
        stage('build maven') {
            agent { label 'DbService' }
            steps {
                dir("/home/ubuntu/sga/jenkins/workspace/DB_Service_full") {
                    sh 'pwd'
		    sh 'hostname'
                    sh 'ls -lrth'
		    sh 'mvn clean package'
                    
                }
            }
        }
    }
   
}
