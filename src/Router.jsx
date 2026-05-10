import { createBrowserRouter } from 'react-router-dom'
import { Children } from 'react'
import App from './App.jsx'
import Home from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/experience',
                element: <Experience />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ],
     },
]);

export default router;