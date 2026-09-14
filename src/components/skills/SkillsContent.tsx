"use client";

import { useState } from "react";
import {
  skillCategories,
  pipelineNodes,
  philosophies,
} from "@/data/skills";
import {
  Terminal,
  Search,
  Monitor,
  Shield,
  Database,
  Globe,
} from "lucide-react";
import {
  FadeIn,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  CardHover,
} from "@/components/animations/Animations";
import { motion, AnimatePresence } from "framer-motion";

const nodeIcons = [Monitor, Shield, Database, Globe];

export function SkillsContent() {
  const [selectedNode, setSelectedNode] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const totalModules = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  const filteredCategories = skillCategories.map((cat) => ({
    ...cat,
    skills: cat.skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => cat.skills.length > 0);

  return (
    <div className="pt-[60px] min-h-screen">
      {/* Header */}
      <section className="border-b border-border-primary py-12 bg-grid">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="flex items-center gap-2 text-[10px] text-text-muted mb-4">
              <Terminal size={12} />
              <span>INDEX SPECIFICATION 03 // STACK MATRIX &amp; SYSTEM ARCHITECTURE</span>
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <FadeIn delay={0.1}>
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
                Comprehensive Technical Capabilities
              </h1>
              <p className="text-sm text-text-secondary max-w-xl">
                Engineered for production resilience, structural type-safety,
                and sub-second deterministic delivery.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex items-center gap-2 bg-bg-card border border-border-primary px-3 py-2 rounded-sm">
                <Search size={14} className="text-text-muted" />
                <input
                  type="text"
                  placeholder="FILTER CAPABILITIES..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-[11px] text-text-primary placeholder:text-text-muted outline-none w-64"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-[10px] text-accent hover:text-accent-hover"
                  >
                    RESET
                  </button>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Interactive Pipeline Architecture */}
      <section className="py-12 border-b border-border-primary">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="bg-bg-card border border-border-primary p-6 rounded-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold">Interactive Pipeline Architecture</span>
                  <span className="tag tag-accent text-[9px]">STREAM ACTIVE</span>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                    Live Latency: 14ms
                  </span>
                  <span>&middot;</span>
                  <span>Click any node to inspect</span>
                </div>
              </div>

              <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {pipelineNodes.map((node, index) => {
                  const Icon = nodeIcons[index];
                  return (
                    <StaggerItem key={node.id}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedNode(index)}
                        className={`p-4 rounded-sm border text-left transition-all w-full ${
                          selectedNode === index
                            ? "bg-accent/10 border-accent/30"
                            : "bg-bg-secondary border-border-primary hover:border-border-secondary"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] text-text-muted tracking-wider">NODE {node.id}</span>
                          <Icon size={14} className={selectedNode === index ? "text-accent" : "text-text-muted"} />
                        </div>
                        <h4 className="text-sm font-semibold mb-1">{node.title}</h4>
                        <p className="text-[10px] text-text-muted mb-2">{node.subtitle}</p>
                        <div className="flex flex-wrap gap-1">
                          {node.tags.map((tag) => (
                            <span key={tag} className="tag text-[8px]">{tag}</span>
                          ))}
                        </div>
                      </motion.button>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>

              <div className="mb-6">
                <div className="flex items-center justify-between text-[10px] text-text-muted mb-2">
                  <span>PACKET INGRESS &amp; EGRESS CYCLE</span>
                  <span>STATE: TRANSMITTING PAYLOAD</span>
                </div>
                <div className="h-1 bg-bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-accent to-green rounded-full"
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedNode}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-bg-secondary rounded-sm border border-border-primary"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] text-text-muted tracking-wider">
                      SELECTED: NODE {pipelineNodes[selectedNode].id}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold mb-2">{pipelineNodes[selectedNode].title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3">
                    {pipelineNodes[selectedNode].description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {pipelineNodes[selectedNode].detailTags.map((tag) => (
                      <span key={tag} className="tag text-[9px]">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="section-label mb-2">TAXONOMY 02</p>
                <h2 className="text-2xl font-bold">Structured Competencies &amp; Runtime Specs</h2>
              </div>
              <span className="text-[11px] text-text-muted">
                Showing {totalModules} / {totalModules} Modules
              </span>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCategories.map((category) => (
              <StaggerItem key={category.id}>
                <CardHover>
                  <div className="bg-bg-card border border-border-primary p-5 rounded-sm h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] text-accent tracking-wider">[{category.number}]</span>
                      <span className="text-[10px] text-text-muted tracking-wider">{category.title}</span>
                    </div>
                    <p className="text-[11px] text-text-secondary leading-relaxed mb-4">{category.description}</p>
                    <div className="space-y-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between py-2 border-b border-border-primary last:border-0"
                        >
                          <div>
                            <p className="text-xs font-medium">{skill.name}</p>
                            {skill.description && (
                              <p className="text-[10px] text-text-muted">{skill.description}</p>
                            )}
                          </div>
                          <span className={`tag text-[8px] ${skill.level === "expert" ? "tag-accent" : ""}`}>
                            {skill.levelLabel}
                          </span>
                        </div>
                      ))}
                    </div>
                    {category.footerLabel && (
                      <div className="flex items-center justify-between border-t border-border-primary pt-3 mt-3">
                        <span className="text-[9px] text-text-muted tracking-wider">{category.footerLabel}</span>
                        <span className="text-[9px] text-accent tracking-wider">{category.footerValue}</span>
                      </div>
                    )}
                  </div>
                </CardHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Philosophies */}
      <section className="py-12 border-t border-border-primary bg-dots">
        <div className="mx-auto max-w-6xl px-6">
          <StaggerContainer className="grid md:grid-cols-3 gap-4">
            {philosophies.map((philosophy) => (
              <StaggerItem key={philosophy.id}>
                <CardHover>
                  <div className="bg-bg-card border border-border-primary p-5 rounded-sm h-full">
                    <span className="text-[10px] text-text-muted tracking-wider">PHILOSOPHY // {philosophy.id}</span>
                    <h3 className="text-sm font-semibold mt-2 mb-3">{philosophy.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{philosophy.description}</p>
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
