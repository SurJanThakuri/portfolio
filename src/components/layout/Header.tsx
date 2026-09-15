"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills & Arch" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
        style={{
          borderColor: isDark ? "#1a1a28" : "#e9ecef",
          backgroundColor: isDark ? "rgba(8,8,13,0.9)" : "rgba(255,255,255,0.9)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 h-[60px] flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none" onClick={() => setMobileOpen(false)}>
            <span className="text-[13px] font-semibold tracking-wide" style={{ color: isDark ? "#e5e5ec" : "#1a1a2e" }}>
              Surjan Singh Thakuri
            </span>
            <span className="text-[10px] tracking-[0.15em] font-mono mt-1 hidden sm:block" style={{ color: isDark ? "#5a5a72" : "#868e96" }}>
              // SOFTWARE ENGINEER &middot; KTM, NP
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-green mt-1 font-mono hidden sm:flex">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
              AVAILABLE
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-[12px] rounded-sm transition-all font-mono border"
                  style={{
                    backgroundColor: isActive ? "rgba(108,92,231,0.15)" : "transparent",
                    color: isActive ? "#6c5ce7" : isDark ? "#9090a4" : "#495057",
                    borderColor: isActive ? "rgba(108,92,231,0.3)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={toggleTheme}
              className="ml-2 p-1.5 rounded-sm transition-colors border border-transparent"
              style={{ color: isDark ? "#8a8aa2" : "#868e96" }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-sm transition-colors border border-transparent"
              style={{ color: isDark ? "#8a8aa2" : "#868e96" }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 rounded-sm transition-colors"
              style={{ color: isDark ? "#b0b0c4" : "#495057" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[260px] border-l p-6 pt-20"
              style={{
                backgroundColor: isDark ? "#0a0a12" : "#ffffff",
                borderColor: isDark ? "#2a2a3a" : "#e9ecef",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 text-[13px] rounded-sm transition-all font-mono border"
                      style={{
                        backgroundColor: isActive ? "rgba(108,92,231,0.15)" : "transparent",
                    color: isActive ? "#6c5ce7" : isDark ? "#b0b0c4" : "#495057",
                        borderColor: isActive ? "rgba(108,92,231,0.3)" : "transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
