# ALX Listing App - Property Detail Page

This project implements a fully functional Property Detail Page for the ALX Listing App, featuring a responsive design with modern UI components built using Next.js and Tailwind CSS.

## Features Implemented

### 🏠 Property Detail Page (`/property/[id]`)
- **Dynamic routing** based on property ID
- **Responsive image grid** showcasing property photos
- **Tabbed interface** with three sections:
  - **What we offer**: List of amenities and services
  - **Reviews**: User reviews with ratings and avatars
  - **About host**: Host information and description

### 📅 Booking Section
- **Interactive date pickers** for check-in and check-out
- **Real-time price calculation** based on number of nights
- **Service fee calculation** (12% of total)
- **Reserve button** with validation

### ⭐ Review System
- **Star ratings** display
- **User avatars** and names
- **Review dates** formatting
- **Responsive layout** for review cards

### 🎨 UI/UX Features
- **Responsive design** that works on all screen sizes
- **Modern styling** with Tailwind CSS
- **Optimized images** using Next.js Image component
- **Smooth transitions** and hover effects
- **Accessibility features** with proper labels and semantic HTML

## Project Structure

```
alx-listing-app-01/
├── components/
│   └── property/
│       ├── PropertyDetail.tsx    # Main property detail component
│       ├── BookingSection.tsx    # Booking form and pricing
│       └── ReviewSection.tsx     # Reviews display
├── pages/
│   ├── index.tsx                 # Home page with property listings
│   └── property/
│       └── [id].tsx             # Dynamic property detail page
├── constants/
│   └── index.ts                 # Sample property data
├── interfaces/
│   └── index.ts                 # TypeScript interfaces
└── styles/
    └── globals.css              # Global styles and Tailwind imports
```

## Technologies Used

- **Next.js 15.3.3** - React framework with SSR/SSG
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Next.js Image** - Optimized image handling

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

## Sample Properties

The app includes two sample properties:
- **Luxury Beachfront Villa** (Maldives) - $450/night
- **Mountain Retreat Cabin** (Aspen, USA) - $180/night

## Key Implementation Details

### Dynamic Routing
- Uses Next.js dynamic routes with `[id].tsx`
- Property lookup by name (URL-encoded)
- 404 handling for non-existent properties

### Component Architecture
- **PropertyDetail**: Main container with tabbed interface
- **BookingSection**: Sticky sidebar with booking form
- **ReviewSection**: Reusable review display component

### Responsive Design
- Mobile-first approach
- Grid layouts that adapt to screen size
- Sticky booking section on desktop
- Optimized image loading with proper sizing

### Performance Optimizations
- Next.js Image component for automatic optimization
- Lazy loading for images
- Static generation for better performance
- Proper image sizing and formats

## Future Enhancements

- Add more property images and galleries
- Implement actual booking functionality
- Add user authentication
- Include maps integration
- Add search and filtering capabilities
- Implement real-time availability checking

---

Built with ❤️ for ALX Software Engineering Program
