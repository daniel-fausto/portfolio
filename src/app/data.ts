export type Locale = "en" | "es";

export const profile = {
  name: "Daniel Fausto Franco",
  email: "ib.daniel.fausto@gmail.com",
  linkedin: "https://www.linkedin.com/in/daniel-fausto-franco/",
  github: "https://github.com/daniel-fausto",
};

/** First software job started Feb 2019. Experience auto-updates from this date. */
export const EXPERIENCE_START = new Date(2019, 1, 1);

export function yearsOfExperience(from: Date = EXPERIENCE_START, to: Date = new Date()): number {
  let years = to.getFullYear() - from.getFullYear();
  const monthDiff = to.getMonth() - from.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && to.getDate() < from.getDate())) years -= 1;
  return years;
}

export type Project = {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
  highlight?: string;
};

type Content = {
  nav: { about: string; projects: string; skills: string; experience: string; contact: string };
  hero: {
    greeting: string;
    role: string;
    tagline: string;
    summary: string;
    ctaWork: string;
    ctaContact: string;
    ctaCV: string;
    location: string;
  };
  sectionTitles: { about: string; projects: string; skills: string; experience: string };
  about: { paragraphs: string[]; yearsLabel: string; highlights: string[] };
  projects: Project[];
  skills: { group: string; items: string[] }[];
  experience: { role: string; company: string; period: string; points: string[] }[];
  contact: { kicker: string; title: string; text: string };
  footer: string;
};

