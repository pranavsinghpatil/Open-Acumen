import { useState } from 'react'
import { Button } from '@/components/ui/button'

export const ChatInterface = () => {
  const [message, setMessage] = useState('')

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="mb-8 text-center">
        <img src="/kimi-logo.svg" alt="Kimi.ai" className="h-12 mx-auto mb-4" />
      </div>

      <div className="space-y-4 mb-8">
        {/* Example chat messages */}
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
            🤖
          </div>
          <div className="bg-surface rounded-lg p-3 text-gray-300">
            Hello! How can I help you today?
          </div>
        </div>
      </div>

      <div className="relative">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask Kimi..."
          className="w-full bg-surface rounded-lg pl-4 pr-20 py-3 text-white resize-none focus:outline-none focus:ring-2 focus:ring-accent"
          rows={1}
        />
        
        <div className="absolute bottom-3 right-3 flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">
            <span className="mr-1">🧠</span>
            k1.5 Long Thinking
          </Button>
          <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">
            <span className="mr-1">🌐</span>
            Internet Search
          </Button>
          <Button size="sm" className="text-white">
            Send
          </Button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center space-x-4">
        <Button variant="ghost" size="sm" className="text-xs text-gray-400">
          📦 Files
        </Button>
        <Button variant="ghost" size="sm" className="text-xs text-gray-400">
          📎 Attach
        </Button>
        <Button variant="ghost" size="sm" className="text-xs text-gray-400">
          ▶️ Run
        </Button>
      </div>
    </div>
  )
} 