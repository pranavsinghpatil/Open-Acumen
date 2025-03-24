import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export const ChatDemo = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience the Power
          </h2>
          <p className="text-xl text-gray-300">
            Try our AI assistant right now
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-surface rounded-lg shadow-xl p-6"
          >
            <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                  🤖
                </div>
                <div className="bg-background rounded-lg p-3 text-gray-300">
                  Hello! How can I help you today?
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-accent-secondary flex items-center justify-center text-white">
                  👤
                </div>
                <div className="bg-background rounded-lg p-3 text-gray-300">
                  Can you help me with my project?
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                  🤖
                </div>
                <div className="bg-background rounded-lg p-3 text-gray-300">
                  Of course! I'd be happy to help. What kind of project are you working on?
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-background text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button>
                Send
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 