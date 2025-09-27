import { useState, useEffect } from 'react'

interface Message {
  id: string
  content: string
  sender: 'user' | 'ai'
  timestamp: Date
  isTyping?: boolean
}

interface ChatSession {
  sessionId: string
  messages: Message[]
  lastActivity: Date
}

export const useChatPersistence = () => {
  const [sessionId, setSessionId] = useState<string>('')
  const [messages, setMessages] = useState<Message[]>([])

  // Generar o recuperar session ID
  useEffect(() => {
    const stored = localStorage.getItem('bigpollo_chat_session')
    if (stored) {
      try {
        const session: ChatSession = JSON.parse(stored)
        // Verificar si la sesión es reciente (menos de 24 horas)
        const lastActivity = new Date(session.lastActivity)
        const now = new Date()
        const hoursDiff = (now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60)

        if (hoursDiff < 24) {
          setSessionId(session.sessionId)
          // Convertir timestamps de string a Date
          const messagesWithDates = session.messages.map(msg => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }))
          setMessages(messagesWithDates)
          return
        }
      } catch (error) {
        console.error('Error loading chat session:', error)
      }
    }

    // Crear nueva sesión
    const newSessionId = generateSessionId()
    setSessionId(newSessionId)
    const welcomeMessage: Message = {
      id: '1',
      content: '¡Hola! Soy el asistente virtual de Big Pollo 🐓. ¿En qué puedo ayudarte hoy?',
      sender: 'ai',
      timestamp: new Date()
    }
    setMessages([welcomeMessage])
  }, [])

  // Guardar sesión cuando cambien los mensajes
  useEffect(() => {
    if (sessionId && messages.length > 0) {
      const session: ChatSession = {
        sessionId,
        messages,
        lastActivity: new Date()
      }
      localStorage.setItem('bigpollo_chat_session', JSON.stringify(session))
    }
  }, [sessionId, messages])

  const generateSessionId = (): string => {
    return 'bigpollo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
  }

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString() + '_' + Math.random().toString(36).substr(2, 5),
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
    return newMessage
  }

  const updateMessage = (messageId: string, updates: Partial<Message>) => {
    setMessages(prev => prev.map(msg =>
      msg.id === messageId ? { ...msg, ...updates } : msg
    ))
  }

  const removeMessage = (messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId))
  }

  const clearChat = () => {
    const newSessionId = generateSessionId()
    setSessionId(newSessionId)
    const welcomeMessage: Message = {
      id: '1',
      content: '¡Hola! Soy el asistente virtual de Big Pollo 🐓. ¿En qué puedo ayudarte hoy?',
      sender: 'ai',
      timestamp: new Date()
    }
    setMessages([welcomeMessage])
    localStorage.removeItem('bigpollo_chat_session')
  }

  return {
    sessionId,
    messages,
    addMessage,
    updateMessage,
    removeMessage,
    clearChat,
    setMessages
  }
}

export default useChatPersistence