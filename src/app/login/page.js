import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="min-h-screen bg-primary-black text-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6 max-w-md">
          <div className="bg-dark-gray p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-400 mb-8">Sign in to your account</p>
            
            <form className="space-y-6">
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
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="password" className="block text-sm font-medium">Password</label>
                  <Link href="/forgot-password" className="text-electric-blue text-sm hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <input 
                  type="password" 
                  id="password" 
                  className="input-field w-full" 
                  placeholder="Enter your password"
                />
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="h-4 w-4 text-electric-blue rounded focus:ring-electric-blue bg-dark-gray border-gray-600"
                />
                <label htmlFor="remember" className="ml-2 block text-sm">
                  Remember me
                </label>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Sign In
              </button>
            </form>
            
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-dark-gray text-gray-400">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-3">
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-dark-gray text-sm font-medium text-white hover:bg-gray-700">
                  <span className="sr-only">Sign in with Google</span>
                  <div className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">G</div>
                </button>
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-dark-gray text-sm font-medium text-white hover:bg-gray-700">
                  <span className="sr-only">Sign in with Facebook</span>
                  <div className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">f</div>
                </button>
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-dark-gray text-sm font-medium text-white hover:bg-gray-700">
                  <span className="sr-only">Sign in with Apple</span>
                  <div className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">A</div>
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link href="/register" className="text-electric-blue font-medium hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                <Link href="/guest-checkout" className="text-electric-blue hover:underline">
                  Continue as guest
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}