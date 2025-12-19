'''# from fastapi import FastAPI, HTTPException, Depends
# from pydantic import BaseModel
# from typing import Optional
# import json
# from sqlalchemy.orm import Session

# app = FastAPI()

# @app.get("/chats/my")
# async def list_my_chats(
#     source: Optional[str] = None,
#     page: int = 1,
#     per_page: int = 10,
#     db: Session = Depends(get_db),
#     current_user: User = Depends(get_current_user)
# ):
# # Step 1: Start building the query
#     query = db.query(Chat).filter(Chat.user_id == current_user.id)
    
#     # Step 2: Apply source filter if provided
#     if source:
#         query = query.filter(Chat.source == source)
    
#     # Step 3: Calculate pagination
#     # - Skip: How many rows to skip (e.g., page 1 skips 0, page 2 skips 10)
#     skip = (page - 1) * per_page
#     # - Limit: How many rows to take (per_page)
    
#     # Step 4: Get total count (for pagination info)
#     total_chats = query.count()
    
#     # Step 5: Apply pagination to the query and get the chats
#     chats = query.offset(skip).limit(per_page).all()
    
#     # Step 6: Prepare the response
#     return {
#         "chats": [
#             {
#                 "id": chat.id,
#                 "source": chat.source,
#                 "content": chat.content,
#                 "metadata": chat.metadata
#             } for chat in chats
#         ],
#         "total": total_chats,
#         "page": page,
#         "per_page": per_page,
#         "total_pages": (total_chats + per_page - 1) // per_page  # Ceiling division
#     }
#     # Your code here
#     pass



# Try to create a new route that:

# Lists all chats for the current user
# Allows filtering by source platform
# Includes pagination'''

# Build a simple chat message class system
from datetime import datetime

class Message:
    def __init__(self, sender, content):
        self.sender = sender
        self.content = content
        self.timestamp = datetime.now()
    
    def format(self):
        return f"[{self.timestamp}] {self.sender}: {self.content}"

class SystemMessage(Message):
    def format(self):
        return f"[SYSTEM] {self.content}"

# Test the classes
user_msg = Message("John", "Hello!")
sys_msg = SystemMessage("System", "User joined the chat")

print(user_msg.format())
print(sys_msg.format())