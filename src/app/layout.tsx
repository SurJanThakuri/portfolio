import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { ScrollToTop } from "@/components/animations/ScrollToTop";
import { CustomCursor } from "@/components/animations/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: true,
});

const SITE_URL = "https://surjansinghthakuri.com.np";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Surjan Singh Thakuri — Software Engineer | React, Next.js, TypeScript",
    template: "%s | Surjan Singh Thakuri",
  },
  description:
    "Software Engineer with 3+ years building production-grade web applications using React, Next.js, TypeScript, and Tailwind CSS. Based in Kathmandu, Nepal.",
  keywords: [
    "Surjan Singh Thakuri",
    "software engineer Nepal",
    "React developer Kathmandu",
    "Next.js developer",
    "TypeScript developer",
    "frontend engineer Nepal",
    "web developer Kathmandu",
    "Tailwind CSS",
    "full stack developer Nepal",
    "JavaScript engineer",
    "React.js portfolio",
    "hire React developer",
    "freelance web developer Nepal",
    "SaaS developer",
    "e-commerce developer",
  ],
  authors: [{ name: "Surjan Singh Thakuri", url: SITE_URL }],
  creator: "Surjan Singh Thakuri",
  publisher: "Surjan Singh Thakuri",
  formatDetection: { email: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Surjan Singh Thakuri — Software Engineer",
    title: "Surjan Singh Thakuri — Software Engineer | React, Next.js, TypeScript",
    description:
      "Software Engineer with 3+ years building production-grade web applications using React, Next.js, TypeScript, and Tailwind CSS.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Surjan Singh Thakuri — Software Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surjan Singh Thakuri — Software Engineer",
    description:
      "Software Engineer with 3+ years building production-grade web applications using React, Next.js, TypeScript, and Tailwind CSS.",
    images: [OG_IMAGE],
    creator: "@surjansingh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Surjan Singh Thakuri",
    jobTitle: "Software Engineer",
    url: SITE_URL,
    email: "surjansinghthakuri@gmail.com",
    telephone: "+977-9868791259",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    sameAs: [
      "https://www.linkedin.com/in/surjan-singh-thakuri/",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Web Development",
      "Frontend Development",
      "Full Stack Development",
    ],
    description:
      "Software Engineer with 3+ years of experience building production-grade web applications across restaurant, e-commerce, and CRM domains.",
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content="#0a0a12" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="google-site-verification" content="tBCZQ6PNipgT1EQiLZZV7bHkNTxKfQO9xi6TXLrf7SA" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N9XLKVHC');`,
          }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N9XLKVHC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <SmoothScroll>
            <CustomCursor />
            <ScrollProgress />
            <ScrollToTop />
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
