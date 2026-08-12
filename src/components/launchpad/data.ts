export type Domain = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  skills: string[];
  projects: string[];
  sfx: string;
  people: { role: string; title: string }[];
};

export const DOMAINS: Domain[] = [
  {
    id: "development",
    name: "Development",
    tagline: "Build. Break. Deploy.",
    description:
      "The powerhouse of CodeKrafters. We engineer full-stack web platforms, mobile applications, distributed systems, and open-source developer tooling using modern React, TypeScript, Rust, and Next.js.",
    skills: ["React / Next.js", "TypeScript & Node.js", "Rust & Go Systems", "TailwindCSS & UI/UX", "REST & GraphQL APIs"],
    projects: ["Launchpad 2026 Platform", "Spidey Web Tracker", "Campus Event Portal"],
    sfx: "THWIP!",
    people: [
      { role: "Head 01", title: "Head" },
      { role: "Head 02", title: "Head" },
      { role: "Lead 01", title: "Lead" },
      { role: "Lead 02", title: "Lead" },
    ],
  },
  {
    id: "web3",
    name: "Web3 & Blockchain",
    tagline: "Decentralize the possible.",
    description:
      "Exploring the frontier of decentralized finance, smart contracts, ZK-proofs, and Web3 infrastructure. We write Ethereum Solidity contracts, build Solana dApps, and host Web3 security workshops.",
    skills: ["Solidity & EVM", "Rust for Solana", "Ethers.js & Wagmi", "Smart Contract Security", "DeFi Protocols"],
    projects: ["Campus NFT Badge Gateway", "Decentralized Voting DApp", "Web3 Guild DAO"],
    sfx: "WHAM!",
    people: [
      { role: "Head 01", title: "Head" },
      { role: "Head 02", title: "Head" },
      { role: "Lead 01", title: "Lead" },
      { role: "Lead 02", title: "Lead" },
    ],
  },
  {
    id: "content",
    name: "Content & Tech Writing",
    tagline: "Tell the story.",
    description:
      "Crafting compelling technical narratives, developer documentation, video scripts, and tech blogs. We translate complex engineering concepts into accessible, engaging media for thousands of readers.",
    skills: ["Technical Writing", "Documentation Architecture", "SEO & Copywriting", "Script Writing", "Video Editing"],
    projects: ["CodeKrafters Guild Blog", "Developer Onboarding Guides", "Hackathon Recaps"],
    sfx: "THWIP!",
    people: [
      { role: "Head 01", title: "Head" },
      { role: "Head 02", title: "Head" },
      { role: "Lead 01", title: "Lead" },
      { role: "Lead 02", title: "Lead" },
    ],
  },
  {
    id: "creative",
    name: "Creative & UI/UX Design",
    tagline: "Make ideas visible.",
    description:
      "Architects of visual identity, retro pixel art, glassmorphic interfaces, and motion design. We design the look, feel, and interactive magic across all club platforms.",
    skills: ["Figma & UI Design", "Pixel Art & Animation", "Brand Identity", "Motion Graphics", "3D WebGL / Spline"],
    projects: ["Launchpad Retro Theme System", "Club Mascot & Emblem Suite", "Design System Tokens"],
    sfx: "WHAM!",
    people: [
      { role: "Head 01", title: "Head" },
      { role: "Head 02", title: "Head" },
      { role: "Lead 01", title: "Lead" },
      { role: "Lead 02", title: "Lead" },
    ],
  },
  {
    id: "cp",
    name: "Competitive Programming",
    tagline: "Think. Code. Conquer.",
    description:
      "Mastering algorithmic problem solving, graph theory, dynamic programming, and speed coding contests. We train members for Codeforces, LeetCode, ICPC, and global coding battles.",
    skills: ["C++ Data Structures", "Graph Theory & DP", "Math & Number Theory", "Time Complexity Optimization", "Contest Speed"],
    projects: ["Weekly CP Ladder", "Algorithm Visualizer", "Campus Contest Platform"],
    sfx: "THWIP!",
    people: [
      { role: "Head 01", title: "Head" },
      { role: "Head 02", title: "Head" },
      { role: "Lead 01", title: "Lead" },
      { role: "Lead 02", title: "Lead" },
    ],
  },
  {
    id: "pr",
    name: "Public Relations & Outreach",
    tagline: "Make the world notice.",
    description:
      "Building industry partnerships, securing event sponsorships, managing social channels, and connecting CodeKrafters with tech leaders, alumni, and campus organizations.",
    skills: ["Sponsorship Pitching", "Industry Partnerships", "Community Management", "Event Promotion", "Public Speaking"],
    projects: ["Hackathon Sponsor Deck", "Keynote Speaker Series", "Social Media Campaigns"],
    sfx: "WHAM!",
    people: [
      { role: "Head 01", title: "Head" },
      { role: "Head 02", title: "Head" },
      { role: "Lead 01", title: "Lead" },
      { role: "Lead 02", title: "Lead" },
    ],
  },
  {
    id: "management",
    name: "Management & Operations",
    tagline: "Make it happen.",
    description:
      "The operational engine ensuring seamless execution of hackathons, bootcamps, sprint check-ins, and logistics. We keep projects on schedule and build a thriving community environment.",
    skills: ["Agile & Scrum Sprints", "Event Logistics", "Budget & Resource Planning", "Team Operations", "Mentorship Coordination"],
    projects: ["Semester Roadmap Tracker", "Bootcamp Operations Hub", "Launch Day Logistics"],
    sfx: "THWIP!",
    people: [
      { role: "Head 01", title: "Head" },
      { role: "Head 02", title: "Head" },
      { role: "Lead 01", title: "Lead" },
      { role: "Lead 02", title: "Lead" },
    ],
  },
];

