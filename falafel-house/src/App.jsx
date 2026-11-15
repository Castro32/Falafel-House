import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import SharedSection from './components/SharedSection'
import Bestsellers from './components/Bestsellers'
import Tiles from './components/Tiles'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="w-full overflow-x-hidden bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <SharedSection />
        <Bestsellers />
        <Tiles />
      </main>
      <Footer />
    </div>
  )
}
