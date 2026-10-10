export const profile = {
  name: "Daniel Fausto Franco",
  role: "Full-Stack Developer (TypeScript)",
  tagline: "From microcontroller to frontend — POS, AI & Robotics",
  location: "Mérida, Yucatán, México",
  email: "ib.daniel.fausto@gmail.com",
  linkedin: "https://www.linkedin.com/in/daniel-fausto-franco/",
  github: "https://github.com/daniel-fausto",
  summary:
    "Software Developer with 6+ years of experience building and supporting systems at scale — POS, kitchen management, dashboards, and even autonomous robots. Backed by a Biomedical Engineering foundation, I can take a product end-to-end: from the microcontroller to the frontend.",
};

export type Project = {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
  highlight?: string;
};

export const projects: Project[] = [
  {
    title: "Autonomous Vending Robots — Bimbo",
    tag: "Robotics · Firmware · Software",
    highlight: "Intel Partner of the Year #1 in AI (2020)",
    description:
      "As Head of Electronics, I designed, built and programmed autonomous vending robots (Ricolino & Barcel) with an embedded product-management dashboard. Showcased at Plaza Galerías Toluca as a Bimbo innovation project. The collaboration with Intel led the company to be recognized as Intel Partner of the Year #1 in Artificial Intelligence.",
    tech: ["C/C++", "ROS", "ESP32", "PSoC", "Firmware", "Embedded Dashboard", "React"],
    links: [
      { label: "▶ Barcel navigating the plaza", href: "https://lnkd.in/p/eCaBYe8x" },
      { label: "▶ Ricolino talking", href: "https://lnkd.in/p/eaw5_8mg" },
      { label: "▶ Load test", href: "https://lnkd.in/p/euc8y8iB" },
      { label: "🖼 Image gallery", href: "https://lnkd.in/p/e3mvumuP" },
      { label: "📰 Intel press note", href: "https://amiti.org.mx/en/1390/springlabs-se-destaco-como-partner-of-the-year-1-en-inteligencia-artificial-en-el-intel-partner-connect-de-mayo-2020/" },
    ],
  },
  {
    title: "Agenda Inteligente",
    tag: "Full-Stack · AI",
    description:
      "Full-stack app that processes documents intelligently: upload an image and it extracts and structures the data with OCR and LLMs. Built as a personal project to explore applied AI.",
    tech: ["React 19", "Vite", "TailwindCSS", "Express", "MongoDB", "OpenAI", "Google Gemini", "Tesseract.js (OCR)"],
    links: [
      { label: "GitHub repo", href: "https://github.com/daniel-fausto/agenda-inteligente" },
    ],
  },
  {
    title: "Tech Showcase — Full-Stack Monorepo",
    tag: "Full-Stack · Spec-Driven · Open Source",
    description:
      "A spec-driven monorepo with three independent demo apps, each built on a different stack to show the same engineering principles across ecosystems: an AI task manager, a mini point-of-sale, and a receipt reader with OCR + local LLM. Includes unit/e2e tests and Docker for every demo. Try the live, in-browser versions or read the full-stack source.",
    tech: ["Next.js", "React", "Angular", "Vue 3", "Node/Express", "Flask", "PostgreSQL", "SQLite", "Jest", "Playwright", "Cypress", "Docker", "Ollama", "Tesseract"],
    links: [
      { label: "▶ Live demos", href: "https://showcase-live-seven.vercel.app/" },
      { label: "GitHub repo", href: "https://github.com/daniel-fausto/tech-showcase" },
    ],
  },
  {
    title: "Genius POS & XKM",
    tag: "Enterprise POS · Multiplatform",
    highlight: "Used by global brands",
    description:
      "Development and support of the Genius POS and Kitchen Management (XKM) systems (Xenial / Global Payments), a platform used by global brands such as Burger King, Denny's, SeaWorld, Carrefour, H&M, Volkswagen, Royal Caribbean and Ironman. Contributed to the cashless payment integration.",
    tech: ["Angular 20", "TypeScript", "SQLite", "Vue 3", "Electron", "Jest", "Playwright"],
    links: [],
  },
  {
    title: "ORTESISCODO — Active Elbow Orthosis",
    tag: "Embedded · Biomedical",
    description:
      "B.Sc. thesis: an active elbow-rehabilitation orthosis manufactured via additive manufacturing. Embedded firmware drives sensors and actuators to run a programmed therapy, configurable over Bluetooth through a LabVIEW app.",
    tech: ["Embedded C", "Sensors & Actuators", "Bluetooth", "LabVIEW", "Additive Manufacturing"],
    links: [],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["TypeScript", "React", "Angular", "Vue 3", "Next.js", "RxJS", "NgRx", "TailwindCSS", "SCSS"] },
  { group: "Backend", items: ["Node.js", "Express", "Flask", "REST APIs", "MongoDB", "SQLite", "MySQL", "PostgreSQL"] },
  { group: "AI", items: ["OpenAI API", "Google Gemini", "OCR (Tesseract.js)", "Gazebo"] },
  { group: "Hardware / Firmware", items: ["C/C++", "ROS / RVIZ", "ESP32", "PSoC", "PIC", "ATmega", "Arduino", "I2C/SPI/UART/CAN/BLE", "PCB (Eagle)"] },
  { group: "Testing", items: ["Jest", "Playwright", "Cypress", "Mocha", "Karma/Jasmine"] },
  { group: "DevOps / Tools", items: ["Docker", "Git / GitLab", "CI/CD", "Webpack", "Vite", "Electron", "Cordova"] },
];

export const experience: { role: string; company: string; period: string; points: string[] }[] = [
  {
    role: "Software Developer",
    company: "GA Tech (assigned to Xenial / Global Payments)",
    period: "Feb 2023 – Present",
    points: [
      "Development and support of the Genius POS and XKM systems used by global brands.",
      "Angular 20 + TypeScript + SQLite (POS) and Vue 3 + Electron (XKM); cashless payment integration.",
      "Automated testing with Jest and Playwright, code reviews and multi-brand production support.",
    ],
  },
  {
    role: "Head of Electronics · Node.js & Frontend Developer",
    company: "SpringLabs / Octopy",
    period: "Feb 2019 – Dec 2022",
    points: [
      "Head of the Electronics area, leading a team of 2 people.",
      "Autonomous vending robots + embedded dashboards for Bimbo, Nestlé and Novo Nordisk.",
      "Intel Partner of the Year #1 in AI (2020). Internal Node.js chatbots for Telefónica.",
    ],
  },
  {
    role: "Biomedical Engineering & Electronics",
    company: "CIR 'Dr. Hideyo Noguchi' · Biomedical Engineering",
    period: "2015 – 2019",
    points: [
      "CAD prototyping, biomedical instrumentation, circuit/PCB design and SMD soldering.",
      "Preventive/predictive/corrective maintenance of medical equipment and hospital certification.",
    ],
  },
];
