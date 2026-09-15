import { ProjectsContent } from "@/components/projects/ProjectsContent";

export const metadata = {
  title: "Projects",
  description:
    "Engineering case studies and architecture deep dives. Explore production-grade web applications built with React, Next.js, TypeScript, and modern frontend technologies.",
  keywords: [
    "React projects",
    "Next.js projects",
    "web application portfolio",
    "frontend projects",
    "TypeScript projects",
    "e-commerce development",
    "CRM development",
  ],
  openGraph: {
    title: "Projects — Surjan Singh Thakuri",
    description:
      "Engineering case studies and architecture deep dives. Explore production-grade web applications.",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
