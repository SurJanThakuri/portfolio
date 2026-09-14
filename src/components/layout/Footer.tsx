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
        borderColor: isDark ? "#1a1a28" : "#e9ecef",
        backgroundColor: isDark ? "#08080d" : "#ffffff",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-[52px] flex flex-col sm:flex-row items-center justify-between gap-2">
        <p
          className="text-[10px] font-mono tracking-wide"
          style={{ color: isDark ? "#5a5a72" : "#868e96" }}
        >
          &copy; 2026 Surjan Singh Thakuri &middot; Software Engineer &middot;
          Kathmandu, Nepal [27.7172&deg; N, 85.3240&deg; E]
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono tracking-wide transition-colors"
              style={{ color: isDark ? "#5a5a72" : "#868e96" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6c5ce7")}
              onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? "#5a5a72" : "#868e96")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
