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
  Loader2,
  CheckCircle2,
  AlertCircle,
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
import { motion, AnimatePresence } from "framer-motion";

const communicationChannels = [
  {
    id: "01",
    label: "EMAIL",
    value: "hello@surjansinghthakuri.com.np",
    type: "PRIMARY",
    href: "mailto:hello@surjansinghthakuri.com.np",
    hasCopy: true,
    hasMailto: true,
  },
  {
    id: "02",
    label: "PHONE",
    value: "(+977) 9868791259",
    type: "",
    href: "tel:+9779868791259",
    hasExternal: false,
  },
  {
    id: "03",
    label: "LINKEDIN",
    value: "surjan-singh-thakuri",
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

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactContent() {
  const [time, setTime] = useState("");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send inquiry");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", engagement: engagementTypes[0], subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@surjansinghthakuri.com.np");
  };

  return (
    <div className="pt-[60px] min-h-screen bg-bg-primary">
      <section className="border-b border-border-primary bg-bg-primary bg-grid">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
          <FadeIn>
            <div className="flex items-center gap-2 text-[10px] text-text-muted font-mono mb-4">
              <Terminal size={12} />
              <span>04 // INITIALIZE CONNECTION</span>
            </div>
            <h1 className="text-[1.5rem] sm:text-[2.25rem] lg:text-[3rem] font-bold leading-[1.05] tracking-tight mb-3 sm:mb-4">
              Let&apos;s Build Something Great.
            </h1>
            <p className="text-[12px] sm:text-[13px] text-text-secondary max-w-[600px] leading-relaxed">
              Open for software engineering roles and high-impact contracts.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <FadeInLeft className="lg:w-[420px] flex-shrink-0 space-y-4 sm:space-y-5">
              <CardHover>
                <div className="bg-bg-card border border-border-primary p-4 sm:p-6 rounded-sm">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-[9px] sm:text-[10px] text-text-muted font-mono tracking-wider">STATUS</span>
                    <span className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-green font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                      LISTENING
                    </span>
                  </div>
                  <h3 className="text-[13px] sm:text-[14px] font-semibold mb-2">Open for roles &amp; contracts.</h3>
                  <p className="text-[11px] sm:text-[12px] text-text-secondary leading-relaxed mb-4 sm:mb-5">
                    Have a project or opportunity? Let&apos;s talk.
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 border-t border-border-primary pt-3 sm:pt-4">
                    <div>
                      <p className="text-[8px] sm:text-[9px] text-text-muted font-mono tracking-wider mb-1">LOCATION</p>
                      <p className="text-[11px] sm:text-[12px]">Kathmandu, Nepal</p>
                    </div>
                    <div>
                      <p className="text-[8px] sm:text-[9px] text-text-muted font-mono tracking-wider mb-1">TIMEZONE</p>
                      <p className="text-[11px] sm:text-[12px] font-mono">UTC +5:45</p>
                    </div>
                  </div>
                </div>
              </CardHover>

              <CardHover>
                <div className="bg-bg-card border border-border-primary p-4 sm:p-6 rounded-sm">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-[9px] sm:text-[10px] text-text-muted font-mono tracking-wider">CONTACT</span>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {communicationChannels.map((channel, i) => (
                      <motion.div
                        key={channel.id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-3 sm:p-4 bg-bg-secondary rounded-sm border border-border-primary hover:border-border-secondary transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                          <span className="text-[8px] sm:text-[9px] text-text-muted font-mono tracking-wider">[{channel.id}] {channel.label}</span>
                          {channel.type && <span className="text-[8px] sm:text-[9px] text-accent font-mono">{channel.type}</span>}
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <a href={channel.href} target="_blank" rel="noopener noreferrer" className="text-[11px] sm:text-[12px] text-text-primary hover:text-accent transition-colors font-mono truncate">
                            {channel.value}
                          </a>
                          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                            {channel.hasCopy && (
                              <button onClick={handleCopyEmail} className="text-[8px] sm:text-[9px] text-text-muted hover:text-accent transition-colors flex items-center gap-1 font-mono">
                                <Copy size={10} /> COPY
                              </button>
                            )}
                            {channel.hasMailto && (
                              <a href={channel.href} className="text-[8px] sm:text-[9px] bg-accent/15 text-accent px-1.5 sm:px-2 py-1 rounded-sm hover:bg-accent/25 transition-colors flex items-center gap-1 font-mono">
                                <Send size={10} />
                              </a>
                            )}
                            {channel.hasExternal && (
                              <a href={channel.href} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
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
                <div className="bg-bg-card border border-border-primary p-4 sm:p-6 rounded-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] sm:text-[10px] text-text-muted font-mono tracking-wider">HEARTBEAT</span>
                    <span className="text-[9px] sm:text-[10px] text-green font-mono">0% LOSS</span>
                  </div>
                  <div className="flex items-end gap-0.5 h-6 sm:h-8 mb-3">
                    {[3, 5, 4, 6, 3, 7, 5, 4, 6, 8, 5, 3, 6, 7, 4, 5, 3, 6, 5, 4, 7, 6, 5, 8, 6, 4, 5, 7, 6, 5].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height * 10}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.02, duration: 0.5, ease: "easeOut" }}
                        className="flex-1 bg-accent/40 rounded-t"
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[8px] sm:text-[10px] text-text-muted font-mono">
                    <span className="flex items-center gap-1"><Wifi size={10} /> 24ms</span>
                    <span className="hidden sm:inline">ED25519</span>
                    <span>99.98%</span>
                  </div>
                </div>
              </CardHover>
            </FadeInLeft>

            <FadeInRight className="lg:flex-1">
              <div className="bg-bg-card border border-border-primary rounded-sm overflow-hidden">
                <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-border-primary flex items-center gap-2 bg-bg-secondary">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red/60" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green/60" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-text-muted ml-2 font-mono truncate">surjan@workstation:~</span>
                  <span className="text-[9px] sm:text-[10px] text-text-muted ml-auto font-mono hidden sm:inline">[UTF-8]</span>
                </div>

                <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-8">
                  <div className="mb-4 sm:mb-6">
                    <p className="text-[10px] sm:text-[11px] text-text-muted font-mono truncate">&gt; EXEC socket_dispatch</p>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    {[
                      { label: "NAME", type: "text", field: "name" as const, placeholder: "Your name" },
                      { label: "EMAIL", type: "email", field: "email" as const, placeholder: "you@email.com" },
                    ].map((input, i) => (
                      <motion.div key={input.field} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                        <label className="block text-[10px] sm:text-[12px] text-text-primary font-mono tracking-wide mb-1.5 sm:mb-2">
                          {input.label} <span className="text-accent">*</span>
                        </label>
                        <input
                          type={input.type}
                          value={formData[input.field]}
                          onChange={(e) => setFormData({ ...formData, [input.field]: e.target.value })}
                          placeholder={input.placeholder}
                          required
                          disabled={submitStatus === "loading"}
                          className="w-full bg-bg-secondary border border-border-secondary px-3 sm:px-4 py-2.5 sm:py-3 text-[12px] sm:text-[13px] text-text-primary placeholder:text-text-muted rounded-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all font-mono disabled:opacity-50"
                        />
                      </motion.div>
                    ))}

                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                      <label className="block text-[10px] sm:text-[12px] text-text-primary font-mono tracking-wide mb-1.5 sm:mb-2">
                        ENGAGEMENT TYPE <span className="text-accent">*</span>
                      </label>
                      <select
                        value={formData.engagement}
                        onChange={(e) => setFormData({ ...formData, engagement: e.target.value })}
                        disabled={submitStatus === "loading"}
                        className="w-full bg-bg-secondary border border-border-secondary px-3 sm:px-4 py-2.5 sm:py-3 text-[12px] sm:text-[13px] text-text-primary rounded-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all font-mono appearance-none cursor-pointer disabled:opacity-50"
                      >
                        {engagementTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                      <label className="block text-[10px] sm:text-[12px] text-text-primary font-mono tracking-wide mb-1.5 sm:mb-2">
                        SUBJECT <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What's this about?"
                        required
                        disabled={submitStatus === "loading"}
                        className="w-full bg-bg-secondary border border-border-secondary px-3 sm:px-4 py-2.5 sm:py-3 text-[12px] sm:text-[13px] text-text-primary placeholder:text-text-muted rounded-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all font-mono disabled:opacity-50"
                      />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <label className="block text-[10px] sm:text-[12px] text-text-primary font-mono tracking-wide">
                          MESSAGE <span className="text-accent">*</span>
                        </label>
                        <span className="text-[9px] sm:text-[10px] text-text-muted font-mono">{formData.message.length}/2048</span>
                      </div>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project..."
                        rows={5}
                        maxLength={2048}
                        required
                        disabled={submitStatus === "loading"}
                        className="w-full bg-bg-secondary border border-border-secondary px-3 sm:px-4 py-2.5 sm:py-3 text-[12px] sm:text-[13px] text-text-primary placeholder:text-text-muted rounded-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none font-mono disabled:opacity-50"
                      />
                    </motion.div>
                  </div>

                  <AnimatePresence mode="wait">
                    {submitStatus === "success" && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mt-3 sm:mt-4 p-3 bg-green/10 border border-green/30 rounded-sm flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-green flex-shrink-0" />
                        <span className="text-[10px] sm:text-[11px] text-green font-mono">SENT SUCCESSFULLY</span>
                      </motion.div>
                    )}
                    {submitStatus === "error" && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mt-3 sm:mt-4 p-3 bg-red/10 border border-red/30 rounded-sm flex items-center gap-2">
                        <AlertCircle size={14} className="text-red flex-shrink-0" />
                        <span className="text-[10px] sm:text-[11px] text-red font-mono truncate">FAILED: {errorMessage}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border-primary">
                    <span className="text-[9px] sm:text-[10px] text-text-muted flex items-center gap-1.5 font-mono">
                      <Shield size={10} /> <span className="hidden sm:inline">ZERO TRACKING</span>
                    </span>
                    <motion.button
                      whileHover={{ scale: submitStatus === "loading" ? 1 : 1.02 }}
                      whileTap={{ scale: submitStatus === "loading" ? 1 : 0.98 }}
                      type="submit"
                      disabled={submitStatus === "loading"}
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-4 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-[12px] font-medium font-mono tracking-wide rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitStatus === "loading" ? (
                        <><Loader2 size={13} className="animate-spin" /> <span className="hidden sm:inline">SENDING...</span><span className="sm:hidden">...</span></>
                      ) : (
                        <><Send size={13} /> SEND <ArrowRight size={12} /></>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>

              <FadeInUp delay={0.3}>
                <div className="mt-3 sm:mt-4 bg-bg-card border border-border-primary p-3 sm:p-4 rounded-sm">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-[9px] sm:text-[10px] text-text-muted font-mono tracking-wider">LOG</span>
                    <span className="text-[9px] sm:text-[10px] text-text-muted font-mono">18ms</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] sm:text-[11px] text-text-secondary font-mono">[INIT]: Binding socket...</p>
                    <p className="text-[10px] sm:text-[11px] text-green font-mono">[STATUS]: READY</p>
                  </div>
                </div>
              </FadeInUp>
            </FadeInRight>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 border-t border-border-primary">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { label: "WORKSTATION", value: "KTM_01", title: "Primary Dev Machine", description: "Apple Silicon 64GB, dual 4K displays." },
              { label: "RESPONSE TIME", value: "< 12 HRS", title: "Guaranteed Turnaround", description: "Detailed review within 12 hours." },
              { label: "CAPABILITIES", value: "FULL-STACK", title: "Scale & UX", description: "TypeScript, React, Node.js, PostgreSQL." },
            ].map((card) => (
              <StaggerItem key={card.label}>
                <CardHover>
                  <div className="bg-bg-card border border-border-primary p-4 sm:p-6 rounded-sm">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-[9px] sm:text-[10px] text-text-muted font-mono tracking-wider">{card.label}</span>
                      <span className="text-[9px] sm:text-[10px] text-accent font-mono tracking-wider">{card.value}</span>
                    </div>
                    <h3 className="text-[13px] sm:text-[14px] font-semibold mb-1.5 sm:mb-2">{card.title}</h3>
                    <p className="text-[11px] sm:text-[12px] text-text-secondary leading-relaxed">{card.description}</p>
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
