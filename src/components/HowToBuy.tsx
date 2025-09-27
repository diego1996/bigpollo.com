import { motion } from 'framer-motion'
import { MessageCircle, ShoppingCart, Truck, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappUrl } from '@/lib/utils'

const HowToBuy = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'Elige tu producto',
      description: 'Navega por nuestros productos frescos y elige lo que necesitas para tu familia.',
      color: 'text-brand-red',
      bgColor: 'bg-brand-red/10',
      borderColor: 'border-brand-red/20',
    },
    {
      icon: MessageCircle,
      title: 'Escríbenos por WhatsApp',
      description: 'Contacta con nosotros directamente para hacer tu pedido y aclarar cualquier duda.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      icon: Truck,
      title: 'Recibe en tu casa',
      description: 'Te entregamos todo fresco y en tiempo récord, manteniendo la cadena de frío.',
      color: 'text-brand-yellow',
      bgColor: 'bg-brand-yellow/10',
      borderColor: 'border-brand-yellow/20',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="como-comprar" className="py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-red mb-6">
            ¿Cómo comprar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hacer tu pedido es súper fácil. Solo sigue estos 3 simples pasos y tendrás productos frescos en tu mesa
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 lg:space-y-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Step number and icon */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-24 h-24 rounded-full ${step.bgColor} border-2 ${step.borderColor} flex items-center justify-center relative z-10 bg-white shadow-lg`}>
                    <step.icon className={`w-10 h-10 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-lg z-20">
                    {index + 1}
                  </div>

                  {/* Connecting line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-brand-yellow/50 to-transparent"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>

                {/* Action for WhatsApp step */}
                {index === 1 && (
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        variant="whatsapp"
                        className="font-bold text-lg shadow-lg"
                        onClick={() => window.open(whatsappUrl('¡Hola Big Pollo! Quiero hacer un pedido 🐓'), '_blank')}
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Escribir Ahora
                      </Button>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-brand-green/10 to-brand-yellow/10 rounded-3xl p-8 lg:p-12 border border-brand-green/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-4">
                Información importante
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Horarios de entrega</h4>
                  <p className="text-gray-600">Lunes a domingo de 7:00 AM a 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Área de cobertura</h4>
                  <p className="text-gray-600">Villavicencio y municipios cercanos</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Pedido mínimo</h4>
                  <p className="text-gray-600">$50,000 para delivery gratuito</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Métodos de pago</h4>
                  <p className="text-gray-600">Efectivo, Nequi</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tiempo de entrega</h4>
                  <p className="text-gray-600">1-3 horas según ubicación</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Garantía</h4>
                  <p className="text-gray-600">100% satisfacción garantizada</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowToBuy