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
