# Home Design Agency - Modern Landing Page

A modern, scroll-based landing page for a Home Design Agency with smooth animations, immersive visuals, and a premium feel.

## Features

- **Fullscreen Hero Section** with background video/image and smooth animations
- **Sticky Dynamic Navbar** that changes appearance on scroll
- **Visual Showcase** with masonry grid and horizontal scroll layouts
- **Animated Sections** including About Us, Our Process, Why Choose Us, and Team
- **Scroll Progress Indicator** with "back to top" functionality
- **Responsive Design** for all screen sizes
- **Fallback Solutions** for media files to ensure a good experience even without actual content

## Tech Stack

- **Next.js** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations

## Project Structure

```
design-agency/
├── app/                  # Next.js app directory
│   ├── (home)/           # Home page route
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout
├── components/           # React components
│   ├── shared/           # Shared components
│   │   ├── footer/       # Footer component
│   │   ├── navbar/       # Navbar components
│   │   └── showcase/     # Hero and showcase components
│   └── ui/               # UI components
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── images/           # Image files
│   └── videos/           # Video files
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Media Requirements

The project requires specific media files to be placed in the appropriate directories. See the `MEDIA_REQUIREMENTS.md` file in the `public` directory for details.

Until you have the actual media files, the site will use fallback images from Unsplash.

## Customization

### Colors

The color scheme is defined in `globals.css` with custom CSS variables:

```css
:root {
  --custom-lightest: 249 247 247; /* rgb(249, 247, 247) - white */
  --custom-light: 219 226 239;    /* rgb(219, 226, 239) - warm beige/light gray */
  --custom-blue: 63 114 175;      /* rgb(63, 114, 175) - light pastel blue */
  --custom-dark: 17 45 78;        /* rgb(17, 45, 78) - soft gray */
}
```

### Fonts

The project uses Geist Sans and Geist Mono fonts from the Next.js font system.

## Animations

The site uses a combination of:

1. **Framer Motion** for component animations
2. **CSS Animations** for subtle effects
3. **GSAP** for advanced animations (loaded via a Next.js Script component)

## Responsive Design

The site is fully responsive with:

- Mobile-first approach
- Hamburger menu for small screens
- Adjusted layouts for different screen sizes
- Optimized media loading

## Future Enhancements

- Add dark mode support
- Implement image gallery lightbox
- Add contact form functionality
- Enhance accessibility features
- Add more interactive elements

## License

This project is licensed under the MIT License - see the LICENSE file for details.