import type {
  Capability,
  EducationEntry,
  ExperienceEntry,
  ExperienceHighlight,
  MediaCredit,
} from "@/lib/types";

export const profile = {
  name: "Ali Jan",
  initials: "AJ",
  title: "Civil Engineer & HSE Professional",
  statement: "Engineering with precision. Safety with responsibility. Execution with purpose.",
  summary:
    "Civil engineering professional with architectural drafting, construction supervision and HSE experience across Pakistan and Qatar. NEBOSH-trained, AutoCAD-qualified and focused on safe, well-documented project execution.",
  email: "alijan.official6@gmail.com",
  linkedin: "https://www.linkedin.com/in/ali-jan-034a51309/",
  avatar: "/media/ali-jan.jpg",
} as const;

export const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Experience", "experience"],
  ["HSE", "hse"],
  ["Engineering", "engineering"],
  ["Projects", "projects"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
] as const;

export const experiences: ExperienceEntry[] = [
  {
    id: "qe-hse-2026",
    company: "QatarEnergy",
    role: "Health Safety Environment Supervisor",
    period: "April 2026 — June 2026",
    location: "Qatar",
    responsibilities: [],
    disciplines: ["hse", "execution"],
    detailStatus: "title-only",
  },
  {
    id: "qafco-2025",
    company: "QAFCO (Qatar Fertiliser Company)",
    role: "Safety Officer",
    period: "December 2025 — April 2026",
    location: "Qatar",
    responsibilities: [],
    disciplines: ["hse"],
    detailStatus: "title-only",
  },
  {
    id: "qe-fire-2025",
    company: "QatarEnergy",
    role: "Fire Watcher",
    period: "April 2025 — June 2025",
    location: "Qatar",
    responsibilities: [
      "Monitored hot-work operations and maintained fire-prevention measures.",
      "Supported confined-space safety through continuous communication and atmospheric monitoring as a Hole Watch.",
      "Checked gas levels and supported the proper use of gas-detection equipment.",
      "Monitored site protocols and responded to unsafe conditions or emergencies as a Safety Watch.",
    ],
    disciplines: ["hse"],
  },
  {
    id: "gcm-2025",
    company: "General Construction Mechanics",
    role: "Safety Supervisor",
    period: "February 2025 — May 2025",
    location: "Fatima Fertilizer, Sheikhupura",
    responsibilities: [
      "Conducted site inspections and supported PPE compliance.",
      "Identified hazards, assessed risk and suggested control measures.",
      "Delivered toolbox talks, maintained documentation and coordinated with workers and site engineers.",
    ],
    disciplines: ["hse", "execution"],
  },
  {
    id: "sultan-2022",
    company: "Sultan Builders and Architecture",
    role: "Architectural Engineering Drafter",
    period: "October 2022 — June 2024",
    location: "Punjab, Pakistan",
    responsibilities: [
      "Translated client requirements into detailed architectural plans, construction drawings and specifications.",
      "Provided on-site supervision to align construction with design intent.",
      "Considered energy efficiency, environmental impact and long-term sustainability in design work.",
    ],
    disciplines: ["drafting", "civil", "execution"],
  },
  {
    id: "rana-2022",
    company: "Rana Akhtar Construction Company",
    role: "Supervision of Building Construction Work",
    period: "May 2022 — August 2022",
    location: "Pakistan",
    responsibilities: [
      "Supported project planning and reviewed specifications, drawings and related documents.",
      "Inspected work for progress, design compliance and safety standards.",
      "Maintained records of construction activities, inspections and approvals, including permits.",
    ],
    disciplines: ["civil", "execution", "hse"],
  },
];

export const capabilities: Capability[] = [
  {
    name: "Construction execution",
    description: "Planning, specification review, site supervision and inspection from drawing to field activity.",
    disciplines: ["civil", "execution"],
  },
  {
    name: "HSE supervision",
    description: "Site inspection, PPE compliance, hazard identification, risk control and safety documentation.",
    disciplines: ["hse"],
  },
  {
    name: "Hazardous-work watch",
    description: "Documented Fire Watch, Hole Watch, Gas Watch and Safety Watch responsibilities.",
    disciplines: ["hse"],
  },
  {
    name: "Architectural drafting",
    description: "AutoCAD drafting, detailed plans, construction drawings, specifications and design coordination.",
    disciplines: ["drafting", "civil"],
  },
  {
    name: "Technical documentation",
    description: "Construction records, inspections, approvals, toolbox talks and permit coordination.",
    disciplines: ["execution", "hse"],
  },
  {
    name: "Sustainable considerations",
    description: "Design consideration for energy efficiency, environmental impact and long-term sustainability.",
    disciplines: ["drafting", "civil"],
  },
];

