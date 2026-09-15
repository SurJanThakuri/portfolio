"use client";

import { useState } from "react";
import { skillCategories, pipelineNodes, philosophies } from "@/data/skills";
import { Terminal, Search, Monitor, Shield, Database, Globe } from "lucide-react";
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

  const totalModules = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  const filteredCategories = skillCategories
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.description?.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <div className="pt-[60px] min-h-screen">
      <section className="border-b border-border-primary py-8 sm:py-12 bg-grid">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="flex items-center gap-2 text-[10px] text-text-muted mb-4">
              <Terminal size={12} />
              <span>03 // STACK MATRIX &amp; ARCHITECTURE</span>
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
            <FadeIn delay={0.1}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 sm:mb-4">
                Technical Capabilities
              </h1>
              <p className="text-[12px] sm:text-sm text-text-secondary max-w-xl">
                Engineered for production resilience, structural type-safety, and sub-second deterministic delivery.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex items-center gap-2 bg-bg-card border border-border-primary px-3 py-2 rounded-sm">
                <Search size={14} className="text-text-muted flex-shrink-0" />
                <input
                  type="text"
                  placeholder="FILTER..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-[11px] text-text-primary placeholder:text-text-muted outline-none w-full sm:w-48"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="text-[10px] text-accent hover:text-accent-hover flex-shrink-0">
                    RESET
                  </button>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 border-b border-border-primary">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="bg-bg-card border border-border-primary p-4 sm:p-6 rounded-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-[13px] sm:text-sm font-semibold">Pipeline Architecture</span>
                  <span className="tag tag-accent text-[8px] sm:text-[9px]">ACTIVE</span>
                </div>
                <span className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                  Live: 14ms · Click node to inspect
                </span>
              </div>

              <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-5 sm:mb-6">
                {pipelineNodes.map((node, index) => {
                  const Icon = nodeIcons[index];
                  return (
                    <StaggerItem key={node.id}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedNode(index)}
                        className={`p-3 sm:p-4 rounded-sm border text-left transition-all w-full ${
                          selectedNode === index
                            ? "bg-accent/10 border-accent/30"
                            : "bg-bg-secondary border-border-primary hover:border-border-secondary"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[9px] sm:text-[10px] text-text-muted tracking-wider">NODE {node.id}</span>
                          <Icon size={14} className={selectedNode === index ? "text-accent" : "text-text-muted"} />
                        </div>
                        <h4 className="text-[12px] sm:text-sm font-semibold mb-1">{node.title}</h4>
                        <p className="text-[9px] sm:text-[10px] text-text-muted mb-2 hidden sm:block">{node.subtitle}</p>
                        <div className="flex flex-wrap gap-1">
                          {node.tags.map((tag) => (
                            <span key={tag} className="tag text-[7px] sm:text-[8px]">{tag}</span>
                          ))}
                        </div>
                      </motion.button>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>

              <div className="mb-5 sm:mb-6">
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
                  className="p-3 sm:p-4 bg-bg-secondary rounded-sm border border-border-primary"
                >
                  <span className="text-[9px] sm:text-[10px] text-text-muted tracking-wider">NODE {pipelineNodes[selectedNode].id}</span>
                  <h4 className="text-[13px] sm:text-sm font-semibold mt-1 mb-2">{pipelineNodes[selectedNode].title}</h4>
                  <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed mb-3">{pipelineNodes[selectedNode].description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {pipelineNodes[selectedNode].detailTags.map((tag) => (
                      <span key={tag} className="tag text-[8px] sm:text-[9px]">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8">
              <div>
                <p className="section-label mb-2">TAXONOMY 02</p>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Competencies &amp; Runtime Specs</h2>
              </div>
              <span className="text-[10px] sm:text-[11px] text-text-muted">{totalModules} / {totalModules} Modules</span>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {filteredCategories.map((category) => (
              <StaggerItem key={category.id}>
                <CardHover>
                  <div className="bg-bg-card border border-border-primary p-4 sm:p-5 rounded-sm h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] sm:text-[10px] text-accent tracking-wider">[{category.number}]</span>
                      <span className="text-[9px] sm:text-[10px] text-text-muted tracking-wider">{category.title}</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-text-secondary leading-relaxed mb-3 sm:mb-4">{category.description}</p>
                    <div className="space-y-1.5 sm:space-y-2">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="flex items-center justify-between py-1.5 sm:py-2 border-b border-border-primary last:border-0">
                          <div className="min-w-0">
                            <p className="text-[11px] sm:text-xs font-medium truncate">{skill.name}</p>
                            {skill.description && <p className="text-[9px] sm:text-[10px] text-text-muted truncate">{skill.description}</p>}
                          </div>
                          <span className={`tag text-[7px] sm:text-[8px] ml-2 flex-shrink-0 ${skill.level === "expert" ? "tag-accent" : ""}`}>
                            {skill.levelLabel}
                          </span>
                        </div>
                      ))}
                    </div>
                    {category.footerLabel && (
                      <div className="flex items-center justify-between border-t border-border-primary pt-3 mt-3">
                        <span className="text-[8px] sm:text-[9px] text-text-muted tracking-wider">{category.footerLabel}</span>
                        <span className="text-[8px] sm:text-[9px] text-accent tracking-wider">{category.footerValue}</span>
                      </div>
                    )}
                  </div>
                </CardHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-8 sm:py-12 border-t border-border-primary bg-dots">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {philosophies.map((philosophy) => (
              <StaggerItem key={philosophy.id}>
                <CardHover>
                  <div className="bg-bg-card border border-border-primary p-4 sm:p-5 rounded-sm h-full">
                    <span className="text-[9px] sm:text-[10px] text-text-muted tracking-wider">PHILOSOPHY // {philosophy.id}</span>
                    <h3 className="text-[13px] sm:text-sm font-semibold mt-2 mb-2 sm:mb-3">{philosophy.title}</h3>
                    <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed">{philosophy.description}</p>
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
