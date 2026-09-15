"use client";

import { experiences, philosophyPrinciples, experienceMetrics } from "@/data/experience";
import { Terminal, Box, Type, GitBranch, Activity, Shield, Network, Gauge } from "lucide-react";
import {
  FadeIn,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  CardHover,
} from "@/components/animations/Animations";

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
      <section className="border-b border-border-primary py-8 sm:py-12 bg-grid">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="flex items-center gap-2 text-[10px] text-text-muted mb-4">
              <Terminal size={12} />
              <span>02 // ENGINEERING CHRONOLOGY</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 sm:mb-4">
              Production Experience &amp; Impact
            </h1>
            <p className="text-[12px] sm:text-sm text-text-secondary max-w-2xl">
              Architectural deployments, enterprise client telemetry, schema migrations, and reliability-driven front-end engineering.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-border-primary py-6 sm:py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {experienceMetrics.map((metric) => (
              <StaggerItem key={metric.label}>
                <CardHover>
                  <div className="bg-bg-card border border-border-primary p-3 sm:p-5 rounded-sm">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-[9px] sm:text-[10px] text-text-muted tracking-wider">{metric.label}</span>
                      {metricIcons[metric.icon]}
                    </div>
                    <p className="text-xl sm:text-2xl font-bold mb-1">{metric.value}</p>
                    <p className="text-[10px] sm:text-[11px] text-text-secondary hidden sm:block">{metric.description}</p>
                  </div>
                </CardHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <FadeInUp key={exp.id} delay={index * 0.1}>
              <CardHover>
                <div className="bg-bg-card border border-border-primary rounded-sm overflow-hidden">
                  <div className="px-4 sm:px-6 py-3 border-b border-border-primary flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-[9px] sm:text-[10px] text-text-muted tracking-wider">[{exp.status}]</span>
                    <span className="text-[9px] sm:text-[10px] text-text-muted">{exp.dateRange}</span>
                    <span className="text-[9px] sm:text-[10px] text-text-muted hidden sm:inline">@{exp.location}</span>
                    {exp.metrics && exp.metrics.length > 0 && (
                      <div className="ml-auto hidden sm:flex items-center gap-4">
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
                  <div className="p-4 sm:p-6">
                    <h3 className="text-[15px] sm:text-lg font-bold mb-1">{exp.role}</h3>
                    <p className="text-[12px] sm:text-sm text-accent mb-3 sm:mb-4">{exp.company}</p>
                    <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed mb-3 sm:mb-4">{exp.description}</p>
                    <button className="text-[10px] text-text-muted hover:text-text-primary transition-colors mb-3 sm:mb-4 flex items-center gap-1">
                      <span>∨</span> {exp.impact}
                    </button>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="tag text-[8px] sm:text-[9px]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHover>
            </FadeInUp>
          ))}
        </div>
      </section>

      <section className="py-8 sm:py-12 border-t border-border-primary bg-dots">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mb-6 sm:mb-8">
              <p className="section-label mb-2">CORE OPERATING SYSTEM — [AXIOMS]</p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Technical Philosophy &amp; Principles</h2>
              <p className="text-[12px] sm:text-sm text-text-secondary">Non-negotiable architectural tenets governing code authorship.</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {philosophyPrinciples.map((principle) => (
              <StaggerItem key={principle.id}>
                <CardHover>
                  <div className="bg-bg-card border border-border-primary p-4 sm:p-5 rounded-sm h-full">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-[9px] sm:text-[10px] text-text-muted tracking-wider">{principle.id} // {principle.label}</span>
                      {philosophyIcons[principle.id]}
                    </div>
                    <h3 className="text-[13px] sm:text-sm font-semibold mb-2 sm:mb-3">{principle.title}</h3>
                    <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed mb-4 sm:mb-6">{principle.description}</p>
                    <div className="flex items-center justify-between border-t border-border-primary pt-3">
                      <span className="text-[8px] sm:text-[9px] text-text-muted tracking-wider">RESILIENCE</span>
                      <span className="text-[8px] sm:text-[9px] text-accent tracking-wider">{principle.resilience}</span>
                    </div>
                  </div>
                </CardHover>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <CardHover>
              <div className="bg-bg-card border border-border-primary p-4 sm:p-5 rounded-sm overflow-x-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] text-text-muted truncate mr-2">@ pipeline.gitlab-ci.yml</span>
                  <span className="text-[10px] text-green flex-shrink-0">STATUS: PASSING</span>
                </div>
                <pre className="code-block text-text-secondary text-[10px] sm:text-[11px] leading-relaxed">
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
