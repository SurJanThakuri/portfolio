"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FadeIn,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  CardHover,
} from "@/components/animations/Animations";

const filters = [
  { id: "all", label: "ALL" },
  { id: "fullstack", label: "FULL-STACK" },
  { id: "ml", label: "ML & DATA" },
  { id: "frontend", label: "UI ARCH" },
];

const filterMap: Record<string, string[]> = {
  all: [],
  fullstack: ["001"],
  ml: ["002"],
  frontend: ["003", "004"],
};

export function ProjectsContent() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => filterMap[activeFilter]?.includes(p.id));

  return (
    <div className="pt-[60px] min-h-screen bg-bg-primary">
      <section className="border-b border-border-primary bg-bg-primary">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
          <FadeIn>
            <div className="hidden sm:flex items-center justify-between text-[10px] text-text-muted font-mono mb-8">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green" />
                <span>SYSTEM RUNTIME: V4.19-STABLE · LATENCY: 18MS AVG</span>
              </div>
              <span>INDEX: 09 ARCHITECTURES</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="section-label mb-3">01 // ARCHITECTURE &amp; CASE STUDIES</p>
            <h1 className="text-[1.5rem] sm:text-[2.25rem] lg:text-[3rem] font-bold leading-[1.05] tracking-tight mb-3 sm:mb-4">
              ENGINEERED WITH PRECISION,<br className="hidden sm:block" />
              <span className="sm:hidden"> BUILT FOR SCALE.</span>
              <span className="hidden sm:inline">BUILT FOR SCALE.</span>
            </h1>
            <p className="text-[12px] sm:text-[13px] text-text-secondary max-w-[500px] leading-relaxed mb-6 sm:mb-8">
              Deep dive into platforms and high-performance user systems.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-mono rounded-sm transition-all border ${
                    activeFilter === filter.id
                      ? "bg-accent/15 text-accent border-accent/30"
                      : "text-text-secondary border-border-primary hover:border-border-secondary hover:text-text-primary"
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 space-y-4 sm:space-y-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <CardHover>
                  <div className="bg-bg-card border border-border-primary rounded-sm overflow-hidden hover:border-border-secondary transition-colors">
                    <div className="p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                        <span className="tag tag-accent text-[9px] sm:text-[10px] font-mono">ID: {project.id} // {project.category}</span>
                        <span className="text-[9px] sm:text-[10px] text-text-muted font-mono hidden sm:inline">TENANT: {project.tenant}</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[17px] font-bold leading-snug mb-2 sm:mb-3">{project.title}</h3>
                      <p className="text-[11px] sm:text-[12px] text-text-secondary leading-relaxed mb-4 sm:mb-5">{project.description}</p>
                      {project.specs.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
                          {project.specs.map((spec) => (
                            <div key={spec.label} className="p-2 sm:p-3 bg-bg-secondary rounded-sm border border-border-primary">
                              <p className="text-[8px] sm:text-[9px] text-text-muted font-mono tracking-wider mb-1">{spec.label}</p>
                              <p className="text-[10px] sm:text-[11px] text-text-secondary font-mono">{spec.value}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {project.links.map((link, j) => (
                          <motion.a
                            key={link.label}
                            href={link.href}
                            whileHover={{ x: 2 }}
                            className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono transition-colors ${
                              j === 0
                                ? "bg-accent/15 text-accent border border-accent/30 px-3 py-1.5 rounded-sm hover:bg-accent/25"
                                : "text-text-muted hover:text-text-primary border border-border-primary px-3 py-1.5 rounded-sm hover:border-border-secondary"
                            }`}
                          >
                            {link.label}
                            {j === 0 && <ArrowRight size={11} />}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-border-primary bg-bg-secondary p-4 sm:p-6 lg:p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                        <span className="text-[10px] text-text-muted font-mono">{project.status}</span>
                      </div>
                      <StaggerContainer className="grid grid-cols-3 gap-2 sm:gap-3">
                        {project.metrics.map((metric) => (
                          <StaggerItem key={metric.label}>
                            <div>
                              <p className="text-[8px] sm:text-[9px] text-text-muted font-mono tracking-wider mb-1">{metric.label}</p>
                              <p className="text-[13px] sm:text-[15px] font-bold">{metric.value}</p>
                              <p className="text-[8px] sm:text-[9px] text-text-muted font-mono hidden sm:block">{metric.sub}</p>
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  </div>
                </CardHover>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section className="py-8 sm:py-10 border-t border-border-primary">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { id: "METHOD 01", title: "ZERO BLEED SYSTEMS", desc: "Stateless execution, isolated tenant partitioning." },
              { id: "METHOD 02", title: "HARDWARE TELEMETRY", desc: "Direct bridging of software and edge hardware." },
              { id: "METHOD 03", title: "TYPE STRICTNESS", desc: "Uncompromised TypeScript inference and Zod validation." },
            ].map((method) => (
              <StaggerItem key={method.id}>
                <CardHover>
                  <div className="bg-bg-card border border-border-primary p-4 sm:p-6 rounded-sm hover:border-border-secondary transition-colors">
                    <span className="text-[10px] text-text-muted font-mono tracking-wider">[{method.id}]</span>
                    <h3 className="text-[13px] sm:text-[15px] font-semibold mt-3 mb-2 sm:mb-3">{method.title}</h3>
                    <p className="text-[11px] sm:text-[12px] text-text-secondary leading-relaxed">{method.desc}</p>
                  </div>
                </CardHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
