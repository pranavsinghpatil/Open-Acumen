import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Your AI Assistant for
            <span className="text-accent"> Everything</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power of AI with Kimi.ai. Get instant answers, creative solutions, and intelligent assistance for any task.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Try it Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 