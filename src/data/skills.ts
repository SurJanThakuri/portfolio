export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    levelLabel: string;
    description?: string;
  }[];
  footerLabel?: string;
  footerValue?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    number: "CAT 01",
    title: "Frontend",
    description: "Core frontend technologies.",
    skills: [
      { name: "React.js", level: "expert", levelLabel: "EXPERT", description: "Components, Hooks, Context" },
      { name: "Next.js", level: "advanced", levelLabel: "ADVANCED", description: "App Router, SSR, SSG" },
      { name: "TypeScript", level: "advanced", levelLabel: "ADVANCED", description: "Type safety, interfaces" },
      { name: "Tailwind CSS", level: "expert", levelLabel: "EXPERT", description: "Utility-first styling" },
      { name: "GSAP", level: "advanced", levelLabel: "ADVANCED", description: "Animations" },
      { name: "Capacitor.js", level: "proficient", levelLabel: "PROFICIENT", description: "Native apps" },
    ],
    footerLabel: "STACK",
    footerValue: "REACT + TS",
  },
  {
    id: "state",
    number: "CAT 02",
    title: "State & Data",
    description: "State management and data fetching.",
    skills: [
      { name: "Redux Toolkit", level: "advanced", levelLabel: "ADVANCED", description: "Global state" },
      { name: "Context API", level: "expert", levelLabel: "EXPERT", description: "React state" },
      { name: "TanStack Query", level: "advanced", levelLabel: "ADVANCED", description: "Server state, caching" },
      { name: "Axios", level: "advanced", levelLabel: "ADVANCED", description: "HTTP client" },
      { name: "REST APIs", level: "advanced", levelLabel: "ADVANCED", description: "API integration" },
    ],
    footerLabel: "DATA",
    footerValue: "TANSTACK + REDUX",
  },
  {
    id: "forms",
    number: "CAT 03",
    title: "Forms & Validation",
    description: "Form handling and validation.",
    skills: [
      { name: "React Hook Form", level: "advanced", levelLabel: "ADVANCED", description: "Performance forms" },
      { name: "Zod", level: "advanced", levelLabel: "ADVANCED", description: "Schema validation" },
      { name: "Accessibility", level: "expert", levelLabel: "EXPERT", description: "ARIA, keyboard nav" },
    ],
    footerLabel: "VALIDATION",
    footerValue: "ZOD + RHF",
  },
  {
    id: "backend",
    number: "CAT 04",
    title: "Backend & DevOps",
    description: "Backend basics and CI/CD.",
    skills: [
      { name: "Node.js", level: "proficient", levelLabel: "PROFICIENT", description: "Express.js" },
      { name: "PHP / Laravel", level: "proficient", levelLabel: "PROFICIENT", description: "MVC, CRUD" },
      { name: "GitLab CI/CD", level: "advanced", levelLabel: "ADVANCED", description: "Pipelines, Runners" },
      { name: "Git", level: "advanced", levelLabel: "ADVANCED", description: "Version control" },
    ],
    footerLabel: "DEVOPS",
    footerValue: "GITLAB CI/CD",
  },
  {
    id: "practices",
    number: "CAT 05",
    title: "Engineering Practices",
    description: "Professional skills.",
    skills: [
      { name: "Team Leadership", level: "advanced", levelLabel: "ADVANCED", description: "2-3 dev teams" },
      { name: "Code Reviews", level: "advanced", levelLabel: "ADVANCED", description: "Quality assurance" },
      { name: "Mentoring", level: "advanced", levelLabel: "ADVANCED", description: "Junior guidance" },
      { name: "Responsive Design", level: "expert", levelLabel: "EXPERT", description: "Mobile-first" },
    ],
    footerLabel: "SOFT SKILLS",
    footerValue: "LEADERSHIP",
  },
];

export const pipelineNodes = [
  {
    id: "01",
    title: "Client Layer",
    subtitle: "React.js / Next.js",
    tags: ["Components", "Hooks"],
    description: "Component-based architecture with React and Next.js.",
    detailTags: ["React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "02",
    title: "State & Data",
    subtitle: "Redux / TanStack Query",
    tags: ["Global State", "Server State"],
    description: "State management with Redux and data fetching with TanStack Query.",
    detailTags: ["Redux Toolkit", "Context API", "TanStack Query"],
  },
  {
    id: "03",
    title: "Forms & Validation",
    subtitle: "React Hook Form / Zod",
    tags: ["Validation", "Type Safety"],
    description: "Form handling with RHF and schema validation with Zod.",
    detailTags: ["React Hook Form", "Zod", "TypeScript"],
  },
  {
    id: "04",
    title: "API Integration",
    subtitle: "Axios / REST APIs",
    tags: ["HTTP Client", "Data"],
    description: "RESTful API integration with Axios.",
    detailTags: ["Axios", "REST APIs", "Error Handling"],
  },
];

export const philosophies = [
  {
    id: "01",
    title: "Reusable Components",
    description: "Scalable component libraries with TypeScript and Tailwind CSS.",
  },
  {
    id: "02",
    title: "Type Safety",
    description: "TypeScript and Zod eliminate runtime errors.",
  },
  {
    id: "03",
    title: "Performance",
    description: "Responsive, accessible interfaces for all devices.",
  },
];
