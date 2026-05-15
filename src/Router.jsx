import { createHashRouter } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'experience',
        element: <Experience />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ],
  },
])

export default router