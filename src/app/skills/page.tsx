import { SkillsContent } from "@/components/skills/SkillsContent";

export const metadata = {
  title: "Skills & Architecture",
  description:
    "Technical skills and architecture capabilities. Proficient in React.js, Next.js, TypeScript, Tailwind CSS, Node.js, REST APIs, and modern frontend engineering practices.",
  keywords: [
    "React skills",
    "Next.js skills",
    "TypeScript proficiency",
    "frontend architecture",
    "Tailwind CSS",
    "web development skills",
    "technical capabilities",
  ],
  openGraph: {
    title: "Skills & Architecture — Surjan Singh Thakuri",
    description:
      "Technical skills and architecture capabilities in React, Next.js, TypeScript, and more.",
  },
};

export default function SkillsPage() {
  return <SkillsContent />;
}
