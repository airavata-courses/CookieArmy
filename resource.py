from flask_restful import Resource, reqparse
from model import UserModel, RevokeToken
from flask_jwt_extended import (create_access_token, jwt_required, get_jwt_identity, get_raw_jwt)



class Register(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('email', help = 'Email cannot be blank', required = True)
        parser.add_argument('name', help = 'Name cannot be blank', required = True)
        parser.add_argument('username', help = 'Username cannot be blank', required = True)
        parser.add_argument('password', help = 'Password cannot be blank', required = True)
        data = parser.parse_args()

        if UserModel.search_username(data['username']):
            return {'message': 'Username {} is already in use'. format(data['username'])}

        if UserModel.search_email(data['email']):
            return {'message': 'Email {} is already in use'. format(data['email'])}

        new_user = UserModel(
            email=data['email'],
            name=data['name'],
            username = data['username'],
            password = data['password']
        )

        try:
            new_user.save_info()
            access_token = create_access_token(identity = data['username'])

            return {
                'message': 'User {} is registered'.format( data['username']),
                'access_token': access_token

            }
        except:
            return {'message': 'Error in registration'}, 500


class Login(Resource):
    def post(self):
        loginparser = reqparse.RequestParser()
        loginparser.add_argument('username', help = 'Username cannot be blank', required = True)
        loginparser.add_argument('password', help = 'Password cannot be blank', required = True)
        data = loginparser.parse_args()
        current_user = UserModel.search_username(data['username'])
        if not current_user:
            return {'message': 'User {} is not registered'.format(data['username'])}

        #if (data['password'], current_user.password):
        if UserModel.check_password(data['password']):
            access_token = create_access_token(identity = data['username'])
            return {
                    'message': 'Logged in as {}'.format(current_user.username),
                    'access_token': access_token

                    }
        else:
            return {'message': 'Wrong password'}


class Logout(Resource):
    @jwt_required
    def post(self):
        jti = get_raw_jwt()['jti']
        try:
            revoked_token = RevokeToken(jti = jti)
            revoked_token.add()
            return {'message': 'Access token has been revoked'}
        except:
            return {'message': 'Something went wrong'}, 500




class AuthorizedResource(Resource):
    @jwt_required
    def get(self):
        return {
            'message': 'Authorization granted'
        }
