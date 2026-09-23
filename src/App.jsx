import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Features from './components/Features.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Testimonials from './components/Testimonials.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-stone-50 text-stone-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
