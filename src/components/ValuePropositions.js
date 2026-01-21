export default function ValuePropositions() {
  const propositions = [
    {
      title: 'Free Shipping',
      description: 'On all orders over $50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      title: 'Authentic Products',
      description: 'Guaranteed genuine smart watches',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: '2-Year Warranty',
      description: 'Extended coverage for peace of mind',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Expert Support',
      description: 'Knowledgeable team ready to help',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-16 bg-primary-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {propositions.map((prop, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {prop.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{prop.title}</h3>
              <p className="text-gray-400">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}