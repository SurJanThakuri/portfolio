"use client";

import { useState, useEffect } from "react";
import {
  Terminal,
  Copy,
  ExternalLink,
  Send,
  Wifi,
  Shield,
  ArrowRight,
} from "lucide-react";
import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  CardHover,
} from "@/components/animations/Animations";
import { motion } from "framer-motion";

const communicationChannels = [
  {
    id: "01",
    label: "EMAIL PROTOCOL",
    value: "surjansinghthakuri@gmail.com",
    type: "PRIMARY",
    href: "mailto:surjansinghthakuri@gmail.com",
    hasCopy: true,
    hasMailto: true,
  },
  {
    id: "02",
    label: "PHONE PROTOCOL",
    value: "(+977) 9868791259",
    type: "",
    href: "tel:+9779868791259",
    hasExternal: false,
  },
  {
    id: "03",
    label: "PROFESSIONAL NETWORK",
    value: "linkedin.com/in/surjan-singh-thakuri",
    type: "",
    href: "https://www.linkedin.com/in/surjan-singh-thakuri/",
    hasExternal: true,
  },
];

const engagementTypes = [
  "Full-Time Software Engineer Role",
  "Contract / Freelance Project",
  "Technical Consulting",
  "Open Source Collaboration",
  "Other",
];

