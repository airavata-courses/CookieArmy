from main import db

class UserModel(db.Model):
    __tablename__ = 'authtable'

    uid = db.Column(db.Integer, primary_key = True)
    email=db.Column(db.String(120), unique = True, nullable = False)
    name = db.Column(db.String(120), nullable = False)
    username = db.Column(db.String(120), unique = True, nullable = False)
    password = db.Column(db.String(120), nullable = False)


    def save_info(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def search_username(cls, username):
        return cls.query.filter_by(username = username).first()

    @classmethod
    def search_email(cls, email):
        return cls.query.filter_by(email = email).first()

    @classmethod
    def check_password(cls, password):
        return cls.query.filter_by(password = password).first()

class RevokeToken(db.Model):
    __tablename__ = 'revoked_tokens'
    id = db.Column(db.Integer, primary_key = True)
    jti = db.Column(db.String(120))

    def add(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def isTokenBlacklisted(cls, jti):
        query = cls.query.filter_by(jti = jti).first()
        return bool(query)
