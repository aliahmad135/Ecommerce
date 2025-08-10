# Modern Product Cards - E-commerce UI Assessment

An advanced Product Card implementation showcasing Material Design principles, glassmorphism effects, and modern UX patterns for the Frontend Developer assessment.

## 🎯 Assessment Overview

**Objective**: Create a sophisticated Product Card UI that demonstrates advanced frontend development skills with real-world e-commerce functionality.

**Enhanced Requirements Delivered**:

- ✅ High-quality product image display.
- ✅ Product name, pricing, and category information
- ✅ Interactive variant selection with button-based UI
- ✅ Smart "Add to Cart" functionality with toast notifications
- ✅ Advanced "Out of Stock" state with visual feedback
- ✅ Wishlist functionality with persistent state management
- ✅ Star rating system with review counts
- ✅ Discount badges and pricing comparison
- ✅ Material Design inspired glassmorphism effects
- ✅ Fully responsive design with mobile-first approach

## 🎨 Design Philosophy & Technical Approach

**Design Philosophy**: Clean, consistent Bootstrap-based design that seamlessly integrates with the existing application's aesthetic. Focused on usability, accessibility, and maintaining visual harmony across all components.

**Technical Implementation**: Built with React hooks (useState, useCallback) for optimal performance, Bootstrap classes for consistent styling, and enhanced UX features including wishlist functionality, variant selection, and smart stock management.

## 🚀 Demo Access

- **Local Demo**: Navigate to `/product-cards` route after starting the application
- **Live Demo**: [Modern Product Cards Showcase](https://ecommerce-premium-cards.netlify.app/)

## 🛠️ Advanced Technical Features

### Core Functionality

- **Intelligent Variant System**: Button-based variant selection with real-time price updates
- **Advanced State Management**: React hooks with useCallback optimization for performance
- **Smart Stock Monitoring**: Dynamic stock indicators with low-stock warnings
- **Wishlist Integration**: Persistent wishlist state with visual feedback
- **Enhanced Notifications**: Custom toast notifications with themed styling

### Design & UX Innovations

- **Bootstrap Integration**: Seamless integration with existing app design language
- **Consistent Styling**: Matches the clean, minimal aesthetic of the main application
- **Interactive Elements**: Wishlist functionality with heart icons and visual feedback
- **Smart Layouts**: Responsive Bootstrap grid system with proper card structure
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

### Performance Optimizations

- **Lazy Image Loading**: Improved page load times with progressive image loading
- **Component Memoization**: useCallback hooks prevent unnecessary re-renders
- **Efficient State Updates**: Optimized state management for smooth interactions
- **Responsive Images**: Adaptive image sizing for different screen densities

## Run Locally

Clone the project

```bash
  git clone https://dredsoftlabs-admin@bitbucket.org/dredsoftlabs/ecommerce.git
```

Go to the project directory

```bash
  cd eCommerce
```

Install dependencies

```bash
  npm install

  or

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```

## 📱 Interactive Demo Experience

Experience the Modern Product Cards demo:

1. **Start Development Server**: `npm start`
2. **Navigate to Demo**: Visit `http://localhost:3000/product-cards`
3. **Explore Features**:
   - Hover over cards to see micro-animations
   - Test wishlist functionality with heart icons
   - Try variant selection with button-based UI
   - Experience smooth loading states and transitions
   - Test responsive design across different viewport sizes

## 🎨 Design Specifications

### Color Palette & Theming

- **Primary**: Indigo gradients (#6366f1 to #4f46e5)
- **Accent**: Purple and pink gradients for highlights
- **Neutral**: Slate color system for text and backgrounds
- **Semantic**: Green for success, red for errors, amber for warnings

### Typography & Spacing

- **Font Weights**: 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold)
- **Grid System**: CSS Grid with responsive breakpoints
- **Spacing Scale**: 4px base unit with consistent 8px, 12px, 16px, 24px increments
- **Border Radius**: 12px, 16px, 20px, 24px for different elements

### Animation & Motion

- **Hover Transforms**: translateY(-8px) with scale(1.02) for cards
- **Transitions**: 0.3s to 0.4s cubic-bezier easing for smooth motion
- **Loading States**: Shimmer effects with 1.5s infinite animation
- **Micro-interactions**: Button press feedback and icon state changes

## 🚀 Production Deployment

**Live Demo**: [Modern Product Cards Showcase](https://modern-product-cards-demo.netlify.app/)

### Deployment Configuration

- **Platform**: Netlify with automatic deployments
- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Node.js Version**: 18.18.0
- **Performance**: Optimized for Core Web Vitals

### Production Features Verified

- ✅ Advanced Material Design UI with glassmorphism
- ✅ Interactive wishlist and rating systems
- ✅ Smooth animations and micro-interactions
- ✅ Fully responsive across all device sizes
- ✅ Optimized performance and accessibility
