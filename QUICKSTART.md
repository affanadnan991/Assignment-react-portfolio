# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser

### 3. Update Your Content
Open `/src/data/data.js` and update all the portfolio information with your details.

---

## 📝 What to Update First

### Step 1: Update Hero Section
File: `/src/data/data.js` (Lines 3-9)
```javascript
hero: {
  title: "YOUR NAME",
  subtitle: "Your Professional Title",
  description: "Your professional tagline",
  cta: "Your CTA Text",
  image: "/images/hero-bg.svg"
}
```

### Step 2: Update Skills
File: `/src/data/data.js` (Lines 11-31)
- Replace skill categories
- Update skill items

### Step 3: Add Projects
File: `/src/data/data.js` (Lines 33-61)
- Update project titles and descriptions
- Add your tech stack
- Add project links
- Replace images in `/src/images/`

### Step 4: Update Experience
File: `/src/data/data.js` (Lines 63-93)
- Update company names
- Update positions
- Update duration
- Update achievements

### Step 5: Update About
File: `/src/data/data.js` (Lines 95-110)
- Write your bio
- Update highlights
- Replace about image

### Step 6: Update Contact
File: `/src/data/data.js` (Lines 112-126)
- Update email
- Update phone
- Update address
- Update social links

---

## 🖼️ Adding Images

### Replace Placeholder Images
1. Delete placeholder SVGs from `/src/images/`
2. Add your own images (jpg, png, svg, webp)
3. Update paths in `/src/data/data.js`

Example:
```javascript
image: "/images/your-image.jpg"
```

### Import Images in Components
```javascript
import myImage from '../images/my-image.jpg';
```

---

## 🎨 Customizing Colors

All colors are hardcoded. To change the color scheme:

1. Search for `#667eea` (Primary Color)
2. Replace with your brand color
3. Search for `#764ba2` (Secondary Color)
4. Replace with your accent color

### Key Colors to Update
- `#667eea` - Primary/Accent
- `#764ba2` - Secondary
- `#1f2937` - Text Dark
- `#6b7280` - Text Light

---

## 📂 File Structure Quick Reference

```
src/
├── pages/              ← Update components here
│   ├── Home.jsx       ← Hero page
│   ├── Skills.jsx     ← Skills page
│   ├── Projects.jsx   ← Projects page
│   ├── Experience.jsx ← Experience page
│   ├── About.jsx      ← About page
│   └── Contact.jsx    ← Contact page
│
├── components/        ← Reusable components
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Section.jsx
│   └── Navbar.jsx
│
├── data/
│   └── data.js        ← ALL YOUR CONTENT HERE
│
├── images/            ← PUT YOUR IMAGES HERE
│   ├── hero-bg.svg
│   ├── project1.svg
│   ├── project2.svg
│   ├── project3.svg
│   └── about.svg
│
├── App.jsx            ← Main layout
├── Router.jsx         ← Route configuration
├── main.jsx           ← Entry point
└── index.css          ← Global styles
```

---

## 🔗 Navigation Structure

The navbar automatically links to:
- `/` - Home
- `/skills` - Skills
- `/projects` - Projects
- `/experience` - Experience
- `/about` - About
- `/contact` - Contact

Edit links in `Navbar.jsx` if needed.

---

## 🛠️ Common Tasks

### Change Navbar Logo
File: `/src/App.jsx`
Find: `<span>&lt;</span>AFFAN<span>/&gt;</span>`
Replace with your name

### Modify Section Titles
File: `/src/data/data.js`
Update the `title` properties

### Add New Link to Navbar
File: `/src/App.jsx` and `/src/Router.jsx`
1. Add new route in Router.jsx
2. Add Link in App.jsx navbar

### Change Button Styling
File: `/src/components/common/Button.jsx`
Modify the style objects

### Customize Card Styling
File: `/src/components/common/Card.jsx`
Update hover effects and styles

---

## 📱 Responsive Design

The project is mobile-responsive out of the box. Test on:
- Desktop (1200px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

---

## ✅ Checklist Before Deployment

- [ ] Updated all content in `/src/data/data.js`
- [ ] Replaced all placeholder images
- [ ] Updated contact information
- [ ] Changed color scheme (if desired)
- [ ] Updated social media links
- [ ] Tested all navigation links
- [ ] Tested on mobile devices
- [ ] Fixed any typos or grammar
- [ ] Tested forms (contact page)
- [ ] Built project: `npm run build`
- [ ] Tested build: `npm run preview`

---

## 🚀 Building for Production

```bash
# Create production build
npm run build

# Test production build locally
npm run preview

# Output folder: dist/
```

Deploy the `dist/` folder to your hosting platform.

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [Vite Documentation](https://vitejs.dev)

---

## ❓ Troubleshooting

### Page not loading?
- Check if you've started the dev server: `npm run dev`
- Clear browser cache (Ctrl+Shift+Delete)

### Images not showing?
- Check image paths in data.js
- Ensure images exist in `/src/images/`
- Use correct file extensions

### Styling looks wrong?
- Check for typos in color codes
- Ensure inline styles are properly formatted
- Clear browser cache

### Routes not working?
- Check Router.jsx for correct paths
- Ensure page components are imported
- Check navbar Link paths

---

## 🎉 You're All Set!

Your portfolio is ready to customize. Happy coding!

For detailed information, see:
- `PROJECT_GUIDE.md` - Comprehensive guide
- `STRUCTURE.md` - Folder structure details
- `EXAMPLES.md` - Code examples and patterns
