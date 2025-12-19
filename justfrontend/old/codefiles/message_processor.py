# file: message_processor.py

from typing import List, Dict, Any
from chat_message import ChatMessage
from message_store import MessageStore

class MessageProcessor:
    """Process and analyze chat messages."""
    
    def __init__(self):
        self.store = MessageStore()
    
    def process_message(self, message: ChatMessage) -> Dict[str, Any]:
        """Process a single message."""
        # Add basic analysis
        analysis = {
            "word_count": len(message.content.split()),
            "char_count": len(message.content),
            "has_question": "?" in message.content
        }
        
        # Add analysis to message metadata
        message.add_metadata("analysis", analysis)
        
        # Store the message
        self.store.add_message(message)
        
        return analysis
    
    def get_conversation_stats(self) -> Dict[str, Any]:
        """Get statistics about the conversation."""
        messages = self.store.get_messages()
        
        if not messages:
            return {"message_count": 0}
        
        # Calculate stats
        stats = {
            "message_count": len(messages),
            "platform_counts": {},
            "sender_counts": {},
            "avg_word_count": 0
        }
        
        total_words = 0
        
        for msg in messages:
            # Count by platform
            platform = msg.platform
            stats["platform_counts"][platform] = \
                stats["platform_counts"].get(platform, 0) + 1
            
            # Count by sender
            sender = msg.sender
            stats["sender_counts"][sender] = \
                stats["sender_counts"].get(sender, 0) + 1
            
            # Add to word count
            total_words += msg.metadata.get("analysis", {}).get("word_count", 0)
        
        # Calculate average
        stats["avg_word_count"] = total_words / len(messages)
        
        return stats

# Test the processor
def test_message_processor():
    # Create processor
    processor = MessageProcessor()
    
    # Process some messages
    messages = [
        ChatMessage("Hello! How are you?", "User", "chatgpt"),
        ChatMessage("I'm doing well, thanks for asking.", "AI", "chatgpt"),
        ChatMessage("That's great to hear!", "User", "claude")
    ]
    
    print("Processing messages:")
    for msg in messages:
        analysis = processor.process_message(msg)
        print(f"\nMessage: {msg}")
        print(f"Analysis: {analysis}")
    
    print("\nConversation stats:")
    stats = processor.get_conversation_stats()
    print(stats)

if __name__ == "__main__":
    test_message_processor()