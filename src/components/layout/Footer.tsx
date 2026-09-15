"use client";

import { useTheme } from "@/components/theme/ThemeProvider";

const socialLinks = [
  { href: "mailto:surjansinghthakuri@gmail.com", label: "[01] Email" },
  { href: "tel:+9779868791259", label: "[02] Phone" },
  { href: "https://www.linkedin.com/in/surjan-singh-thakuri/", label: "[03] LinkedIn" },
];

export function Footer() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <footer
      className="border-t"
      style={{
        borderColor: isDark ? "#2a2a3a" : "#e9ecef",
        backgroundColor: isDark ? "#0a0a12" : "#ffffff",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-4 sm:h-[52px] flex flex-col sm:flex-row items-center justify-between gap-2">
        <p
          className="text-[10px] font-mono tracking-wide text-center sm:text-left"
          style={{ color: isDark ? "#8a8aa2" : "#868e96" }}
        >
          &copy; 2026 Surjan Singh Thakuri &middot; Software Engineer &middot;
          Kathmandu, Nepal
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono tracking-wide transition-colors"
              style={{ color: isDark ? "#8a8aa2" : "#868e96" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6c5ce7")}
              onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? "#8a8aa2" : "#868e96")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
