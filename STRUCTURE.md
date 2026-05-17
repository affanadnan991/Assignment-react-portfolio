# Portfolio Project - Structure Guide

## Project Structure

```
src/
├── pages/                 # Page components (multi-page routes)
│   ├── Home.jsx          # Hero/Landing page
│   ├── Skills.jsx        # Skills section page
│   ├── Projects.jsx      # Projects showcase page
│   ├── Experience.jsx    # Experience timeline page
│   ├── About.jsx         # About me page
│   └── Contact.jsx       # Contact form page
│
├── components/           # Reusable components
│   ├── common/           # Common/shared components
│   │   ├── Button.jsx    # Reusable button component
│   │   ├── Card.jsx      # Reusable card component
│   │   └── Section.jsx   # Reusable section wrapper
│   └── Navbar.jsx        # Navigation bar component
│
├── data/                 # Data management
│   └── data.js          # Portfolio data exported for all components
│
├── images/              # Static images and assets
│   ├── hero-bg.svg
│   ├── project1.svg
│   ├── project2.svg
│   ├── project3.svg
│   └── about.svg
│
├── App.jsx              # Main app component with router outlet
├── Router.jsx           # React Router configuration
├── main.jsx             # Application entry point
└── index.css            # Global CSS styles
```

## Key Features

### 1. Component Reusability with Props
- **Button Component**: Accepts `text`, `onClick`, `variant`, `disabled` props
- **Card Component**: Accepts `title`, `description`, `image`, `variant` props
- **Section Component**: Wrapper for page sections with `title`, `subtitle` props

### 2. Data Management (data.js)
All portfolio data is centralized in `/src/data/data.js`:
```javascript
portfolioData = {
  hero: {...},
  skills: [...],
  projects: [...],
  experience: [...],
  about: {...},
  contact: {...}
}
```

Components import and use this data:
```javascript
import { portfolioData } from '../data/data';
const { skills } = portfolioData;
```

### 3. Styling Approach
- **Inline Styles**: Direct style objects in JSX
- **Internal Styles**: CSS-in-JS using `<style>` tags for animations
- **No Tailwind**: All styling uses plain CSS for better control

Example:
```javascript
const buttonStyle = {
  padding: '12px 24px',
  backgroundColor: '#667eea',
  color: '#fff',
  borderRadius: '8px'
};
```

### 4. Multi-Page Navigation with React Router
Routes defined in `Router.jsx`:
- `/` → Home page
- `/skills` → Skills page
- `/projects` → Projects page
- `/experience` → Experience page
- `/about` → About page
- `/contact` → Contact page

Navigation via `<Link>` components in Navbar.

### 5. Image Usage
- Store images in `/src/images/` folder
- Import in components: `import heroImage from '../images/hero-bg.svg'`
- Or reference from data.js paths

## How to Customize

### 1. Update Portfolio Data
Edit `/src/data/data.js`:
```javascript
export const portfolioData = {
  hero: {
    title: "Your Name",
    subtitle: "Your Title",
    description: "Your description"
  },
  // ... rest of data
}
```

### 2. Add New Components
Create in `/src/components/` and import as props-based component:
```javascript
const MyComponent = ({ title, data, onAction }) => {
  return <div>{title}</div>;
};
export default MyComponent;
```

### 3. Add Images
1. Place image files in `/src/images/`
2. Reference in data.js or import in components
3. Update image paths in components using them

### 4. Modify Styling
Update inline style objects or add CSS in `<style>` tags within components.

## Dependencies
- `react` - UI library
- `react-dom` - React DOM renderer
- `react-router-dom` - Client-side routing
- `framer-motion` (optional) - Animations
- `react-icons` (optional) - Icon library

## Folder Structure Benefits
✅ Separation of concerns (pages, components, data)
✅ Reusable components with props
✅ Centralized data management
✅ Easy to scale and maintain
✅ Clean code organization
✅ Props-based data flow
✅ No styling framework dependency

## Running the Project
```bash
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.
