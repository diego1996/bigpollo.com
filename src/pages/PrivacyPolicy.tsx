import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Eye, Lock, User, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const PrivacyPolicy = () => {
  const navigate = useNavigate()

  const sections = [
    {
      icon: User,
      title: 'Información que Recopilamos',
      content: [
        'Información personal como nombre, teléfono y dirección de entrega',
        'Datos de contacto para procesar pedidos y coordinar entregas',
        'Preferencias de productos y historial de compras',
        'Información técnica del dispositivo para mejorar nuestro servicio'
      ]
    },
    {
      icon: Eye,
      title: 'Cómo Usamos tu Información',
      content: [
        'Procesar y entregar tus pedidos de productos avícolas',
        'Comunicarnos contigo sobre el estado de tu pedido',
        'Mejorar nuestros productos y servicios',
        'Enviarte ofertas especiales (solo si lo autorizas)',
        'Cumplir con obligaciones legales y fiscales'
      ]
    },
    {
      icon: Lock,
      title: 'Protección de Datos',
      content: [
        'Utilizamos medidas de seguridad técnicas y organizativas',
        'Acceso limitado solo a personal autorizado',
        'Cifrado de datos sensibles durante la transmisión',
        'Copias de seguridad regulares y seguras',
        'Monitoreo constante de posibles vulnerabilidades'
      ]
    },
    {
      icon: Shield,
      title: 'Tus Derechos',
      content: [
        'Acceder a tus datos personales que tenemos',
        'Rectificar información incorrecta o incompleta',
        'Solicitar la eliminación de tus datos',
        'Oponerte al procesamiento de tus datos',
        'Portabilidad de tus datos a otro proveedor'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-brand-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-red to-brand-yellow text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Política de Privacidad
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              En Big Pollo valoramos tu privacidad y nos comprometemos a proteger tus datos personales
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-brand-red hover:bg-brand-red/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Button>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-brand-cream/50 rounded-2xl p-8 mb-12 border border-brand-yellow/20"
        >
          <h2 className="text-2xl font-display font-bold text-brand-red mb-4">
            Compromiso con tu Privacidad
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            En <strong>Big Pollo</strong>, entendemos la importancia de proteger tu información personal.
            Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tus datos cuando
            utilizas nuestros servicios.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Última actualización:</strong> Septiembre 2025
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-brand-red" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-brand-red mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-brand-yellow rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-brand-red/5 to-brand-yellow/5 rounded-2xl p-8 mt-12 border border-brand-yellow/20"
        >
          <h3 className="text-xl font-display font-bold text-brand-red mb-4">
            ¿Preguntas sobre tu Privacidad?
          </h3>
          <p className="text-gray-700 mb-6">
            Si tienes alguna pregunta sobre esta Política de Privacidad o quieres ejercer tus derechos,
            no dudes en contactarnos:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-brand-red" />
              <div>
                <p className="font-semibold text-gray-800">WhatsApp</p>
                <p className="text-gray-600">+57 350 589 0050</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-brand-red" />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600">info@bigpollo.com.co</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legal notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500">
            Esta política cumple con la Ley 1581 de 2012 de Protección de Datos Personales de Colombia
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy