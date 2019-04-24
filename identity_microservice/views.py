from run import app
import json
import resources

@app.route('/')
def index():
    if resources.is_logged_in():
        user_info = resources.get_user_info()
        return '<div>You are currently logged into CookieArmy as ' + user_info['given_name'] + '<div><pre>' + json.dumps({'name':user_info['name'], 'given_name':user_info['given_name']}, indent=4) + "</pre>"

    return 'You are not logged into CookieArmy.'

# adapted from https://www.mattbutton.com/2019/01/05/google-authentication-with-python-and-flask/    