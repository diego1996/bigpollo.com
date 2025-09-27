import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, MessageCircle, Facebook, Instagram, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappUrl } from '@/lib/utils'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      details: ['Granja Big Pollo', 'Vereda La Llanerita', 'Villavicencio, Meta, Colombia'],
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: ['Lunes a Domingo', '7:00 AM - 7:00 PM', 'Entrega hasta 8:00 PM'],
    },
    {
      icon: Phone,
      title: 'Contacto',
      details: ['WhatsApp: +57 350 589 0050', 'Teléfono: +57 350 589 0050', 'Email: info@bigpollo.com'],
    },
  ]

  const quickLinks = [
    { name: 'Productos', href: '#productos' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Cómo Comprar', href: '#como-comprar' },
    { name: 'FAQ', href: '#faq' },
  ]

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: MessageCircle, name: 'WhatsApp', href: whatsappUrl() },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-2xl">🐓</span>
                </div>
                <span className="text-3xl font-display font-bold text-brand-yellow">
                  Big Pollo
                </span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Llevamos más de 15 años criando pollos y gallinas con amor en los Llanos Orientales,
                ofreciendo productos frescos y naturales a familias colombianas.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-brand-red hover:bg-brand-yellow transition-colors duration-300 rounded-full flex items-center justify-center"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact information */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-display font-bold mb-8 text-brand-yellow">
                Información de Contacto
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <info.icon className="w-6 h-6 text-brand-yellow" />
                      <h4 className="font-semibold text-lg">{info.title}</h4>
                    </div>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-300 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick links and CTA */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-display font-bold mb-8 text-brand-yellow">
                Enlaces Rápidos
              </h3>

              <ul className="space-y-3 mb-8">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-brand-yellow transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="bg-brand-red/20 rounded-lg p-6 border border-brand-red/30">
                <h4 className="font-bold mb-3 text-brand-yellow">¿Listo para ordenar?</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Contáctanos ahora y recibe productos frescos en tu puerta.
                </p>
                <Button
                  variant="whatsapp"
                  size="sm"
                  className="w-full font-semibold"
                  onClick={() => window.open(whatsappUrl('¡Hola Big Pollo! Quiero hacer un pedido 🐓'), '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Pedir WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © {currentYear} Big Pollo. Todos los derechos reservados.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Hecho con <Heart className="w-3 h-3 inline text-brand-red" /> en Colombia • Desarrollado por{' '}
                <a
                  href="https://www.bitlink.com.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-yellow hover:text-brand-yellow/80 transition-colors"
                >
                  BitLink S.A.S
                </a>
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="/politica-privacidad" className="text-gray-300 hover:text-brand-yellow transition-colors">
                Política de Privacidad
              </a>
              <a href="/terminos-servicio" className="text-gray-300 hover:text-brand-yellow transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors">
                Certificaciones
              </a>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center mt-8 space-x-8 opacity-60">
            <div className="text-center">
              <div className="text-2xl mb-1">🏆</div>
              <div className="text-xs text-gray-400">Calidad Premium</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🌱</div>
              <div className="text-xs text-gray-400">100% Natural</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🚚</div>
              <div className="text-xs text-gray-400">Entrega Rápida</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">✅</div>
              <div className="text-xs text-gray-400">SENASA Certificado</div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer