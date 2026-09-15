import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-[11px] font-mono text-text-muted mb-4 tracking-wider">// ERROR 404</p>
        <h1 className="text-[2rem] sm:text-[3rem] font-bold mb-4">Page Not Found</h1>
        <p className="text-[13px] text-text-secondary mb-8 max-w-[400px]">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 text-[11px] font-medium tracking-wide rounded-sm transition-colors"
        >
          RETURN HOME
        </Link>
      </div>
    </div>
  );
}
