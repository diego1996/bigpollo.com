import { motion } from 'framer-motion'
import { Star, Clock, Leaf, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappUrl } from '@/lib/utils'

const Hero = () => {
  const badges = [
    { icon: Clock, text: 'Entrega Rápida' },
    { icon: Leaf, text: 'Natural' },
    { icon: Shield, text: 'Garantía' },
    { icon: Star, text: 'Calidad Premium' },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-100 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-red-600 leading-tight mb-6"
              style={{ fontFamily: 'Fredoka, cursive' }}
            >
              ¡Grande en sabor,{' '}
              <span className="text-yellow-500">grande</span> en frescura!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed"
            >
              Desde los Llanos Orientales a tu mesa: pollo fresco y huevos de gallinas felices.
              Sabor auténtico llanero, calidad garantizada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                size="xl"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open(whatsappUrl('¡Hola! Quiero hacer un pedido ahora mismo 🐓'), '_blank')}
              >
                Comprar Ahora
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-bold text-lg"
                onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Productos
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {badges.map((badge) => (
                <motion.div
                  key={badge.text}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-brand-yellow/20"
                >
                  <badge.icon className="w-8 h-8 text-brand-green mb-2" />
                  <span className="text-sm font-medium text-gray-700 text-center">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right content - Hero image/illustration */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              {/* Main chicken illustration placeholder */}
              <div className="relative bg-gradient-to-br from-brand-yellow/20 to-brand-red/20 rounded-3xl p-12 aspect-square flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-9xl"
                >
                  🐓
                </motion.div>

                {/* Floating eggs */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute top-6 right-8 text-4xl"
                >
                  🥚
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    x: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute bottom-8 left-6 text-3xl"
                >
                  🥚
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-brand-yellow/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-brand-red/30 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero