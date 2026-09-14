export interface Experience {
  id: string;
  status: string;
  dateRange: string;
  location: string;
  role: string;
  company: string;
  description: string;
  impact: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    status: "ACTIVE",
    dateRange: "JUL 2024 - PRESENT",
    location: "Kathmandu, Nepal",
    role: "Software Engineer",
    company: "Gripas Marketing",
    description:
      "Leading frontend development for core modules. Building React components with TypeScript and Tailwind CSS. Integrating REST APIs with TanStack Query.",
    impact: "VIEW PRODUCTION IMPACT",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Zod"],
    metrics: [
      { label: "TEAM", value: "2-3 devs" },
      { label: "STACK", value: "React + TS" },
    ],
  },
  {
    id: "exp-2",
    status: "ARCHIVED",
    dateRange: "JUN 2023 - NOV 2023",
    location: "Lalitpur, Nepal",
    role: "Web Developer Intern",
    company: "Bibhuti Solutions",
    description:
      "Built CRUD apps with PHP/Laravel. Gained MVC experience and transitioned to React workflows.",
    impact: "VIEW DETAILS",
    tags: ["PHP", "Laravel", "MySQL", "MVC", "React"],
    metrics: [{ label: "ARCHITECTURE", value: "MVC" }],
  },
];

export const experienceMetrics = [
  { label: "EXPERIENCE", value: "3+ Years", description: "Production web apps", icon: "experience" },
  { label: "LEADERSHIP", value: "2-3 Devs", description: "Teams coordinated", icon: "team" },
  { label: "PROJECTS", value: "6+", description: "Live applications", icon: "projects" },
  { label: "DELIVERY", value: "100%", description: "On-time track record", icon: "satisfaction" },
];

export const philosophyPrinciples = [
  {
    id: "01",
    label: "ARCHITECTURE",
    title: "Reusable Components",
    description: "Scalable component libraries with TypeScript and Tailwind CSS.",
    resilience: "REUSABLE",
  },
  {
    id: "02",
    label: "TYPE SAFETY",
    title: "End-to-End Types",
    description: "TypeScript and Zod validation eliminate runtime errors.",
    resilience: "TYPE_SAFE",
  },
  {
    id: "03",
    label: "UX",
    title: "Performance First",
    description: "Responsive, accessible interfaces optimized for all devices.",
    resilience: "ACCESSIBLE",
  },
];
