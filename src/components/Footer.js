import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-electric-blue mb-4">revorz</h3>
            <p className="text-gray-400 mb-4">
              Premium smart watches with cutting-edge technology and sleek design for the modern lifestyle.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-gray-400 hover:text-electric-blue transition-colors duration-300"
                  aria-label={social}
                >
                  <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                    {social.charAt(0).toUpperCase()}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {['Contact Us', 'FAQs', 'Shipping Info', 'Returns & Exchanges', 'Warranty', 'Size Guide'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              {['Our Story', 'Careers', 'Blog', 'Press', 'Affiliate Program', 'Accessibility'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Tech Avenue</p>
              <p className="mb-2">San Francisco, CA 94103</p>
              <p className="mb-2">Email: hello@revorz.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Revorz. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="text-gray-500 hover:text-electric-blue text-sm transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}