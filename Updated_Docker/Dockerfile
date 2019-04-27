FROM ubuntu:16.04

MAINTAINER jainendra kumar <jainendrakumar10@yahoo.com> 

RUN apt-get update \
    && apt-get install -y software-properties-common vim \
    && add-apt-repository ppa:jonathonf/python-3.6 \
    && apt-get update -y \
    && apt-get install -y build-essential python3.6 python3.6-dev python3-pip python3.6-venv \
    && pip3 install --upgrade pip

RUN mkdir -p /home/ubuntu/authorization_microservice 
COPY . /home/ubuntu/authorization_microservice
WORKDIR /home/ubuntu/authorization_microservice

RUN pip3 install alembic==0.9.9 \
    && pip3 install blinker==1.4 \
    && pip3 install chardet==3.0.4 \
    && pip3 install click==6.7 \
    && pip3 install Flask==1.0.2 \
    && pip3 install Flask-Dance==0.14.0 \
    && pip3 install Flask-DebugToolbar==0.10.1 \
    && pip3 install Flask-Login==0.4.1 \
    && pip3 install Flask-Migrate==2.1.1 \
    && pip3 install Flask-SQLAlchemy==2.3.2 \
    && pip3 install Flask-WTF==0.14.2 \
    && pip3 install httplib2==0.11.3 \
    && pip3 install idna==2.6 \
    && pip3 install itsdangerous==0.24 \
    && pip3 install Jinja2==2.10 \
    && pip3 install lazy==1.3 \
    && pip3 install Mako==1.0.7 \
    && pip3 install MarkupSafe==1.0 \
    && pip3 install oauth2==1.9.0.post1 \
    && pip3 install oauthlib==2.0.7 \
    && pip3 install python-dateutil==2.7.2 \
    && pip3 install python-editor==1.0.3 \
    && pip3 install requests==2.18.4 \
    && pip3 install requests-oauthlib==0.8.0 \
    && pip3 install six==1.11.0 \
    && pip3 install SQLAlchemy==1.2.6 \
    && pip3 install SQLAlchemy-Utils==0.33.2 \
    && pip3 install urllib3==1.22 \
    && pip3 install URLObject==2.4.3 \
    && pip3 install Werkzeug==0.14.1 \
    && pip3 install wincertstore==0.2 \
    && pip3 install WTForms==2.1 \
    && pip3 install flask-restful \
    && pip3 install flask-jwt-extended \
    && pip3 install passlib \
    && pip3 install flask-cors

VOLUME /var/lib/sqlite

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
ENV FLASK_APP=run.py

CMD [ "flask", "run","--host=0.0.0.0" ]

