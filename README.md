# 🚌 The Roam Report - Road Trip Landing Page

A modern, visually stunning landing page for a travel blog built with React and SCSS. Features a unique split-screen design with a scrolling location ticker and featured article showcase.

## ✨ Features

- **Split-Screen Layout**: Innovative half-and-half design with header content on the left and hero section on the right
- **Animated Location Ticker**: Continuously scrolling list of travel destinations at the bottom
- **Featured Article Card**: Clickable card showcasing the latest travel story with hover effects
- **Fully Responsive**: Mobile-first design with media queries for all screen sizes
- **SEO Optimized**: Complete meta tags for search engines and social media sharing (Open Graph & Twitter Cards)
- **Custom Favicons**: Multi-size favicon support for all devices and platforms
- **Modern Styling**: Built with SCSS using custom color palettes and Google Fonts (Gasoek One & Inder)

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **SCSS** - Styling with variables and nesting
- **ESLint** - Code linting

## 🎨 Design Highlights

- **Color Palette**: 
  - Primary Blue: `#0053D4`
  - Background: `#C6DCFF`
  - Text: `#332115`
  
- **Typography**:
  - Headings: Gasoek One
  - Body: Inder

- **Layout**: 50/50 split-screen design with flexbox
- **Animations**: Smooth scrolling location ticker with CSS keyframes

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ertonm/road-trip-landing.git
cd road-trip-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
road-trip-website/
├── public/
│   ├── favicons/          # Favicon files
│   └── hero-image.jpg     # Social media preview image
├── src/
│   ├── assets/
│   │   └── favicons/      # Source favicon files
│   ├── components/
│   │   ├── Header.jsx     # Left side header component
│   │   ├── Hero.jsx       # Right side hero section
│   │   └── Featured-Article.jsx  # Article card component
│   ├── images/
│   │   ├── bus.png        # Header illustration
│   │   ├── hero-image.jpg # Background image
│   │   └── featured-article.jpg  # Article thumbnail
│   ├── styles/
│   │   ├── _main.scss     # Global variables and resets
│   │   ├── App.scss       # App container styles
│   │   ├── Header.scss    # Header component styles
│   │   ├── Hero.scss      # Hero section styles
│   │   └── media-queries.scss  # Responsive breakpoints
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html             # HTML template with SEO meta tags
└── package.json
```

## 🎯 Key Components

### Header Component
- Navigation menu with active link styling
- Large title with custom font
- Bus illustration
- Tagline
- Animated scrolling location ticker

### Hero Component
- Full-height background image
- Featured article card with:
  - Article thumbnail
  - Category label
  - Article title
  - Clickable link to article page

### Featured Article Card
- Card-style design with shadow
- Rounded corners
- Hover effects
- Responsive image sizing
- Text overflow handling

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- **Mobile**: < 768px (stacked layout)
- **Tablet**: 769px - 1346px (adjusted typography)
- **Desktop**: > 1346px (full split-screen)

## 🔧 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## 🌐 Deployment

This project can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

**Remember to update** the `og:url`, `twitter:url`, and `canonical` URLs in `index.html` with your actual domain.

## 👤 Author

**Erton Mara**

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Google Fonts for Gasoek One and Inder typefaces
- Vite team for the amazing build tool
- React community for the ecosystem
