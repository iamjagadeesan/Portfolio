import { CvData, ExperienceItem, ProjectItem, ServiceItem } from '../types/portfolio';

export const BRAND_ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDngKcS4wT80YvevuI-NFARDzFkIXwN3Y2c3aOUpBjKjHrdu-QGrzVgJnYVvf0ZBl8u8DKs4zN2BPGDgvRnP-ZoYz_DcyHRxVObHV4Ajno25FgPfcinoyc2cuWnPqSmWmb2Dxa9L6lI2brnkzi7IAaTR2tIRTyx6Eqhs834BIhgFdDkzDPQfy8F9dTYc3hKC3j2j_5Qg1F_s5n0L5hRFo4RzuTgJNDhFcYyxvkZGBjV98kBJWqO5qaF',
  monogram:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD0KXaIyF1iUiw-OxENZpx2r-cNFUnDLTkSVhy_swZnrTO-rmpYt29nI1d879Xid1iC6_u2ZTDVAwTgKYI7xm4W3I9j1TqhYd7Ocn8qVFHfyyvWgMCnpyhNgJq1JQ5gVe8UxyZv2ov-XyuO1OBk-KM1rg8qW088j0XrbVvP8TxIDRFi1ovQM8-BeM7bzOPp3vSvpzdDpP_CPqoaZf3F8JMsMGIzLr9nAPpPUw0SVYEM0iO0CqN-SDTO',
  heroPortrait: '/Images/home/my-profile.png',
  aboutIllustration: '/Images/home/full_stack_developer_3d.png',
  contactLaptop: '/Images/contact/laptop-contact.png',
  resumePdf: '/Jagadeesan_Resume.pdf',
};

export const PROFILE = {
  name: 'Jagadeesan',
  role: 'Full Stack Developer',
  experienceYears: '2+ Years of Experience',
  location: 'Based in India',
  country: 'India',
  email: 'iamjagadeesan2001@gmail.com',
  phone: '+91 80566 74772',
  phoneHref: 'tel:+918056674772',
  availability: 'Mon – Fri, 9AM – 6PM IST',
  linkedinUrl: 'https://www.linkedin.com/in/iamjagadeesan/',
  githubUrl: 'https://github.com/iamjagadeesan',
};

