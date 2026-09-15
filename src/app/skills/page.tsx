import { SkillsContent } from "@/components/skills/SkillsContent";

export const metadata = {
  title: "Skills | React, Next.js & TypeScript Developer Nepal",
  description:
    "Technical skills: React.js, Next.js, TypeScript, Tailwind CSS, Node.js & REST APIs. Software Engineer in Kathmandu, Nepal.",
  alternates: {
    canonical: "https://www.surjansinghthakuri.com.np/skills",
  },
  openGraph: {
    title: "Skills | React & Next.js Developer Nepal",
    description:
      "Technical skills in React, Next.js, TypeScript & modern frontend engineering.",
  },
};

export default function SkillsPage() {
  return <SkillsContent />;
}
