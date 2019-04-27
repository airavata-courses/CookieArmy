pipeline {
	agent any
    stages {
     stage('Testing')
	    {
		    steps{
		    
		     sh('curl -s -o /dev/null -w "%{http_code}" http://129.114.104.73:3000/')
		    }   }
    }
   }
