import {
  EducationItem,
  ExperienceCompany,
  PortfolioProfile,
  SkillCategory,
  SkillCluster,
} from "@/types/portfolio";

export const profileData: PortfolioProfile = {
  name: "Leelakumar Kakinada",
  title: "Software Development Engineer",
  experienceYears: "2.5+ Years",
  summary:
    "Frontend-focused Software Development Engineer with 2.5+ years of experience building responsive, high-performance web and mobile applications using React.js, Next.js, React Native, and TypeScript. Experienced in developing reusable UI components, optimizing application performance, improving user experience, and delivering end-to-end features for production applications. Skilled in state management, API integration, and collaborating with cross-functional teams to build reliable, scalable, and maintainable solutions. Progressed from QA to Software Development Engineer II, bringing a strong foundation in quality, debugging, and production reliability.",
  atsKeywords: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Full-Stack Development",
    "Node.js Backend",
    "GraphQL & REST APIs",
    "Redis & Caching",
    "React Native Mobile Apps",
    "Elasticsearch & k-NN Vector Search",
    "Python Catalog Pipelines",
    "SQL & Database Design",
    "Site Reliability Engineering (SRE)",
    "CI/CD & Cloud (AWS Amplify)",
    "Performance Optimization",
  ],
  stats: [
    {
      value: "2.5+",
      label: "Years of Experience",
      detail: "End-to-end web, mobile & backend systems",
    },
    {
      value: "3x",
      label: "Career Promotions",
      detail: "Rapid climb from QA Intern to SDE I to SDE II",
    },
    {
      value: "20%",
      label: "Latency Reduction",
      detail: "<200ms vector search query optimization",
    },
    {
      value: "8.74",
      label: "Academic CGPA",
      detail: "B.Tech ECE, Andhra University",
    },
  ],
  socials: {
    github: "https://github.com/Leela-1491",
    linkedin: "https://www.linkedin.com/in/leelakumar",
    email: "leelakumarkakinada@gmail.com",
    phone: "+91 9676953491",
    location: "India",
  },
  resumeUrl: "/resume.pdf",
};

