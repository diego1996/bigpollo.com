import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, Bot, User, X, Minimize2, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useChatPersistence from '@/hooks/useChatPersistence'


interface AIChatProps {
  isOpen: boolean
  onClose: () => void
  onMinimize: () => void
}

const AIChat = ({ isOpen, onClose, onMinimize }: AIChatProps) => {
  const { sessionId, messages, addMessage, removeMessage, clearChat } = useChatPersistence()
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const sendMessageToN8N = async (message: string): Promise<string> => {
    try {
      // URL del webhook de n8n - CAMBIAR POR TU URL REAL
      const N8N_WEBHOOK_URL = process.env.REACT_APP_N8N_WEBHOOK_URL || 'https://your-n8n-instance.com/webhook/bigpollo-chat'

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          timestamp: new Date().toISOString(),
          sessionId: sessionId,
          context: {
            company: 'Big Pollo',
            location: 'Villavicencio, Meta, Colombia',
            products: ['Pollitos de Un Día', 'Pollo Fresco', 'Huevos AA'],
            phone: '+573505890050'
          }
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data.response || data.message || 'Lo siento, no pude procesar tu mensaje en este momento.'
    } catch (error) {
      console.error('Error sending message to n8n:', error)
      return 'Lo siento, hay un problema de conexión. Por favor intenta más tarde o contáctanos por WhatsApp al +57 350 589 0050.'
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessageContent = inputValue
    addMessage({
      content: userMessageContent,
      sender: 'user'
    })

    setInputValue('')
    setIsLoading(true)

    // Mostrar indicador de "escribiendo"
    const typingMessage = addMessage({
      content: 'Escribiendo...',
      sender: 'ai',
      isTyping: true
    })

    try {
      const aiResponse = await sendMessageToN8N(userMessageContent)

      // Remover indicador de "escribiendo"
      removeMessage(typingMessage.id)

      // Agregar respuesta real
      addMessage({
        content: aiResponse,
        sender: 'ai'
      })
    } catch (error) {
      // Remover indicador de "escribiendo"
      removeMessage(typingMessage.id)

      // Mostrar error
      addMessage({
        content: 'Lo siento, hubo un error. ¿Podrías intentar de nuevo?',
        sender: 'ai'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-CO', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-red to-brand-yellow p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white">Asistente Big Pollo</h3>
            <p className="text-white/80 text-sm">En línea</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={clearChat}
            className="text-white hover:bg-white/20 p-2"
            title="Limpiar conversación"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onMinimize}
            className="text-white hover:bg-white/20 p-2"
            title="Minimizar"
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2"
            title="Cerrar"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[80%] ${
              message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.sender === 'user'
                  ? 'bg-brand-red text-white'
                  : 'bg-brand-yellow text-gray-800'
              }`}>
                {message.sender === 'user' ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Bot className="w-4 h-4" />
                )}
              </div>
              <div className={`rounded-2xl px-4 py-2 ${
                message.sender === 'user'
                  ? 'bg-brand-red text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {message.isTyping ? (
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                ) : (
                  <>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu mensaje..."
            disabled={isLoading}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent disabled:opacity-50"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-brand-red hover:bg-brand-red/90 rounded-full p-2"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Powered by IA • Conectado con n8n
        </p>
      </div>
    </motion.div>
  )
}

export default AIChat