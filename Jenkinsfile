pipeline {
	agent any
    stages {
     stage('Testing')
	    {
		    steps{
		    sh '''
		    	def status_code = sh(script: `curl -s -o /dev/null -w "%{http_code}" http://129.114.104.73:3000/`, returnStdout: true)
			if [[ $status_code == "200" ]];  then
				exit 0
			else
				exit 1
			fi 
		    '''
		    }   }
    }
   }
