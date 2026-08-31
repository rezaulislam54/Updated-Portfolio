export const portfolioData = {
  personalInfo: {
    name: "Md. Rezaul Islam",
    firstName: "Rezaul",
    lastName: "Islam",
    tagline: "Building High-Impact, Scalable & Delightful Web Experiences",
    roles: [
      "Full Stack MERN Developer",
      "React.js & Next.js Specialist",
      "Node.js & Express Engineer",
      "Frontend UI/UX Architect"
    ],
    bio: "Hi, I'm Rezaul Islam, a passionate software developer with expertise in Node.js, React.js, Next.js, Express.js, MongoDB, and Tailwind CSS. I specialize in building robust, user-centric, and high-performance digital applications. Committed to clean code architecture and seamless user experiences, I strive to solve complex problems and deliver innovative web solutions for modern businesses worldwide.",
    email: "islammdrezaul855@gmail.com",
    phone: "01826-847490",
    phoneInternational: "+8801826847490",
    address: "Rangpur, Dhaka, Bangladesh",
    availability: "Available for Full-time, Contract & Freelance Projects",
    experienceYears: "2+ Years",
    resumeUrl: "#", // Direct trigger to download/view CV
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      whatsapp: "https://wa.me/8801826847490",
      facebook: "https://facebook.com",
      email: "mailto:islammdrezaul855@gmail.com",
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
      name: "Frontend Development",
      description: "Crafting blazing-fast, visually captivating, and accessible user interfaces.",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️", badge: "Expert", color: "#61dafb" },
        { name: "Next.js", level: 85, icon: "▲", badge: "Advanced", color: "#ffffff" },
        { name: "JavaScript (ES6+)", level: 92, icon: "⚡", badge: "Expert", color: "#f7df1e" },
        { name: "Tailwind CSS", level: 98, icon: "🎨", badge: "Master", color: "#38bdf8" },
        { name: "HTML5 & CSS3", level: 96, icon: "🌐", badge: "Master", color: "#e34f26" },
        { name: "Redux / Context API", level: 88, icon: "🔄", badge: "Advanced", color: "#764abc" },
        { name: "DOM & Web APIs", level: 90, icon: "🧩", badge: "Expert", color: "#3b82f6" },
        { name: "Bootstrap & SASS", level: 90, icon: "💎", badge: "Proficient", color: "#7952b3" },
        { name: "Material-UI / DaisyUI", level: 88, icon: "📐", badge: "Proficient", color: "#007fff" },
      ]
    },
    {
      id: "backend",
      name: "Backend & Cloud",
      description: "Architecting reliable, secure, and scalable server-side systems.",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢", badge: "Advanced", color: "#339933" },
        { name: "Express.js", level: 92, icon: "🚀", badge: "Expert", color: "#ffffff" },
        { name: "RESTful API Design", level: 94, icon: "🔌", badge: "Expert", color: "#06b6d4" },
        { name: "JWT Authentication", level: 90, icon: "🔒", badge: "Advanced", color: "#10b981" },
        { name: "Firebase Auth & Services", level: 88, icon: "🔥", badge: "Advanced", color: "#ffca28" },
      ]
    },
    {
      id: "database",
      name: "Databases & Storage",
      description: "Designing efficient schemas and managing data pipelines.",
      skills: [
        { name: "MongoDB", level: 92, icon: "🍃", badge: "Expert", color: "#47a248" },
        { name: "Mongoose ODM", level: 90, icon: "📦", badge: "Advanced", color: "#880000" },
        { name: "Firebase Firestore", level: 86, icon: "🗄️", badge: "Proficient", color: "#ffca28" },
      ]
    },
    {
      id: "tools",
      name: "Dev Tools & Deployment",
      description: "Industry-standard development workflows, version control, and cloud platforms.",
      skills: [
        { name: "Git & GitHub", level: 94, icon: "🐙", badge: "Expert", color: "#f05032" },
        { name: "VS Code", level: 98, icon: "💻", badge: "Master", color: "#007acc" },
        { name: "Postman", level: 90, icon: "📬", badge: "Advanced", color: "#ff6c37" },
        { name: "Vercel & Netlify", level: 92, icon: "☁️", badge: "Advanced", color: "#00c7b7" },
        { name: "Figma UI Translation", level: 88, icon: "🖌️", badge: "Advanced", color: "#f24e1e" },
        { name: "NPM & Package Mgr", level: 94, icon: "📦", badge: "Expert", color: "#cb3837" },
      ]
    }
  ],

  projects: [
    {
      id: "doctor-appointment",
      title: "Doctor Appointment System",
      category: "Full Stack (MERN)",
      tagline: "Modern Healthcare Scheduling & Patient Care Platform",
      description: "A state-of-the-art doctor appointment booking web application providing a seamless experience for scheduling consultations, browsing specialist medical practitioners, managing time slots, and tracking patient appointments.",
      longDescription: "Built with the robust MERN stack, this healthcare platform eliminates long clinic queues. Patients can easily search doctors by specialty, view verified degrees and fees, select available real-time time slots, and confirm appointments. Features a doctor admin panel for schedule adjustments and patient record oversight.",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
      features: [
        "Interactive doctor specialty directory with instant search & filter",
        "Dynamic calendar slot picker with real-time availability confirmation",
        "Role-based authentication for Patients, Doctors, and Super Admin",
        "Comprehensive dashboard to manage bookings, prescriptions, and status",
        "Fully responsive mobile-friendly booking UI with instant notifications"
      ],
      liveUrl: "https://rezaul-islam-7b565.web.app/",
      githubClient: "https://github.com",
      githubServer: "https://github.com",
      accentColor: "from-cyan-500 to-blue-600",
      featured: true,
      badge: "Healthcare Platform"
    },
    {
      id: "car-servicing",
      title: "Car Servicing & Auto Center",
      category: "Full Stack (MERN)",
      tagline: "Automotive Service Scheduling & Diagnostics Portal",
      description: "An automotive care platform built for car owners to easily book vehicle repair appointments, choose tailored maintenance packages, track repair history, and receive live status updates.",
      longDescription: "An all-in-one car care solution engineered for auto repair shops and vehicle owners. Users can browse specialized services (Engine tune-up, Brake inspection, Oil change, Electrical diagnostics), calculate instant estimated costs, and schedule garage visits. Admins can update repair stages and manage workshop workload.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Express.js", "Node.js", "MongoDB"],
      features: [
        "Service catalog with transparent price calculators and package builders",
        "Automated booking pipeline with date/time slot selection",
        "Customer service history timeline and printable digital receipts",
        "Admin workshop control panel with live repair stage tracking",
        "Customer reviews and satisfaction rating system"
      ],
      liveUrl: "https://rezaul-islam-7b565.web.app/",
      githubClient: "https://github.com",
      githubServer: "https://github.com",
      accentColor: "from-amber-500 to-orange-600",
      featured: true,
      badge: "Automotive SaaS"
    },
    {
      id: "giga-gadgets",
      title: "Giga Gadgets Tech Store",
      category: "E-Commerce",
      tagline: "High-Performance Electronics & Tech Gear Marketplace",
      description: "A feature-packed MERN stack e-commerce web platform for tech enthusiasts. Explore, filter, and buy the latest gadgets with lightning-fast search, dynamic cart management, and seamless checkout.",
      longDescription: "A comprehensive modern e-commerce storefront tailored for electronics. Features multi-attribute filtering (brand, price range, ratings, connectivity), interactive product photo galleries, shopping cart with persistent local & cloud state, customer reviews, and order tracking.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Redux Toolkit"],
      features: [
        "Fast faceted product search and category filtering with instant UI updates",
        "Dynamic cart and wishlist system with real-time stock verification",
        "Customer review & star rating system with verified buyer badges",
        "Secure checkout simulation with order summary generation",
        "Responsive product comparison table and spec sheets"
      ],
      liveUrl: "https://rezaul-islam-7b565.web.app/",
      githubClient: "https://github.com",
      githubServer: "https://github.com",
      accentColor: "from-violet-500 to-purple-600",
      featured: true,
      badge: "E-Commerce"
    },
    {
      id: "coffee-shop",
      title: "Aroma Artisan Coffee Shop",
      category: "Frontend & UI/UX",
      tagline: "Interactive Coffee Ordering & Cafe Experience",
      description: "A modern coffee shop web app where coffee lovers can explore artisanal coffee blends, customize roast and milk preferences, place quick orders, and discover nearby cafe branches.",
      longDescription: "Designed with a warm, aesthetic modern coffeehouse vibe. Users can explore seasonal beans, custom brew recipes, iced and hot beverages, and nutritional facts. Incorporates smooth micro-animations and quick mobile order checkout.",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "CSS Animations"],
      features: [
        "Artisanal coffee menu with custom milk, roast level, and sugar modifiers",
        "Interactive order basket with instant tax & delivery calculation",
        "Cafe branch locator and opening hours lookup",
        "Loyalty coffee bean points tracker and discount coupons",
        "Mobile-first fluid responsive layout"
      ],
      liveUrl: "https://rezaul-islam-7b565.web.app/",
      githubClient: "https://github.com",
      githubServer: "https://github.com",
      accentColor: "from-amber-600 to-rose-600",
      featured: true,
      badge: "Food & Beverage"
    },
    {
      id: "byte-blaze",
      title: "Byte Blaze Tech Blogs",
      category: "Full Stack (MERN)",
      tagline: "Developer Community & Knowledge Sharing Platform",
      description: "A modern blogging platform designed to inspire creativity and connect developers. Write, publish, bookmark, and explore in-depth technical blogs, tutorials, and lifestyle articles.",
      longDescription: "Byte Blaze is a platform built for tech writers and learners. Features markdown rendering for syntax-highlighted code blocks, estimated reading time, category tag filtering, user bookmarking, and engaging discussion threads.",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Markdown Parser"],
      features: [
        "Markdown-supported blog reader with syntax highlighting",
        "Category navigation (Frontend, Backend, AI, Devops, Career)",
        "Reading time calculator and reading progress bar",
        "Interactive comment feed and social sharing integration",
        "Fast search index and bookmark storage"
      ],
      liveUrl: "https://rezaul-islam-7b565.web.app/",
      githubClient: "https://github.com",
      githubServer: "https://github.com",
      accentColor: "from-emerald-500 to-teal-600",
      featured: true,
      badge: "Publishing & Community"
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
      description: "Implementing modular, reusable React components with Tailwind CSS, ensuring clean state management and 60FPS fluid transitions.",
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
      description: "Seamless production deployment on cloud platforms (Vercel, Netlify, Render) with continuous support and feature updates.",
      icon: "Rocket",
      color: "from-pink-500 to-rose-500"
    }
  ],

  services: [
    {
      id: "full-stack",
      title: "Full Stack Web Development",
      description: "Complete end-to-end web applications built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that are secure, scalable, and blazingly fast.",
      icon: "Layers",
      deliverables: ["Custom Web Applications", "MERN Architecture", "Next.js SSR/SSG", "Clean Code Standards"],
      accent: "cyan"
    },
    {
      id: "ui-ux",
      title: "Modern UI/UX & Frontend",
      description: "Pixel-perfect, highly responsive frontends crafted with React.js, Tailwind CSS, and modern interactive micro-animations for outstanding user engagement.",
      icon: "Palette",
      deliverables: ["Figma to React Conversion", "Responsive Mobile-First UI", "Tailwind CSS Styling", "Glassmorphism & Dark Themes"],
      accent: "violet"
    },
    {
      id: "api-backend",
      title: "RESTful API & Backend Systems",
      description: "Robust backend microservices and RESTful API endpoints engineered with Node.js, Express.js, JWT security, and high-throughput MongoDB databases.",
      icon: "Database",
      deliverables: ["REST API Endpoints", "JWT Authentication", "MongoDB Schema Design", "CRUD Data Operations"],
      accent: "emerald"
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Payment Portals",
      description: "High-converting online shopping platforms with dynamic product filtering, cart management, checkout flows, and payment gateway integrations.",
      icon: "ShoppingCart",
      deliverables: ["Product Catalog & Cart", "Stripe / Payment Gateway", "Order Management Panel", "Customer Wishlist"],
      accent: "amber"
    },
    {
      id: "performance",
      title: "Speed Optimization & SEO",
      description: "Maximizing website speed, minimizing bundle size, improving Google Core Web Vitals, and implementing on-page SEO meta architectures.",
      icon: "Zap",
      deliverables: ["Lighthouse 95+ Scores", "Code Splitting & Lazy Loading", "SEO Meta Tags & Graph Data", "Mobile Usability Tuning"],
      accent: "pink"
    },
    {
      id: "maintenance",
      title: "Bug Fixing, Upgrades & Support",
      description: "Refactoring legacy code, solving complex frontend/backend bugs, updating dependencies, and deploying cloud infrastructures.",
      icon: "ShieldCheck",
      deliverables: ["Bug Diagnosis & Fixes", "Cloud Deployment (Vercel/Netlify)", "Git Version Control", "Ongoing Maintenance"],
      accent: "blue"
    }
  ],

  experience: [
    {
      id: "universe-soft-tech",
      role: "Web Development (MERN) Intern",
      company: "Universe Soft Tech",
      period: "July 2024 - October 2024",
      duration: "4 Months",
      type: "Internship",
      location: "Bangladesh (Hybrid)",
      description: "Engaged in hands-on production web application engineering. Collaborated in an agile development team to build full-stack features using React.js, Node.js, Express, MongoDB, and Tailwind CSS.",
      highlights: [
        "Built responsive, mobile-first frontend interfaces from Figma wireframes using React & Tailwind CSS",
        "Developed and tested secure RESTful APIs with Node.js, Express, and JWT authentication",
        "Designed MongoDB schemas, queries, and aggregation pipelines for dynamic data delivery",
        "Utilized Git and GitHub for collaborative version control, branch management, and code reviews"
      ],
      skillsUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git/GitHub", "REST APIs"]
    }
  ],

  education: [
    {
      id: "polytechnic",
      degree: "Diploma in Computer Science & Engineering",
      institution: "Thakurgaon Govt Polytechnic Institute",
      period: "2020 - 2024",
      status: "Graduated with Distinction",
      description: "Comprehensive 4-year technical curriculum covering software engineering, data structures, algorithms, database management, and modern web application development.",
      badge: "4-Year Diploma"
    },
    {
      id: "madrasah",
      degree: "Secondary School Certificate (SSC / Dakhil)",
      institution: "Boalmari Kanchdeh Fazil Degree Madrasah",
      period: "2018 - 2020",
      status: "Completed (Science Group)",
      description: "Concentration in Science, Mathematics, Information & Communication Technology, building disciplined analytical problem-solving skills.",
      badge: "Science Background"
    }
  ],

  certifications: [
    {
      id: "mern-cert",
      title: "Complete Web Development (MERN Stack) Course",
      institution: "Universe Soft Tech",
      issued: "2024",
      badge: "Verified Credential",
      description: "Extensive professional training on modern full-stack web application development with React, Node, Express, MongoDB, Firebase, and Tailwind CSS.",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "Firebase"]
    }
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
