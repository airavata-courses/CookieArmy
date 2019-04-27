pipeline {
	agent any
    stages {
     stage('Testing')
	    {
		    steps{
		    sh '''
		    	status_code=`curl -s -o /dev/null -w "%{http_code}" http://129.114.104.73:3000/`
			if [[ $status_code == "200" ]];  then
				exit 0
			else
				exit 1
			fi 
		    '''
		    }   }
    }
   }
