from fastapi import APIRouter
router=APIRouter()
@router.post("/signup")
async def signup():
    return{"message":"Signup is working"}
    
