import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Star, Quote, User } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { whatsappUrl } from '@/lib/utils'

const TestimonialsAndFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const testimonials = [
    {
      name: 'María González',
      location: 'Villavicencio, Meta',
      rating: 5,
      text: 'La calidad de Big Pollo es excepcional. El pollo siempre llega fresco y los huevos tienen un sabor increíble. Mi familia está encantada, ¡ya somos clientes fieles!',
      emoji: '👩'
    },
    {
      name: 'Carlos Rodríguez',
      location: 'Acacías, Meta',
      rating: 5,
      text: 'Como chef, puedo asegurar que la diferencia se nota desde el primer bocado. Los productos de Big Pollo tienen la frescura llanera que busco para mi restaurante.',
      emoji: '👨‍🍳'
    },
    {
      name: 'Ana Jiménez',
      location: 'Restrepo, Meta',
      rating: 5,
      text: 'El servicio es rápido y confiable. Pedí por WhatsApp y en 2 horas ya tenía todo en casa. Los huevos son los mejores que he probado en años.',
      emoji: '👩‍💼'
    }
  ]

  const faqs = [
    {
      question: '¿Cuál es el precio del delivery?',
      answer: 'El delivery es GRATUITO para pedidos mayores a $50,000. Para pedidos menores, el costo es de $8,000 en Villavicencio y municipios cercanos.'
    },
    {
      question: '¿Cómo puedo estar seguro de la frescura?',
      answer: 'Todos nuestros productos se recolectan diariamente. Mantenemos cadena de frío desde la granja hasta tu puerta y ofrecemos garantía de frescura 100%.'
    },
    {
      question: '¿Atienden fines de semana?',
      answer: 'Sí, atendemos los 7 días de la semana de 7:00 AM a 7:00 PM. Los fines de semana son ideales para pedidos familiares.'
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos efectivo, transferencias bancarias, Nequi, Daviplata y tarjetas de débito/crédito. El pago se realiza al momento de la entrega.'
    },
    {
      question: '¿Tienen productos orgánicos certificados?',
      answer: 'Nuestros pollos son criados de manera natural sin hormonas ni antibióticos. Estamos en proceso de certificación orgánica oficial.'
    },
    {
      question: '¿Hacen descuentos por volumen?',
      answer: 'Sí, ofrecemos precios mayoristas desde 10 kg en adelante. También tenemos ofertas especiales para restaurantes y hoteles.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-red mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Miles de familias colombianas ya confían en Big Pollo para llevar frescura a sus mesas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-2 border-brand-yellow/20 hover:border-brand-yellow/40 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-brand-yellow mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-2xl mr-4">
                      {testimonial.emoji}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-red mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros productos y servicios
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 border-brand-yellow/20 hover:border-brand-yellow/40 transition-colors duration-300">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-brand-yellow/20 rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-brand-red flex-shrink-0" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-brand-red/10 to-brand-yellow/10 rounded-2xl p-8 border border-brand-red/20">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Nuestro equipo está listo para ayudarte. Escríbenos por WhatsApp y te responderemos inmediatamente.
            </p>
            <Button
              size="lg"
              variant="whatsapp"
              className="font-bold"
              onClick={() => window.open(whatsappUrl('¡Hola! Tengo una pregunta sobre Big Pollo 🤔'), '_blank')}
            >
              <WhatsAppIcon className="mr-2" size={20} />
              Hacer una Pregunta
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsAndFAQ