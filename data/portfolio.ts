import {
  EducationItem,
  ExperienceCompany,
  PortfolioProfile,
  SkillCategory,
} from "@/types/portfolio";

export const profileData: PortfolioProfile = {
  name: "Leelakumar Kakinada",
  title: "Software Development Engineer",
  experienceYears: "2.5+ Years",
  summary:
    "Software Development Engineer with 2.5+ years of experience developing high-performance web, mobile, and backend systems. Strong expertise in JavaScript/TypeScript (React, Next.js, React Native, Node.js), with production experience building Python-based catalog pipelines, SQL data workflows, and GraphQL/REST APIs. Proven track record of rapid internal promotion from QA to SDE II and delivering reliable, scalable features end-to-end from architecture and development to deployment.",
  atsKeywords: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Full-Stack Development",
    "Node.js Backend",
    "GraphQL & REST APIs",
    "Microservices Architecture",
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
    location: "Bengaluru, India",
    totalPeriod: "Sept 2023 - Sept 2026 (3+ Years)",
    summary:
      "Rapid career progression demonstrating engineering excellence across backend architectures, vector search systems, modern web/mobile interfaces, and system reliability.",
    roles: [
      {
        title: "Software Development Engineer - II",
        period: "Sept 2025 - Sept 2026",
        isCurrent: true,
        metrics: "Cut query latency by 20% (<200ms) & boosted relevance by 15%",
        highlights: [
          "Architected and deployed lightweight GraphQL APIs and microservices using Node.js, enabling seamless, low-latency data exchange between client applications and backend datastores.",
          "Engineered Elasticsearch and k-NN vector search pipelines, cutting query latency by 20% (down to <200ms) while dramatically improving search relevance for complex queries by 15%.",
          "Designed resilient system boundaries, establishing clean interfaces for consumer-facing workflows and high-concurrency request handling.",
        ],
        skills: [
          "Node.js",
          "GraphQL",
          "Elasticsearch",
          "k-NN Vector Search",
          "Microservices",
          "TypeScript",
        ],
      },
      {
        title: "Software Development Engineer - Trainee & I",
        period: "March 2024 - Sept 2025",
        metrics: "Eliminated system bottlenecks and ensured 99.9%+ high availability uptime",
        highlights: [
          "Developed and maintained high-performance responsive web applications using React JS, Next.js, and TypeScript.",
          "Contributed to mobile application development using React Native, significantly improving user experience and cross-platform performance.",
          "Gained hands-on experience in Site Reliability Engineering (SRE) practices, including active monitoring, deep-dive debugging, and maintaining overall application reliability.",
          "Partnered closely with backend engineering teams to integrate APIs and resolve production incidents using observability and logging tools, eliminating bottlenecks and maintaining high-availability uptime.",
        ],
        skills: [
          "React JS",
          "Next.js",
          "TypeScript",
          "React Native",
          "SRE Practices",
          "Observability",
          "REST APIs",
        ],
      },
      {
        title: "QA Internship",
        period: "Sept 2023 - March 2024",
        metrics: "Prevented critical production regressions & established load benchmarks",
        highlights: [
          "Led end-to-end manual and performance testing using Apache JMeter, identifying and documenting critical functional, UI, and performance bottlenecks before production releases.",
          "Analyzed system stress points and load behavior, laying the technical foundation for architectural promotions into core engineering teams.",
        ],
        skills: [
          "Apache JMeter",
          "Performance Testing",
          "API Testing",
          "Bug Lifecycle",
          "Test Automation",
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