export const highlights: ExperienceHighlight[] = [
  {
    number: "01",
    title: "Hazardous-work watch",
    context: "QatarEnergy · Qatar · 2025",
    description: "Fire prevention, confined-space communication, atmospheric monitoring and unsafe-condition response in an HSE team context.",
    tags: ["Fire Watch", "Hole Watch", "Gas Watch"],
  },
  {
    number: "02",
    title: "Site safety supervision",
    context: "General Construction Mechanics · 2025",
    description: "Site and PPE inspections, hazard identification, risk-control recommendations, toolbox talks and coordination.",
    tags: ["PPE", "Risk assessment", "TBT"],
  },
  {
    number: "03",
    title: "Drawing-to-site coordination",
    context: "Sultan Builders and Architecture · 2022–2024",
    description: "Client requirements translated into plans, construction drawings and specifications, supported by on-site supervision.",
    tags: ["AutoCAD", "Drawings", "Site supervision"],
  },
  {
    number: "04",
    title: "Building work supervision",
    context: "Rana Akhtar Construction Company · 2022",
    description: "Planning, drawing review, regular inspections, documentation and coordination of permits and approvals.",
    tags: ["Planning", "Inspection", "Records"],
  },
];

export const education: EducationEntry[] = [
  {
    title: "Bachelor of Engineering, Civil Engineering",
    institution: "Mir Chakar Khan Rind University of Technology",
    period: "June 2022 — January 2026",
    type: "degree",
  },
  {
    title: "Occupational Safety and Health Technology / Technician (NEBOSH)",
    institution: "National Examination Board in Occupational Safety and Health",
    period: "July 2023 — October 2023",
    type: "professional",
  },
  {
    title: "AutoCAD — Architectural Drafting and Architectural CAD/CADD",
    institution: "Punjab Board of Technical Education, Lahore",
    period: "August 2022 — February 2023",
    type: "technical",
  },
  {
    title: "Associate Degree, Civil Engineering",
    institution: "Mir Chakar Khan Rind University of Technology",
    period: "May 2019 — August 2022",
    type: "degree",
  },
];

export const mediaCredits: MediaCredit[] = [
  { file: "hero-site.jpg", title: "Working in a cold morning", creator: "Bruno Silva", sourceUrl: "https://www.pexels.com/photo/working-in-a-cold-morning-16390228/", licenseUrl: "https://www.pexels.com/license/" },
  { file: "safety-team.jpg", title: "Men Working on a Construction Site while Wearing Hard Hats", creator: "This Viktọ", sourceUrl: "https://www.pexels.com/photo/men-working-on-a-construction-site-while-wearing-hard-hats-10202856/", licenseUrl: "https://www.pexels.com/license/" },
  { file: "steel-work.jpg", title: "Men Working in a Construction Site", creator: "Davide Locatelli", sourceUrl: "https://www.pexels.com/photo/men-working-in-a-construction-site-2383650/", licenseUrl: "https://www.pexels.com/license/" },
  { file: "road-work.jpg", title: "Workers Using Heavy Machine in Asphalt Laying", creator: "Rookey Pain", sourceUrl: "https://www.pexels.com/photo/workers-using-heavy-machine-in-asphalt-laying-14053429/", licenseUrl: "https://www.pexels.com/license/" },
  { file: "bridge.jpg", title: "Pillars and Suspension Cables of Bridge", creator: "Jan van der Wolf", sourceUrl: "https://www.pexels.com/photo/pillars-and-suspension-cables-of-bridge-21327114/", licenseUrl: "https://www.pexels.com/license/" },
  { file: "tower.jpg", title: "Concrete Buildings Under Cloudy Sky", creator: "SevenStorm JUHASZIMRUS", sourceUrl: "https://www.pexels.com/photo/concrete-buildings-under-cloudy-sky-435900/", licenseUrl: "https://www.pexels.com/license/" },
  { file: "scaffold.jpg", title: "Silhouette of Workers on Scaffolding Structure", creator: "fridaynightvibe", sourceUrl: "https://www.pexels.com/photo/silhouette-of-workers-on-scaffolding-structure-30066484/", licenseUrl: "https://www.pexels.com/license/" },
];
