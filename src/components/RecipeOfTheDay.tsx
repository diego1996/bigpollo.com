import { motion } from 'framer-motion'
import { Clock, Users, ChefHat } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { whatsappUrl } from '@/lib/utils'

const RecipeOfTheDay = () => {
  const recipe = {
    name: 'Pollo a la Plancha con Huevos Revueltos',
    description: 'Una combinación perfecta y nutritiva para cualquier momento del día',
    emoji: '🍳',
    prepTime: '15 min',
    serves: '2 personas',
    difficulty: 'Fácil',
    ingredients: [
      '2 pechugas de pollo Big Pollo',
      '4 huevos frescos Big Pollo',
      '2 cucharadas de aceite de oliva',
      'Sal y pimienta al gusto',
      '1 cucharadita de ajo en polvo',
      'Hierbas frescas (tomillo, romero)',
      '1 cucharada de mantequilla',
    ],
    steps: [
      'Sazona las pechugas con sal, pimienta y ajo en polvo',
      'Calienta aceite en una sartén a fuego medio-alto',
      'Cocina el pollo 6-7 minutos por lado hasta dorar',
      'Retira el pollo y mantén caliente',
      'Bate los huevos con sal y pimienta',
      'Derrite mantequilla en la misma sartén',
      'Cocina los huevos revolviendo suavemente',
      'Sirve inmediatamente con hierbas frescas'
    ]
  }

  return (
    <section className="py-20 bg-gradient-to-br from-brand-yellow/5 to-brand-red/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-red mb-6">
            Receta del Día
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inspiración culinaria con nuestros productos frescos. ¡Sorprende a tu familia con sabores auténticos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Recipe card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden shadow-2xl border-2 border-brand-yellow/20">
              <CardHeader className="bg-gradient-to-r from-brand-red to-brand-yellow text-white text-center">
                <div className="text-6xl mb-4">{recipe.emoji}</div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold">
                  {recipe.name}
                </h3>
                <p className="text-lg opacity-90">
                  {recipe.description}
                </p>
              </CardHeader>

              <CardContent className="p-8">
                {/* Recipe info */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <Clock className="w-6 h-6 text-brand-red mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Tiempo</div>
                    <div className="font-semibold">{recipe.prepTime}</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 text-brand-red mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Porciones</div>
                    <div className="font-semibold">{recipe.serves}</div>
                  </div>
                  <div className="text-center">
                    <ChefHat className="w-6 h-6 text-brand-red mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Dificultad</div>
                    <div className="font-semibold">{recipe.difficulty}</div>
                  </div>
                </div>

                {/* Ingredients */}
                <div className="mb-8">
                  <h4 className="text-xl font-display font-bold text-gray-900 mb-4">
                    Ingredientes
                  </h4>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-brand-red rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to action */}
                <div className="bg-brand-cream/50 rounded-lg p-6 text-center">
                  <p className="text-gray-700 mb-4">
                    ¿Quieres preparar esta deliciosa receta? ¡Ordena los ingredientes frescos ahora!
                  </p>
                  <Button
                    variant="default"
                    size="lg"
                    className="font-bold"
                    onClick={() => window.open(whatsappUrl(`¡Hola! Quiero los ingredientes para la receta: ${recipe.name} 👨‍🍳`), '_blank')}
                  >
                    <WhatsAppIcon className="mr-2" size={20} />
                    Pedir Ingredientes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Preparation steps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h4 className="text-2xl font-display font-bold text-gray-900 mb-8">
                Preparación paso a paso
              </h4>

              <div className="space-y-6">
                {recipe.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 p-6 bg-gradient-to-r from-brand-green/10 to-brand-yellow/10 rounded-lg border border-brand-green/20"
              >
                <h5 className="font-bold text-gray-900 mb-2">💡 Tip del Chef</h5>
                <p className="text-gray-700">
                  Para un sabor extra, marina el pollo en jugo de limón y hierbas por 30 minutos antes de cocinar.
                  ¡Nuestros productos Big Pollo ya son frescos, pero este toque especial los hará irresistibles!
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Additional recipes CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-yellow/20">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              ¿Quieres más recetas?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Síguenos en nuestras redes sociales para recetas semanales y tips de cocina con productos Big Pollo
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => window.open(whatsappUrl('¡Hola! Me gustaría recibir más recetas semanales 👨‍🍳'), '_blank')}
              >
                📱 WhatsApp Recetas
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('#', '_blank')}
              >
                📘 Facebook
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('#', '_blank')}
              >
                📷 Instagram
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RecipeOfTheDay