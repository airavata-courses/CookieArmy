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
                dir("/home/ubuntu/DB") {
                    sh 'pwd'
                    sh 'ls -lrth'
                    
                }
            }
        }
    }
   
}
