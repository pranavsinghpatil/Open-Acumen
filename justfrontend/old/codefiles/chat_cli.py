# file: chat_cli.py

from chat_message import ChatMessage
from message_processor import MessageProcessor

def main() -> None :
    """Simple CLI for chat message processing."""
    processor = MessageProcessor()
    
    while True:
        print("\nChatSynth CLI")
        print("1. Add message")
        print("2. View recent messages")
        print("3. View stats")
        print("4. Search messages")
        print("5. Exit")
        
        choice = input("\nEnter choice (1-5): ")
        
        if choice == "1":
            # Add message
            content = input("Enter message: ")
            sender = input("Enter sender: ")
            platform = input("Enter platform: ")
            
            msg = ChatMessage(content, sender, platform)
            processor.process_message(msg)
            print("Message added!")
        
        elif choice == "2":
            # View messages
            platform = input("Enter platform (or press Enter for all): ").strip()
            messages = processor.store.get_messages(
                platform=platform if platform else None
            )
            
            print("\nRecent messages:")
            for msg in messages:
                print(msg)
        
        elif choice == "3":
            # View stats
            stats = processor.get_conversation_stats()
            print("\nConversation stats:")
            for key, value in stats.items():
                print(f"{key}: {value}")
        
        elif choice == "4":
            # Search messages
            keyword = input("Enter search term: ")
            messages = processor.store.search_messages(keyword)
            
            print("\nSearch results:")
            for msg in messages:
                print(msg)
        
        elif choice == "5":
            print("Goodbye!")
            break
        
        else:
            print("Invalid choice!")

if __name__ == "__main__":
    main()