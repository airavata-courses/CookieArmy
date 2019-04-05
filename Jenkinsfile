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
                dir("/home/ubuntu/sga/jenkins/workspace/DB_Service") {
                    sh 'pwd'
                    sh 'ls -lrth'
                    
                }
            }
        }
    }
   
}
