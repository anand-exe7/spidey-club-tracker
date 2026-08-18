export type Domain = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  skills: string[];
  projects: string[];
  sfx: string;
  people: { role: string; title: string; image: string; objectPosition?: string; linkedin?: string; instagram?: string }[];
};

export const DOMAINS: Domain[] = [
  {
    id: "dev",
    name: "Development",
    tagline: "Build. Break. Deploy.",
    description:
      "The powerhouse of CodeKrafters. We engineer full-stack web platforms, mobile applications, distributed systems, and open-source developer tooling using modern React, TypeScript, Rust, and Next.js.",
    skills: ["React / Next.js", "TypeScript & Node.js", "Rust & Go Systems", "TailwindCSS & UI/UX", "REST & GraphQL APIs"],
    projects: ["Launchpad 2026 Platform", "Spidey Web Tracker", "Campus Event Portal"],
    sfx: "THWIP!",
    people: [

      { role: "Vinoth", title: "Head", image: "/domain_pics/dev/head/Vinoth.png", linkedin: "https://www.linkedin.com/in/vinoth-anand-gani-304126325/", instagram: "https://www.instagram.com/vinayvinod567/" },
      { role: "Anand", title: "Head", image: "/domain_pics/dev/head/Anand.jpg", linkedin: "https://www.linkedin.com/in/anandsivarams/", instagram: "https://www.instagram.com/ananvdd" },
      { role: "Akshay", title: "Lead", image: "/domain_pics/dev/lead/Akshay.jpeg", linkedin: "https://www.linkedin.com/in/akshay-p-9bb587355/", instagram: "https://www.instagram.com/___iamakshay__/" },
      { role: "Abhishek", title: "Lead", image: "/domain_pics/dev/lead/Abhishek.jpeg", linkedin: "https://www.linkedin.com/in/abhishek-vinod-/", instagram: "https://www.instagram.com/_.abhishek_.vinod/" },
    ],
  },
  {
    id: "web3",
    name: "Web3",
    tagline: "Decentralize the possible.",
    description:
      "Exploring the frontier of decentralized finance, smart contracts, ZK-proofs, and Web3 infrastructure. We write Ethereum Solidity contracts, build Solana dApps, and host Web3 security workshops.",
    skills: ["Solidity & EVM", "Rust for Solana", "Ethers.js & Wagmi", "Smart Contract Security", "DeFi Protocols"],
    projects: ["Campus NFT Badge Gateway", "Decentralized Voting DApp", "Web3 Guild DAO"],
    sfx: "WHAM!",
    people: [
      { role: "Achyuth", title: "Head", image: "/domain_pics/web3/head/Achyuth .JPEG", linkedin: "https://www.linkedin.com/in/achyuth-pv-78653528a?", instagram: "https://www.instagram.com/achyuth_pv?igsh=eW5xd2dyM2F5ejdn&utm_source=qr" },
      { role: "Franklin", title: "Head", image: "/domain_pics/web3/head/Franklin.png", linkedin: "https://www.linkedin.com/in/franklin-babu-852022327/", instagram: "https://www.instagram.com/frankhyper11?igsh=MXYwZmtlYXdmdmJjNA==" },
      { role: "Hariprriya", title: "Lead", image: "/domain_pics/web3/lead/Hariprriya.png", linkedin: "https://www.linkedin.com/in/hariprriya-vijayakarthy-ba51a338a", instagram: "https://www.instagram.com/hari_prriya_?igsh=MWp0aW0zbXB4MnJsZg==" },
      { role: "Kiruthik Pranav", title: "Lead", image: "/domain_pics/web3/lead/Kriuthik Pranav.png", linkedin: "https://www.linkedin.com/in/kiruthik-pranav-j-s", instagram: "https://www.instagram.com/kiruthikpranav_offl/" },
    ],
  },
  {
    id: "content",
    name: "Content",
    tagline: "Tell the story.",
    description:
      "Crafting compelling technical narratives, developer documentation, video scripts, and tech blogs. We translate complex engineering concepts into accessible, engaging media for thousands of readers.",
    skills: ["Technical Writing", "Documentation Architecture", "SEO & Copywriting", "Script Writing", "Video Editing"],
    projects: ["CodeKrafters Guild Blog", "Developer Onboarding Guides", "Hackathon Recaps"],
    sfx: "THWIP!",
    people: [
      { role: "Noorul Hatim", title: "Head", image: "/domain_pics/content/head/Noorul hatim.png", linkedin: "https://www.linkedin.com/in/noorulhatim?utm_source=share_via&utm_content=profile&utm_medium=member_ios", instagram: "https://www.instagram.com/noorull_hatim?igsh=ZGRrc3pmdzZ2dmJ1&igsi=ZGRrc3pmdzZ2dmJ1&utm_source=qr" },
      { role: "Silvi", title: "Head", image: "/domain_pics/content/head/silvi.png", linkedin: "https://www.linkedin.com/in/silvi-mathur?utm_source=share_via&utm_content=profile&utm_medium=member_ios", instagram: "https://www.instagram.com/silvizz_24?igsh=d2oyN3J5cHFudnF6&utm_source=qr" },
      { role: "Sana", title: "Lead", image: "/domain_pics/content/lead/Sana.png", linkedin: "https://www.linkedin.com/in/sana-afreen-a3351636b", instagram: "https://www.instagram.com/sana_kaun_?igsh=ZXBiM2hsY21lZnNq" },
      { role: "Vasanti", title: "Lead", image: "/domain_pics/content/lead/Vasanti .jpg", linkedin: "https://www.linkedin.com/in/vasanti-s-02694637b", instagram: "https://www.instagram.com/_.vasxnti._?igsh=MXg5cnIwOXdteDIwOQ==" },
    ],
  },
  {
    id: "creative",
    name: "Creative",
    tagline: "Make ideas visible.",
    description:
      "Architects of visual identity, retro pixel art, glassmorphic interfaces, and motion design. We design the look, feel, and interactive magic across all club platforms.",
    skills: ["Figma & UI Design", "Pixel Art & Animation", "Brand Identity", "Motion Graphics", "3D WebGL / Spline"],
    projects: ["Launchpad Retro Theme System", "Club Mascot & Emblem Suite", "Design System Tokens"],
    sfx: "WHAM!",
    people: [
      { role: "Tanisha", title: "Head", image: "/domain_pics/creative/head/TANISHA PAVITHRAKUMAR.png", objectPosition: "center", linkedin: "https://www.linkedin.com/in/tanisha-pavithrakumar-8a5939336", instagram: "https://www.instagram.com/tanishaaa_244?igsh=MXU0Z2N6NTZndzd1Zw%3D%3D&utm_source=qr" },
      { role: "Tito Ishwar", title: "Head", image: "/domain_pics/creative/head/Tito eshwar.JPG", linkedin: "https://www.linkedin.com/in/tito-ishwar-648387328/", instagram: "https://www.instagram.com/tito_ishwar_2007_?utm_source=qr" },
      { role: "Kruthika", title: "Lead", image: "/domain_pics/creative/lead/kruthika.jpeg", linkedin: "https://www.linkedin.com/in/kruthikasubbu?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/kruuuelle_18?igsh=MTF3czF5MnV3amdlaQ==&igsi=MTF3czF5MnV3amdlaQ==" },
      { role: "Neeraja", title: "Lead", image: "/domain_pics/creative/lead/neeraja.jpeg", linkedin: "https://www.linkedin.com/in/neeraja-balaji-0323b2384?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/neeru_balaji?igsh=MWJoc3B2cWIwMGdlaA==&igsi=MWJoc3B2cWIwMGdlaA==" },
    ],
  },
  {
    id: "cp",
    name: "Competitive programming",
    tagline: "Think. Code. Conquer.",
    description:
      "Mastering algorithmic problem solving, graph theory, dynamic programming, and speed coding contests. We train members for Codeforces, LeetCode, ICPC, and global coding battles.",
    skills: ["C++ Data Structures", "Graph Theory & DP", "Math & Number Theory", "Time Complexity Optimization", "Contest Speed"],
    projects: ["Weekly CP Ladder", "Algorithm Visualizer", "Campus Contest Platform"],
    sfx: "THWIP!",
    people: [
      { role: "Jahanvi", title: "Head", image: "/domain_pics/cp/head/Jahanvi.png", linkedin: "https://www.linkedin.com/in/jahanvi-jha-35a011348" },
      { role: "Mrudu Bhashini", title: "Head", image: "/domain_pics/cp/head/Mrudu.png", linkedin: "https://www.linkedin.com/in/mrudubhashini-cr-343954277?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/mrudu_bhashini_cr?igsh=MTl5Z2Z5cTB2NW12cw==&igsi=MTl5Z2Z5cTB2NW12cw==" },
      { role: "Eshwar", title: "Lead", image: "/domain_pics/cp/lead/Eshwar.png", linkedin: "https://www.linkedin.com/in/eshwarthath/", instagram: "https://www.instagram.com/eshwar._.thath" },
      { role: "Sundar", title: "Lead", image: "/domain_pics/cp/lead/Sundar.png", linkedin: "https://www.linkedin.com/in/sundar-reguraman-373a01277/", instagram: "https://www.instagram.com/sundarreguraman/" },
    ],
  },
  {
    id: "pr",
    name: "PR and Management",
    tagline: "Make the world notice.",
    description:
      "Building industry partnerships, securing event sponsorships, managing social channels, and connecting CodeKrafters with tech leaders, alumni, and campus organizations.",
    skills: ["Sponsorship Pitching", "Industry Partnerships", "Community Management", "Event Promotion", "Public Speaking"],
    projects: ["Hackathon Sponsor Deck", "Keynote Speaker Series", "Social Media Campaigns"],
    sfx: "WHAM!",
    people: [
      { role: "Siddhart", title: "Head", image: "/domain_pics/pr/head/Siddhart.png", linkedin: "https://www.linkedin.com/in/siddarth-kilari-440697310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", instagram: "https://www.instagram.com/siddarth_kilari?igsh=MmppNnhmYWVxZmZi&utm_source=qr" },
      { role: "Mahalakshmi", title: "Head", image: "/domain_pics/pr/head/Mahalakshmi.jpeg", linkedin: "http://www.linkedin.com/in/mahalakshmi-karthikeyan-bhavani", instagram: "https://www.instagram.com/kb_maha_lakshmi/" },
      { role: "Ankita", title: "Lead", image: "/domain_pics/pr/lead/Ankita.png", linkedin: "https://www.linkedin.com/in/ankita-arun-8705a237b?utm_source=share_via&utm", instagram: "https://www.instagram.com/_ankiii_9?igsh=d28wdzFkc2cxOGRq" },
      { role: "Ram", title: "Lead", image: "/domain_pics/pr/lead/Ram.png", linkedin: "https://www.linkedin.com/in/ramanathan-padmanabhan-4a9a91384?utm_source=share_via&utm_content=profile&utm_medium=member_ios", instagram: "https://www.instagram.com/_ramanathan_702?igsh=bjFkeGFjYXYwbnlp&utm_source=qr" },
      { role: "Tavishi", title: "Lead", image: "/domain_pics/pr/lead/Tavishi.png", linkedin: "https://www.linkedin.com/in/tavisshiksjjha/", instagram: "https://www.instagram.com/_tavisshi_/" },
    ],
  },
  {
    id: "cs",
    name: "Cyber Security",
    tagline: "Secure the grid.",
    description:
      "Defending systems, analyzing vulnerabilities, and learning the art of ethical hacking. We participate in CTFs and build secure web architectures.",
    skills: ["Ethical Hacking", "Cryptography", "Network Security", "Web Exploitation", "Reverse Engineering"],
    projects: ["Campus CTF Hosting", "Vulnerability Scanner", "Security Awareness Campaign"],
    sfx: "THWIP!",
    people: [
      { role: "Adhithya Krishna", title: "Head", image: "/domain_pics/cs/head/adithya kridhna.jpeg", objectPosition: "center", linkedin: "https://www.linkedin.com/in/aknairptb", instagram: "https://www.instagram.com/_.adi_x" },
      { role: "Yogeswaran", title: "Head", image: "/domain_pics/cs/head/Yogeswaran.png", linkedin: "https://www.linkedin.com/in/yogeswarannn/", instagram: "https://www.instagram.com/yogeswarannn/" },
      { role: "Meyyamai", title: "Lead", image: "/domain_pics/cs/lead/MEYYAMAI.png", linkedin: "https://www.linkedin.com/in/meyyammai-renganathan", instagram: "https://www.instagram.com/meyyammai._.here._?igsh=MWxwcnU2YnZkN203eA==" },
      { role: "Tejeshwar", title: "Lead", image: "/domain_pics/cs/lead/Tejeshwar.png", linkedin: "https://www.linkedin.com/in/tejeshwar-a-senthilkumar-1938a8320?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/tejeshwar.09?igsh=MXd0aW1maG04MHV2ZQ==" },
    ],
  },
  {
    id: "op",
    name: "Operations",
    tagline: "Executing precision.",
    description:
      "The backbone of CodeKrafters. We manage logistics, coordinate events, and ensure every initiative runs smoothly behind the scenes.",
    skills: ["Event Management", "Logistics", "Resource Allocation", "Team Coordination", "Planning"],
    projects: ["Launchpad Logistics", "Weekly Meetups", "Hackathon Operations"],
    sfx: "WHAM!",
    people: [
      { role: "Abdul Haady", title: "Head", image: "/domain_pics/op/Abdul Haady.jpeg", linkedin: "https://www.linkedin.com/in/abdul-haady-59622b332", instagram: "https://www.instagram.com/_hx_ady_?igsi=anBqa3RybzloYWxw" },
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
  { value: "8", label: "ACTIVE DOMAINS" },
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

export type Leadership = {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
  linkedin?: string;
  instagram?: string;
};

export const LEADERSHIP: Leadership[] = [
  {
    id: "president",
    name: "Sanjay",
    title: "President",
    image: "/domain_pics/pres/Sanjay.jpeg",
    description: "Guiding CodeKrafters with clarity, creativity, and conviction — leading our community into one of SRM's most dynamic tech forces.",
    linkedin: "https://www.linkedin.com/in/sanjay-ganesh-k-barade-675b38324/",
    instagram: "https://www.instagram.com/barade_sanjay"
  },
  {
    id: "vp",
    name: "Satya",
    title: "Vice President",
    image: "/domain_pics/vp/Satya VP.png",
    description: "Driving innovation and strategy across all domains — ensuring CodeKrafters remains at the forefront of student-led technical excellence.",
    linkedin: "https://www.linkedin.com/in/satyalohith455?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    instagram: "https://www.instagram.com/satyalohithh?igsh=MXViZHdqMG1lejg1ZA%3D%3D&igsi=MXViZHdqMG1lejg1ZA%3D%3D&utm_source=qr"
  }
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
