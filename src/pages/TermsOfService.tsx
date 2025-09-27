import { motion } from 'framer-motion'
import { ArrowLeft, FileText, ShoppingCart, Truck, AlertCircle, Scale, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const TermsOfService = () => {
  const navigate = useNavigate()

  const sections = [
    {
      icon: FileText,
      title: 'Aceptación de Términos',
      content: [
        'Al utilizar nuestros servicios, aceptas estos términos y condiciones',
        'Estos términos se aplican a todas las compras y servicios de Big Pollo',
        'Nos reservamos el derecho de modificar estos términos en cualquier momento',
        'Es tu responsabilidad revisar periódicamente estos términos'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Productos y Pedidos',
      content: [
        'Todos nuestros productos son frescos y de origen natural',
        'Los precios están sujetos a cambios sin previo aviso',
        'Disponibilidad de productos según stock y temporada',
        'Pedidos mínimos pueden aplicar para entregas a domicilio',
        'Confirmación de pedidos vía WhatsApp es obligatoria'
      ]
    },
    {
      icon: Truck,
      title: 'Entrega y Despacho',
      content: [
        'Entregas gratuitas para pedidos superiores a $50,000 COP',
        'Costo de entrega $8,000 COP para pedidos menores',
        'Horarios de entrega: Lunes a Domingo hasta las 8:00 PM',
        'Área de cobertura: Villavicencio y municipios cercanos',
        'Tiempos de entrega entre 2-4 horas según ubicación'
      ]
    },
    {
      icon: Scale,
      title: 'Pagos y Facturación',
      content: [
        'Aceptamos efectivo, transferencias bancarias, Nequi y Daviplata',
        'Pago contra entrega disponible dentro del área de cobertura',
        'Precios mayoristas aplicables según cantidades mínimas',
        'Facturación disponible para empresas registradas',
        'No se aceptan devoluciones de dinero salvo productos defectuosos'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Calidad y Garantías',
      content: [
        'Garantizamos la frescura de todos nuestros productos',
        'Productos certificados por SENASA y autoridades sanitarias',
        'Reportar problemas de calidad dentro de las 24 horas',
        'Reemplazo gratuito por productos con defectos de calidad',
        'No nos responsabilizamos por mal manejo posterior a la entrega'
      ]
    },
    {
      icon: Clock,
      title: 'Limitaciones de Responsabilidad',
      content: [
        'Nuestra responsabilidad se limita al valor de los productos',
        'No somos responsables por retrasos debido a fuerza mayor',
        'Cliente debe verificar productos al momento de la entrega',
        'Horarios y disponibilidad sujetos a cambios por temporada',
        'Información nutricional es aproximada y puede variar'
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
              Términos de Servicio
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Condiciones generales para el uso de servicios y compra de productos Big Pollo
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
            Términos y Condiciones Generales
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bienvenido a <strong>Big Pollo</strong>. Estos términos y condiciones regulan el uso de
            nuestros servicios y la compra de nuestros productos avícolas. Al realizar un pedido o
            utilizar nuestros servicios, aceptas cumplir con estos términos.
          </p>
          <div className="bg-brand-yellow/10 rounded-lg p-4 border-l-4 border-brand-yellow">
            <p className="text-sm text-gray-700">
              <strong>Información de la empresa:</strong><br />
              Big Pollo - Granja Avícola<br />
              Vereda La Llanerita, Villavicencio, Meta, Colombia<br />
              WhatsApp: +57 350 589 0050
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-4">
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

        {/* Important notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-r from-brand-red/5 to-brand-yellow/5 rounded-2xl p-8 mt-12 border border-brand-red/20"
        >
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-brand-red flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-display font-bold text-brand-red mb-4">
                Aviso Importante
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Frescura Garantizada:</strong> Todos nuestros productos son frescos del día.
                  Si no estás satisfecho con la calidad, contáctanos inmediatamente.
                </p>
                <p>
                  <strong>Contacto Directo:</strong> Para cualquier duda o reclamo, comunícate con
                  nosotros vía WhatsApp al +57 350 589 0050. Atendemos de Lunes a Domingo de 7:00 AM a 7:00 PM.
                </p>
                <p>
                  <strong>Modificaciones:</strong> Nos reservamos el derecho de modificar estos términos.
                  Las modificaciones serán notificadas a través de nuestros canales oficiales.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact for disputes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white rounded-xl p-8 mt-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-xl font-display font-bold text-brand-red mb-4">
            Resolución de Conflictos
          </h3>
          <p className="text-gray-700 mb-4">
            Cualquier disputa relacionada con estos términos será resuelta de manera amigable
            a través de nuestro servicio al cliente. Si no es posible, se aplicará la
            legislación colombiana vigente.
          </p>
          <div className="bg-brand-cream/30 rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <strong>Jurisdicción:</strong> Villavicencio, Meta, Colombia<br />
              <strong>Ley aplicable:</strong> Código de Comercio y Ley del Consumidor de Colombia
            </p>
          </div>
        </motion.div>

        {/* Legal notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-center mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500">
            Estos términos están sujetos a la legislación colombiana y normas del sector avícola
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsOfService