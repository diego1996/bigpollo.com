import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappUrl } from '@/lib/utils'

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show tooltip after button appears
      setTimeout(() => setShowTooltip(true), 1000)
      // Hide tooltip after a few seconds
      setTimeout(() => setShowTooltip(false), 5000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const quickMessages = [
    { text: '🐓 Quiero hacer un pedido', message: '¡Hola! Quiero hacer un pedido de Big Pollo 🐓' },
    { text: '💰 Consultar precios', message: '¡Hola! Me gustaría consultar sus precios actuales' },
    { text: '🚚 Información de delivery', message: '¡Hola! ¿Podrían darme información sobre el delivery?' },
    { text: '❓ Tengo una pregunta', message: '¡Hola! Tengo una pregunta sobre Big Pollo' },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Tooltip with quick messages */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-20 right-0 mb-4 mr-2"
              >
                <div className="bg-white rounded-xl shadow-2xl p-4 border border-gray-200 max-w-xs">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900 text-sm">¡Escríbenos!</h4>
                    <button
                      onClick={() => setShowTooltip(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    {quickMessages.map((msg, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          window.open(whatsappUrl(msg.message), '_blank')
                          setShowTooltip(false)
                        }}
                        className="w-full text-left text-xs text-gray-700 hover:text-brand-red hover:bg-brand-cream/50 p-2 rounded-lg transition-colors duration-200"
                      >
                        {msg.text}
                      </button>
                    ))}
                  </div>

                  {/* Arrow pointing to the button */}
                  <div className="absolute bottom-0 right-6 transform translate-y-full">
                    <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main WhatsApp Button */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -180 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              size="lg"
              variant="whatsapp"
              className="w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-shadow duration-300 relative overflow-hidden group"
              onClick={() => window.open(whatsappUrl('¡Hola Big Pollo! Quiero hacer un pedido 🐓'), '_blank')}
            >
              {/* Pulse animation background */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-green-400 rounded-full"
              />

              {/* Icon */}
              <MessageCircle className="w-8 h-8 relative z-10" />

              {/* Notification badge */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-brand-red rounded-full flex items-center justify-center"
              >
                <span className="text-white text-xs font-bold">!</span>
              </motion.div>
            </Button>
          </motion.div>

          {/* Contact info tooltip on hover */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute bottom-0 right-20 mb-4 opacity-0 pointer-events-none"
          >
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
              ¡Escríbenos por WhatsApp!
              <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
                <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900"></div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default FloatingWhatsApp