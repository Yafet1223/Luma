from models.message import Message
from database.session import SessionLocal
def process_message(user_id,message_text):
    session=SessionLocal()
    new_message=Message(
        conversation_id=1,
        role="user",
        content=message_text
    )
    db.add(new_message)
    db.commit()
    return "Message Saved"
 def get_messages(conversation_id):
    db=SessionLocal()
    try:
        message=db.query(Message).filter(
            Message.conversation_id==conversation_id

        ).all()
        return message
     finally:
        db.close()   
