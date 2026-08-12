export type Domain = {
  id: string;
  name: string;
  tagline: string;
  sfx: string;
  people: { role: string; title: string }[];
};

export const DOMAINS: Domain[] = [
  {
    id: "development",
    name: "Development",
    tagline: "Build. Break. Deploy.",
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
    name: "Web3",
    tagline: "Decentralize the possible.",
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
    name: "Content",
    tagline: "Tell the story.",
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
    name: "Creative",
    tagline: "Make ideas visible.",
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
    name: "PR",
    tagline: "Make the world notice.",
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
    name: "Management",
    tagline: "Make it happen.",
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
  { value: "250+", label: "MEMBERS" },
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
    title: "Recruitment",
    text: "Applications open across all seven domains. Pick one, pick three, we will help you choose.",
  },
  {
    phase: "PHASE 02",
    title: "Bootcamp",
    text: "Two weeks of hands-on sessions run by the heads and leads of each domain.",
  },
  {
    phase: "PHASE 03",
    title: "Build sprints",
    text: "Small squads, real projects, weekly check-ins and a lot of late-night commits.",
  },
  {
    phase: "PHASE 04",
    title: "Launch day",
    text: "Everything built during the semester goes on stage. Then we reset the loop.",
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
