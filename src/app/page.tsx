import { HomeContent } from "@/components/home/HomeContent";

export const metadata = {
  title: "Home",
  description:
    "Surjan Singh Thakuri is a Software Engineer in Kathmandu, Nepal with 3+ years of experience building production-grade web applications using React, Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "software engineer Kathmandu",
    "web developer Nepal",
    "React developer Kathmandu",
    "hire software engineer Nepal",
  ],
  openGraph: {
    title: "Surjan Singh Thakuri — Software Engineer in Kathmandu, Nepal",
    description:
      "Software Engineer in Kathmandu, Nepal with 3+ years building web applications using React, Next.js, TypeScript, and Tailwind CSS.",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