export const experienceData: ExperienceCompany[] = [
  {
    company: "Buncha Technologies India Pvt Ltd",
    location: "Remote (India)",
    totalPeriod: "Sept 2023 - Sept 2026",
    summary:
      "Progressed from QA to Software Development Engineer II, building responsive web and mobile applications with React.js, Next.js, React Native, and TypeScript, with a focus on reusable UI components, application performance, and user experience.",
    roles: [
      {
        title: "Software Development Engineer - II",
        period: "Sept 2025 - Sept 2026",
        isCurrent: false,
        metrics: "Building web features and improving frontend workflows",
        highlights: [
          "Developed and enhanced web application features using React.js, Next.js, and TypeScript, building reusable UI components and responsive interfaces for business workflows.",
          "Integrated GraphQL and REST APIs to support application workflows and reliable communication between frontend applications and backend services.",
          "Collaborated with backend and catalog teams on Python-based catalog pipelines and Elasticsearch k-NN vector search to support product data processing and search functionality.",
        ],
        skills: [
          "React.js",
          "Next.js",
          "TypeScript",
          "GraphQL",
          "REST APIs",
          "Frontend Architecture",
        ],
      },
      {
        title: "Software Development Engineer - Trainee & I",
        period: "Mar 2024 - Sept 2025",
        metrics: "10% faster screen loading and 10–15 memory issues resolved",
        highlights: [
          "Developed responsive web applications using React.js, Next.js, and TypeScript, implementing reusable components, UI features, and state management.",
          "Contributed to revamping 2 React Native applications for customer, shopper, and driver workflows, improving UI consistency, usability, and maintainability.",
          "Built frontend features for a Next.js operations admin portal, supporting administrative workflows and operational monitoring.",
          "Improved React Native performance by identifying rendering and loading bottlenecks, reducing screen load time by 10%.",
          "Diagnosed and resolved 10–15 memory leaks and resource-management issues, improving stability during repeated navigation and extended usage.",
          "Optimized image caching across 3 screens to reduce redundant image fetching and improve image loading and scrolling responsiveness.",
          "Collaborated with backend and QA teams to integrate APIs, troubleshoot cross-platform issues, and ship features across web and mobile applications.",
        ],
        skills: [
          "React.js",
          "Next.js",
          "React Native",
          "TypeScript",
          "Redux",
          "Performance Optimization",
          "API Integration",
        ],
      },
      {
        title: "QA Engineer Intern",
        period: "Sept 2023 - Mar 2024",
        metrics: "Built dispatch automation with approximately 70–80% accuracy",
        highlights: [
          "Performed manual, API, and performance testing using Apache JMeter, identifying functional defects and performance bottlenecks before release.",
          "Developed a code-based dispatch automation solution by translating Excel-based dispatch rules and operational logic into executable code, achieving approximately 70–80% accuracy.",
          "Built a foundation in debugging, software quality, and problem-solving that supported progression into software development.",
        ],
        skills: [
          "JavaScript / Programming",
          "Apache JMeter",
          "API Testing",
          "Performance Testing",
          "Debugging",
          "Quality Assurance",
        ],
      },
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Electronics & Communication Engineering",
    institution: "Andhra University College of Engineering, Visakhapatnam, India",
    cgpa: "8.74 / 10.00",
    achievements: [
      "Graduated with High Distinction (8.74 CGPA)",
      "Strong foundation in Algorithmic Problem Solving, Digital Logic, and Systems Engineering",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    description: "Building responsive, accessible, high-performance user interfaces and cross-platform mobile apps.",
    skills: [
      { name: "React JS", level: "Expert", highlight: true },
      { name: "Next.js (App Router)", level: "Expert", highlight: true },
      { name: "React Native", level: "Proficient", highlight: true },
      { name: "TypeScript", level: "Expert", highlight: true },
      { name: "JavaScript (ES6+)", level: "Expert", highlight: true },
      { name: "TailwindCSS", level: "Expert" },
      { name: "HTML5 / Modern CSS", level: "Expert" },
    ],
  },
  {
    title: "Backend & Search Architecture",
    description: "Designing low-latency microservices, vector search pipelines, and robust APIs.",
    skills: [
      { name: "Node.js", level: "Expert", highlight: true },
      { name: "GraphQL APIs", level: "Proficient", highlight: true },
      { name: "RESTful APIs", level: "Expert", highlight: true },
      { name: "Elasticsearch", level: "Proficient", highlight: false },
      { name: "k-NN Vector Search", level: "Proficient", highlight: false },
      { name: "Microservices", level: "Proficient" },
    ],
  },
  {
    title: "Data, Databases & Scripting",
    description: "Data pipelines, structured queries, catalog workflows, and automated scripting.",
    skills: [
      { name: "SQL", level: "Proficient", highlight: true },
      { name: "Python", level: "Proficient", highlight: true },
      { name: "Catalog Pipelines", level: "Proficient" },
      { name: "Data Modeling", level: "Proficient" },
    ],
  },
  {
    title: "Cloud, DevOps & Reliability",
    description: "Ensuring zero-downtime deployments, observability, and robust automated testing.",
    skills: [
      { name: "AWS Amplify", level: "Proficient", highlight: true },
      { name: "CI/CD Pipelines", level: "Proficient", highlight: true },
      { name: "Site Reliability (SRE)", level: "Proficient", highlight: true },
      { name: "Observability & Logging", level: "Proficient" },
      { name: "Apache JMeter", level: "Proficient" },
      { name: "Git & Version Control", level: "Expert" },
    ],
  },
];

export const skillClusters: SkillCluster[] = [
  {
    id: "frontend",
    label: "FRONTEND",
    color: {
      border: "border-cyan-500/60",
      bg: "bg-cyan-950/40",
      text: "text-cyan-300",
      glow: "shadow-cyan-500/20",
      dot: "bg-cyan-400",
    },
    skills: [
      { name: "React JS", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "React Native", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3" },
    ],
  },
  {
    id: "backend",
    label: "BACKEND",
    color: {
      border: "border-emerald-500/60",
      bg: "bg-emerald-950/40",
      text: "text-emerald-300",
      glow: "shadow-emerald-500/20",
      dot: "bg-emerald-400",
    },
    skills: [
      { name: "Node.js", highlight: true },
      { name: "GraphQL", highlight: true },
      { name: "REST APIs" },
      { name: "Microservices" },
      { name: "Python", highlight: true },
    ],
  },
  {
    id: "search",
    label: "SEARCH & DATA",
    color: {
      border: "border-purple-500/60",
      bg: "bg-purple-950/40",
      text: "text-purple-300",
      glow: "shadow-purple-500/20",
      dot: "bg-purple-400",
    },
    skills: [
      { name: "Elasticsearch", highlight: true },
      { name: "k-NN Vector Search", highlight: true },
      { name: "SQL", highlight: true },
      { name: "Data Pipelines" },
    ],
  },
  {
    id: "cloud",
    label: "CLOUD & SRE",
    color: {
      border: "border-amber-500/60",
      bg: "bg-amber-950/40",
      text: "text-amber-300",
      glow: "shadow-amber-500/20",
      dot: "bg-amber-400",
    },
    skills: [
      { name: "AWS Amplify", highlight: true },
      { name: "CI/CD Pipelines", highlight: true },
      { name: "SRE Practices", highlight: true },
      { name: "Observability" },
      { name: "Apache JMeter" },
    ],
  },
];


