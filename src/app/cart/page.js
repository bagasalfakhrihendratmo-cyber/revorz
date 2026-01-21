import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Cart() {
  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: 'Apple Watch Series 9 GPS 45mm',
      price: 399.00,
      image: '/images/apple-watch-series-9.jpg',
      quantity: 1,
      color: 'Midnight',
      size: '45mm'
    },
    {
      id: 2,
      name: 'Premium Sport Band',
      price: 49.00,
      image: '/images/sport-band.jpg',
      quantity: 2,
      color: 'Black',
      size: 'Medium'
    }
  ]

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 0 // Free shipping for orders over $50
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-primary-black text-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-dark-gray rounded-lg overflow-hidden">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row p-6 border-b border-gray-700 last:border-b-0">
                      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                        <div className="bg-gray-700 border-2 border-dashed rounded-xl w-24 h-24 flex items-center justify-center text-gray-400">
                          Product Image
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-gray-400">{item.color}, {item.size}</p>
                          </div>
                          <p className="text-electric-blue font-bold">${item.price.toFixed(2)}</p>
                        </div>
                        
                        <div className="flex flex-wrap items-center mt-4">
                          <div className="flex items-center border border-gray-600 rounded">
                            <button className="px-3 py-1 text-gray-400 hover:text-white">-</button>
                            <span className="px-3 py-1">{item.quantity}</span>
                            <button className="px-3 py-1 text-gray-400 hover:text-white">+</button>
                          </div>
                          
                          <button className="ml-4 text-burning-red hover:text-white flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Remove
                          </button>
                          
                          <button className="ml-4 text-electric-blue hover:text-white flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Save for later
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Promo Code */}
                <div className="mt-8 bg-dark-gray p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Have a promo code?</h2>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="text" 
                      placeholder="Enter promo code" 
                      className="input-field flex-grow"
                    />
                    <button className="btn-primary whitespace-nowrap">
                      Apply
                    </button>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/shop" className="btn-secondary text-center flex-1">
                    Continue Shopping
                  </Link>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-dark-gray p-6 rounded-lg sticky top-24">
                  <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    
                    <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Link href="/checkout" className="btn-primary w-full mt-8">
                    Proceed to Checkout
                  </Link>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex items-center text-sm text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Secure Checkout
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      Your information is securely encrypted
                    </p>
                  </div>
                </div>
                
                {/* Recommended Products */}
                <div className="mt-8 bg-dark-gray p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Frequently Bought Together</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-electric-blue rounded focus:ring-electric-blue bg-dark-gray border-gray-600" />
                      <div className="ml-3 flex items-center">
                        <div className="bg-gray-700 border-2 border-dashed rounded-xl w-12 h-12 flex items-center justify-center text-gray-400 text-xs">
                          +1
                        </div>
                        <div className="ml-3">
                          <p className="text-sm">Screen Protector</p>
                          <p className="text-electric-blue text-sm">$24.99</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-electric-blue rounded focus:ring-electric-blue bg-dark-gray border-gray-600" />
                      <div className="ml-3 flex items-center">
                        <div className="bg-gray-700 border-2 border-dashed rounded-xl w-12 h-12 flex items-center justify-center text-gray-400 text-xs">
                          +1
                        </div>
                        <div className="ml-3">
                          <p className="text-sm">Wireless Charger</p>
                          <p className="text-electric-blue text-sm">$39.99</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mx-auto bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-gray-400 mb-6">Looks like you haven't added anything to your cart yet</p>
              <Link href="/shop" className="btn-primary">
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}