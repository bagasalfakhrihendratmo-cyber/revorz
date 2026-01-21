import Link from 'next/link'

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Apple Watch Series 9 GPS 45mm',
      price: 399.00,
      image: '/images/apple-watch-series-9.jpg',
      rating: 4.8,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Samsung Galaxy Watch 6 Classic 43mm',
      price: 349.99,
      image: '/images/samsung-galaxy-watch-6.jpg',
      rating: 4.7,
      badge: 'New'
    },
    {
      id: 3,
      name: 'Garmin Forerunner 265S',
      price: 449.99,
      image: '/images/garmin-forerunner-265s.jpg',
      rating: 4.9,
      badge: 'Fitness Focus'
    },
    {
      id: 4,
      name: 'Fitbit Sense 2',
      price: 299.95,
      image: '/images/fitbit-sense-2.jpg',
      rating: 4.6,
      badge: 'Health Focus'
    }
  ]

  return (
    <section className="py-16 bg-primary-black">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link href="/shop" className="text-electric-blue hover:underline">
            View All Products
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card">
              <div className="relative">
                <div className="bg-gray-700 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center text-gray-400">
                  {product.name} Image
                </div>
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-electric-blue text-black text-xs font-bold px-2 py-1 rounded">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="ml-2 text-gray-400 text-sm">({product.rating})</span>
                </div>
                <p className="text-electric-blue font-bold text-lg">${product.price.toFixed(2)}</p>
                <div className="mt-4 flex justify-between">
                  <button className="bg-electric-blue text-black px-4 py-2 rounded hover:bg-white transition-colors duration-300 text-sm">
                    Add to Cart
                  </button>
                  <button className="text-burning-red hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}