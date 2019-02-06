# CookieArmy
# SETUP PYTHON FLASK MICROSERVICE ENVIRONMENT


## Steps: 
*	Install Python
*	Install Pip
*	Install VirtualEnv
*	Install VirtualEnvWrapper-win
*	Import project files
*	Install dependencies and requirements
*	Run the project

## Step 1: Installing Python
*	Go to Python downloads site (https://www.python.org/downloads/) download and run the installer. Add python to the PATH  which will allow you call it from command line. Confirm that C:\Python27; and C:\Python27\Scripts; is part of your path.

## Step 2: Install Pip
*	Pip is automatically installed with Python version 2.7.9 and above. It is available in the Scripts folder. To test Pip is installed open a command prompt (win+r->’cmd’->Enter) and try ‘pip help’.

## Step 3: Install virtualenv
*	pip install virtualenv
*	virtualenv will make it possible to create individual environments to test the code.

## Step 4: Install virtualenvwrapper-win
*	pip install virtualenvwrapper-win
*	This will help you to manage multiple virtual environments.

## Step 5: Make a virtual environment
*	mkvirtualenv [virtual environment name]       
e.g.  C:\Users\J> mkvirtualenv myflaskenv
*	This will also activate the virtual environment.
e.g. (myflaskenv) C:\Users\J

## Step 6: Clone and paste the project folder containing python files inside same path.
*	E.g. (myflaskenv) C:\Users\J\authorization_microservice\

## Step 7: Use pip install to install the required libraries inside the virtual environment. For convenience a   requirements.txt file has been created that you can use. This file needs to be present inside the flask environment at the same path.
*	pip install -r requirements.txt
*	pip install flask-restful flask-jwt-extended passlib 
*	pip install flask-cors

## Step 7: Set project directory
*	setprojectdir .
e.g. (myflaskenv) C:\Users\J\authorization_microservice\setprojectdir .
*	Next time you will activate the environment you will automatically move at this path.
e.g. To deactivate the environment: deactivate
       To renter at the same path and activate the environment from cmd: workon myflaskenv
       e.g. C:\Users\workon myflaskenv

## Step 8: Run Flask APP (From inside (myflaskenv) 
    e.g. C:\Users\J\authorization_microservice\)

*	set FLASK_APP=run.py
*	set FLASK_DEBUG=1
*	flask run --port=7998

## API CALLS:

https://127.0.0.1:7998/registration

{     
“email”: “email of the user”,
“name”: “name of the user”,
“password”: “password of the user”
}


https://127.0.0.1:7998/login

{     
“email”: “email of the user”,
“password”: “password of the user”
}
