from sqlalchemy import create_engine

# Use local SQLite file in app/database/luma.db
DATABASE_URL = "sqlite:///./app/database/luma.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
