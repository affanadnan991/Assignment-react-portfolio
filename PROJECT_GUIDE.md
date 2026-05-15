# Portfolio Project - Refactored Structure Guide

## ✅ What Has Been Implemented

This portfolio has been completely refactored following React best practices with the following improvements:

### 1. **Standard Folder Structure** ✅
- **`/src/pages/`** - Multi-page components using React Router
- **`/src/components/`** - Reusable UI components
- **`/src/components/common/`** - Shared common components (Button, Card, Section)
- **`/src/data/`** - Centralized data management (data.js)
- **`/src/images/`** - Static assets and images

### 2. **Component Reusability with Props** ✅
All components accept props for data handling:

#### Button Component
```javascript
<Button 
  text="Click Me" 
  variant="primary" 
  onClick={handleClick}
  disabled={false}
/>
```

#### Card Component
```javascript
<Card 
  title="Project Title"
  description="Project description"
  image={imageUrl}
  variant="image"
>
  {children}
</Card>
```

#### Section Component
```javascript
<Section 
  title="Section Title"
  subtitle="Section Subtitle"
>
  {children}
</Section>
```

### 3. **Styling Approach** ✅
- **Inline Styles**: Direct style objects for component styling
- **Internal Styles**: CSS-in-JS with `<style>` tags for animations
- **No Tailwind**: Pure CSS for complete control
- **Consistent Color Scheme**: Primary color (#667eea)

Example styling pattern:
```javascript
const buttonStyle = {
  padding: '12px 24px',
  borderRadius: '8px',
  backgroundColor: '#667eea',
  color: '#fff',
  transition: 'all 0.3s ease'
};
```

### 4. **Multi-Page Navigation** ✅
React Router configuration in `Router.jsx`:
```
/ → Home (Hero)
/skills → Skills showcase
/projects → Projects portfolio
/experience → Experience timeline
/about → About me section
/contact → Contact form
```

Fixed navbar navigation across all pages.

### 5. **Image Management** ✅
- Images stored in `/src/images/` folder
- SVG placeholder images included
- Easy to replace with actual images
- Proper image imports in components

### 6. **Data Management (data.js)** ✅
Centralized portfolio data:
```javascript
export const portfolioData = {
  hero: { ... },
  skills: [ ... ],
  projects: [ ... ],
  experience: [ ... ],
  about: { ... },
  contact: { ... }
}
```

Components fetch data using:
```javascript
import { portfolioData } from '../../data/data';
const { skills } = portfolioData;
```

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx          # Landing/Hero page
│   ├── Skills.jsx        # Skills section
│   ├── Projects.jsx      # Projects showcase
│   ├── Experience.jsx    # Experience timeline
│   ├── About.jsx         # About me
│   └── Contact.jsx       # Contact form
│
├── components/
│   ├── common/           # Reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Section.jsx
│   │   └── index.js      # Barrel export
│   └── Navbar.jsx        # Navigation
│
├── data/
│   └── data.js           # Portfolio data
│
├── images/               # Static assets
│   ├── hero-bg.svg
│   ├── project1.svg
│   ├── project2.svg
│   ├── project3.svg
│   └── about.svg
│
├── App.jsx               # Main app component
├── Router.jsx            # Route configuration
├── main.jsx              # Entry point
├── index.css             # Global styles
└── STRUCTURE.md          # Structure documentation
```

## File Reference

### Core Files
- **`App.jsx`** - Main layout with navbar and router outlet
- **`Router.jsx`** - React Router configuration
- **`main.jsx`** - React app initialization
- **`index.css`** - Global CSS styling

### Data
- **`data/data.js`** - All portfolio content centralized

### Pages (Routes)
- **`pages/Home.jsx`** - Hero section with gradient background
- **`pages/Skills.jsx`** - Skill categories grid layout
- **`pages/Projects.jsx`** - Project cards with tech stack tags
- **`pages/Experience.jsx`** - Timeline layout for work experience
- **`pages/About.jsx`** - About section with image and highlights
- **`pages/Contact.jsx`** - Contact form with social links

### Components
- **`components/Navbar.jsx`** - Fixed navigation bar
- **`components/common/Button.jsx`** - Reusable button (primary/secondary variants)
- **`components/common/Card.jsx`** - Reusable card with hover effects
- **`components/common/Section.jsx`** - Section wrapper with title/subtitle
- **`components/common/index.js`** - Barrel export for easier imports

## How to Use This Structure

### 1. Update Your Data
Edit `/src/data/data.js`:
```javascript
export const portfolioData = {
  hero: {
    title: "Your Name",
    subtitle: "Your Title",
    description: "Your description"
  },
  // Update skills, projects, experience, about, contact...
}
```

### 2. Add New Pages
1. Create `/src/pages/YourPage.jsx`
2. Import common components and data
3. Add route in `Router.jsx`:
```javascript
{
  path: 'your-route',
  element: <YourPage />
}
```

### 3. Create New Components
1. Create `/src/components/YourComponent.jsx`
2. Build with inline styles
3. Accept props for reusability:
```javascript
const YourComponent = ({ title, data, onAction }) => {
  const style = { /* styles */ };
  return <div style={style}>{title}</div>;
};
```

### 4. Add Images
1. Place image in `/src/images/`
2. Import in component:
```javascript
import myImage from '../images/my-image.svg';
```
3. Use in img tag:
```javascript
<img src={myImage} alt="Description" />
```

## Design System

### Colors
- **Primary**: `#667eea` - Main color
- **Secondary**: `#764ba2` - Accent
- **Text Dark**: `#1f2937` - Headings
- **Text Light**: `#6b7280` - Body text
- **Gray**: `#f9fafb` - Background

### Typography
- **Headings**: Font weight 700, line-height 1.2
- **Body**: Font weight 500, line-height 1.6
- **Small**: Font weight 400, line-height 1.4

### Spacing
- **Padding**: Multiples of 8px (8, 12, 16, 20, 24, 32, 40, 60)
- **Gap/Margin**: Consistent spacing units

## Dependencies
- `react` - UI library
- `react-dom` - DOM rendering
- `react-router-dom` - Client routing
- `framer-motion` - (optional) Animations
- `react-icons` - (optional) Icon library

## Commands
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Features

✅ **Reusable Components** - All components accept props
✅ **Centralized Data** - Single source of truth
✅ **Multi-Page Routing** - Full SPA with React Router
✅ **Inline Styling** - No CSS files needed
✅ **Image Support** - Organized asset folder
✅ **Responsive Design** - Mobile-friendly layouts
✅ **Clean Architecture** - Easy to maintain and scale
✅ **No Framework Dependencies** - Pure CSS instead of Tailwind
✅ **Modern React** - Hooks and functional components
✅ **SEO Ready** - Proper structure for optimization

## Common Tasks

### Change Navigation Links
Edit `Navbar.jsx` - Update the `Link` components

### Update Skill Categories
Edit `data/data.js` - Modify `skills` array

### Add New Project
Edit `data/data.js` - Add to `projects` array, add image to `/images/`

### Customize Colors
Update inline styles in components (search for `#667eea`)

### Add Form Validation
Enhance `Contact.jsx` form component with validation logic

## Next Steps

1. Replace placeholder SVG images with actual images
2. Update all content in `data/data.js`
3. Customize colors and fonts in components
4. Add form backend integration in Contact page
5. Deploy to production
6. Add additional pages/sections as needed

---

**Project Status**: ✅ Complete - Ready for customization
**Last Updated**: 2024
