import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-primary-black text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover the <span className="text-electric-blue">Future</span> on Your Wrist
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Premium smart watches with cutting-edge technology and sleek design
        </p>
        <div className="space-x-4">
          <Link href="/shop" className="btn-primary inline-block">
            Shop Now
          </Link>
          <Link href="/collections" className="btn-secondary inline-block">
            Explore Models
          </Link>
        </div>
      </div>
    </section>
  )
}