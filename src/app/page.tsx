import { HomeContent } from "@/components/home/HomeContent";

export const metadata = {
  title: "Surjan Singh Thakuri | Software Engineer in Kathmandu, Nepal",
  description:
    "Software Engineer in Kathmandu, Nepal. 3+ years building web apps with React, Next.js, TypeScript & Tailwind CSS.",
  alternates: {
    canonical: "https://www.surjansinghthakuri.com.np",
  },
  openGraph: {
    title: "Surjan Singh Thakuri | Software Engineer in Kathmandu, Nepal",
    description:
      "Software Engineer in Kathmandu, Nepal. 3+ years building web apps with React, Next.js, TypeScript & Tailwind CSS.",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
