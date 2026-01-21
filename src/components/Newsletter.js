export default function Newsletter() {
  return (
    <section className="py-16 bg-primary-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter for the latest smart watch trends, exclusive deals, and new product launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="input-field flex-grow"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}