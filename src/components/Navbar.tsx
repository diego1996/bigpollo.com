import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappUrl } from '@/lib/utils'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Productos', href: '#productos' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Cómo Comprar', href: '#como-comprar' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-brand-white/95 backdrop-blur-sm border-b border-brand-yellow/20 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center">
              <span className="text-2xl">🐓</span>
            </div>
            <span className="text-2xl font-display font-bold text-brand-red">
              Big Pollo
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-brand-red transition-colors font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <Button
              variant="whatsapp"
              size="sm"
              className="font-semibold"
              onClick={() => window.open(whatsappUrl(), '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Pedir WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-brand-yellow/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-brand-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  variant="whatsapp"
                  size="sm"
                  className="w-full font-semibold"
                  onClick={() => {
                    window.open(whatsappUrl(), '_blank')
                    setIsOpen(false)
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Pedir WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar