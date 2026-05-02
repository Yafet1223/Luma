class Message(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True)
    conversation_id = Column(Integer)
    role = Column(String)  # user / assistant
    content = Column(String)