export const CORE_SKILLS = [
  'Full Stack Development',
  'Frontend Architecture',
  'REST APIs',
  'Database Engineering',
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'bontemps',
    index: '01',
    slug: 'bontemps-ecommerce',
    title: 'BONTEMPS',
    shortTitleTop: 'BONTEMPS',
    shortTitleBottom: 'E-COMMERCE',
    subtitle: 'Enterprise Multi-Outlet Bakery & Retail Platform',
    domainLabel: 'Enterprise E-Commerce & Retail',
    status: 'Live',
    categories: ['ecommerce', 'b2b', 'fullstack'],
    summary:
      'Developed Bontemps, an enterprise multi-outlet bakery & retail platform that replaced fragmented order operations with centralized multi-store fulfillment, batch inventory, and custom cake configurators.',
    highlights: [
      'Built robust microservices and responsive dashboards using React/Vite, Node.js/TypeScript, Express, and MySQL/Sequelize for real-time order lifecycle tracking and automated refund pipelines.',
      'Designed a granular Hierarchical Access Control System (RBAC + User Overrides) that enables dynamic permission matrix management and synchronized UI/API route security across admin tiers.',
    ],
    challenge:
      'Fragmented multi-outlet bakery operations lacked centralized multi-store fulfillment, batch-level inventory tracking, custom cake configuration workflows, and synchronized route-level access control across store admin tiers.',
    solution:
      'Built robust microservices and responsive dashboards using React/Vite, Node.js/TypeScript, Express, and MySQL/Sequelize for real-time order lifecycle tracking and automated refund pipelines, paired with a granular Hierarchical Access Control System (RBAC + User Overrides) for dynamic permission matrix management.',
    metrics: [
      { value: 'Live', label: 'Enterprise Multi-Outlet Platform' },
      { value: 'RBAC + Overrides', label: 'Dynamic UI/API Permission Matrix' },
    ],
    techStack: ['React', 'Vite', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'Sequelize'],
    cardGradientClass: 'card-gradient-1',
    cardBorderClass: 'border-[#E5E7EB]',
    mockupBgClass: 'bg-[#F8F5EE] border-[#EAE3D2]',
    cardPreviewImage: '/Images/work/bontemps_image.png',
    caseStudyImage: '/Images/work/bontemps_image.png',
    deliverables: [
      'Centralized Multi-Store Fulfillment',
      'Batch Inventory & Custom Cake Configurators',
      'Real-Time Order Lifecycle & Refund Pipelines',
      'Hierarchical Access Control (RBAC + User Overrides)',
    ],
    liveUrl: 'https://bontemps.in',
    year: '2025 — Present',
    role: 'Junior Full Stack Developer',
  },
  {
    id: 'chokofi',
    index: '02',
    slug: 'chokofi-ecommerce',
    title: 'CHOKOFI',
    shortTitleTop: 'CHOKOFI',
    shortTitleBottom: 'E-COMMERCE',
    subtitle: 'Chocolate E-Commerce, Retail & Corporate Gifting Platform',
    domainLabel: 'E-Commerce & Retail',
    status: 'Live',
    categories: ['ecommerce', 'b2b', 'fullstack'],
    summary:
      'Developed Chokofi, a chocolate e-commerce and retail platform that centralizes online sales, order fulfillment, batch-based inventory, and bulk/corporate gifting.',
    highlights: [
      'Built responsive customer storefronts and admin dashboards with React, TypeScript, Vite/Next.js, and Redux Toolkit, backed by Node.js, Express, Sequelize, and MySQL APIs for orders, payments, shipping, and discounts.',
      'Implemented a separate background and real-time service using Node.js, TypeScript, and Socket.IO, with scheduled stock-expiry alerts, reservation cleanup, customer-tier recalculation, and granular RBAC for admin access.',
    ],
    challenge:
      'Unifying direct-to-consumer chocolate sales, bulk corporate gifting, batch-based inventory, and expiring stock reservations while keeping storefront pricing, customer tiers, and admin permissions in sync.',
    solution:
      'Built responsive customer storefronts and admin dashboards with React, TypeScript, Vite/Next.js, and Redux Toolkit, backed by Node.js, Express, Sequelize, and MySQL APIs. Implemented a separate background and real-time service using Node.js, TypeScript, and Socket.IO for scheduled stock-expiry alerts, reservation cleanup, customer-tier recalculation, and granular RBAC.',
    metrics: [
      { value: 'Live', label: 'D2C & Bulk Gifting Storefront' },
      { value: 'Socket.IO', label: 'Real-Time Alerts & Background Service' },
    ],
    techStack: [
      'React',
      'Next.js',
      'Vite',
      'TypeScript',
      'Redux Toolkit',
      'Node.js',
      'Express.js',
      'MySQL',
      'Sequelize',
      'Socket.IO',
    ],
    cardGradientClass: 'card-gradient-2',
    cardBorderClass: 'border-[#F3E8D8]',
    mockupBgClass: 'bg-[#F5F2EB] border-[#EAE3D2]',
    cardPreviewImage: '/Images/work/chokofi_image.png',
    caseStudyImage: '/Images/work/chokofi_image.png',
    deliverables: [
      'Customer Storefront & Admin Dashboards',
      'Orders, Payments, Shipping & Discounts APIs',
      'Background & Real-Time Socket.IO Service',
      'Expiry Alerts, Cleanup & Tier Recalculation',
    ],
    liveUrl: 'https://www.chokofi.com',
    year: '2025 — Present',
    role: 'Junior Full Stack Developer',
  },
  {
    id: 'southerngourmetbites',
    index: '03',
    slug: 'southern-gourmet-bites',
    title: 'SOUTHERN GOURMET BITES',
    shortTitleTop: 'SOUTHERN',
    shortTitleBottom: 'GOURMET BITES',
    subtitle: 'Corporate Brand Identity & Product Showcase Website',
    domainLabel: 'Corporate Website & SEO',
    status: 'Live',
    categories: ['b2b', 'fullstack'],
    summary:
      'Created a responsive corporate website to showcase products, company information, and brand identity through a modern and engaging user experience.',
    highlights: [
      'Implemented SEO best practices, performance optimizations, and structured content architecture to improve discoverability and accessibility.',
      'Impact: Strengthened the brand’s digital presence, enhanced user engagement, and improved search engine visibility across target audiences.',
    ],
    challenge:
      'Establishing a cohesive digital presence to present corporate products, company information, and brand identity while maximizing search discoverability and accessibility.',
    solution:
      'Engineered a responsive corporate website with SEO best practices, performance optimizations, and structured content architecture—strengthening the brand’s digital presence, enhancing user engagement, and improving search engine visibility across target audiences.',
    metrics: [
      { value: 'Live', label: 'Corporate Brand Showcase' },
      { value: 'SEO + Speed', label: 'Search Visibility & Engagement' },
    ],
    techStack: ['React', 'TypeScript', 'CSS', 'SEO Optimization'],
    cardGradientClass: 'card-gradient-3',
    cardBorderClass: 'border-[#E0E7FF]',
    mockupBgClass: 'bg-[#F6F3EB] border-[#EAE3D2]',
    cardPreviewImage: '/Images/work/SGB_image.png',
    caseStudyImage: '/Images/work/SGB_image.png',
    deliverables: [
      'Responsive Product & Brand Showcase',
      'Structured Content Architecture',
      'SEO Best Practices & Discoverability',
      'Performance & Accessibility Optimization',
    ],
    liveUrl: 'https://southerngourmetbites.com',
    year: '2025',
    role: 'Junior Full Stack Developer',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'frontend',
    index: '01',
    title: 'Frontend Development',
    description:
      'Responsive, accessible interfaces in React, Next.js, and TypeScript built for sub-second First Contentful Paint and fluid interaction.',
    capabilities: ['Next.js App Router', 'TypeScript UI Systems', 'Tailwind CSS'],
    targetFilter: 'all',
    cardGradientClass: 'card-gradient-3',
    cardBorderClass: 'border-[#E4EAF5]',
    image: '/Images/services/frontend.png',
    variant: 'frontend',
  },
  {
    id: 'backend',
    index: '02',
    title: 'Backend & API Development',
    description:
      'Resilient APIs, database schemas, and caching layers using Node.js, Python FastAPI, PostgreSQL, and Redis.',
    capabilities: ['Node.js & FastAPI', 'PostgreSQL & Redis', 'Auth & Security'],
    targetFilter: 'all',
    cardGradientClass: 'card-gradient-3',
    cardBorderClass: 'border-[#E4EAF5]',
    image: '/Images/services/backend.png',
    variant: 'backend',
  },
  {
    id: 'integrate',
    index: '03',
    title: 'Full Stack Integration & Deployment',
    description:
      'End-to-end payment gateways, headless commerce APIs, CI/CD pipelines, and cloud deployments with Docker and AWS.',
    capabilities: ['Stripe & Shopify APIs', 'GraphQL Federation', 'Docker & CI/CD'],
    targetFilter: 'all',
    cardGradientClass: 'card-gradient-3',
    cardBorderClass: 'border-[#E4EAF5]',
    image: '/Images/services/deployment.png',
    variant: 'integrate',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Junior Full Stack Developer',
    company: 'Interlock Solutions',
    period: 'May 2025 — Present',
    location: 'India',
    highlights: [
      'Developed and enhanced business applications to support operational workflows and customer-facing services.',
      'Collaborated with stakeholders, designers, and development teams to deliver scalable, user-focused solutions.',
      'Optimized application performance, resolved production issues, and ensured cross-browser and cross-device compatibility.',
    ],
    keyAchievements: [
      'Delivered key application modules that streamlined business processes and improved operational efficiency.',
      'Enhanced system responsiveness through query optimization, efficient data handling, and performance improvements.',
      'Contributed to successful releases by resolving critical issues, maintaining code quality, and supporting feature enhancements.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Nginx'],
  },
  {
    id: 'exp-2',
    role: 'MERN Stack Developer Intern',
    company: 'Tripple One Solutions',
    period: 'Feb 2025 — Apr 2025',
    location: 'Online',
    highlights: [
      'Developed full-stack web application features using the MERN stack.',
      'Integrated REST APIs and database operations.',
      'Worked with version control and collaborative development workflows.',
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'Git & GitHub'],
  },
];

