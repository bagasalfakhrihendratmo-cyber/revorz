import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Register() {
  return (
    <div className="min-h-screen bg-primary-black text-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6 max-w-md">
          <div className="bg-dark-gray p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-gray-400 mb-8">Join Revorz for exclusive benefits</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="input-field w-full" 
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="input-field w-full" 
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="input-field w-full" 
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="input-field w-full" 
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  className="input-field w-full" 
                  placeholder="Create a password"
                />
                <p className="mt-1 text-xs text-gray-500">Use 8 or more characters with a mix of letters, numbers & symbols</p>
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm Password</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  className="input-field w-full" 
                  placeholder="Confirm your password"
                />
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="newsletter" 
                  className="h-4 w-4 text-electric-blue rounded focus:ring-electric-blue bg-dark-gray border-gray-600 mt-1"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm">
                  Subscribe to our newsletter for exclusive offers and updates
                </label>
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="h-4 w-4 text-electric-blue rounded focus:ring-electric-blue bg-dark-gray border-gray-600 mt-1"
                />
                <label htmlFor="terms" className="ml-2 block text-sm">
                  I agree to the <Link href="/terms" className="text-electric-blue hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-electric-blue hover:underline">Privacy Policy</Link>
                </label>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Create Account
              </button>
            </form>
            
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-dark-gray text-gray-400">Or sign up with</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-3">
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-dark-gray text-sm font-medium text-white hover:bg-gray-700">
                  <span className="sr-only">Sign up with Google</span>
                  <div className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">G</div>
                </button>
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-dark-gray text-sm font-medium text-white hover:bg-gray-700">
                  <span className="sr-only">Sign up with Facebook</span>
                  <div className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">f</div>
                </button>
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-dark-gray text-sm font-medium text-white hover:bg-gray-700">
                  <span className="sr-only">Sign up with Apple</span>
                  <div className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">A</div>
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link href="/login" className="text-electric-blue font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>By creating an account, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}