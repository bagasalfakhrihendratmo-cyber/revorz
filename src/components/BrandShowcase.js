export default function BrandShowcase() {
  const brands = [
    { name: 'Apple', logo: '/images/apple-logo.png' },
    { name: 'Samsung', logo: '/images/samsung-logo.png' },
    { name: 'Garmin', logo: '/images/garmin-logo.png' },
    { name: 'Fitbit', logo: '/images/fitbit-logo.png' },
    { name: 'Huawei', logo: '/images/huawei-logo.png' },
    { name: 'Amazfit', logo: '/images/amazfit-logo.png' },
  ]

  return (
    <section className="py-16 bg-dark-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-primary-black rounded-lg">
              <div className="text-center">
                <div className="bg-gray-700 border-2 border-dashed rounded-xl w-16 h-16 mx-auto flex items-center justify-center text-gray-400">
                  {brand.name} Logo
                </div>
                <p className="mt-2 text-white">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}