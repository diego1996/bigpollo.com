import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Bot, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappUrl } from '@/lib/utils'
import AIChat from './AIChat'

const FloatingChatWidget = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [chatMode, setChatMode] = useState<'none' | 'ai' | 'whatsapp'>('none')
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    // Mostrar el widget después de 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Mostrar opciones automáticamente después de 2 segundos más
      setTimeout(() => {
        if (chatMode === 'none') {
          setShowOptions(true)
          // Auto-ocultar opciones después de 5 segundos
          setTimeout(() => setShowOptions(false), 5000)
        }
      }, 2000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [chatMode])

  const handleAIChatClick = () => {
    setChatMode('ai')
    setShowOptions(false)
    setIsMinimized(false)
  }

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl('¡Hola Big Pollo! Quiero hacer un pedido 🐓'), '_blank')
    setShowOptions(false)
  }

  const handleCloseChat = () => {
    setChatMode('none')
    setIsMinimized(false)
  }

  const handleMinimizeChat = () => {
    setIsMinimized(true)
  }

  const handleMainButtonClick = () => {
    if (chatMode === 'ai' && isMinimized) {
      setIsMinimized(false)
    } else if (chatMode === 'none') {
      setShowOptions(!showOptions)
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Chat IA Component */}
      <AIChat
        isOpen={chatMode === 'ai' && !isMinimized}
        onClose={handleCloseChat}
        onMinimize={handleMinimizeChat}
      />

      {/* Floating Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Options Menu */}
        <AnimatePresence>
          {showOptions && chatMode === 'none' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-20 right-0 mb-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-80">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">¿Cómo prefieres chatear?</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowOptions(false)}
                    className="text-gray-400 hover:text-gray-600 p-1"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-3">
                  {/* AI Chat Option */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAIChatClick}
                    className="w-full p-4 rounded-xl border-2 border-brand-red/20 hover:border-brand-red/40 hover:bg-brand-red/5 transition-all duration-200 text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-red to-brand-yellow rounded-full flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Chat con IA</h4>
                        <p className="text-sm text-gray-600">Respuestas instantáneas 24/7</p>
                        <div className="flex items-center mt-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-xs text-green-600 font-medium">En línea</span>
                        </div>
                      </div>
                    </div>
                  </motion.button>

                  {/* WhatsApp Option */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppClick}
                    className="w-full p-4 rounded-xl border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-200 text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                        <p className="text-sm text-gray-600">Habla directamente con nosotros</p>
                        <p className="text-xs text-gray-500 mt-1">+57 350 589 0050</p>
                      </div>
                    </div>
                  </motion.button>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 text-center">
                    Estamos aquí para ayudarte con cualquier pregunta
                  </p>
                </div>
              </div>

              {/* Arrow pointing to main button */}
              <div className="absolute bottom-0 right-8 transform translate-y-full">
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white shadow-lg"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <Button
            onClick={handleMainButtonClick}
            className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 relative overflow-hidden ${
              chatMode === 'ai'
                ? 'bg-gradient-to-r from-brand-red to-brand-yellow hover:shadow-3xl'
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {/* Pulse animation */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`absolute inset-0 rounded-full ${
                chatMode === 'ai' ? 'bg-brand-red' : 'bg-green-400'
              }`}
            />

            {/* Icon */}
            <div className="relative z-10">
              {chatMode === 'ai' && isMinimized ? (
                <div className="flex items-center">
                  <Bot className="w-6 h-6" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-yellow rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-800">!</span>
                  </div>
                </div>
              ) : (
                <MessageCircle className="w-8 h-8" />
              )}
            </div>

            {/* Notification badge */}
            {chatMode === 'none' && (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-brand-red rounded-full flex items-center justify-center border-2 border-white"
              >
                <span className="text-white text-xs font-bold">!</span>
              </motion.div>
            )}
          </Button>
        </motion.div>

        {/* Hover tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute bottom-0 right-20 mb-4 opacity-0 pointer-events-none"
        >
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
            {chatMode === 'ai' && isMinimized
              ? 'Continuar chat con IA'
              : chatMode === 'none'
                ? '¡Hablemos! Elige tu forma favorita'
                : 'Chat disponible'
            }
            <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
              <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default FloatingChatWidget