// This would be used in a real implementation with dynamic data
// For static export to GitHub Pages, this won't work, but it shows how it would be structured

export default function handler(req, res) {
  // Sample product data
  const products = [
    {
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
    },
    {
      id: 2,
      name: 'Samsung Galaxy Watch 6 Classic 43mm',
      brand: 'Samsung',
      price: 349.99,
      originalPrice: null,
      discount: null,
      rating: 4.7,
      reviewCount: 89,
      image: '/images/samsung-galaxy-watch-6.jpg',
      description: 'Experience the perfect blend of style and functionality with the Samsung Galaxy Watch 6 Classic.',
      features: [
        'Rotating bezel',
        'Advanced sleep coaching',
        'Body composition analysis',
        'Blood pressure monitoring',
        'ECG monitoring',
        'Water resistant 50 meters'
      ],
      specifications: {
        'Display': '43mm Super AMOLED',
        'Resolution': '420 x 420 pixels',
        'Case Material': 'Titanium',
        'Band': 'Leather Band',
        'Water Resistance': '50 meters',
        'Battery Life': 'Up to 40 hours',
        'Connectivity': 'Wi-Fi, Bluetooth 5.3, LTE (optional)'
      },
      inStock: true,
      stockCount: 8
    }
  ];

  if (req.method === 'GET') {
    res.status(200).json(products);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}