# StreamVibe - Premium Streaming Platform

A modern, responsive streaming platform built with React, TypeScript, and Tailwind CSS. StreamVibe offers a Netflix-like experience with a sleek dark theme and vibrant cyan accents.

## 🌟 Features

- **Modern Dark UI**: Premium dark theme with cyan accent colors
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Component-Based Architecture**: Clean, maintainable React components
- **TypeScript Support**: Full type safety throughout the application
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Design System**: Comprehensive design tokens and component variants

## 🚀 Live Demo

Visit the live application: [https://streamhub-three.vercel.app](https://streamhub-three.vercel.app)

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Variables
- **UI Components**: Shadcn/ui (customized)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📱 Key Components

### Layout Components
- **ResponsiveLayout**: Handles mobile/desktop layout switching
- **Sidebar**: Navigation sidebar with active states
- **Header**: Top navigation with search functionality

### Content Components
- **HeroSection**: Main banner with call-to-action buttons
- **StatsSection**: Platform statistics display
- **CategoriesSection**: Content category grid
- **TrendingSection**: Featured content carousel
- **Footer**: Site footer with links and social media

## 🎨 Design System

The application uses a comprehensive design system with:

- **Color Palette**: Dark theme with cyan (#00B4D8) as primary color
- **Typography**: Clean, modern font hierarchy
- **Spacing**: Consistent 8px grid system
- **Components**: Reusable UI components with multiple variants
- **Animations**: Smooth transitions and hover effects

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (shadcn/ui)
│   ├── Header.tsx      # Top navigation
│   ├── Sidebar.tsx     # Side navigation
│   ├── HeroSection.tsx # Main hero section
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── assets/             # Images and static assets
├── lib/                # Utilities and helpers
└── index.css           # Global styles and design tokens
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MehediHasan4O4/StreamHub.git
cd StreamHub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Build for Production

```bash
npm run build
```

## 🎯 Key Features Implemented

### ✅ Fixed Issues
- **Broken Images**: Replaced with AI-generated category and movie posters
- **Routing**: Implemented proper React Router navigation
- **Responsive Design**: Mobile-first responsive layout
- **Type Safety**: Full TypeScript implementation
- **Design Consistency**: Unified design system

### ✅ Enhancements
- **Premium UI**: Modern dark theme with glowing effects
- **Interactive Elements**: Hover states and smooth animations
- **Mobile Navigation**: Collapsible sidebar for mobile devices
- **SEO Optimization**: Proper meta tags and semantic HTML
- **Performance**: Optimized images and efficient component structure

## 🎨 Customization

The design system is fully customizable through CSS variables in `src/index.css`:

```css
:root {
  --primary: 189 94% 43%;     /* Cyan brand color */
  --background: 220 27% 4%;   /* Dark background */
  --card: 220 27% 6%;         /* Card background */
  /* ... more variables */
}
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💬 Support

If you have any questions or need help with the project, please open an issue on GitHub.

---

Built with ❤️ using modern web technologies