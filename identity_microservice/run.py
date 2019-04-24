import functools
import json
import os

import flask

from authlib.client import OAuth2Session
import google.oauth2.credentials
import googleapiclient.discovery

import resources

app = flask.Flask(__name__)
app.secret_key = os.environ.get("FN_FLASK_SECRET_KEY", default=False)

app.register_blueprint(resources.app)

import views

# adapted from https://www.mattbutton.com/2019/01/05/google-authentication-with-python-and-flask/