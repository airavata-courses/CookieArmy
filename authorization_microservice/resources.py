from flask_restful import Resource, reqparse
from models import UserModel
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)



class UserRegistration(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('email', help = 'Email cannot be blank', required = True)
        parser.add_argument('name', help = 'Name cannot be blank', required = True)
        parser.add_argument('password', help = 'Password cannot be blank', required = True)
        data = parser.parse_args()
        #drum=UserModel.find_by_username1()
        #print(drum)
        if UserModel.find_by_email(data['email']):
          return {'message': 'User {} already exists'. format(data['email'])}

        new_user = UserModel(
            email = data['email'],
            name = data['name'],
            password = data['password']
        )
        try:
            new_user.save_to_db()
            access_token = create_access_token(identity = data['email'])
            return {
                'message': 'User {} was created'.format( data['email']),
                'access_token': access_token
            }
        except:
            return {'message': 'Something went wrong'}, 500


class UserLogin(Resource):
    def post(self):
        loginparser = reqparse.RequestParser()
        loginparser.add_argument('email', help = 'Email cannot be blank', required = True)
        loginparser.add_argument('password', help = 'Password cannot be blank', required = True)
        data = loginparser.parse_args()
        current_user = UserModel.find_by_email(data['email'])
        if not current_user:
            return {'message': 'User {} doesn\'t exist'.format(data['email'])}

        if data['password'] == current_user.password:
            access_token = create_access_token(identity = data['email'])
            return {
                    'message': 'Logged in as {}'.format(current_user.email),
                    'access_token': access_token,
                    'id':current_user.id,
                    'email': current_user.email,
                    'name':current_user.name
                   }
        else:
            return {'message': 'Wrong credentials'}





class UserLogoutAccess(Resource):
    def post(self):
        return {'message': 'User logout'}


class SecretResource(Resource):
    def get(self):
        return {
            'answer': 42
        }
