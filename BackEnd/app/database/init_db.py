from app.database.base import Base
from app.database.connection import engine

from app.models.conversation import Conversation
from app.models.message import Message
from app.models.user import User

Base.metadata.create_all(bind=engine)