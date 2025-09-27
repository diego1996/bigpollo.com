import { motion } from 'framer-motion'
import { Clock, Leaf, Shield, Heart, Truck, Award } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Leaf,
      title: 'Frescura Natural',
      description: 'Productos recolectados diariamente, sin conservantes artificiales ni químicos dañinos.',
      color: 'text-brand-green',
      bgColor: 'bg-brand-green/10',
    },
    {
      icon: Heart,
      title: 'Producción Ética',
      description: 'Gallinas criadas en libertad con alimentación natural y cuidado responsable.',
      color: 'text-brand-red',
      bgColor: 'bg-brand-red/10',
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Delivery el mismo día en el área metropolitana. Productos frescos en tiempo récord.',
      color: 'text-brand-yellow',
      bgColor: 'bg-brand-yellow/10',
    },
    {
      icon: Shield,
      title: 'Calidad Garantizada',
      description: 'Certificación SENASA y controles de calidad rigurosos. Tu tranquilidad es nuestra prioridad.',
      color: 'text-brand-green',
      bgColor: 'bg-brand-green/10',
    },
    {
      icon: Truck,
      title: 'Logística Refrigerada',
      description: 'Cadena de frío mantenida desde la granja hasta tu puerta para preservar la frescura.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Award,
      title: 'Experiencia Familiar',
      description: 'Más de 15 años criando pollos y gallinas con amor. Tradición familiar llanera.',
      color: 'text-brand-red',
      bgColor: 'bg-brand-red/10',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-brand-cream to-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-red mb-6">
            ¿Por qué elegir Big Pollo?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos comprometemos con la excelencia en cada aspecto: desde el cuidado de nuestras aves hasta la entrega en tu hogar
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${benefit.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>

                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional trust section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-brand-red to-brand-yellow rounded-3xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Más de 1,000 familias confían en nosotros
            </h3>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
              Únete a la familia Big Pollo y descubre la diferencia del sabor auténtico
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">5+</div>
                <div className="text-lg opacity-90">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">1000+</div>
                <div className="text-lg opacity-90">Familias satisfechas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">24h</div>
                <div className="text-lg opacity-90">Entrega rápida</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Satisfacción garantizada</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits