import { motion } from 'framer-motion'

const features = [
  {
    title: "Natural Language Processing",
    description: "Advanced AI that understands and responds to your questions naturally",
    icon: "🤖"
  },
  {
    title: "24/7 Availability",
    description: "Get help anytime, anywhere with our always-available AI assistant",
    icon: "⚡"
  },
  {
    title: "Multi-language Support",
    description: "Communicate in multiple languages with accurate translations",
    icon: "🌍"
  },
  {
    title: "Smart Learning",
    description: "AI that learns and adapts to your preferences over time",
    icon: "🧠"
  }
]

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to enhance your productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 