export const CV_DATA: CvData = {
  name: 'Jagadeesan',
  role: 'Junior Full Stack Developer',
  email: 'iamjagadeesan2001@gmail.com',
  phone: '+91 80566 74772',
  phoneHref: 'tel:+918056674772',
  githubLabel: 'github.com/iamjagadeesan',
  githubUrl: 'https://github.com/iamjagadeesan',
  linkedinLabel: 'linkedin.com/in/iamjagadeesan/',
  linkedinUrl: 'https://www.linkedin.com/in/iamjagadeesan/',
  portfolioLabel: 'iamjagadeesan.github.io/Portfolio',
  portfolioUrl: 'https://iamjagadeesan.github.io/Portfolio',
  summary:
    'Junior Full Stack Developer with hands-on experience building scalable web applications using React, Next.js, Node.js, Express, MySQL, MongoDB and Nginx. Experienced in developing business solutions across e-commerce and corporate platforms, optimizing application performance, and collaborating in agile teams. Passionate about building clean, user-focused software and continuously improving technical skills.',
  technicalSkills: [
    {
      category: 'Frontend',
      items: 'Next.js, React, Redux, TypeScript, JavaScript (ES6+), Tailwind CSS, CSS3, HTML5',
    },
    {
      category: 'Backend',
      items: 'Node.js, Express.js, Python (Intermediate), Java (Intermediate), C++, C',
    },
    {
      category: 'Database',
      items: 'MongoDB, MySQL',
    },
    {
      category: 'Tools & Technologies',
      items: 'Figma, VS Code, Git & GitHub, Chrome DevTools, REST APIs, JWT Authentication, SEO Optimization, Nginx',
    },
    {
      category: 'AI Tools',
      items: 'Stitch, GitHub Copilot, OpenAI Codex, Antigravity, NotebookLLM',
    },
    {
      category: 'Areas of Interest',
      items: 'Artificial Intelligence & Machine Learning, Full Stack Development',
    },
  ],
  experiences: [EXPERIENCES[0]],
  projects: [
    {
      id: 'cv-bontemps',
      name: 'BONTEMPS',
      status: 'Live',
      highlights: [
        'Developed Bontemps, an enterprise multi-outlet bakery & retail platform that replaced fragmented order operations with centralized multi-store fulfillment, batch inventory, and custom cake configurators.',
        'Built robust microservices and responsive dashboards using React/Vite, Node.js/TypeScript, Express, and MySQL/Sequelize for real-time order lifecycle tracking and automated refund pipelines.',
        'Designed a granular Hierarchical Access Control System (RBAC + User Overrides) that enables dynamic permission matrix management and synchronized UI/API route security across admin tiers.',
      ],
    },
    {
      id: 'cv-chokofi',
      name: 'CHOKOFI',
      status: 'Live',
      highlights: [
        'Developed Chokofi, a chocolate e-commerce and retail platform that centralizes online sales, order fulfillment, batch-based inventory, and bulk/corporate gifting.',
        'Built responsive customer storefronts and admin dashboards with React, TypeScript, Vite/Next.js, and Redux Toolkit, backed by Node.js, Express, Sequelize, and MySQL APIs for orders, payments, shipping, and discounts.',
        'Implemented a separate background and real-time service using Node.js, TypeScript, and Socket.IO, with scheduled stock-expiry alerts, reservation cleanup, customer-tier recalculation, and granular RBAC for admin access.',
      ],
    },
    {
      id: 'cv-sgb',
      name: 'SOUTHERNGOURMETBITES',
      status: 'Live',
      highlights: [
        'Created a responsive corporate website to showcase products, company information, and brand identity through a modern and engaging user experience.',
        'Implemented SEO best practices, performance optimizations, and structured content architecture to improve discoverability and accessibility.',
        'Impact: Strengthened the brand’s digital presence, enhanced user engagement, and improved search engine visibility across target audiences.',
      ],
    },
  ],
  internships: [EXPERIENCES[1]],
  education: [
    {
      period: '2022 — 2024',
      degree: 'Master of Computer Applications (MCA)',
      institution: 'SRM Institute of Science and Technology, Tiruchirappalli',
      grade: 'CGPA: 8.7',
    },
    {
      period: '2019 — 2022',
      degree: 'Bachelore of Computer Science ( B.SC(cs) )',
      institution: 'Annai Vailankanni Arts & Science College, Thanjavur',
      grade: 'CGPA: 8.1',
    },
  ],
  strengths: [
    'Strong Problem Solving',
    'Solution-Oriented Thinking',
    'Pixel-Perfect UI Implementation',
    'Time Management',
    'Continuous Learning',
    'Team Collaboration',
  ],
  achievements: [
    'Built and deployed multiple full-stack web applications.',
    'Experienced in creating responsive and modern user interfaces.',
    'Hands-on experience with e-commerce, food ordering, movie discovery, and weather forecasting applications.',
  ],
};
