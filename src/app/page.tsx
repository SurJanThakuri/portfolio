import { HomeContent } from "@/components/home/HomeContent";

export const metadata = {
  title: "Home",
  description:
    "Software Engineer with 3+ years of experience building production-grade web applications using React, Next.js, TypeScript, and Tailwind CSS. Based in Kathmandu, Nepal.",
  openGraph: {
    title: "Surjan Singh Thakuri — Software Engineer",
    description:
      "Software Engineer with 3+ years building production-grade web applications using React, Next.js, TypeScript, and Tailwind CSS.",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
