import { ContactContent } from "@/components/contact/ContactContent";

export const metadata = {
  title: "Contact | Hire a Software Engineer in Kathmandu, Nepal",
  description:
    "Hire a Software Engineer in Kathmandu, Nepal. Available for full-time roles, freelance projects & collaborations.",
  alternates: {
    canonical: "https://www.surjansinghthakuri.com.np/contact",
  },
  openGraph: {
    title: "Contact | Hire Software Engineer Nepal",
    description:
      "Hire a Software Engineer in Kathmandu, Nepal. Available for roles & projects.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