export function ContactContent() {
  const [time, setTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    engagement: engagementTypes[0],
    subject: "",
    message: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("surjansinghthakuri@gmail.com");
  };

  return (
    <div className="pt-[60px] min-h-screen bg-bg-primary">
      {/* Header */}
      <section className="border-b border-border-primary bg-bg-primary bg-grid">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-10">
          <FadeIn>
            <div className="flex items-center gap-2 text-[10px] text-text-muted font-mono mb-4">
              <Terminal size={12} />
              <span>NODE // 04 INITIALIZE CONNECTION [SECURE: TLS 1.3]</span>
            </div>
            <h1 className="text-[2.25rem] lg:text-[3rem] font-bold leading-[1.05] tracking-tight mb-4">
              Let&apos;s Build Something Great.
            </h1>
            <p className="text-[13px] text-text-secondary max-w-[600px] leading-relaxed">
              Open for software engineering roles and high-impact contracts.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Info */}
            <FadeInLeft className="lg:w-[420px] flex-shrink-0 space-y-5">
              <CardHover>
                <div className="bg-bg-card border border-border-primary p-6 rounded-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-text-muted font-mono tracking-wider">SYSTEM STATUS</span>
                    <span className="flex items-center gap-1.5 text-[10px] text-green font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                      LISTENING
                    </span>
                  </div>
                  <h3 className="text-[14px] font-semibold mb-2">Open for roles &amp; contracts.</h3>
                  <p className="text-[12px] text-text-secondary leading-relaxed mb-5">
                    Have a project or opportunity? Let&apos;s talk.
                  </p>
                  <div className="grid grid-cols-2 gap-4 border-t border-border-primary pt-4">
                    <div>
                      <p className="text-[9px] text-text-muted font-mono tracking-wider mb-1">GEO COORDINATE</p>
                      <p className="text-[12px]">Kathmandu, Nepal</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-text-muted font-mono tracking-wider mb-1">TIMEZONE</p>
                      <p className="text-[12px] font-mono">UTC +5:45 // {time}</p>
                    </div>
                  </div>
                </div>
              </CardHover>

              <CardHover>
                <div className="bg-bg-card border border-border-primary p-6 rounded-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-text-muted font-mono tracking-wider">COMMUNICATION MATRIX</span>
                    <span className="text-[10px] text-text-muted font-mono">[PROTOCOLS: 03]</span>
                  </div>
                  <div className="space-y-3">
                    {communicationChannels.map((channel, i) => (
                      <motion.div
                        key={channel.id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-4 bg-bg-secondary rounded-sm border border-border-primary hover:border-border-secondary transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] text-text-muted font-mono tracking-wider">
                            [{channel.id}] // {channel.label}
                          </span>
                          {channel.type && (
                            <span className="text-[9px] text-accent font-mono">{channel.type}</span>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <a
                            href={channel.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[12px] text-text-primary hover:text-accent transition-colors font-mono"
                          >
                            {channel.value}
                          </a>
                          <div className="flex items-center gap-2">
                            {channel.hasCopy && (
                              <button
                                onClick={handleCopyEmail}
                                className="text-[9px] text-text-muted hover:text-accent transition-colors flex items-center gap-1 font-mono"
                              >
                                <Copy size={10} /> COPY
                              </button>
                            )}
                            {channel.hasMailto && (
                              <a
                                href={channel.href}
                                className="text-[9px] bg-accent/15 text-accent px-2 py-1 rounded-sm hover:bg-accent/25 transition-colors flex items-center gap-1 font-mono"
                              >
                                <Send size={10} /> MAILTO
                              </a>
                            )}
                            {channel.hasExternal && (
                              <a
                                href={channel.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-accent transition-colors"
                              >
                                <ExternalLink size={11} />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardHover>

              <CardHover>
                <div className="bg-bg-card border border-border-primary p-6 rounded-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] text-text-muted font-mono tracking-wider">NETWORK HEARTBEAT</span>
                    <span className="text-[10px] text-green font-mono">0% PACKET LOSS</span>
                  </div>
                  <div className="flex items-end gap-1 h-8 mb-3">
                    {[3, 5, 4, 6, 3, 7, 5, 4, 6, 8, 5, 3, 6, 7, 4, 5, 3, 6, 5, 4, 7, 6, 5, 8, 6, 4, 5, 7, 6, 5].map(
                      (height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height * 10}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.02, duration: 0.5, ease: "easeOut" }}
                          className="flex-1 bg-accent/40 rounded-t"
                        />
                      )
                    )}
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-text-muted font-mono">
                    <span className="flex items-center gap-1">
                      <Wifi size={10} /> PING: 24ms
                    </span>
                    <span>ENCRYPTION: ED25519</span>
                    <span>UPTIME: 99.98%</span>
                  </div>
                </div>
              </CardHover>
            </FadeInLeft>

            {/* Right Column - Form */}
            <FadeInRight className="lg:flex-1">
              <div className="bg-bg-card border border-border-primary rounded-sm overflow-hidden">
                <div className="px-4 py-2.5 border-b border-border-primary flex items-center gap-2 bg-bg-secondary">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green/60" />
                  </div>
                  <span className="text-[10px] text-text-muted ml-2 font-mono">pts/0 - surjan@workstation:~</span>
                  <span className="text-[10px] text-text-muted ml-auto font-mono">[RAW SOCKET] UTF-8</span>
                </div>

                <form onSubmit={handleSubmit} className="p-6 lg:p-8">
                  <div className="mb-6">
                    <p className="text-[11px] text-text-muted font-mono">
                      &gt; EXEC socket_dispatch --recipient=&quot;surjan@workstation&quot;
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      { label: "01. SENDER IDENTITY [FULL NAME]", type: "text", field: "name" as const, placeholder: "e.g. Alex Rivera" },
                      { label: "02. RETURN ADDRESS [VALID EMAIL]", type: "email", field: "email" as const, placeholder: "e.g. alex@enterprise.io" },
                    ].map((input, i) => (
                      <motion.div
                        key={input.field}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <label className="block text-[12px] text-text-primary font-mono tracking-wide mb-2">
                          {input.label} <span className="text-accent">*</span>
                        </label>
                        <input
                          type={input.type}
                          value={formData[input.field]}
                          onChange={(e) => setFormData({ ...formData, [input.field]: e.target.value })}
                          placeholder={input.placeholder}
                          className="w-full bg-bg-secondary border border-border-secondary px-4 py-3 text-[13px] text-text-primary placeholder:text-text-muted rounded-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all font-mono"
                        />
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-[12px] text-text-primary font-mono tracking-wide mb-2">
                        03. PROJECT SCOPE / ENGAGEMENT TYPE <span className="text-accent">*</span>
                      </label>
                      <select
                        value={formData.engagement}
                        onChange={(e) => setFormData({ ...formData, engagement: e.target.value })}
                        className="w-full bg-bg-secondary border border-border-secondary px-4 py-3 text-[13px] text-text-primary rounded-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all font-mono appearance-none cursor-pointer"
                      >
                        {engagementTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-[12px] text-text-primary font-mono tracking-wide mb-2">
                        04. PACKET HEADER [SUBJECT LINE] <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Core Platform Infrastructure Modernization"
                        className="w-full bg-bg-secondary border border-border-secondary px-4 py-3 text-[13px] text-text-primary placeholder:text-text-muted rounded-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all font-mono"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-[12px] text-text-primary font-mono tracking-wide">
                          05. PAYLOAD BODY <span className="text-accent">*</span>
                        </label>
                        <span className="text-[10px] text-text-muted font-mono">{formData.message.length} / 2048</span>
                      </div>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="// Provide system context, stack requirements, expectations..."
                        rows={6}
                        maxLength={2048}
                        className="w-full bg-bg-secondary border border-border-secondary px-4 py-3 text-[13px] text-text-primary placeholder:text-text-muted rounded-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none font-mono"
                      />
                    </motion.div>
                  </div>

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-border-primary">
                    <span className="text-[10px] text-text-muted flex items-center gap-1.5 font-mono">
                      <Shield size={10} /> ZERO TRACKING
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.02, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 text-[12px] font-medium font-mono tracking-wide rounded-sm transition-colors"
                    >
                      <Send size={13} /> SEND PACKET / DISPATCH
                      <ArrowRight size={12} />
                    </motion.button>
                  </div>
                </form>
              </div>

              <FadeInUp delay={0.3}>
                <div className="mt-4 bg-bg-card border border-border-primary p-4 rounded-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] text-text-muted font-mono tracking-wider">CONSOLE LOG STREAM</span>
                    <span className="text-[10px] text-text-muted font-mono">PING: 18ms</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] text-text-secondary font-mono">[INIT]: Binding cryptographic socket buffer...</p>
                    <p className="text-[11px] text-green font-mono">[STATUS]: READY &gt; Listening on port 443...</p>
                  </div>
                </div>
              </FadeInUp>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-10 border-t border-border-primary">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "NODE SPECS",
                value: "KTM_01",
                title: "Primary Dev Machine",
                description: "Apple Silicon 64GB Unified RAM, dual 4K displays.",
              },
              {
                label: "SLA & PROTOCOL",
                value: "< 12 HRS",
                title: "Guaranteed Turnaround",
                description: "Formal queries receive detailed review within 12 hours.",
              },
              {
                label: "CORE CAPABILITIES",
                value: "FULL-STACK",
                title: "Distributed Scale & UX",
                description: "TypeScript, React, Node.js, PostgreSQL.",
              },
            ].map((card) => (
              <StaggerItem key={card.label}>
                <CardHover>
                  <div className="bg-bg-card border border-border-primary p-6 rounded-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] text-text-muted font-mono tracking-wider">{card.label}</span>
                      <span className="text-[10px] text-accent font-mono tracking-wider">{card.value}</span>
                    </div>
                    <h3 className="text-[14px] font-semibold mb-2">{card.title}</h3>
                    <p className="text-[12px] text-text-secondary leading-relaxed">{card.description}</p>
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
