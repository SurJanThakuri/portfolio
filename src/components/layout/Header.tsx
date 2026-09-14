"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

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

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: isDark ? "#1a1a28" : "#e9ecef",
        backgroundColor: isDark ? "rgba(8,8,13,0.9)" : "rgba(255,255,255,0.9)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-[60px] flex items-center justify-between">
        {/* Left - Name & Status */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="text-[13px] font-semibold tracking-wide"
            style={{ color: isDark ? "#e5e5ec" : "#1a1a2e" }}
          >
            Surjan Singh Thakuri
          </span>
          <span
            className="text-[10px] tracking-[0.15em] font-mono mt-1"
            style={{ color: isDark ? "#5a5a72" : "#868e96" }}
          >
            // SOFTWARE ENGINEER &middot; KTM, NP
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-green mt-1 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </Link>

        {/* Right - Navigation */}
        <nav className="flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[12px] rounded-sm transition-all font-mono border"
                style={{
                  backgroundColor: isActive
                    ? "rgba(108,92,231,0.15)"
                    : "transparent",
                  color: isActive
                    ? "#6c5ce7"
                    : isDark
                    ? "#9090a4"
                    : "#495057",
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
            style={{ color: isDark ? "#5a5a72" : "#868e96" }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
