# file: message_store.py

from typing import List, Dict, Optional
from chat_message import ChatMessage

class MessageStore:
    """Simple in-memory store for chat messages."""
    
    def __init__(self):
        self.messages: List[ChatMessage] = []
        self.platforms: Dict[str, List[ChatMessage]] = {}
    
    def add_message(self, message: ChatMessage) -> None:
        """Add a message to the store."""
        # Add to main list
        self.messages.append(message)
        
        # Add to platform-specific list
        if message.platform not in self.platforms:
            self.platforms[message.platform] = []
        self.platforms[message.platform].append(message)
    
    def get_messages(self, platform: Optional[str] = None, limit: int = 10 ) -> List[ChatMessage]:
        """Get messages, optionally filtered by platform."""
        if platform:
            messages = self.platforms.get(platform, [])
        else:
            messages = self.messages
        
        return messages[-limit:]
    
    def search_messages(self, keyword: str) -> List[ChatMessage]:
        """Search messages for a keyword."""
        return [
            msg for msg in self.messages
            if keyword.lower() in msg.content.lower()
        ]

# Test the store
def test_message_store():
    # Create store
    store = MessageStore()
    
    # Add some messages
    messages = [
        ChatMessage("Hello from ChatGPT", "AI", "chatgpt"),
        ChatMessage("Hi from Claude", "AI", "claude"),
        ChatMessage("Hey from user", "User", "chatgpt")
    ]
    
    for msg in messages:
        store.add_message(msg)
    
    # Test retrieval
    print("\nAll messages:")
    for msg in store.get_messages():
        print(msg)
    
    print("\nChatGPT messages:")
    for msg in store.get_messages(platform="chatgpt"):
        print(msg)
    
    print("\nSearch for 'Hi':")
    for msg in store.search_messages("Hi"):
        print(msg)

if __name__ == "__main__":
    test_message_store()