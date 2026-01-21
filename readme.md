# Revorz - Smart Watch E-commerce Platform

A modern, responsive e-commerce website for smart watches built with Next.js and Tailwind CSS.

## Features

- **Modern UI/UX**: Futuristic design with a focus on showcasing smart watch products
- **Responsive Design**: Works seamlessly on all devices
- **Product Catalog**: Browse and filter smart watches by brand, features, and price
- **Shopping Cart**: Full cart functionality with quantity adjustments
- **User Accounts**: Registration and login system
- **Checkout Process**: Streamlined multi-step checkout
- **AR Try-On**: Virtual try-on experience for smart watches (planned feature)

## Color Scheme

- **Primary Black**: `#000000` - Futuristic, premium feel
- **Dark Gray**: `#28272a` - Supporting backgrounds
- **Electric Blue**: `#00f0ff` - Primary accent color
- **Neon Green**: `#39ff14` - Fitness/health features
- **Burning Red**: `#ff2800` - Alerts and important elements

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Deployment**: GitHub Pages (static export)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/revorz.git
```

2. Navigate to the project directory:
```bash
cd revorz
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

To build the project for production:

```bash
npm run build
```

The project is configured for static export to GitHub Pages.

## Project Structure

```
src/
├── app/                 # Next.js 13+ app router pages
│   ├── contact/         # Contact page
│   ├── login/           # Login page
│   ├── register/        # Registration page
│   ├── cart/            # Shopping cart page
│   ├── product/         # Product detail page
│   ├── shop/            # Product listing page
│   └── layout.js        # Root layout
├── components/          # Reusable UI components
└── styles/              # Global styles
```

## Deployment to GitHub Pages

1. Update the `next.config.js` to include your GitHub repository path:
```js
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name', // Add this if deploying to a subdirectory
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
```

2. Build the project:
```bash
npm run build
```

3. The `out/` directory will contain the static files ready for GitHub Pages deployment.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.