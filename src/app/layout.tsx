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
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Surjan Singh Thakuri // Software Engineer",
  description:
    "Software Engineer with 3+ years of experience delivering production-grade web applications.",
  keywords: [
    "software engineer",
    "react developer",
    "next.js",
    "typescript",
    "tailwind css",
    "web developer",
    "kathmandu nepal",
  ],
  openGraph: {
    title: "Surjan Singh Thakuri // Software Engineer",
    description:
      "Software Engineer with 3+ years of experience delivering production-grade web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
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
