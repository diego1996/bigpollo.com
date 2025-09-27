import { motion } from 'framer-motion'
import { ShoppingCart, Users, User } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { whatsappUrl } from '@/lib/utils'
import WhatsAppIcon from './icons/WhatsAppIcon'

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Pollitos de Un Día',
      description: 'Pollitos recién nacidos, sanos y vacunados. Perfectos para iniciar tu proyecto avícola.',
      emoji: '🐣',
      prices: {
        retail: '$3,500',
        wholesale: '$3,000',
        unit: 'por pollito'
      },
      features: ['Vacunados', 'Raza mejorada', 'Certificado sanitario', '95% supervivencia'],
      popular: false
    },
    {
      id: 2,
      name: 'Pollo Fresco',
      description: 'Pollo criado en libertad, alimentado naturalmente. Cortes variados disponibles.',
      emoji: '🐓',
      prices: {
        retail: '$18,000',
        wholesale: '$15,000',
        unit: 'por kg'
      },
      features: ['Sin hormonas', 'Criado en libertad', 'Alimentación natural', 'Sacrificio humanitario'],
      popular: true
    },
    {
      id: 3,
      name: 'Huevos AA',
      description: 'Huevos frescos de gallinas felices, recolectados diariamente.',
      emoji: '🥚',
      prices: {
        retail: '$8,500',
        wholesale: '$7,200',
        unit: 'por docena'
      },
      features: ['Cáscara resistente', 'Yema dorada', 'Alto en proteína', 'Omega-3 natural'],
      popular: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="productos" className="py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-red mb-6">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selección premium de pollo fresco y huevos de granja, directo del campo a tu mesa
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative"
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    🔥 Más Popular
                  </span>
                </div>
              )}

              <Card className="h-full border-2 border-brand-yellow/20 hover:border-brand-yellow/40 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-brand-cream/30">
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4">{product.emoji}</div>
                  <CardTitle className="text-2xl font-display text-brand-red">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-brand-green rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="bg-brand-cream/50 rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-700">
                        <User className="w-4 h-4 mr-2" />
                        <span className="text-sm">Minorista</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-brand-red">{product.prices.retail}</div>
                        <div className="text-xs text-gray-500">{product.prices.unit}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-700">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">Mayorista</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-brand-green">{product.prices.wholesale}</div>
                        <div className="text-xs text-gray-500">{product.prices.unit}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-4">
                  <Button
                    className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-semibold"
                    onClick={() => window.open(whatsappUrl(`¡Hola! Me interesa el ${product.name}. ¿Podrían darme más información?`), '_blank')}
                  >
                    <WhatsAppIcon className="mr-2" size={16} />
                    Pedir por WhatsApp
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-brand-yellow/10 rounded-2xl p-8 border border-brand-yellow/20">
            <h3 className="text-2xl font-display font-bold text-brand-red mb-4">
              ¿Necesitas cantidades especiales?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contamos con precios especiales para restaurantes, hoteles y eventos.
              ¡Cotiza con nosotros!
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="font-semibold"
              onClick={() => window.open(whatsappUrl('¡Hola! Necesito una cotización para cantidades especiales'), '_blank')}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cotizar Cantidades Especiales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products