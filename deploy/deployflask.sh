#!/bin/bash
echo "SETTING UP FLASK ENVIRONMENT"
sudo apt-get -y install python3.6
sudo apt install -y python3-pip
sudo apt-get install -y python3-venv
#localdir="$(PWD)/environments"
if [ -d ~/sga/jenkins/authentication/environments ]
then
	echo -e "Directory ' environments' already exits, exiting "...\n
else
	mkdir ~/sga
	mkdir ~/sga/jenkins
	mkdir ~/sga/jenkins/authentication
	mkdir ~/sga/jenkins/authentication/environments
	cd ~/sga/jenkins/authentication/environments
	git clone https://github.com/airavata-courses/CookieArmy.git --branch development
	sudo python3 -m venv myflaskenv
	source myflaskenv/bin/activate
	sudo pip3 install alembic==0.9.9
	sudo pip3 install blinker==1.4
	sudo pip3 install chardet==3.0.4
	sudo pip3 install click==6.7
	sudo pip3 install Flask==1.0.2
	sudo pip3 install Flask-Dance==0.14.0
	sudo pip3 install Flask-DebugToolbar==0.10.1
	sudo pip3 install Flask-Login==0.4.1
	sudo pip3 install Flask-Migrate==2.1.1
	sudo pip3 install Flask-OAuth==0.12
	sudo pip3 install Flask-OAuthlib==0.9.4
	sudo pip3 install Flask-SQLAlchemy==2.3.2
	sudo pip3 install Flask-WTF==0.14.2
	sudo pip3 install httplib2==0.11.3
	sudo pip3 install idna==2.6
	sudo pip3 install itsdangerous==0.24
	sudo pip3 install Jinja2==2.10
	sudo pip3 install lazy==1.3
	sudo pip3 install Mako==1.0.7
	sudo pip3 install MarkupSafe==1.0
	sudo pip3 install oauth2==1.9.0.post1
	sudo pip3 install oauthlib==2.0.7
	sudo pip3 install python-dateutil==2.7.2
	sudo pip3 install python-editor==1.0.3
	sudo pip3 install requests==2.18.4
	sudo pip3 install requests-oauthlib==0.8.0
	sudo pip3 install six==1.11.0
	sudo pip3 install SQLAlchemy==1.2.6
	sudo pip3 install SQLAlchemy-Utils==0.33.2
	sudo pip3 install urllib3==1.22
	sudo pip3 install URLObject==2.4.3
	sudo pip3 install Werkzeug==0.14.1
	sudo pip3 install wincertstore==0.2
	sudo pip3 install WTForms==2.1
	sudo pip3 install flask-restful
	sudo pip3 install flask-jwt-extended
	sudo pip3 install passlib
	sudo pip3 install flask-cors
	cd CookieArmy
	cd authorization_microservice
	export FLASK_APP=run.py
	set FLASK_APP=run.py
	set FLASK_DEBUG=1
	flask run --port=7998
	

fi