export const content: Record<Locale, Content> = {
  en: {
    nav: { about: "About", projects: "Projects", skills: "Skills", experience: "Experience", contact: "Contact" },
    hero: {
      greeting: "Hi, my name is",
      role: "Full-Stack Developer (TypeScript)",
      tagline: "From microcontroller to frontend — POS, AI & Robotics",
      summary:
        "Seasoned Software Developer building and supporting systems at scale — POS, kitchen management, dashboards, and even autonomous robots. Backed by a Biomedical Engineering foundation, I take a product end-to-end: from the microcontroller to the frontend.",
      ctaWork: "View my work",
      ctaContact: "Get in touch",
      ctaCV: "↓ Download CV",
      location: "Mérida, Yucatán, Mexico",
    },
    sectionTitles: { about: "About me", projects: "Projects", skills: "Skills", experience: "Experience" },
    about: {
      paragraphs: [
        "I'm a Software Developer with a Biomedical Engineering background, which lets me take products end-to-end — from the microcontroller to the frontend.",
        "With extensive hands-on experience, I build and support enterprise POS systems with Angular, Vue and TypeScript, and previously led an electronics team building autonomous robots and exploring applied AI.",
        "I care about clean architecture, automated testing and shipping reliable software.",
      ],
      yearsLabel: "years of experience",
      highlights: [
        "🏅 Intel Partner of the Year #1 in AI (2020)",
        "👥 Led a team of 2 as Head of Electronics",
        "🤖 Built autonomous vending robots",
        "🧪 Testing with Jest & Playwright",
        "🌎 Spanish (native) · English (B2)",
      ],
    },
    projects: [
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
        links: [{ label: "▶ Live app", href: "https://agenda-inteligente-b34e7.web.app/dashboard" }],
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
    ],
    skills: [
      { group: "Frontend", items: ["TypeScript", "React", "Angular", "Vue 3", "Next.js", "RxJS", "NgRx", "TailwindCSS", "SCSS"] },
      { group: "Backend", items: ["Node.js", "Express", "Flask", "REST APIs", "MongoDB", "SQLite", "MySQL", "PostgreSQL"] },
      { group: "AI", items: ["OpenAI API", "Google Gemini", "OCR (Tesseract.js)", "Gazebo"] },
      { group: "Hardware / Firmware", items: ["C/C++", "ROS / RVIZ", "ESP32", "PSoC", "PIC", "ATmega", "Arduino", "I2C/SPI/UART/CAN/BLE", "PCB (Eagle)"] },
      { group: "Testing", items: ["Jest", "Playwright", "Cypress", "Mocha", "Karma/Jasmine"] },
      { group: "DevOps / Tools", items: ["Docker", "Git / GitLab", "CI/CD", "Webpack", "Vite", "Electron", "Cordova"] },
    ],
    experience: [
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
    ],
    contact: {
      kicker: "05. What's next?",
      title: "Get in touch",
      text: "I'm open to remote Full-Stack / Frontend opportunities. Let's talk.",
    },
    footer: "Built with Next.js & TailwindCSS",
  },
  es: {
    nav: { about: "Sobre mí", projects: "Proyectos", skills: "Habilidades", experience: "Experiencia", contact: "Contacto" },
    hero: {
      greeting: "Hola, mi nombre es",
      role: "Desarrollador Full-Stack (TypeScript)",
      tagline: "Del microcontrolador al frontend — POS, IA y Robótica",
      summary:
        "Desarrollador de Software con amplia trayectoria construyendo y dando soporte a sistemas a gran escala — POS, gestión de cocina, dashboards e incluso robots autónomos. Con una base en Ingeniería Biomédica, llevo un producto de principio a fin: del microcontrolador al frontend.",
      ctaWork: "Ver mi trabajo",
      ctaContact: "Contáctame",
      ctaCV: "↓ Descargar CV",
      location: "Mérida, Yucatán, México",
    },
    sectionTitles: { about: "Sobre mí", projects: "Proyectos", skills: "Habilidades", experience: "Experiencia" },
    about: {
      paragraphs: [
        "Soy Desarrollador de Software con formación en Ingeniería Biomédica, lo que me permite llevar los productos de principio a fin — del microcontrolador al frontend.",
        "Con amplia experiencia práctica, construyo y doy soporte a sistemas POS empresariales con Angular, Vue y TypeScript; anteriormente lideré un equipo de electrónica construyendo robots autónomos y explorando IA aplicada.",
        "Me importa la arquitectura limpia, las pruebas automatizadas y entregar software confiable.",
      ],
      yearsLabel: "años de experiencia",
      highlights: [
        "🏅 Intel Partner of the Year #1 en IA (2020)",
        "👥 Lideré un equipo de 2 como Jefe de Electrónica",
        "🤖 Construí robots de vending autónomos",
        "🧪 Pruebas con Jest y Playwright",
        "🌎 Español (nativo) · Inglés (B2)",
      ],
    },
    projects: [
      {
        title: "Robots de Vending Autónomos — Bimbo",
        tag: "Robótica · Firmware · Software",
        highlight: "Intel Partner of the Year #1 en IA (2020)",
        description:
          "Como Jefe de Electrónica, diseñé, construí y programé robots de vending autónomos (Ricolino y Barcel) con un dashboard embebido de gestión de productos. Presentados en Plaza Galerías Toluca como proyecto de innovación de Bimbo. La colaboración con Intel llevó a la empresa a ser reconocida como Intel Partner of the Year #1 en Inteligencia Artificial.",
        tech: ["C/C++", "ROS", "ESP32", "PSoC", "Firmware", "Dashboard embebido", "React"],
        links: [
          { label: "▶ Barcel navegando la plaza", href: "https://lnkd.in/p/eCaBYe8x" },
          { label: "▶ Ricolino hablando", href: "https://lnkd.in/p/eaw5_8mg" },
          { label: "▶ Prueba de carga", href: "https://lnkd.in/p/euc8y8iB" },
          { label: "🖼 Galería de imágenes", href: "https://lnkd.in/p/e3mvumuP" },
          { label: "📰 Nota de prensa Intel", href: "https://amiti.org.mx/en/1390/springlabs-se-destaco-como-partner-of-the-year-1-en-inteligencia-artificial-en-el-intel-partner-connect-de-mayo-2020/" },
        ],
      },
      {
        title: "Agenda Inteligente",
        tag: "Full-Stack · IA",
        description:
          "App full-stack que procesa documentos de forma inteligente: subes una imagen y extrae y estructura los datos con OCR y LLMs. Proyecto personal para explorar IA aplicada.",
        tech: ["React 19", "Vite", "TailwindCSS", "Express", "MongoDB", "OpenAI", "Google Gemini", "Tesseract.js (OCR)"],
        links: [{ label: "▶ Ver app", href: "https://agenda-inteligente-b34e7.web.app/dashboard" }],
      },
      {
        title: "Tech Showcase — Monorepo Full-Stack",
        tag: "Full-Stack · Spec-Driven · Open Source",
        description:
          "Monorepo spec-driven con tres apps de demostración independientes, cada una en un stack distinto para mostrar los mismos principios de ingeniería en varios ecosistemas: un gestor de tareas con IA, un mini punto de venta y un lector de recibos con OCR + LLM local. Incluye pruebas unitarias/e2e y Docker en cada demo. Prueba las versiones en vivo en el navegador o revisa el código full-stack.",
        tech: ["Next.js", "React", "Angular", "Vue 3", "Node/Express", "Flask", "PostgreSQL", "SQLite", "Jest", "Playwright", "Cypress", "Docker", "Ollama", "Tesseract"],
        links: [
          { label: "▶ Demos en vivo", href: "https://showcase-live-seven.vercel.app/" },
          { label: "Repo de GitHub", href: "https://github.com/daniel-fausto/tech-showcase" },
        ],
      },
      {
        title: "Genius POS & XKM",
        tag: "POS Empresarial · Multiplataforma",
        highlight: "Usado por marcas globales",
        description:
          "Desarrollo y soporte de los sistemas Genius POS y de Gestión de Cocina (XKM) (Xenial / Global Payments), una plataforma usada por marcas globales como Burger King, Denny's, SeaWorld, Carrefour, H&M, Volkswagen, Royal Caribbean e Ironman. Contribuí a la integración de pagos cashless.",
        tech: ["Angular 20", "TypeScript", "SQLite", "Vue 3", "Electron", "Jest", "Playwright"],
        links: [],
      },
      {
        title: "ORTESISCODO — Órtesis Activa de Codo",
        tag: "Embebido · Biomédico",
        description:
          "Tesis de licenciatura: una órtesis activa de rehabilitación de codo fabricada por manufactura aditiva. El firmware embebido controla sensores y actuadores para ejecutar una terapia programada, configurable por Bluetooth mediante una app en LabVIEW.",
        tech: ["C embebido", "Sensores y Actuadores", "Bluetooth", "LabVIEW", "Manufactura Aditiva"],
        links: [],
      },
    ],
    skills: [
      { group: "Frontend", items: ["TypeScript", "React", "Angular", "Vue 3", "Next.js", "RxJS", "NgRx", "TailwindCSS", "SCSS"] },
      { group: "Backend", items: ["Node.js", "Express", "Flask", "REST APIs", "MongoDB", "SQLite", "MySQL", "PostgreSQL"] },
      { group: "IA", items: ["OpenAI API", "Google Gemini", "OCR (Tesseract.js)", "Gazebo"] },
      { group: "Hardware / Firmware", items: ["C/C++", "ROS / RVIZ", "ESP32", "PSoC", "PIC", "ATmega", "Arduino", "I2C/SPI/UART/CAN/BLE", "PCB (Eagle)"] },
      { group: "Pruebas", items: ["Jest", "Playwright", "Cypress", "Mocha", "Karma/Jasmine"] },
      { group: "DevOps / Herramientas", items: ["Docker", "Git / GitLab", "CI/CD", "Webpack", "Vite", "Electron", "Cordova"] },
    ],
    experience: [
      {
        role: "Desarrollador de Software",
        company: "GA Tech (asignado a Xenial / Global Payments)",
        period: "Feb 2023 – Actualidad",
        points: [
          "Desarrollo y soporte de los sistemas Genius POS y XKM usados por marcas globales.",
          "Angular 20 + TypeScript + SQLite (POS) y Vue 3 + Electron (XKM); integración de pagos cashless.",
          "Pruebas automatizadas con Jest y Playwright, revisiones de código y soporte a producción multimarca.",
        ],
      },
      {
        role: "Jefe de Electrónica · Desarrollador Node.js & Frontend",
        company: "SpringLabs / Octopy",
        period: "Feb 2019 – Dic 2022",
        points: [
          "Jefe del área de Electrónica, liderando un equipo de 2 personas.",
          "Robots de vending autónomos + dashboards embebidos para Bimbo, Nestlé y Novo Nordisk.",
          "Intel Partner of the Year #1 en IA (2020). Chatbots internos en Node.js para Telefónica.",
        ],
      },
      {
        role: "Ingeniería Biomédica y Electrónica",
        company: "CIR 'Dr. Hideyo Noguchi' · Ingeniería Biomédica",
        period: "2015 – 2019",
        points: [
          "Prototipado CAD, instrumentación biomédica, diseño de circuitos/PCB y soldadura SMD.",
          "Mantenimiento preventivo/predictivo/correctivo de equipo médico y certificación hospitalaria.",
        ],
      },
    ],
    contact: {
      kicker: "05. ¿Qué sigue?",
      title: "Contáctame",
      text: "Estoy abierto a oportunidades remotas Full-Stack / Frontend. Hablemos.",
    },
    footer: "Hecho con Next.js y TailwindCSS",
  },
};
