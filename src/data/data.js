// Portfolio Data
export const portfolioData = {
  hero: {
    title: "MUHAMMAD AFFAN",
    subtitle: "Full Stack Developer",
    description: "Passionate about creating amazing web experiences",
    cta: "View My Work",
    image: "/images/hero-bg.svg",
    cv: "/files/affan-cv.pdf"
  },

  skills: [
    {
      id: 1,
      category: "Frontend",
      items: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js"]
    },
    {
      id: 2,
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      id: 3,
      category: "Tools & Others",
      items: ["Git", "Docker", "REST APIs", "GraphQL", "Webpack"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/images/project1.svg",
      link: "https://github.com"
    },
    {
      id: 2,
      title: "Social Media App",
      description: "Real-time chat and social networking platform",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      image: "/images/project2.svg",
      link: "https://github.com"
    },
    {
      id: 3,
      title: "Task Management Tool",
      description: "Collaborative project management application",
      technologies: ["React", "Express", "PostgreSQL"],
      image: "/images/project3.svg",
      link: "https://github.com"
    }
  ],

  experience: [
    {
      id: 1,
      company: "Tech Startup Inc",
      position: "Senior Frontend Developer",
      duration: "2022 - Present",
      description: "Leading frontend development and mentoring junior developers",
      achievements: ["Built scalable UI components", "Improved performance by 40%"]
    },
    {
      id: 2,
      company: "Digital Solutions Ltd",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      description: "Developed and maintained multiple client projects",
      achievements: ["Delivered 15+ projects", "Led API integration"]
    },
    {
      id: 3,
      company: "Web Design Studio",
      position: "Junior Developer",
      duration: "2019 - 2020",
      description: "Started career learning web development fundamentals",
      achievements: ["Built responsive websites", "Learned best practices"]
    }
  ],

  about: {
    title: "About Me",
    bio: "I'm a passionate full-stack developer with expertise in building modern web applications. I love solving complex problems and creating user-friendly interfaces.",
    highlights: [
      "5+ years of web development experience",
      "Expertise in React and Node.js",
      "Strong problem-solving skills",
      "Committed to clean code and best practices"
    ],
    image: "/images/about.svg"
  },

  contact: {
    title: "Get In Touch",
    email: "affan@example.com",
    phone: "+1 (555) 123-4567",
    address: "San Francisco, CA",
    socialLinks: [
      { name: "GitHub", url: "https://github.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
      { name: "Twitter", url: "https://twitter.com" }
    ]
  }
};

export default portfolioData;
