export interface Project {
  id: string;
  category: string;
  tenant: string;
  title: string;
  description: string;
  metrics: { label: string; value: string; sub: string }[];
  specs: { label: string; value: string }[];
  tags: string[];
  links: { label: string; href: string }[];
  status?: string;
  badge?: string;
}

export const projects: Project[] = [
  {
    id: "001",
    category: "ENTERPRISE PRODUCTION",
    tenant: "CAFE & RESTAURANT",
    title: "TIYA - RESTAURANT MANAGEMENT SYSTEM",
    description:
      "Full-featured POS with order tracking, inventory, billing, and KOT workflows. Thermal printer integration. 100+ daily users.",
    metrics: [
      { label: "DAILY USERS", value: "100+", sub: "Production" },
      { label: "ORDER TRACKING", value: "Real-time", sub: "WebSocket" },
      { label: "KOT", value: "Live", sub: "Kitchen display" },
    ],
    specs: [
      { label: "STACK", value: "React.js, TypeScript" },
      { label: "FEATURES", value: "POS, Inventory, KOT" },
      { label: "HARDWARE", value: "Thermal Printer" },
      { label: "STATUS", value: "Live Production" },
    ],
    tags: ["React.js", "TypeScript", "WebSocket", "POS"],
    links: [{ label: "[VIEW PROJECT]", href: "#" }],
    status: "LIVE IN PROD",
    badge: "100+ DAILY USERS",
  },
  {
    id: "002",
    category: "E-COMMERCE",
    tenant: "FULL-STACK PLATFORM",
    title: "CHINO - E-COMMERCE PLATFORM",
    description:
      "Product listing, search, shopping cart, and admin dashboard. Responsive design for mobile and desktop.",
    metrics: [
      { label: "CATALOG", value: "Full", sub: "Search & filtering" },
      { label: "CART", value: "Complete", sub: "Checkout flow" },
      { label: "DASHBOARD", value: "Admin", sub: "Merchant management" },
    ],
    specs: [
      { label: "STACK", value: "React.js, TypeScript" },
      { label: "FEATURES", value: "Listing, Cart, Dashboard" },
      { label: "SEARCH", value: "Dynamic filtering" },
      { label: "RESPONSIVE", value: "Mobile & Desktop" },
    ],
    tags: ["React.js", "TypeScript", "E-commerce", "Dashboard"],
    links: [{ label: "[VIEW PROJECT]", href: "#" }],
    status: "PRODUCTION",
  },
  {
    id: "003",
    category: "E-COMMERCE",
    tenant: "HEALTHCARE & COSMETICS",
    title: "SILVER6 - E-COMMERCE PLATFORM",
    description:
      "E-commerce for healthcare and cosmetic products with catalog, cart, checkout, and real-time delivery tracking.",
    metrics: [
      { label: "CATALOG", value: "Full", sub: "Healthcare products" },
      { label: "ORDERS", value: "Complete", sub: "End-to-end" },
      { label: "TRACKING", value: "Real-time", sub: "Delivery status" },
    ],
    specs: [
      { label: "STACK", value: "React.js, TypeScript" },
      { label: "DOMAIN", value: "Healthcare, Cosmetics" },
      { label: "CHECKOUT", value: "Payment flow" },
      { label: "TRACKING", value: "Real-time" },
    ],
    tags: ["React.js", "TypeScript", "E-commerce", "Tracking"],
    links: [{ label: "[VIEW PROJECT]", href: "#" }],
    status: "PRODUCTION",
  },
  {
    id: "004",
    category: "CRM & WEBSITE",
    tenant: "COMPANY PLATFORM",
    title: "GRIPAS TECH - WEBSITE & CRM",
    description:
      "Company website with GSAP animations. CRM module for lead management, pipeline tracking, and milestones.",
    metrics: [
      { label: "ANIMATIONS", value: "GSAP", sub: "High-performance" },
      { label: "CRM", value: "Full", sub: "Lead management" },
      { label: "PIPELINE", value: "Real-time", sub: "Role-based" },
    ],
    specs: [
      { label: "STACK", value: "React.js, GSAP" },
      { label: "CRM", value: "Leads, Pipeline" },
      { label: "ANIMATIONS", value: "GSAP-powered" },
      { label: "VISIBILITY", value: "Role-based" },
    ],
    tags: ["React.js", "GSAP", "CRM", "Animations"],
    links: [{ label: "[VIEW PROJECT]", href: "#" }],
    status: "PRODUCTION",
    badge: "GSAP POWERED",
  },
  {
    id: "005",
    category: "ADVERTISING",
    tenant: "INTERNAL DASHBOARD",
    title: "META ADS MANAGEMENT SYSTEM",
    description:
      "Internal dashboard for managing Facebook and Instagram ad campaigns with role-based access and analytics.",
    metrics: [
      { label: "CAMPAIGNS", value: "FB & IG", sub: "Meta Ads" },
      { label: "ACCESS", value: "Role-based", sub: "RBAC" },
      { label: "ANALYTICS", value: "Full", sub: "Campaign insights" },
    ],
    specs: [
      { label: "STACK", value: "React.js, TypeScript" },
      { label: "INTEGRATION", value: "Meta Ads API" },
      { label: "SECURITY", value: "RBAC" },
      { label: "ANALYTICS", value: "Dashboard" },
    ],
    tags: ["React.js", "TypeScript", "Meta Ads", "Analytics"],
    links: [{ label: "[VIEW PROJECT]", href: "#" }],
    status: "INTERNAL",
  },
  {
    id: "006",
    category: "REAL-TIME",
    tenant: "CAFE SYSTEM",
    title: "JIGGS CAFE - REAL-TIME ORDERS",
    description:
      "Real-time order status updates via WebSocket. Live notifications for kitchen and service staff.",
    metrics: [
      { label: "REAL-TIME", value: "WebSocket", sub: "Zero refresh" },
      { label: "NOTIFICATIONS", value: "Live", sub: "Kitchen staff" },
      { label: "LATENCY", value: "< 100ms", sub: "Instant" },
    ],
    specs: [
      { label: "STACK", value: "React.js" },
      { label: "REAL-TIME", value: "WebSocket" },
      { label: "FEATURES", value: "Live status" },
      { label: "UX", value: "Zero refresh" },
    ],
    tags: ["React.js", "WebSocket", "Real-time"],
    links: [{ label: "[VIEW PROJECT]", href: "#" }],
    status: "PRODUCTION",
    badge: "REAL-TIME",
  },
  {
    id: "007",
    category: "STATISTICAL COMPUTING",
    tenant: "INVENTORY ELASTICITY",
    title: "DYNAMIC DISCOUNT RECOMMENDER",
    description:
      "Algorithmic pricing engine predicting checkout dropoff and delivering incentives to maximize conversions.",
    metrics: [
      { label: "CONVERSION LIFT", value: "+18.4%", sub: "A/B tested" },
      { label: "MARGIN", value: "Strict Floor", sub: "Protected" },
      { label: "ARCHITECTURE", value: "Edge V8", sub: "Stateless" },
    ],
    specs: [
      { label: "ALGORITHM", value: "Random Forest" },
      { label: "GATEWAY", value: "NestJS + Redis" },
      { label: "ML", value: "Flask + Scikit-Learn" },
      { label: "DATASET", value: "4.8M TX" },
    ],
    tags: ["Python", "FastAPI", "NestJS", "Redis", "Scikit-Learn"],
    links: [
      { label: "[VIEW EVALUATION]", href: "#" },
      { label: "[PIPELINE SPEC]", href: "#" },
    ],
    badge: "ML ENGINE",
  },
  {
    id: "008",
    category: "FRONTEND INFRASTRUCTURE",
    tenant: "WCAG AAA",
    title: "NEXT.JS COMPONENT SYSTEM",
    description:
      "Virtualized data grid rendering 100K+ rows at 60fps. Zero-runtime design tokens.",
    metrics: [
      { label: "BUNDLE", value: "1.8 kB", sub: "Gzipped" },
      { label: "VIRTUAL", value: "36 Rows", sub: "~2.4MB heap" },
    ],
    specs: [],
    tags: ["React", "Next.js", "TypeScript", "Virtualization"],
    links: [{ label: "[INSPECT LIBRARY]", href: "#" }],
    badge: "WCAG AAA",
  },
  {
    id: "009",
    category: "RUNTIME DEVOPS",
    tenant: "GITLAB CI PIPELINED",
    title: "CLOUD TELEMETRY DAEMON",
    description:
      "Node.js background runner monitoring memory and coordinating CI/CD fallback builds.",
    metrics: [
      { label: "MEMORY", value: "142/512 MB", sub: "27.7% used" },
      { label: "POLL", value: "250ms", sub: "Daemon freq" },
      { label: "FAILOVER", value: "< 3.2s", sub: "Recovery" },
    ],
    specs: [],
    tags: ["Node.js", "Docker", "GitLab CI"],
    links: [{ label: "[INSPECT SPECS]", href: "#" }],
    badge: "STABLE",
  },
];
