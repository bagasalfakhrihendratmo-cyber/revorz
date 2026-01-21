import Link from 'next/link'

export default function FeaturedCategories() {
  const categories = [
    { name: 'Apple Watches', image: '/images/apple-watch.jpg', href: '/category/apple-watches' },
    { name: 'Samsung Galaxy Watches', image: '/images/samsung-watch.jpg', href: '/category/samsung-watches' },
    { name: 'Wear OS Smart Watches', image: '/images/wear-os-watch.jpg', href: '/category/wear-os-watches' },
    { name: 'Fitness Trackers', image: '/images/fitness-tracker.jpg', href: '/category/fitness-trackers' },
    { name: 'Smart Bands', image: '/images/smart-band.jpg', href: '/category/smart-bands' },
    { name: 'Accessories', image: '/images/accessories.jpg', href: '/category/accessories' },
  ]

  return (
    <section className="py-16 bg-dark-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href={category.href}
              className="block group"
            >
              <div className="relative overflow-hidden rounded-lg h-64">
                <div className="bg-gray-700 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-400">
                  {category.name} Image
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-electric-blue transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-electric-blue mt-1">Shop now</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}