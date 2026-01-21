export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Fitness Enthusiast',
      content: 'The Garmin watch I purchased has transformed my training routine. The accuracy of the heart rate monitor and GPS tracking is incredible.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Tech Professional',
      content: 'The Apple Watch Series 9 has seamlessly integrated into my daily workflow. The notification management and health tracking features are top-notch.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Outdoor Adventurer',
      content: 'I love my Samsung Galaxy Watch for hiking trips. The battery life lasts for days, and the offline maps feature has saved me multiple times.',
      rating: 4
    }
  ]

  return (
    <section className="py-16 bg-dark-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-primary-black p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                {'★'.repeat(testimonial.rating)}
                {'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className="text-gray-300 italic mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-electric-blue text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}