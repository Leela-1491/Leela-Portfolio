export interface ExperienceRole {
  title: string;
  period: string;
  isCurrent?: boolean;
  highlights: string[];
  skills: string[];
  metrics?: string;
}

export interface ExperienceCompany {
  company: string;
  location: string;
  totalPeriod: string;
  summary: string;
  roles: ExperienceRole[];
}

export interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  location?: string;
  cgpa: string;
  period?: string;
  achievements?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Expert" | "Proficient" | "Familiar";
    highlight?: boolean;
  }[];
}

export interface PortfolioProfile {
  name: string;
  title: string;
  experienceYears: string;
  summary: string;
  atsKeywords: string[];
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    phone?: string;
    location: string;
  };
  resumeUrl: string;
}

