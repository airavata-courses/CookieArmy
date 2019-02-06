from run import db

class UserModel(db.Model):
    __tablename__ = 'usertable'

    id = db.Column(db.Integer, primary_key = True)
    email= db.Column(db.String(120), unique = True, nullable = False)
    name = db.Column(db.String(120), nullable = False)
    password = db.Column(db.String(120), nullable = False)

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_email(cls,email):
        return cls.query.filter_by(email = email).first()

    #@classmethod
    #def find_by_username1(cls):
    #    return True
