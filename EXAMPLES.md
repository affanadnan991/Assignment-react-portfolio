// Example: How to Update Your Portfolio Data

import { portfolioData } from './data';

// ============================================
// 1. HERO SECTION
// ============================================
// Update in /src/data/data.js:
const heroExample = {
  title: "YOUR NAME",
  subtitle: "Your Professional Title",
  description: "Your tagline or short bio",
  cta: "Get Started",
  image: "/images/hero-bg.svg"
};

// ============================================
// 2. SKILLS SECTION
// ============================================
// Update in /src/data/data.js:
const skillsExample = [
  {
    id: 1,
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "TailwindCSS"]
  },
  {
    id: 2,
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    id: 3,
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Firebase"]
  }
];

// ============================================
// 3. PROJECTS SECTION
// ============================================
// Update in /src/data/data.js:
const projectsExample = [
  {
    id: 1,
    title: "Project Name",
    description: "Brief description of what this project does",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/project1.svg", // Add your image
    link: "https://github.com/yourrepo"
  },
  // Add more projects...
];

// ============================================
// 4. EXPERIENCE SECTION
// ============================================
// Update in /src/data/data.js:
const experienceExample = [
  {
    id: 1,
    company: "Company Name",
    position: "Job Title",
    duration: "2023 - Present",
    description: "What you did at this company",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ]
  },
  // Add more experiences...
];

// ============================================
// 5. ABOUT SECTION
// ============================================
// Update in /src/data/data.js:
const aboutExample = {
  title: "About Me",
  bio: "Write a compelling bio about yourself here. This should be 2-3 sentences about your professional journey, interests, and what drives you.",
  highlights: [
    "Your key achievement or skill",
    "Another important point",
    "Professional quality",
    "Career milestone"
  ],
  image: "/images/about.svg"
};

// ============================================
// 6. CONTACT SECTION
// ============================================
// Update in /src/data/data.js:
const contactExample = {
  title: "Get In Touch",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  address: "City, Country",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/yourname" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourname" },
    { name: "Twitter", url: "https://twitter.com/yourname" }
  ]
};

// ============================================
// BEST PRACTICES FOR COMPONENTS
// ============================================

// ✅ DO: Write components that accept props
const GoodComponent = ({ title, data, onAction }) => {
  const style = { fontSize: '16px', color: '#1f2937' };
  return (
    <div style={style} onClick={() => onAction && onAction()}>
      {title}
    </div>
  );
};

// ❌ DON'T: Hardcode data in components
const BadComponent = () => {
  return <div>Fixed Text</div>;
};

// ============================================
// STYLING GUIDELINES
// ============================================

// ✅ DO: Create reusable style objects
const buttonStyleBase = {
  padding: '12px 24px',
  borderRadius: '8px',
  border: 'none',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

const buttonStylePrimary = {
  ...buttonStyleBase,
  backgroundColor: '#667eea',
  color: '#fff'
};

// ✅ DO: Use consistent spacing
const spacingUnits = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '40px'
};

// ✅ DO: Organize colors in an object
const colors = {
  primary: '#667eea',
  secondary: '#764ba2',
  textDark: '#1f2937',
  textLight: '#6b7280',
  gray: '#f9fafb',
  border: '#e5e7eb'
};

// ============================================
// IMAGE MANAGEMENT
// ============================================

// Place images in /src/images/ folder
// Import in components:
import heroImage from '../images/hero-bg.svg';
import project1 from '../images/project1.svg';

// Use in img tags:
// <img src={heroImage} alt="Hero Background" />

// Or reference from data.js:
// image: "/images/project1.svg"

// ============================================
// ADDING NEW PAGES
// ============================================

// 1. Create /src/pages/NewPage.jsx:
import React from 'react';
import { portfolioData } from '../../data/data';
import Section from '../common/Section';
import Card from '../common/Card';

const NewPage = () => {
  // Your component logic
  return (
    <Section title="New Page" subtitle="Subtitle">
      {/* Content */}
    </Section>
  );
};

export default NewPage;

// 2. Add to Router.jsx:
// {
//   path: 'new-page',
//   element: <NewPage />
// }

// ============================================
// COMMON COMPONENT USAGE
// ============================================

// Button Component
import Button from '../components/common/Button';

<Button 
  text="Click Me" 
  variant="primary"
  onClick={() => console.log('Clicked')}
  disabled={false}
/>

// Card Component
import Card from '../components/common/Card';

<Card
  title="Card Title"
  description="Card description"
  image={imageUrl}
  variant="image"
>
  {/* Additional content */}
</Card>

// Section Component
import Section from '../components/common/Section';

<Section 
  title="Section Title"
  subtitle="Subtitle"
>
  {/* Content */}
</Section>

// ============================================
// FORM HANDLING IN CONTACT PAGE
// ============================================

// Example form state management:
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Send form data to backend
  // validate(formData)
  // submitToBackend(formData)
  console.log('Form submitted:', formData);
};

// ============================================
// DEPLOYMENT CHECKLIST
// ============================================

// Before deploying:
// ☐ Update all content in data/data.js
// ☐ Replace SVG images with real images
// ☐ Update contact information
// ☐ Test all links and navigation
// ☐ Check responsive design on mobile
// ☐ Optimize images for web
// ☐ Run production build: npm run build
// ☐ Test production build: npm run preview
// ☐ Deploy to hosting platform

// ============================================
// USEFUL UTILITIES
// ============================================

// Color helper for hover effects
export const lightenColor = (color, percent) => {
  // Implement color lightening logic
};

// Spacing helper
export const getSpacing = (unit) => {
  const units = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };
  return units[unit] ? `${units[unit]}px` : '0';
};

// Date formatter for experience
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
};

export default {
  heroExample,
  skillsExample,
  projectsExample,
  experienceExample,
  aboutExample,
  contactExample
};
