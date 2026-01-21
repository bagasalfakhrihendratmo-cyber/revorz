import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Shop() {
  // Sample products
  const products = [
    {
      id: 1,
      name: 'Apple Watch Series 9 GPS 45mm',
      price: 399.00,
      image: '/images/apple-watch-series-9.jpg',
      rating: 4.8,
      badge: 'Best Seller',
      inStock: true
    },
    {
      id: 2,
      name: 'Samsung Galaxy Watch 6 Classic 43mm',
      price: 349.99,
      image: '/images/samsung-galaxy-watch-6.jpg',
      rating: 4.7,
      badge: 'New',
      inStock: true
    },
    {
      id: 3,
      name: 'Garmin Forerunner 265S',
      price: 449.99,
      image: '/images/garmin-forerunner-265s.jpg',
      rating: 4.9,
      badge: 'Fitness Focus',
      inStock: true
    },
    {
      id: 4,
      name: 'Fitbit Sense 2',
      price: 299.95,
      image: '/images/fitbit-sense-2.jpg',
      rating: 4.6,
      badge: 'Health Focus',
      inStock: false
    },
    {
      id: 5,
      name: 'Huawei Watch GT 4',
      price: 279.00,
      image: '/images/huawei-watch-gt-4.jpg',
      rating: 4.5,
      badge: '',
      inStock: true
    },
    {
      id: 6,
      name: 'Amazfit Bip 5',
      price: 89.99,
      image: '/images/amazfit-bip-5.jpg',
      rating: 4.3,
      badge: 'Budget Pick',
      inStock: true
    }
  ]

  return (
    <div className="min-h-screen bg-primary-black text-white">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6">
            <Link href="/" className="text-gray-400 hover:text-electric-blue">Home</Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-gray-300">Shop</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-1/4">
              <div className="bg-dark-gray p-6 rounded-lg sticky top-24">
                <h2 className="text-xl font-semibold mb-6">Filters</h2>
                
                {/* Price Filter */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="price1" className="h-4 w-4 text-electric-blue rounded focus:ring-electric-blue bg-dark-gray border-gray-600" />
                      <label htmlFor="price1" className="ml-2 text-sm">Under $100</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="price2" className="h-4 w-4 text-electric-blue rounded focus:ring-electric-blue bg-dark-gray border-gray-600" />
                      <label htmlFor="price2" className="ml-2 text-sm">$100 - $200</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="price3" className="h-4 w-4 text-electric-blue rounded focus:ring-electric-blue bg-dark-gray border-gray-600" />
                      <label htmlFor="price3" className="ml-2 text-sm">$200 - $300</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="price4" className="h-4 w-4 text-electric-blue rounded focus:ring-electric-blue bg-dark-gray border-gray-600" />
                      <label htmlFor="price4" className="ml-2 text-sm">$300 - $500</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="price5" className="h-4 w-4 text-electric-blue rounded focus:ring-electric-blue bg-dark-gray border-gray-600" />
                      <label htmlFor="price5" className="ml-2 text-sm">Over $500</label>
                    </div>
                  </div>
                </div>
                
                {/* Brand Filter */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Brand</h3>
                  <div className="space-y-2">
                    {['Apple', 'Samsung', 'Garmin', 'Fitbit', 'Huawei', 'Amazfit'].map((brand) => (
                      <div key={brand} className="flex items-center">
                        <input type="checkbox" id={`brand-${brand}`} className="h-4 w-4 text-electric-blue rounded focus:ring-electric-blue bg-dark-gray border-gray-600" />
                        <label htmlFor={`brand-${brand}`} className="ml-2 text-sm">{brand}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Features Filter */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Features</h3>
                  <div className="space-y-2">
                    {['GPS', 'Heart Rate Monitor', 'Water Resistant', 'Cellular', 'NFC Payments', 'Music Storage'].map((feature) => (
                      <div key={feature} className="flex items-center">
                        <input type="checkbox" id={`feature-${feature}`} className="h-4 w-4 text-electric-blue rounded focus:ring-electric-blue bg-dark-gray border-gray-600" />
                        <label htmlFor={`feature-${feature}`} className="ml-2 text-sm">{feature}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Reset Filters */}
                <button className="w-full py-2 text-sm text-gray-400 hover:text-white border border-gray-600 rounded">
                  Reset Filters
                </button>
              </div>
            </aside>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">All Smart Watches</h1>
                
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400">Sort by:</span>
                  <select className="bg-dark-gray text-white border border-gray-600 rounded px-3 py-2">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Top Rated</option>
                    <option>Newest Arrivals</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div key={product.id} className="card">
                    <div className="relative">
                      <div className="bg-gray-700 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center text-gray-400">
                        {product.name} Image
                      </div>
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">OUT OF STOCK</span>
                        </div>
                      )}
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
                        <Link 
                          href={`/product/${product.id}`} 
                          className={`px-4 py-2 rounded text-sm ${
                            product.inStock 
                              ? 'bg-electric-blue text-black hover:bg-white transition-colors duration-300' 
                              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          }`}
                          prefetch={false}
                        >
                          {product.inStock ? 'View Details' : 'Unavailable'}
                        </Link>
                        <button 
                          className={`${
                            product.inStock 
                              ? 'text-burning-red hover:text-white' 
                              : 'text-gray-500 cursor-not-allowed'
                          }`}
                          disabled={!product.inStock}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow">
                  <button className="py-2 px-4 rounded-l-md border border-gray-600 bg-dark-gray text-white hover:bg-gray-700">
                    Previous
                  </button>
                  <button className="py-2 px-4 border-t border-b border-gray-600 bg-electric-blue text-black">
                    1
                  </button>
                  <button className="py-2 px-4 border-t border-b border-gray-600 bg-dark-gray text-white hover:bg-gray-700">
                    2
                  </button>
                  <button className="py-2 px-4 border-t border-b border-gray-600 bg-dark-gray text-white hover:bg-gray-700">
                    3
                  </button>
                  <button className="py-2 px-4 rounded-r-md border border-gray-600 bg-dark-gray text-white hover:bg-gray-700">
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}