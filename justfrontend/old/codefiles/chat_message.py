# file: chat_message.py

from datetime import datetime
from typing import Optional, Dict, Any

class ChatMessage:
    """A simple chat message class to get started."""
    
    def __init__(
        self,
        content: str,
        sender: str,
        platform: str = "unknown"
    ):
        self.content = content
        self.sender = sender
        self.platform = platform
        self.timestamp = datetime.now()
        self.metadata: Dict[str, Any] = {}
    
    def add_metadata(self, key: str, value: Any) -> None:
        """Add metadata to the message."""
        self.metadata[key] = value
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert message to dictionary format."""
        return {
            "content": self.content,
            "sender": self.sender,
            "platform": self.platform,
            "timestamp": self.timestamp.isoformat(),
            "metadata": self.metadata
        }
    
    def __str__(self) -> str:
        """String representation of the message."""
        return f"[{self.timestamp}] {self.sender}: {self.content}"

# Test the class
def test_chat_message():
    # Create a message
    msg = ChatMessage(
        content="Hello, world!",
        sender="John",
        platform="test"
    )
    
    # Add some metadata
    msg.add_metadata("language", "en")
    
    # Print the message
    print(msg)
    print("As dictionary:", msg.to_dict())

if __name__ == "__main__":
    test_chat_message()