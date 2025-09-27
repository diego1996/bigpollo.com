# 🐓 Big Pollo - Landing Page

Una landing page moderna y atractiva para Big Pollo, construida con React, TypeScript, Tailwind CSS y Framer Motion.

## ✨ Características

- **Diseño moderno y responsivo** - Optimizado para móviles primero
- **Animaciones fluidas** - Powered by Framer Motion
- **Componentes reutilizables** - Usando shadcn/ui
- **SEO optimizado** - Meta tags y structured data
- **Accesibilidad** - WCAG AA compliant
- **WhatsApp integration** - CTA directo a WhatsApp
- **Rendimiento optimizado** - Vite + TypeScript

## 🚀 Stack Tecnológico

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Animaciones y transiciones
- **Lucide React** - Iconos SVG
- **shadcn/ui** - Componentes UI

## 🎨 Identidad Visual

### Colores
- **Rojo**: `#E1261C` - Color primario
- **Amarillo**: `#F7B500` - Color secundario
- **Verde**: `#2E7D32` - Color de acento
- **Crema**: `#FFF7E6` - Color de fondo

### Tipografías
- **Display/Logo**: Fredoka
- **UI/Texto**: Poppins

## 📱 Secciones

1. **Hero** - Headline impactante con CTAs
2. **Productos** - Pollo fresco y huevos con precios
3. **Beneficios** - Ventajas competitivas
4. **Cómo Comprar** - Proceso paso a paso
5. **Receta del Día** - Contenido para engagement
6. **Testimonios & FAQ** - Confianza y resolución de dudas
7. **Footer** - Información de contacto

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone [repository-url]

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de la build
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── Navbar.tsx      # Navegación
│   ├── Hero.tsx        # Sección hero
│   ├── Products.tsx    # Productos
│   ├── Benefits.tsx    # Beneficios
│   ├── HowToBuy.tsx    # Proceso de compra
│   ├── RecipeOfTheDay.tsx  # Receta
│   ├── TestimonialsAndFAQ.tsx  # Testimonios y FAQ
│   ├── Footer.tsx      # Footer
│   └── FloatingWhatsApp.tsx    # Botón flotante
├── lib/                # Utilidades
│   └── utils.ts        # Funciones helper
├── App.tsx            # Componente principal
└── main.tsx           # Entry point
```

## 🔧 Configuración

### WhatsApp
Actualizar el número de teléfono en `src/lib/utils.ts`:

```typescript
export const whatsappUrl = (message: string = "¡Hola! Quiero hacer un pedido de Big Pollo") => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/+506XXXXXXXX?text=${encodedMessage}` // Actualizar número
}
```

### SEO
Los meta tags están configurados en `index.html`. Actualizar según necesidades.

## 📈 Optimizaciones Implementadas

- **Lazy loading** de imágenes
- **Preconnect** a Google Fonts
- **Structured data** para SEO local
- **Smooth scrolling** nativo
- **Focus management** para accesibilidad
- **Responsive design** mobile-first

## 🌐 Deployment

La aplicación está lista para deployment en:
- Vercel
- Netlify
- GitHub Pages
- Cualquier hosting estático

```bash
npm run build
```

## 📞 Contacto

Para dudas sobre el proyecto:
- Email: info@bigpollo.com
- WhatsApp: +506 XXXX-XXXX

---

Hecho con ❤️ para Big Pollo Costa Rica
