export const portfolioData = {
  personalInfo: {
    name: "Md. Rezaul Islam",
    firstName: "Rezaul",
    lastName: "Islam",
    tagline: "Front End Developer (Executive) & MERN Stack Engineer",
    roles: [
      "Front End Developer (Executive)",
      "MERN Stack Developer",
      "React.js & Tailwind Specialist",
      "Node.js & Express Engineer",
      "Wix Velo & CMS Architect"
    ],
    bio: "Front-end web developer with hands-on experience building and maintaining sites on Wix, Wix Studio, Squarespace, and GoDaddy, plus full-stack projects in React, Node.js, Express.js, and MongoDB. Comfortable working across the stack, from custom Wix Velo code to backend logic and database design. Looking for an executive-level web development role with full ownership of client and product sites.",
    email: "programmermdrezaulislam@gmail.com",
    phone: "01826847480",
    phoneInternational: "+8801826847480",
    address: "Rangpur, Dhaka, Bangladesh",
    availability: "Available for Full-time, Executive Roles & Freelance Projects",
    experienceYears: "2+ Years",
    resumeUrl: "/Resume-Md-Rezaul-Islam.pdf",
    socials: {
      github: "https://github.com/rezaulislam54",
      linkedin: "https://linkedin.com/in/mdrezaul-islam",
      whatsapp: "https://wa.me/8801826847480",
      email: "mailto:programmermdrezaulislam@gmail.com",
      livePortfolio: "https://rezaul-islam-7b565.web.app"
    }
  },

  stats: [
    { id: 1, label: "Projects Completed", value: "15+", suffix: "", desc: "From concept to production", icon: "Code2", color: "cyan" },
    { id: 2, label: "Technologies Mastered", value: "18+", suffix: "", desc: "Modern frontend & backend stack", icon: "Award", color: "violet" },
    { id: 3, label: "Client Satisfaction", value: "100%", suffix: "", desc: "Clean code & on-time delivery", icon: "Users", color: "emerald" },
    { id: 4, label: "Code Dedication", value: "24/7", suffix: "", desc: "Continuous learning & support", icon: "Flame", color: "amber" },
  ],

  skillCategories: [
    {
      id: "frontend",
      name: "Front-End & Languages",
      description: "Crafting responsive, visually captivating, and accessible user interfaces.",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️", badge: "Expert", color: "#61dafb" },
        { name: "JavaScript (ES2020)", level: 94, icon: "⚡", badge: "Expert", color: "#f7df1e" },
        { name: "TypeScript", level: 88, icon: "📘", badge: "Advanced", color: "#3178c6" },
        { name: "Tailwind CSS", level: 98, icon: "🎨", badge: "Master", color: "#38bdf8" },
        { name: "HTML5 & CSS3", level: 96, icon: "🌐", badge: "Master", color: "#e34f26" },
        { name: "Bootstrap", level: 90, icon: "💎", badge: "Proficient", color: "#7952b3" },
      ]
    },
    {
      id: "platforms",
      name: "Platforms & CMS",
      description: "Custom frontend builds, custom Wix Velo scripting, and CMS architecture.",
      skills: [
        { name: "Wix & Wix Studio", level: 95, icon: "✨", badge: "Expert", color: "#0c80df" },
        { name: "Wix Velo Code", level: 92, icon: "💻", badge: "Expert", color: "#f59e0b" },
        { name: "Squarespace", level: 90, icon: "⬛", badge: "Advanced", color: "#ffffff" },
        { name: "GoDaddy Builder", level: 88, icon: "🌐", badge: "Advanced", color: "#1b95e0" },
      ]
    },
    {
      id: "backend",
      name: "Backend & Databases",
      description: "Architecting reliable, secure, and scalable server-side systems and databases.",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢", badge: "Advanced", color: "#339933" },
        { name: "Express.js", level: 92, icon: "🚀", badge: "Expert", color: "#ffffff" },
        { name: "MongoDB", level: 92, icon: "🍃", badge: "Expert", color: "#47a248" },
        { name: "Firebase Auth & Firestore", level: 88, icon: "🔥", badge: "Advanced", color: "#ffca28" },
      ]
    },
    {
      id: "tools",
      name: "Dev Tools & Deployment",
      description: "Industry-standard development workflows, version control, and cloud platforms.",
      skills: [
        { name: "Git & GitHub", level: 94, icon: "🐙", badge: "Expert", color: "#f05032" },
        { name: "Netlify", level: 92, icon: "☁️", badge: "Advanced", color: "#00c7b7" },
        { name: "Vercel", level: 90, icon: "▲", badge: "Advanced", color: "#ffffff" },
        { name: "VS Code & Postman", level: 96, icon: "📬", badge: "Master", color: "#007acc" },
      ]
    }
  ],

  projects: [
    {
      id: "shop-co",
      title: "Shop.co E-Commerce",
      category: "Full Stack (MERN)",
      tagline: "High-Performance Electronics & Fashion Marketplace",
      description: "A comprehensive MERN stack e-commerce platform featuring secure user authentication, interactive product catalog, persistent cart management, and administrative dashboards.",
      longDescription: "Built with React, Node.js, Express.js, MongoDB, and Tailwind CSS. Features full user authentication, dynamic product catalog, cart functionality, and responsive administrative dashboards.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: [
        "Built a MERN stack e-commerce platform with user authentication, product management, and cart functionality",
        "Integrated an admin dashboard and a responsive design using Tailwind CSS for a seamless shopping experience",
        "Secure checkout simulation and real-time inventory management"
      ],
      liveUrl: "https://rezaul-islam-7b565.web.app/",
      githubClient: "https://github.com/rezaulislam54",
      githubServer: "https://github.com/rezaulislam54",
      accentColor: "from-cyan-500 to-blue-600",
      featured: true,
      badge: "Featured E-Commerce"
    },
    {
      id: "doctor-appointment",
      title: "Doctors-Appointment",
      category: "Full Stack (MERN)",
      tagline: "Modern Healthcare Scheduling & Patient Care Platform",
      description: "A full-stack booking application for scheduling doctor appointments, browsing specialist practitioners, tracking service history, and managing patient appointments.",
      longDescription: "Built with React, Firebase, Node.js, Express.js, MongoDB, and Tailwind CSS. Patients can book slots in real-time, view verified doctor profiles, and manage appointments.",
      techStack: ["React.js", "Firebase", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: [
        "Built a full-stack booking application for scheduling doctor appointments and tracking service history",
        "Added a streamlined interface for managing customer data",
        "Real-time appointment slot verification and notifications"
      ],
      liveUrl: "https://rezaul-islam-7b565.web.app/",
      githubClient: "https://github.com/rezaulislam54",
      githubServer: "https://github.com/rezaulislam54",
      accentColor: "from-emerald-500 to-teal-600",
      featured: true,
      badge: "Healthcare Platform"
    },
    {
      id: "car-servicing",
      title: "Car Servicing Center",
      category: "Full Stack (MERN)",
      tagline: "Automotive Service Scheduling & Diagnostics Portal",
      description: "An automotive care application for booking vehicle maintenance packages, managing garage workshop workflows, tracking service history, and handling customer accounts.",
      longDescription: "Built with React, Firebase, Node.js, Express.js, MongoDB, and Tailwind CSS. Provides a streamlined interface for scheduling car repair services and overseeing customer records.",
      techStack: ["React.js", "Firebase", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: [
        "Built a full-stack application for managing car service bookings and tracking service history",
        "Delivered a streamlined interface for scheduling services and managing customer data",
        "Transparent repair pricing calculators and digital service logs"
      ],
      liveUrl: "https://rezaul-islam-7b565.web.app/",
      githubClient: "https://github.com/rezaulislam54",
      githubServer: "https://github.com/rezaulislam54",
      accentColor: "from-amber-500 to-orange-600",
      featured: true,
      badge: "Automotive SaaS"
    }
  ],

  workProcess: [
    {
      step: "01",
      title: "Discovery & Requirements",
      description: "Understanding client objectives, target audience, core features, and architectural scope to form a clear development roadmap.",
      icon: "Search",
      color: "from-cyan-500 to-blue-500"
    },
    {
      step: "02",
      title: "UI/UX & Prototyping",
      description: "Designing intuitive wireframes, responsive UI components, and modern aesthetics tailored for maximum user engagement.",
      icon: "Layout",
      color: "from-blue-500 to-indigo-500"
    },
    {
      step: "03",
      title: "Frontend Architecture",
      description: "Implementing modular, reusable React components with Tailwind CSS or custom Wix Velo scripting, ensuring 60FPS fluid transitions.",
      icon: "Code",
      color: "from-indigo-500 to-violet-500"
    },
    {
      step: "04",
      title: "Backend & Database",
      description: "Building robust REST APIs with Node.js and Express.js, connecting MongoDB schemas with JWT authentication and security rules.",
      icon: "Server",
      color: "from-violet-500 to-purple-500"
    },
    {
      step: "05",
      title: "Testing & Optimization",
      description: "Rigorous cross-device testing, Core Web Vitals optimization, API performance benchmarking, and clean code refactoring.",
      icon: "CheckCircle",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "06",
      title: "Deployment & Support",
      description: "Seamless production deployment on cloud platforms (Netlify, Vercel, Firebase) with continuous support and feature updates.",
      icon: "Rocket",
      color: "from-pink-500 to-rose-500"
    }
  ],

  services: [
    {
      id: "front-end-exec",
      title: "Front End Web Development",
      description: "Executive-level frontend engineering using React.js, Tailwind CSS, TypeScript, and modern JS frameworks with pixel-perfect responsiveness.",
      icon: "Layers",
      deliverables: ["React.js & Tailwind CSS", "TypeScript Codebase", "Mobile-First Fluid UI", "Clean Modular Architecture"],
      accent: "cyan"
    },
    {
      id: "wix-cms",
      title: "Wix Studio & Custom Velo Code",
      description: "Advanced website development on Wix, Wix Studio, Squarespace, and GoDaddy with custom Velo scripting when built-in tools aren't enough.",
      icon: "Palette",
      deliverables: ["Wix Studio Builds", "Custom Wix Velo Scripting", "Squarespace & GoDaddy Sites", "Client Requirement Delivery"],
      accent: "violet"
    },
    {
      id: "full-stack",
      title: "MERN Stack Web Applications",
      description: "Full-stack web applications built with MongoDB, Express.js, React.js, and Node.js featuring secure authentication and robust REST APIs.",
      icon: "Database",
      deliverables: ["MERN Architecture", "Node.js REST APIs", "MongoDB Schema Design", "Firebase Authentication"],
      accent: "emerald"
    },
    {
      id: "ecommerce",
      title: "E-Commerce Solutions",
      description: "High-converting online shopping platforms with dynamic product cataloging, cart management, checkout flows, and admin dashboards.",
      icon: "ShoppingCart",
      deliverables: ["Product Catalog & Cart", "Admin Dashboard", "Order Tracking", "Responsive Shopping Flow"],
      accent: "amber"
    },
    {
      id: "performance",
      title: "Speed Optimization & SEO",
      description: "Maximizing website loading speed, optimizing Core Web Vitals, and implementing clean on-page SEO meta structures.",
      icon: "Zap",
      deliverables: ["Lighthouse 95+ Scores", "Asset Optimization", "SEO Meta Structure", "Mobile Usability Tuning"],
      accent: "pink"
    },
    {
      id: "maintenance",
      title: "Bug Fixing, Upgrades & Support",
      description: "Refactoring existing websites, solving frontend/backend bugs, updating dependencies, and managing deployments on Netlify & Vercel.",
      icon: "ShieldCheck",
      deliverables: ["Bug Diagnosis & Fixes", "Netlify & Vercel Deployments", "Git Version Control", "Ongoing Maintenance"],
      accent: "blue"
    }
  ],

  experience: [
    {
      id: "softvence-agency",
      role: "Front End Developer (Executive)",
      company: "Softvence Agency",
      period: "1 Year 4 Months",
      duration: "1 Year 4 Months",
      type: "Executive Role",
      location: "Remote / Agency",
      description: "Built and maintained websites for clients on Wix, Wix Studio, Squarespace, and GoDaddy, handling layout, page structure, and site functionality. Added custom functionality to Wix sites using Wix Velo when built-in tools weren't enough.",
      highlights: [
        "Built and maintained websites for clients on Wix, Wix Studio, Squarespace, and GoDaddy, handling layout, page structure, and site functionality",
        "Added custom functionality to Wix sites using Wix Velo when the built-in tools weren't enough",
        "Worked directly with clients to gather requirements and turn them into working sites",
        "Delivered mobile-responsive, easy-to-use designs on every project"
      ],
      skillsUsed: ["Wix Studio", "Wix Velo", "Squarespace", "GoDaddy", "JavaScript", "HTML/CSS", "UI/UX Design"]
    },
    {
      id: "universe-it-institute",
      role: "MERN Stack Web Development (Intern)",
      company: "Universe IT Institute",
      period: "Jul 2024 – Oct 2024",
      duration: "4 Months",
      type: "Internship",
      location: "Aftabnagar, Merul Badda, Dhaka",
      description: "Built and maintained web application features using React.js, Node.js, Express.js, and MongoDB. Collaborated with the development team on full-stack functionality for live projects.",
      highlights: [
        "Built and maintained web application features using React.js, Node.js, Express.js, and MongoDB",
        "Collaborated with the development team on full-stack functionality for live projects",
        "Engineered RESTful API integrations and state management pipelines",
        "Based in Aftabnagar, Merul Badda, Dhaka"
      ],
      skillsUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git", "REST APIs"]
    }
  ],

  education: [
    {
      id: "polytechnic",
      degree: "Diploma in Computer Engineering",
      institution: "Thakurgaon Polytechnic Institute",
      period: "2021 – 2024",
      status: "CGPA 3.37 / 4.00",
      description: "Comprehensive technical curriculum covering software engineering, data structures, algorithms, database management, and modern web application development.",
      badge: "CGPA 3.37/4.00"
    },
    {
      id: "dakhil",
      degree: "Dakhil Examination",
      institution: "Boalmari Kanchdah Fazil Degree Madrasha",
      period: "2019 – 2020",
      status: "GPA 4.56 / 5.00",
      description: "Concentration in Science, Mathematics, Information & Communication Technology.",
      badge: "GPA 4.56/5.00"
    }
  ],

  certifications: [
    {
      id: "mern-cert",
      title: "MERN Stack Web Development Certification",
      institution: "Universe IT Institute",
      issued: "2024",
      badge: "Verified Credential",
      description: "Professional training on modern full-stack web application development with React, Node, Express, MongoDB, Firebase, and Tailwind CSS.",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "Firebase"]
    }
  ],

  languages: [
    { name: "English", reading: "High", writing: "Medium", speaking: "Medium" },
    { name: "Bengali", reading: "Native", writing: "Native", speaking: "Native" }
  ],

  platforms: [
    {
      name: "Mobile Devices",
      subtitle: "Smartphones & Phablets",
      screen: "360px - 640px",
      description: "Ultra-fast touch navigation, thumb-friendly buttons, and zero horizontal scroll.",
      icon: "Smartphone"
    },
    {
      name: "Tablet & iPad",
      subtitle: "Portrait & Landscape",
      screen: "641px - 1024px",
      description: "Adaptive multi-column grids, swipe gestures, and flexible card layouts.",
      icon: "Tablet"
    },
    {
      name: "Desktop & Laptops",
      subtitle: "HD, 2K & 4K Displays",
      screen: "1025px - 4K+",
      description: "Full visual fidelity with glassmorphism, glowing micro-interactions, and rich hover states.",
      icon: "Monitor"
    }
  ]
};
