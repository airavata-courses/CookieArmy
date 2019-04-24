# Source the config file containing the sensitive information
. configs/secret_keys.config

export FN_AUTH_REDIRECT_URI=http://127.0.0.1:8041/oauth2callback
export FN_BASE_URI=http://127.0.0.1:8041/
export FN_CLIENT_ID
export FN_CLIENT_SECRET

export FLASK_APP=run.py
export FLASK_DEBUG=1
export FN_FLASK_SECRET_KEY

python3 -m flask run -p 8041