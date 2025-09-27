import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Benefits from '../components/Benefits'
import HowToBuy from '../components/HowToBuy'
import RecipeOfTheDay from '../components/RecipeOfTheDay'
import TestimonialsAndFAQ from '../components/TestimonialsAndFAQ'
import Footer from '../components/Footer'
import FloatingChatWidget from '../components/FloatingChatWidget'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-600 text-white px-4 py-2 rounded-md z-50"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Products />
        <Benefits />
        <HowToBuy />
        <RecipeOfTheDay />
        <TestimonialsAndFAQ />
      </main>

      <Footer />
      <FloatingChatWidget />
    </div>
  )
}

export default Home