"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  LayoutGrid,
  Code2,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  CardHover,
} from "@/components/animations/Animations";

const corePillars = [
  {
    id: "CAPABILITY_01",
    icon: LayoutGrid,
    title: "Frontend Architecture",
    description:
      "Building performant web apps with React.js, TypeScript, and modern tooling.",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    id: "CAPABILITY_02",
    icon: Code2,
    title: "Type-Safe Development",
    description:
      "Robust form validation and type safety with React Hook Form and Zod.",
    tags: ["React Hook Form", "Zod", "TypeScript", "TanStack Query"],
  },
  {
    id: "CAPABILITY_03",
    icon: Layers,
    title: "Full-Stack Integration",
    description:
      "REST API integration with TanStack Query, Axios, Node.js, and Express.js.",
    tags: ["Node.js", "Express.js", "REST APIs", "Axios", "GitLab CI/CD"],
  },
];

const homeMetrics = [
  { label: "EXPERIENCE", value: "3+ Years", sub: "Production web apps" },
  {
    label: "PRIMARY STACK",
    value: "React / Next.js / TypeScript",
    sub: "Frontend focus",
  },
  {
    label: "DOMAINS",
    value: "Restaurant, E-commerce, CRM",
    sub: "Diverse portfolio",
  },
];

const projectHighlights = [
  {
    id: "SYS_01",
    title: "Tiya",
    subtitle: "Restaurant Management System",
    status: "LIVE IN PROD",
    statusLabel: "100+ DAILY USERS",
    description:
      "Full-featured POS with order tracking, inventory, billing, and KOT workflows. Thermal printer integration. 100+ daily users.",
    leftMetrics: [
      { label: "DAILY USERS", value: "100+", sub: "Production" },
      { label: "ORDER TRACKING", value: "Real-time", sub: "WebSocket" },
      { label: "KOT", value: "Live", sub: "Kitchen display" },
    ],
    tags: ["React.js", "TypeScript", "WebSocket", "POS"],
    rightPanel: {
      title: "[TIYA_SYSTEM_LOG]",
      status: "STATUS: OPERATIONAL",
      logs: [
        "> Initializing POS terminal...",
        "> WebSocket connection established",
        "> Order #49281: 14 items processed",
        "> KOT sent to kitchen display",
        "> Thermal printer spooler: ONLINE",
        "> [MONITOR] System health: 100% OK",
      ],
      footer: "DEPLOYMENT: PRODUCTION ENVIRONMENT",
      footerStatus: "ACTIVE",
    },
  },
  {
    id: "SYS_02",
    title: "Chino & Silver6",
    subtitle: "E-commerce Platforms",
    status: "PRODUCTION",
    statusLabel: "FULL CUSTOMER EXPERIENCE",
    description:
      "E-commerce platforms with product listing, search, shopping cart, admin dashboards, and real-time delivery tracking.",
    leftMetrics: [
      { label: "CATALOG", value: "Full", sub: "Search & filtering" },
      { label: "ORDERS", value: "Complete", sub: "End-to-end" },
      { label: "TRACKING", value: "Real-time", sub: "Delivery status" },
    ],
    tags: ["React.js", "TypeScript", "E-commerce", "Dashboard"],
    rightPanel: null,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function HomeContent() {
  return (
    <div className="pt-[60px]">
      {/* Section 1: Hero Section */}
      <section className="border-b border-border-primary bg-bg-primary bg-dots relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left Column - Hero Content */}
            <div className="lg:w-[60%]">
              {/* System Status Line */}
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-2 text-[11px] text-text-muted font-mono mb-8">
                  <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
                  <span>// SYSTEM CORE</span>
                  <span className="text-text-muted">·</span>
                  <span>KATHMANDU, NP</span>
                  <span>[27.7172&deg; N, 85.3240&deg; E]</span>
                </div>
              </FadeIn>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.05] tracking-tight mb-8">
                Software Engineer
                <br />
                building{" "}
                <motion.span
                  initial={{ color: "#6c5ce7" }}
                  animate={{ color: "#6c5ce7" }}
                  className="text-accent">
                  production-grade
                </motion.span>
                <br />
                web applications.
              </motion.h1>

              {/* Description */}
              <FadeIn delay={0.4}>
                <p className="text-[13px] text-text-secondary mb-10 max-w-[540px] leading-relaxed">
                  3+ years shipping web apps across restaurant, e-commerce, and
                  CRM domains.
                </p>
              </FadeIn>

              {/* CTA Buttons + Status */}
              <FadeIn delay={0.5}>
                <div className="flex flex-wrap items-center gap-3 mb-12">
                  <Link href="/projects">
                    <motion.span
                      whileHover={{ scale: 1.02, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 text-[11px] font-medium tracking-wide rounded-sm transition-colors cursor-pointer">
                      EXPLORE SYSTEM PROJECTS
                      <ArrowRight size={12} />
                    </motion.span>
                  </Link>
                  <Link href="/contact">
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 border border-border-secondary text-text-secondary hover:text-text-primary hover:border-border-accent px-5 py-2.5 text-[11px] font-medium tracking-wide rounded-sm transition-colors cursor-pointer">
                      <ChevronRight size={12} />
                      INITIALIZE CONTACT
                    </motion.span>
                  </Link>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="inline-flex items-center gap-2 text-[11px] text-green ml-2 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                    STATUS: READY_FOR_DISPATCH
                  </motion.span>
                </div>
              </FadeIn>

              {/* Bottom Metrics */}
              <FadeIn delay={0.6}>
                <div className="grid grid-cols-3 gap-6 border-t border-border-primary pt-8">
                  {homeMetrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}>
                      <p className="text-[10px] text-text-muted tracking-wider mb-1.5 font-mono">
                        {metric.label}
                      </p>
                      <p className="text-[14px] font-semibold">
                        {metric.value}
                      </p>
                      <p className="text-[11px] text-text-muted">
                        {metric.sub}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right Column - System Panel */}
            <FadeInRight delay={0.3} className="lg:w-[40%]">
              <div className="bg-bg-card border border-border-primary rounded-sm overflow-hidden">
                <div className="px-5 py-3 border-b border-border-primary flex items-center justify-between">
                  <span className="text-[10px] text-text-muted font-mono tracking-wider">
                    // TECH STACK OVERVIEW
                  </span>
                  <span className="text-[10px] text-text-muted font-mono">
                    FRONTEND FOCUS
                  </span>
                </div>
                <div className="p-5">
                  <div className="mb-5 p-4 bg-bg-secondary rounded-sm border border-border-primary">
                    <p className="text-[10px] text-text-muted font-mono mb-2 tracking-wider">
                      PRIMARY_STACK:
                    </p>
                    <div className="space-y-1">
                      <p className="text-[12px] text-green font-mono">
                        ● React.js + TypeScript
                      </p>
                      <p className="text-[12px] text-accent font-mono">
                        ● Next.js + Tailwind CSS
                      </p>
                    </div>
                  </div>
                  <StaggerContainer className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      {
                        label: "EXPERIENCE",
                        value: "3+",
                        sub: "Years production",
                      },
                      {
                        label: "PROJECTS",
                        value: "6+",
                        sub: "Live applications",
                      },
                      {
                        label: "TEAM SIZE",
                        value: "2-3",
                        sub: "Developers led",
                      },
                      {
                        label: "DOMAINS",
                        value: "3+",
                        sub: "Industry verticals",
                      },
                    ].map((stat) => (
                      <StaggerItem key={stat.label}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="p-4 bg-bg-secondary rounded-sm border border-border-primary">
                          <p className="text-[10px] text-text-muted font-mono mb-1 tracking-wider">
                            {stat.label}
                          </p>
                          <p className="text-xl font-bold">{stat.value}</p>
                          <p className="text-[10px] text-text-muted font-mono">
                            {stat.sub}
                          </p>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                  <div className="p-4 bg-bg-secondary rounded-sm border border-border-primary">
                    <p className="text-[11px] text-green font-mono">
                      $ contact surjansinghthakuri@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Section 2: Core Engineering Pillars */}
      <section className="border-b border-border-primary bg-bg-primary">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <FadeInLeft className="lg:w-[30%] flex-shrink-0">
              <p className="section-label mb-4">// SPECIFICATION INDEX</p>
              <h2 className="text-[2.5rem] lg:text-[3.25rem] font-bold leading-[1.05] tracking-tight mb-6">
                Core
                <br />
                Engineering
                <br />
                Pillars
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed max-w-[280px]">
                Built with modern frontend technologies for production-grade
                performance.
              </p>
            </FadeInLeft>

            <StaggerContainer className="lg:w-[70%] grid md:grid-cols-3 gap-4">
              {corePillars.map((pillar) => (
                <StaggerItem key={pillar.id}>
                  <CardHover>
                    <div className="bg-bg-card border border-border-primary p-5 rounded flex flex-col h-full hover:border-border-secondary transition-colors">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] text-text-muted tracking-wider font-mono">
                          [{pillar.id}]
                        </span>
                        <pillar.icon
                          size={18}
                          className="text-text-muted"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-[15px] font-semibold mb-3 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-[12px] text-text-secondary leading-relaxed mb-5 flex-1">
                        {pillar.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {pillar.tags.map((tag) => (
                          <span key={tag} className="tag text-[9px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Section 3: Selected Systems */}
      <section className="border-b border-border-primary bg-bg-primary">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <FadeIn>
            <div className="flex items-start justify-between mb-12">
              <div>
                <p className="section-label mb-4">// PRODUCTION ARTIFACTS</p>
                <h2 className="text-[2.25rem] lg:text-[2.75rem] font-bold leading-[1.05] tracking-tight">
                  Selected Systems Engineering
                </h2>
              </div>
              <Link href="/projects" className="mt-4">
                <motion.span
                  whileHover={{ x: 4 }}
                  className="text-[11px] text-text-muted hover:text-text-primary transition-colors font-mono tracking-wider inline-block">
                  VIEW COMPLETE ARCHIVE [09] &rarr;
                </motion.span>
              </Link>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {projectHighlights.map((project, i) => (
              <FadeInUp key={project.id} delay={i * 0.15}>
                <CardHover>
                  <div className="bg-bg-card border border-border-primary rounded-sm overflow-hidden hover:border-border-secondary transition-colors">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-[60%] p-6 lg:p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="tag tag-accent text-[10px] font-mono">
                            SYSTEM ID: {project.id}
                          </span>
                          <span className="text-[10px] text-text-muted font-mono">
                            // {project.subtitle}
                          </span>
                        </div>
                        <h3 className="text-[17px] font-bold leading-snug mb-3">
                          {project.title}
                        </h3>
                        <p className="text-[12px] text-text-secondary leading-relaxed mb-5">
                          {project.description}
                        </p>
                        <StaggerContainer className="grid grid-cols-3 gap-3 mb-5">
                          {project.leftMetrics.map((metric) => (
                            <StaggerItem key={metric.label}>
                              <div className="p-3 bg-bg-secondary rounded-sm border border-border-primary">
                                <p className="text-[9px] text-text-muted font-mono tracking-wider mb-1">
                                  {metric.label}
                                </p>
                                <p className="text-[14px] font-bold">
                                  {metric.value}
                                </p>
                                <p className="text-[9px] text-text-muted">
                                  {metric.sub}
                                </p>
                              </div>
                            </StaggerItem>
                          ))}
                        </StaggerContainer>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="tag text-[9px]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      {project.rightPanel && (
                        <div className="lg:w-[40%] border-t lg:border-t-0 lg:border-l border-border-primary bg-bg-secondary p-6 lg:p-8">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                            <span className="text-[10px] text-text-muted font-mono">
                              {project.rightPanel.status}
                            </span>
                          </div>
                          <p className="text-[10px] text-text-muted font-mono mb-3">
                            {project.rightPanel.title}
                          </p>
                          <div className="space-y-1.5 mb-4">
                            {project.rightPanel.logs.map((log, j) => (
                              <motion.p
                                key={j}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: j * 0.08, duration: 0.4 }}
                                className="text-[11px] text-text-secondary font-mono">
                                {log}
                              </motion.p>
                            ))}
                          </div>
                          <div className="flex items-center justify-between border-t border-border-primary pt-4 text-[10px] text-text-muted font-mono">
                            <span>{project.rightPanel.footer}</span>
                            <span className="text-green">
                              {project.rightPanel.footerStatus}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHover>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Technical Track Record */}
      <section className="border-b border-border-primary bg-bg-primary bg-grid">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <FadeInLeft className="lg:w-[35%] flex-shrink-0">
              <p className="section-label mb-4">// EXPERIENCE LEDGER</p>
              <h2 className="text-[2.25rem] lg:text-[2.75rem] font-bold leading-[1.05] tracking-tight mb-6">
                Technical Track
                <br />
                Record
              </h2>
              <p className="text-[13px] text-text-secondary leading-relaxed mb-8">
                3+ years shipping production web apps.
              </p>
              <Link href="/experience">
                <motion.span
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-[11px] text-text-muted hover:text-text-primary transition-colors font-mono tracking-wider">
                  FULL CAREER HISTORY &amp; TIMELINE &rarr;
                </motion.span>
              </Link>
            </FadeInLeft>

            <div className="lg:w-[65%] space-y-5">
              {[
                {
                  role: "Software Engineer",
                  company: "Gripas Marketing",
                  date: "Jul 2024 · Present",
                  desc: "Led frontend development for core modules. Coordinated 2-3 developers. Built React components with TypeScript and Tailwind CSS.",
                  tags: [
                    "React.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "TanStack Query",
                    "Zod",
                  ],
                },
                {
                  role: "Web Developer Intern",
                  company: "Bibhuti Solutions",
                  date: "Jun 2023 · Nov 2023",
                  desc: "Built CRUD apps with PHP/Laravel. Gained MVC experience and transitioned to React workflows.",
                  tags: ["PHP", "Laravel", "MySQL", "MVC", "React"],
                },
              ].map((exp, i) => (
                <FadeInUp key={exp.role} delay={i * 0.15}>
                  <CardHover>
                    <div className="bg-bg-card border border-border-primary rounded-sm p-6 hover:border-border-secondary transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-[15px] font-bold">
                          {exp.role}{" "}
                          <span className="text-text-muted font-normal">
                            &middot; {exp.company}
                          </span>
                        </h3>
                        <span className="tag text-[9px] flex-shrink-0 ml-4">
                          {exp.date}
                        </span>
                      </div>
                      <p className="text-[12px] text-text-secondary leading-relaxed mb-4">
                        {exp.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="tag text-[9px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardHover>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Contact CTA */}
      <section className="bg-bg-primary bg-dots">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <FadeInUp>
            <CardHover>
              <div className="bg-bg-card border border-border-primary rounded-sm p-8 lg:p-10 hover:border-border-secondary transition-colors">
                <p className="section-label mb-4">// INITIATE COLLABORATION</p>
                <h2 className="text-[2rem] lg:text-[2.5rem] font-bold leading-tight mb-4">
                  Have an ambitious system to construct?
                </h2>
                <p className="text-[13px] text-text-secondary max-w-[600px] mb-8 leading-relaxed">
                  Let&apos;s build something great together.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact">
                    <motion.span
                      whileHover={{ scale: 1.02, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 text-[11px] font-medium tracking-wide rounded-sm transition-colors cursor-pointer">
                      GET IN TOUCH
                      <ArrowRight size={12} />
                    </motion.span>
                  </Link>
                  <Link href="/skills">
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 border border-border-secondary text-text-secondary hover:text-text-primary hover:border-border-accent px-5 py-2.5 text-[11px] font-medium tracking-wide rounded-sm transition-colors cursor-pointer">
                      VIEW TECH STACK
                      <ArrowRight size={12} />
                    </motion.span>
                  </Link>
                </div>
              </div>
            </CardHover>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
