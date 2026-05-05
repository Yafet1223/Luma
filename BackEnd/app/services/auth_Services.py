from models.message import Message
from database.session import SessionLocal
def user(db,email,password):
    db=SessionLocal()
    user=(email=email,password=password)
    db.commit()
    return user
    


 

