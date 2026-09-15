import { ProjectsContent } from "@/components/projects/ProjectsContent";

export const metadata = {
  title: "Projects — Web Applications Built in Nepal | React & Next.js Portfolio",
  description:
    "Explore production-grade web applications built by Surjan Singh Thakuri, a Software Engineer in Kathmandu, Nepal. Case studies using React, Next.js, TypeScript, and modern frontend technologies.",
  keywords: [
    "React projects Nepal",
    "Next.js projects Kathmandu",
    "web application portfolio Nepal",
    "frontend projects Kathmandu",
    "e-commerce developer Nepal",
    "CRM developer Nepal",
  ],
  openGraph: {
    title: "Projects — Surjan Singh Thakuri | Software Engineer Nepal",
    description:
      "Explore production-grade web applications built by a Software Engineer in Kathmandu, Nepal.",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
