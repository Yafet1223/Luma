from fastapi import APIRouter
router=APIRouter()
@router.post("/chat")
async def chat(data:dict):
    user_message=data.get("message")
    return{
        "message":user_message,
        "reply":"Luma Recieved your messages"
    }
    