export const BOOT_LINES = [
  "INITIALIZING CODEKRAFTERS LAUNCHPAD v2.0.26...",
  "BOOTING CORE SERVICES [OK]",
  "LOADING BASE ASSETS: FRAME UI [OK]",
  "LOADING BASE ASSETS: TICKER MODULE [OK]",
  "STARTING EVENT BUS [OK]",
  "CALIBRATING DOMAIN REGISTRY [OK]",
  "WARMING MEMBER CACHE...",
  "CHECKING FONT REGISTRY [OK]",
  "VALIDATING ROUTE HANDLERS [OK]",
  "AUTHENTICATING SESSION TOKENS [OK]",
  "NEW GENERATION DETECTED",
];

export const ABOUT_PARAS = [
  "CodeKrafters is the student-run builders' guild of the campus — a place where curiosity is compiled into shipped things. We started as a handful of people sharing snippets after class and grew into seven domains that cover everything from smart contracts to storyboards.",
  "We don't gatekeep. Whether you have written ten thousand lines or zero, there is a node on this web for you. You bring the questions, we bring the mentors, the mentors bring the whiteboard markers.",
  "Every semester runs on the same loop: learn something new, build it in public, break it on purpose, then teach it to whoever comes next.",
];

export const STATS: { value: string; label: string }[] = [
  { value: "7", label: "ACTIVE DOMAINS" },
  { value: "250+", label: "ACTIVE MEMBERS" },
  { value: "40+", label: "PROJECTS SHIPPED" },
  { value: "60+", label: "EVENTS RUN" },
];

export const VALUES: { icon: string; title: string; text: string }[] = [
  {
    icon: "◼",
    title: "Build in public",
    text: "Half-finished is fine. Hidden is not. Every project gets a demo day.",
  },
  {
    icon: "✦",
    title: "Teach what you learn",
    text: "You only really know it once you have explained it to a junior.",
  },
  {
    icon: "▲",
    title: "No gatekeeping",
    text: "Zero experience required. Curiosity is the only prerequisite.",
  },
  {
    icon: "●",
    title: "Ship > talk",
    text: "Ideas are cheap. We measure semesters in things that went live.",
  },
];

export const TIMELINE: { phase: string; title: string; text: string }[] = [
  {
    phase: "PHASE 01",
    title: "Recruitment & Onboarding",
    text: "Applications open across all seven domains. Pick one, pick three, we will help you choose.",
  },
  {
    phase: "PHASE 02",
    title: "Intensive Bootcamp",
    text: "Two weeks of hands-on sessions run by the heads and leads of each domain.",
  },
  {
    phase: "PHASE 03",
    title: "Build Sprints",
    text: "Small squads, real projects, weekly check-ins and a lot of late-night commits.",
  },
  {
    phase: "PHASE 04",
    title: "Launch Day Showcase",
    text: "Everything built during the semester goes live on stage. Then we reset the loop.",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Do I need prior experience?",
    a: "No. Most members join knowing very little. The bootcamp exists exactly for that.",
  },
  {
    q: "Can I join more than one domain?",
    a: "Yes. Plenty of people sit between Development and Creative, or Content and PR.",
  },
  {
    q: "How much time does it take?",
    a: "Around four to six hours a week during sprints, less between them.",
  },
  {
    q: "What do I get out of it?",
    a: "A portfolio, mentors, a squad, and a very unreasonable number of stickers.",
  },
];
