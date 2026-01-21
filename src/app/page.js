import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeaturedCategories from '../components/FeaturedCategories'
import FeaturedProducts from '../components/FeaturedProducts'
import BrandShowcase from '../components/BrandShowcase'
import ValuePropositions from '../components/ValuePropositions'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-black text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <FeaturedProducts />
        <BrandShowcase />
        <ValuePropositions />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}