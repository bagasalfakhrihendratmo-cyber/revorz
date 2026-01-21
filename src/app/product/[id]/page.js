import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function ProductDetail() {
  // Sample product data
  const product = {
    id: 1,
    name: 'Apple Watch Series 9 GPS 45mm',
    brand: 'Apple',
    price: 399.00,
    originalPrice: 429.00,
    discount: 7,
    rating: 4.8,
    reviewCount: 124,
    image: '/images/apple-watch-series-9.jpg',
    description: 'The most advanced Apple Watch yet, featuring a stunning Always-On Retina display, powerful dual-core processor, and innovative health and safety features.',
    features: [
      'Always-On Retina display',
      'Dual-core processor',
      'ECG app',
      'Blood oxygen sensor',
      'Sleep tracking',
      'Water resistant 50 meters',
      'Up to 18 hours battery life'
    ],
    specifications: {
      'Display': '45mm Always-On Retina LTPO OLED',
      'Resolution': '410 x 410 pixels',
      'Case Material': 'Aluminum',
      'Band': 'Sport Band (Black)',
      'Water Resistance': '50 meters',
      'Battery Life': 'Up to 18 hours',
      'Connectivity': 'Wi-Fi, Bluetooth 5.3, GPS'
    },
    inStock: true,
    stockCount: 15
  }

  return (
    <div className="min-h-screen bg-primary-black text-white">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6">
            <Link href="/" className="text-gray-400 hover:text-electric-blue">Home</Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link href="/shop" className="text-gray-400 hover:text-electric-blue">Shop</Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link href="/category/smart-watches" className="text-gray-400 hover:text-electric-blue">Smart Watches</Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-gray-300">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="bg-dark-gray rounded-lg p-8 flex items-center justify-center h-96 mb-4">
                <div className="bg-gray-700 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-400">
                  Product Image
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="bg-dark-gray rounded-lg p-4 flex items-center justify-center h-24 cursor-pointer hover:bg-gray-700">
                    <div className="bg-gray-700 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-400 text-xs">
                      Thumb {num}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="flex items-center mb-2">
                <span className="bg-electric-blue text-black text-xs font-bold px-2 py-1 rounded mr-3">BEST SELLER</span>
                <span className="text-sm text-gray-400">SKU: AW-S9-GPS-45MM</span>
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-electric-blue text-lg mb-4">{product.brand}</p>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="ml-2 text-gray-400">({product.reviewCount} reviews)</span>
              </div>
              
              <div className="flex items-center mb-6">
                <p className="text-3xl font-bold text-electric-blue">${product.price.toFixed(2)}</p>
                {product.originalPrice > product.price && (
                  <>
                    <p className="ml-4 text-gray-400 line-through">${product.originalPrice.toFixed(2)}</p>
                    <p className="ml-4 bg-burning-red text-white text-sm font-bold px-2 py-1 rounded">-{product.discount}% OFF</p>
                  </>
                )}
              </div>
              
              {product.inStock ? (
                <p className="text-green-500 mb-6">In Stock • {product.stockCount} items left</p>
              ) : (
                <p className="text-burning-red mb-6">Out of Stock</p>
              )}
              
              <p className="text-gray-300 mb-8">{product.description}</p>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Color: Midnight Aluminum Case with Midnight Sport Band</h3>
                <div className="flex space-x-3">
                  {[
                    { name: 'Midnight', color: '#2c2c2c' },
                    { name: 'Starlight', color: '#f5f5f2' },
                    { name: 'Blue', color: '#4763ff' },
                    { name: 'Red', color: '#fa284f' }
                  ].map((option) => (
                    <button 
                      key={option.name}
                      className={`w-10 h-10 rounded-full border-2 ${option.name === 'Midnight' ? 'border-electric-blue' : 'border-gray-600'} flex items-center justify-center`}
                      style={{ backgroundColor: option.color }}
                      title={option.name}
                    >
                      {option.name === 'Midnight' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Size Selection */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="flex space-x-3">
                  {['41mm', '45mm'].map((size) => (
                    <button 
                      key={size}
                      className={`px-4 py-2 border rounded ${size === '45mm' ? 'border-electric-blue bg-electric-blue bg-opacity-20 text-electric-blue' : 'border-gray-600 text-gray-400'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity and Add to Cart */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center border border-gray-600 rounded">
                  <button className="px-4 py-3 text-gray-400 hover:text-white">-</button>
                  <span className="px-4 py-3">1</span>
                  <button className="px-4 py-3 text-gray-400 hover:text-white">+</button>
                </div>
                
                <button 
                  disabled={!product.inStock}
                  className={`btn-primary flex-1 min-w-[200px] ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                
                <button className="p-3 border border-gray-600 rounded hover:border-electric-blue hover:text-electric-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              {/* Share and Compare */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="flex items-center text-gray-400 hover:text-electric-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
                
                <button className="flex items-center text-gray-400 hover:text-electric-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Compare
                </button>
              </div>
              
              {/* Features */}
              <div className="border-t border-gray-800 pt-8">
                <h3 className="font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="border-b border-gray-800">
              <nav className="flex space-x-8">
                {['Overview', 'Specifications', 'Reviews', 'Support'].map((tab) => (
                  <button 
                    key={tab}
                    className={`py-4 px-1 font-medium text-sm ${tab === 'Overview' ? 'border-b-2 border-electric-blue text-electric-blue' : 'text-gray-400 hover:text-white'}`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="py-8">
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex border-b border-gray-800 pb-3">
                    <div className="w-1/3 text-gray-400">{key}</div>
                    <div className="w-2/3">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}