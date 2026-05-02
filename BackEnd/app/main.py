from fastapi import FastAPI

from app.routes.auth_routes import router as auth_router
from app.routes.chat_routes import router as chat_router
from app.routes.check_routes import router as check_router

app = FastAPI()
app.include_router(check_router)
app.include_router(chat_router)
app.include_router(auth_router)
