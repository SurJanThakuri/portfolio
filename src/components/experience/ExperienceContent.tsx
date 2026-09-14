"use client";

import {
  experiences,
  philosophyPrinciples,
  experienceMetrics,
} from "@/data/experience";
import {
  Terminal,
  Box,
  Type,
  GitBranch,
  Activity,
  Shield,
  Network,
  Gauge,
} from "lucide-react";
import {
  FadeIn,
  FadeInLeft,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  CardHover,
} from "@/components/animations/Animations";
import { motion } from "framer-motion";

const metricIcons: Record<string, React.ReactNode> = {
  bundle: <Box size={14} className="text-text-muted" />,
  type: <Type size={14} className="text-text-muted" />,
  pipeline: <GitBranch size={14} className="text-text-muted" />,
  uptime: <Activity size={14} className="text-text-muted" />,
};

const philosophyIcons: Record<string, React.ReactNode> = {
  "01": <Shield size={16} className="text-text-muted" />,
  "02": <Network size={16} className="text-text-muted" />,
  "03": <Gauge size={16} className="text-text-muted" />,
};

export function ExperienceContent() {
  return (
    <div className="pt-[60px] min-h-screen">
      {/* Header */}
      <section className="border-b border-border-primary py-12 bg-grid">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="flex items-center gap-2 text-[10px] text-text-muted mb-4">
              <Terminal size={12} />
              <span>02 // ENGINEERING CHRONOLOGY &mdash; [SYS_REC_V4.8]</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Production Experience &amp; Impact
            </h1>
            <p className="text-sm text-text-secondary max-w-2xl">
              Architectural deployments, enterprise client telemetry, schema
              migrations, and reliability-driven front-end engineering.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="border-b border-border-primary py-8">
        <div className="mx-auto max-w-6xl px-6">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {experienceMetrics.map((metric) => (
              <StaggerItem key={metric.label}>
                <CardHover>
                  <div className="bg-bg-card border border-border-primary p-5 rounded-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] text-text-muted tracking-wider">{metric.label}</span>
                      {metricIcons[metric.icon]}
                    </div>
                    <p className="text-2xl font-bold mb-1">{metric.value}</p>
                    <p className="text-[11px] text-text-secondary">{metric.description}</p>
                  </div>
                </CardHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 space-y-6">
          {experiences.map((exp, index) => (
            <FadeInUp key={exp.id} delay={index * 0.1}>
              <CardHover>
                <div className="bg-bg-card border border-border-primary rounded-sm overflow-hidden">
                  <div className="px-6 py-3 border-b border-border-primary flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-[10px] text-text-muted tracking-wider">[{exp.status}]</span>
                    <span className="text-[10px] text-text-muted">{exp.dateRange}</span>
                    <span className="text-[10px] text-text-muted">@{exp.location}</span>
                    {exp.metrics && exp.metrics.length > 0 && (
                      <div className="ml-auto flex items-center gap-4">
                        {exp.metrics.map((m) => (
                          <div key={m.label} className="text-right">
                            <p className="text-[9px] text-text-muted tracking-wider">
                              {m.label} <span className="text-text-primary">{m.value}</span>
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                    <p className="text-sm text-accent mb-4">{exp.company}</p>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">{exp.description}</p>
                    <button className="text-[10px] text-text-muted hover:text-text-primary transition-colors mb-4 flex items-center gap-1">
                      <span>&#8744;</span> {exp.impact}
                    </button>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="tag text-[9px]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHover>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* Technical Philosophy */}
      <section className="py-12 border-t border-border-primary bg-dots">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mb-8">
              <p className="section-label mb-2">CORE OPERATING SYSTEM &mdash; [AXIOMS]</p>
              <h2 className="text-3xl font-bold mb-2">
                Technical Philosophy &amp; Engineering Principles
              </h2>
              <p className="text-sm text-text-secondary">
                Non-negotiable architectural tenets governing code authorship.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-4 mb-8">
            {philosophyPrinciples.map((principle) => (
              <StaggerItem key={principle.id}>
                <CardHover>
                  <div className="bg-bg-card border border-border-primary p-5 rounded-sm h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] text-text-muted tracking-wider">
                        {principle.id} // {principle.label}
                      </span>
                      {philosophyIcons[principle.id]}
                    </div>
                    <h3 className="text-sm font-semibold mb-3">{principle.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed mb-6">{principle.description}</p>
                    <div className="flex items-center justify-between border-t border-border-primary pt-3">
                      <span className="text-[9px] text-text-muted tracking-wider">RESILIENCE LEVEL</span>
                      <span className="text-[9px] text-accent tracking-wider">{principle.resilience}</span>
                    </div>
                  </div>
                </CardHover>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CI/CD Pipeline Preview */}
          <FadeInUp>
            <CardHover>
              <div className="bg-bg-card border border-border-primary p-5 rounded-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] text-text-muted">@ pipeline_definition.gitlab-ci.yml</span>
                  <span className="text-[10px] text-green">STATUS: PIPELINE_PASSING</span>
                </div>
                <pre className="code-block text-text-secondary text-[11px] leading-relaxed">
{`stages:
  - lint_and_validate
  - typecheck
  - bundle_analyzer
  - deploy_edge

verify:contracts:
  stage: typecheck
  script:
    - pnpm run typecheck:strict
    - pnpm run test:contracts --coverage --threshold=95
  artifacts:
    reports:
      junit: junit.xml`}
                </pre>
              </div>
            </CardHover>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
