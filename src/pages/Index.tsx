import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Products from "@/components/Products"
import HowToOrder from "@/components/HowToOrder"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Reviews from "@/components/Reviews"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <About />
      <HowToOrder />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default Index
