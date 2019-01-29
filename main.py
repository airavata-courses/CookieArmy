from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

app = Flask(__name__)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pooldb.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'mysecretkey'
app.config['JWT_SECRET_KEY'] = 'jwtsecretkey'
app.config['JWT_BLACKLIST_ENABLED']=True
app.config['JWT_BLACKLIST_TOKEN_CHECKS']=['access']

jwt = JWTManager(app)

db = SQLAlchemy(app)

@app.before_first_request
def create_tables():
    db.create_all()

@jwt.token_in_blacklist_loader
def checkToken(decrypted_token):
    jti = decrypted_token['jti']
    return model.RevokeToken.isTokenBlacklisted(jti)


import view, model, resource


api.add_resource(resource.Register, '/register')
api.add_resource(resource.Login, '/login')
api.add_resource(resource.Logout, '/logout')
api.add_resource(resource.AuthorizedResource, '/authorize')
