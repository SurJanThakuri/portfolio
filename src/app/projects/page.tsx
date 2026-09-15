import { ProjectsContent } from "@/components/projects/ProjectsContent";

export const metadata = {
  title: "Projects | Software Engineer Nepal — React & Next.js Apps",
  description:
    "Production-grade web apps built by a Software Engineer in Kathmandu, Nepal. React, Next.js, TypeScript & Tailwind CSS projects.",
  alternates: {
    canonical: "https://www.surjansinghthakuri.com.np/projects",
  },
  openGraph: {
    title: "Projects | Software Engineer Nepal",
    description:
      "Production-grade web apps built by a Software Engineer in Kathmandu, Nepal.",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
