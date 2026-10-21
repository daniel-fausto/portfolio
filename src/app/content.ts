export type Locale = "en" | "es";

export const locales: Locale[] = ["es", "en"];

export const hasLocale = (value: string): value is Locale => (locales as string[]).includes(value);

export const SITE_URL = "https://daniel-fausto.vercel.app";

export const profile = {
  name: "Daniel Fausto Franco",
  shortName: "Daniel Fausto",
  email: "ib.daniel.fausto@gmail.com",
  linkedin: "https://www.linkedin.com/in/daniel-fausto-franco/",
  github: "https://github.com/daniel-fausto",
};

/** First software job started Feb 2019. */
export const EXPERIENCE_START = new Date(2019, 1, 1);

export function yearsOfExperience(from: Date = EXPERIENCE_START, to: Date = new Date()): number {
  let years = to.getFullYear() - from.getFullYear();
  const monthDiff = to.getMonth() - from.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && to.getDate() < from.getDate())) years -= 1;
  return years;
}

export const BRANDS = [
  "Burger King",
  "Denny’s",
  "SeaWorld",
  "Carrefour",
  "H&M",
  "Volkswagen",
  "Royal Caribbean",
  "Ironman",
];

const CV = {
  softwareEn: "/cv/Daniel_Fausto_Franco_CV_Software_EN.pdf",
  hybridEn: "/cv/Daniel_Fausto_Franco_CV_Hybrid_EN.pdf",
  softwareEs: "/cv/Daniel_Fausto_Franco_CV_Software_ES.pdf",
  hybridEs: "/cv/Daniel_Fausto_Franco_CV_Hibrido_ES.pdf",
};

export const ROBOT_LINKS = {
  navigation: "https://lnkd.in/p/eCaBYe8x",
  interaction: "https://lnkd.in/p/eaw5_8mg",
  loadTest: "https://lnkd.in/p/euc8y8iB",
  gallery: "https://lnkd.in/p/e3mvumuP",
};

export const INTEL_PRESS =
  "https://amiti.org.mx/en/1390/springlabs-se-destaco-como-partner-of-the-year-1-en-inteligencia-artificial-en-el-intel-partner-connect-de-mayo-2020/";

export type Category = "software" | "hardware";

export type Project = {
  id: string;
  category: Category[];
  kind: string;
  title: string;
  sub: string;
  text: string;
  tags: string[];
  context: string;
  contribution: string;
  evidence: string;
  links: { label: string; href: string }[];
  featured?: boolean;
  image?: { src: string; alt: string; href: string };
};

export type CvOption = { label: string; title: string; text: string; href: string };

type SectionHead = { eyebrow: string; title: [string, string]; intro?: string };

export type Dictionary = {
  meta: { title: string; description: string; ogLocale: string };
  skip: string;
  siteTagline: string;
  langLabel: string;
  menuOpen: string;
  nav: { about: string; experience: string; projects: string; recognition: string; skills: string; education: string; contact: string };
  hero: {
    greeting: string;
    role: string;
    stack: string;
    introPrefix: string;
    introLead: string;
    introRest: string;
    ctaWork: string;
    ctaContact: string;
    ctaCv: string;
    availability: string;
    boardLabel: string;
    boardTitle: [string, string];
    boardRows: { label: string; value: string }[];
    location: string;
    languages: string;
  };
  metrics: { years: string; brands: string; award: string };
  brandsLabel: string;
  experience: SectionHead & {
    current: string;
    remote: string;
    jobs: { period: string; current?: boolean; role: string; company: string; companyNote?: string; summary: string; points: string[] }[];
    earlierSummary: string;
    earlier: { title: string; text: string }[];
  };
  projects: SectionHead & {
    filters: Record<"all" | Category, string>;
    filterLabel: string;
    countSuffix: string;
    explore: string;
    caseLabels: { context: string; contribution: string; evidence: string };
    items: Project[];
  };
  recognition: SectionHead & { lead: string; text: string; link: string; small: string };
  skills: SectionHead & {
    groups: { title: string; text: string; tags: string[] }[];
    allLabel: string;
    all: { term: string; desc: string }[];
  };
  education: SectionHead & {
    degree: { label: string; title: string; text: string };
    platzi: { label: string; title: string; items: string[] };
    trailblazer: { label: string; title: string; text: string; link: string; href: string };
  };
  contact: SectionHead & { text: string; copy: string; copied: string; copyFailed: string };
  cv: {
    eyebrow: string;
    dialogTitle: string;
    dialogText: string;
    close: string;
    download: string;
    options: CvOption[];
    otherLabel: string;
    other: { label: string; href: string }[];
  };
  footer: { tagline: string; backToTop: string };
};

const sharedAllSkills = [
  { term: "Languages", desc: "TypeScript · JavaScript (ES6+) · Python · C/C++ · C# · SQL" },
  {
    term: "Frontend",
    desc: "React · Angular v15-v20 · Vue 3 · Next.js · RxJS · NgRx · Redux Toolkit · HTML5 · CSS3/SASS · TailwindCSS · Bootstrap · Material-UI · Recharts · ag-grid",
  },
  { term: "Backend / Data", desc: "Node.js · Express · Flask · REST APIs · MongoDB · SQLite · MySQL · PostgreSQL · Sequelize" },
  { term: "Desktop / Integrations", desc: "Electron · Cordova · Socket.IO · SignalR · POS peripherals" },
  { term: "AI / OCR", desc: "OpenAI API · Google Gemini · Tesseract.js · Ollama (Tech Showcase)" },
  { term: "Testing", desc: "Jest · Playwright · Cypress · Mocha · Karma/Jasmine · Protractor" },
  { term: "DevOps / Practices", desc: "Git · GitLab · Docker · CI/CD · Webpack · Vite · SOLID · Clean Architecture · Agile/Scrum · Jira" },
  {
    term: "Embedded / Robotics",
    desc: "ROS · RVIZ · Gazebo · PSoC 1/4/5/6 · ESP32 · PIC · ATmega · Arduino · Raspberry Pi · FPGA (Basys) · I2C/SPI/UART/CAN/BLE",
  },
  {
    term: "Engineering",
    desc: "Eagle · Proteus · Multisim · OrCAD · SolidWorks · Inventor · LabVIEW · MATLAB · SMD soldering · additive manufacturing",
  },
];

const es: Dictionary = {
  meta: {
    title: "Daniel Fausto Franco | Full-Stack Developer",
    description:
      "Desarrollador Full-Stack con más de {years} años de experiencia. TypeScript, Angular, React, Node.js, sistemas POS, pagos, pruebas automatizadas y robótica. Mérida, México.",
    ogLocale: "es_MX",
  },
  skip: "Ir al contenido",
  siteTagline: "Portafolio profesional",
  langLabel: "Idioma",
  menuOpen: "Abrir navegación",
  nav: {
    about: "Acerca de mí",
    experience: "Experiencia",
    projects: "Proyectos",
    recognition: "Reconocimientos",
    skills: "Habilidades",
    education: "Formación",
    contact: "Contáctame",
  },
  hero: {
    greeting: "Hola, mi nombre es",
    role: "Full-Stack Developer",
    stack: "TypeScript · Angular · React · Node.js",
    introPrefix: "Desarrollo",
    introLead: "sistemas POS, software de gestión de cocina y productos conectados.",
    introRest:
      "Combino experiencia en producción con una base en electrónica y robótica para llevar soluciones de extremo a extremo.",
    ctaWork: "Ver mi trabajo",
    ctaContact: "Contáctame",
    ctaCv: "Descargar CV",
    availability: "Abierto a oportunidades remotas · Full-Stack / Frontend",
    boardLabel: "DEL SOFTWARE AL MUNDO FÍSICO",
    boardTitle: ["Una perspectiva", "de sistema completo."],
    boardRows: [
      { label: "Productos en producción", value: "Genius POS + XKM" },
      { label: "Interfaces e integraciones", value: "Web · escritorio · pagos" },
      { label: "Ingeniería aplicada", value: "Firmware · electrónica · robótica" },
    ],
    location: "Mérida, Yucatán, México",
    languages: "Español nativo · Inglés B2",
  },
  metrics: {
    years: "años de experiencia",
    brands: "marcas globales operan con la plataforma POS en la que trabajo",
    award: "Intel Partner of the Year en IA 2020, con el equipo de SpringLabs",
  },
  brandsLabel: "PLATAFORMA USADA POR",
  experience: {
    eyebrow: "01 / TRAYECTORIA",
    title: ["Experiencia que", "se lleva a producción."],
    intro: "Desarrollo, soporte y trabajo en equipo. Del software empresarial a los sistemas que conectan hardware y aplicaciones.",
    current: "ACTUAL",
    remote: "Remoto",
    jobs: [
      {
        period: "Feb 2023 - Actualidad",
        current: true,
        role: "Software Developer",
        company: "GA Tech",
        companyNote: "· asignado a Xenial / Global Payments",
        summary:
          "Desarrollo y soporte de Genius POS y XKM (software de gestión de cocina), con integración de pagos y soporte a producción para múltiples marcas.",
        points: [
          "Angular 20, TypeScript y SQLite para POS; Vue 3 y Electron para XKM.",
          "Contribución a la integración de pagos cashless y resolución de incidencias mediante hotfixes.",
          "Pruebas automatizadas con Jest y Playwright, revisión de código y colaboración en ceremonias ágiles.",
        ],
      },
      {
        period: "Feb 2019 - Dic 2022",
        role: "Jefe de Electrónica / Desarrollador Node.js y React",
        company: "SpringLabs / Octopy",
        summary: "En SpringLabs / Octopy combiné liderazgo técnico, aplicaciones web y desarrollo de robots vending autónomos.",
        points: [
          "Lideré un equipo de 2 personas, definiendo diseño, protocolos y entregables del área de electrónica.",
          "Desarrollé chatbots internos con Node.js para Telefónica: juntas, control de horas y registro de entradas y salidas.",
          "Construí aplicaciones React y dashboards para robots, incluida una interfaz en tiempo real con Socket.IO.",
          "Diseñé, fabriqué y programé robots para proyectos de Bimbo, Nestlé y Novo Nordisk, integrando firmware, electrónica y software.",
        ],
      },
    ],
    earlierSummary: "Experiencia anterior · Ingeniería Biomédica",
    earlier: [
      {
        title: "CIR “Dr. Hideyo Noguchi” · Investigador Junior · 2017-2019.",
        text: "Prototipos CAD, instrumentación, diseño de circuitos y PCB, soldadura SMD y manufactura aditiva.",
      },
      {
        title: "Ingeniería Biomédica · Ingeniero en Servicio · 2016-2017.",
        text: "Mantenimiento de equipo médico y protocolos de certificación hospitalaria en Cancún.",
      },
    ],
  },
  projects: {
    eyebrow: "02 / TRABAJO SELECCIONADO",
    title: ["La experiencia,", "hecha tangible."],
    intro: "Proyectos profesionales, aplicaciones personales y demos técnicas. Cada uno muestra una parte distinta de mi trabajo.",
    filters: { all: "Todos", software: "Software", hardware: "Hardware" },
    filterLabel: "Filtrar proyectos",
    countSuffix: "proyectos visibles",
    explore: "Explorar caso",
    caseLabels: { context: "Contexto", contribution: "Mi aportación", evidence: "Evidencia y alcance" },
    items: [
      {
        id: "project-genius",
        featured: true,
        category: ["software"],
        kind: "PROYECTO PROFESIONAL",
        title: "Genius POS & XKM",
        sub: "Software empresarial que conecta operación y pagos.",
        text: "Desarrollo y soporte de sistemas POS y software de gestión de cocina con Angular, Vue y Electron.",
        tags: ["Angular 20", "TypeScript", "SQLite", "Vue 3", "Electron", "Jest", "Playwright"],
        context: "Plataformas de Xenial / Global Payments utilizadas por marcas internacionales de restauración y otros sectores.",
        contribution:
          "Desarrollo y soporte a través de GA Tech; contribución a la integración cashless, pruebas automatizadas, revisión de código y hotfixes en producción.",
        evidence:
          "Experiencia profesional desde febrero de 2023. El código pertenece al entorno empresarial; este caso describe mi participación y las tecnologías utilizadas.",
        links: [],
      },
      {
        id: "project-showcase",
        category: ["software"],
        kind: "DEMOSTRACIÓN TÉCNICA",
        title: "Tech Showcase",
        sub: "Tres aplicaciones. Un mismo criterio de ingeniería.",
        text: "Monorepo con gestor de tareas con IA, mini POS y lector de recibos con OCR y LLM local.",
        tags: ["Next.js", "React", "Angular", "Vue", "Node.js", "Flask", "Docker"],
        context: "Demostraciones con distintos stacks para hacer revisable el trabajo Full-Stack y las prácticas de calidad.",
        contribution:
          "Aplicaciones con React/Next.js, Angular y Vue; backends Node/Express y Flask; PostgreSQL y SQLite; pruebas unitarias/e2e y Docker.",
        evidence:
          "Las demos web se pueden explorar en el navegador; el repositorio permite revisar el código Full-Stack. No representa una implementación comercial.",
        links: [
          { label: "Abrir demos", href: "https://showcase-live-seven.vercel.app/" },
          { label: "Ver repositorio", href: "https://github.com/daniel-fausto/tech-showcase" },
        ],
        image: {
          src: "/projects/tech-showcase.png",
          alt: "Página de inicio de Tech Showcase con tres demos: gestor de tareas con IA, mini POS y lector de recibos OCR",
          href: "https://showcase-live-seven.vercel.app/",
        },
      },
      {
        id: "project-agenda",
        category: ["software"],
        kind: "PROYECTO PERSONAL",
        title: "Agenda Inteligente",
        sub: "De una imagen a información estructurada.",
        text: "Aplicación Full-Stack que procesa imágenes con OCR y modelos de lenguaje.",
        tags: ["React 19", "Express", "MongoDB", "OpenAI", "Gemini", "Tesseract.js"],
        context: "Proyecto personal para explorar el procesamiento de documentos y la integración de IA en una aplicación web.",
        contribution:
          "Frontend con React 19, Vite y TailwindCSS; backend con Express y MongoDB; integración de OpenAI, Google Gemini y Tesseract.js.",
        evidence:
          "Aplicación disponible en línea. Es un proyecto personal de IA aplicada, separado de mi experiencia comercial en POS y robótica.",
        links: [{ label: "Abrir aplicación", href: "https://agenda-inteligente-b34e7.web.app/dashboard" }],
      },
      {
        id: "project-robots",
        category: ["hardware", "software"],
        kind: "PROYECTO PROFESIONAL",
        title: "Robots vending autónomos",
        sub: "Bimbo · Ricolino & Barcel",
        text: "Electrónica, firmware y dashboard embebido para conectar el producto físico con su operación.",
        tags: ["C/C++", "ROS", "ESP32", "PSoC", "React", "Firmware"],
        context: "Robots presentados en Plaza Galerías Toluca como proyecto de innovación de Bimbo durante mi etapa en SpringLabs / Octopy.",
        contribution:
          "Diseño, fabricación y programación de robots; firmware, electrónica e interfaz embebida para gestión de productos, con liderazgo del área de electrónica.",
        evidence:
          "Videos de navegación, interacción y prueba de carga. SpringLabs fue reconocida por Intel como Partner of the Year #1 en IA en 2020.",
        links: [
          { label: "Ver navegación", href: ROBOT_LINKS.navigation },
          { label: "Ver interacción", href: ROBOT_LINKS.interaction },
          { label: "Prueba de carga", href: ROBOT_LINKS.loadTest },
          { label: "Galería", href: ROBOT_LINKS.gallery },
        ],
      },
      {
        id: "project-orthosis",
        category: ["hardware"],
        kind: "PROYECTO DE TITULACIÓN",
        title: "ORTESISCODO",
        sub: "Ingeniería aplicada a rehabilitación.",
        text: "Órtesis activa de codo fabricada mediante manufactura aditiva, con firmware y configuración Bluetooth.",
        tags: ["Embedded C", "LabVIEW", "Bluetooth", "Sensores", "Manufactura aditiva"],
        context: "Tesis de Ingeniería Biomédica: diseño y caracterización de un prototipo de órtesis activa para rehabilitación del codo.",
        contribution:
          "Firmware para sensores y actuadores que ejecutan una terapia programada; configuración por Bluetooth mediante una aplicación LabVIEW.",
        evidence:
          "Proyecto académico de titulación. Su alcance es el prototipo descrito en la tesis; no se presenta como un dispositivo clínico comercial.",
        links: [],
      },
    ],
  },
  recognition: {
    eyebrow: "03 / RECONOCIMIENTO",
    title: ["Ingeniería en equipo.", "Reconocimiento internacional."],
    lead: "Intel Partner of the Year #1 en Inteligencia Artificial.",
    text: "Reconocimiento otorgado a SpringLabs en Intel Partner Connect, mayo de 2020. Formé parte del equipo como responsable de electrónica, desarrollando sistemas que integraban software, firmware y robótica.",
    link: "Leer nota de prensa",
    small: "Reconocimiento a la empresa · SpringLabs · 2020",
  },
  skills: {
    eyebrow: "04 / HABILIDADES",
    title: ["Un stack amplio.", "Experiencia con contexto."],
    intro: "Las tecnologías se entienden mejor junto al trabajo en el que las he utilizado.",
    groups: [
      {
        title: "Producción reciente",
        text: "Angular, TypeScript, Vue 3, SQLite y Electron en sistemas POS y software de gestión de cocina. Jest y Playwright para pruebas automatizadas.",
        tags: ["Angular", "TypeScript", "Vue 3", "SQLite", "Electron", "Jest", "Playwright"],
      },
      {
        title: "Desarrollo web e integraciones",
        text: "React, Node.js y Socket.IO en aplicaciones, chatbots internos y dashboards conectados a sistemas físicos.",
        tags: ["React", "Node.js", "Socket.IO", "REST APIs", "Pagos", "Periféricos POS"],
      },
      {
        title: "Proyectos personales y demos",
        text: "Stacks Full-Stack e IA aplicada con bases SQL/NoSQL, OCR, modelos de lenguaje, pruebas y contenedores.",
        tags: ["Next.js", "Express", "Flask", "PostgreSQL", "MongoDB", "Docker", "OpenAI", "Gemini", "OCR"],
      },
      {
        title: "Ingeniería y sistemas embebidos",
        text: "Electrónica, firmware, robótica y manufactura. Una base para comprender el producto más allá de la interfaz.",
        tags: ["C/C++", "Python", "ROS / RVIZ", "Gazebo", "ESP32", "PSoC", "PCB", "LabVIEW"],
      },
    ],
    allLabel: "Ver repertorio técnico completo",
    all: sharedAllSkills,
  },
  education: {
    eyebrow: "05 / FORMACIÓN Y APRENDIZAJE",
    title: ["Fundamentos de ingeniería.", "Aprendizaje continuo."],
    degree: {
      label: "Universidad Modelo · 2012-2016",
      title: "Ingeniería Biomédica (B.Sc.)",
      text: "Formación en instrumentación, electrónica e integración de sistemas. Tesis de órtesis activa para rehabilitación del codo.",
    },
    platzi: {
      label: "2022 · Cursos y formación complementaria",
      title: "Formación técnica · Platzi",
      items: ["Python, TypeScript y Advanced TypeScript", "Fundamentos de bases de datos y PostgreSQL", "Node.js y APIs REST con Express"],
    },
    trailblazer: {
      label: "2023 · Perfil de aprendizaje",
      title: "Salesforce Trailblazer",
      text: "Trayectoria de aprendizaje en el ecosistema Salesforce.",
      link: "Ver perfil de Trailblazer",
      href: "https://trailblazer.me/id/dfaustofranco1",
    },
  },
  contact: {
    eyebrow: "SIGUIENTE CONVERSACIÓN",
    title: ["Hablemos de lo que", "podemos construir."],
    text: "Busco oportunidades remotas Full-Stack / Frontend donde pueda aportar experiencia en producción, integración de sistemas y calidad de software.",
    copy: "Copiar correo",
    copied: "Correo copiado",
    copyFailed: "Selecciona el correo para copiarlo",
  },
  cv: {
    eyebrow: "CURRICULUM VITAE",
    dialogTitle: "Elige el CV para tu vacante.",
    dialogText: "Dos enfoques de una misma trayectoria. Selecciona el que mejor encaje con el puesto.",
    close: "Cerrar",
    download: "Descargar PDF",
    options: [
      {
        label: "Español · PDF · compatible con ATS",
        title: "Full-Stack / Software",
        text: "TypeScript, Angular, Node.js, POS, pagos y pruebas automatizadas.",
        href: CV.softwareEs,
      },
      {
        label: "Español · PDF · compatible con ATS",
        title: "Perfil híbrido",
        text: "Software, electrónica, firmware, robótica e integración de sistemas.",
        href: CV.hybridEs,
      },
    ],
    otherLabel: "También en inglés:",
    other: [
      { label: "Software", href: CV.softwareEn },
      { label: "Hybrid", href: CV.hybridEn },
    ],
  },
  footer: { tagline: "Software, sistemas y una visión de extremo a extremo.", backToTop: "Volver arriba" },
};

const en: Dictionary = {
  meta: {
    title: "Daniel Fausto Franco | Full-Stack Developer",
    description:
      "Full-Stack Developer with {years}+ years of experience. TypeScript, Angular, React, Node.js, POS systems, payments, automated testing and robotics. Mérida, Mexico.",
    ogLocale: "en_US",
  },
  skip: "Skip to content",
  siteTagline: "Professional portfolio",
  langLabel: "Language",
  menuOpen: "Open navigation",
  nav: {
    about: "About me",
    experience: "Experience",
    projects: "Projects",
    recognition: "Recognition",
    skills: "Skills",
    education: "Education",
    contact: "Get in touch",
  },
  hero: {
    greeting: "Hi, my name is",
    role: "Full-Stack Developer",
    stack: "TypeScript · Angular · React · Node.js",
    introPrefix: "I develop",
    introLead: "POS systems, kitchen management software and connected products.",
    introRest:
      "Production experience and a background in electronics and robotics help me take a systems-wide approach to building products.",
    ctaWork: "View my work",
    ctaContact: "Get in touch",
    ctaCv: "Download CV",
    availability: "Open to remote opportunities · Full-Stack / Frontend",
    boardLabel: "FROM SOFTWARE TO THE PHYSICAL WORLD",
    boardTitle: ["A perspective on", "the whole system."],
    boardRows: [
      { label: "Products in production", value: "Genius POS + XKM" },
      { label: "Interfaces & integrations", value: "Web · desktop · payments" },
      { label: "Applied engineering", value: "Firmware · electronics · robotics" },
    ],
    location: "Mérida, Yucatán, Mexico",
    languages: "Native Spanish · English B2",
  },
  metrics: {
    years: "years of experience",
    brands: "global brands run on the POS platform I work on",
    award: "Intel Partner of the Year in AI 2020, with the SpringLabs team",
  },
  brandsLabel: "PLATFORM TRUSTED BY",
  experience: {
    eyebrow: "01 / EXPERIENCE",
    title: ["Experience that", "reaches production."],
    intro: "Development, support and teamwork. From enterprise software to systems that connect hardware and applications.",
    current: "CURRENT",
    remote: "Remote",
    jobs: [
      {
        period: "Feb 2023 - Present",
        current: true,
        role: "Software Developer",
        company: "GA Tech",
        companyNote: "· assigned to Xenial / Global Payments",
        summary:
          "Development and support of Genius POS and XKM (kitchen management software), including payment integration and multi-brand production support.",
        points: [
          "Angular 20, TypeScript and SQLite for POS; Vue 3 and Electron for XKM.",
          "Contributed to cashless payment integration and resolved production issues through hotfixes.",
          "Automated testing with Jest and Playwright, code reviews and collaboration in Agile ceremonies.",
        ],
      },
      {
        period: "Feb 2019 - Dec 2022",
        role: "Head of Electronics / Node.js & React Developer",
        company: "SpringLabs / Octopy",
        summary: "At SpringLabs / Octopy, I combined technical leadership, web applications and autonomous vending robot development.",
        points: [
          "Led a team of 2, defining device design, protocols and deliverables for the Electronics area.",
          "Built internal Node.js chatbots for Telefónica: meeting management, time tracking and employee check-in/out.",
          "Developed React applications and robot dashboards, including a real-time interface with Socket.IO.",
          "Designed, built and programmed robots for Bimbo, Nestlé and Novo Nordisk projects, integrating firmware, electronics and software.",
        ],
      },
    ],
    earlierSummary: "Earlier experience · Biomedical Engineering",
    earlier: [
      {
        title: "CIR “Dr. Hideyo Noguchi” · Junior Researcher · 2017-2019.",
        text: "CAD prototypes, instrumentation, circuit/PCB design, SMD soldering and additive manufacturing.",
      },
      {
        title: "Biomedical Engineering · Service Engineer · 2016-2017.",
        text: "Medical equipment maintenance and hospital certification protocols in Cancún.",
      },
    ],
  },
  projects: {
    eyebrow: "02 / SELECTED WORK",
    title: ["Experience,", "made tangible."],
    intro: "Professional projects, personal applications and technical demos. Each shows a different part of my work.",
    filters: { all: "All", software: "Software", hardware: "Hardware" },
    filterLabel: "Filter projects",
    countSuffix: "projects shown",
    explore: "Explore case",
    caseLabels: { context: "Context", contribution: "My contribution", evidence: "Evidence & scope" },
    items: [
      {
        id: "project-genius",
        featured: true,
        category: ["software"],
        kind: "PROFESSIONAL PROJECT",
        title: "Genius POS & XKM",
        sub: "Enterprise software connecting operations and payments.",
        text: "Development and support of POS systems and kitchen management software with Angular, Vue and Electron.",
        tags: ["Angular 20", "TypeScript", "SQLite", "Vue 3", "Electron", "Jest", "Playwright"],
        context: "Xenial / Global Payments platforms used by international restaurant brands and other industries.",
        contribution:
          "Development and support through GA Tech; contributions to cashless integration, automated testing, code reviews and production hotfixes.",
        evidence:
          "Professional experience since February 2023. The code belongs to an enterprise environment; this case describes my involvement and the technologies used.",
        links: [],
      },
      {
        id: "project-showcase",
        category: ["software"],
        kind: "TECHNICAL DEMO",
        title: "Tech Showcase",
        sub: "Three applications. A consistent engineering approach.",
        text: "Monorepo with an AI task manager, mini POS and receipt reader using OCR and a local LLM.",
        tags: ["Next.js", "React", "Angular", "Vue", "Node.js", "Flask", "Docker"],
        context: "Demos across different stacks that make Full-Stack work and quality practices available for review.",
        contribution:
          "React/Next.js, Angular and Vue applications; Node/Express and Flask backends; PostgreSQL and SQLite; unit/e2e tests and Docker.",
        evidence:
          "Browser demos provide an interactive overview; the repository exposes Full-Stack source. This is a technical demonstration, not a commercial implementation.",
        links: [
          { label: "Open demos", href: "https://showcase-live-seven.vercel.app/" },
          { label: "View repository", href: "https://github.com/daniel-fausto/tech-showcase" },
        ],
        image: {
          src: "/projects/tech-showcase.png",
          alt: "Tech Showcase home page listing three demos: AI task manager, mini POS and OCR receipt reader",
          href: "https://showcase-live-seven.vercel.app/",
        },
      },
      {
        id: "project-agenda",
        category: ["software"],
        kind: "PERSONAL PROJECT",
        title: "Agenda Inteligente",
        sub: "From an image to structured information.",
        text: "Full-Stack application that processes images using OCR and language models.",
        tags: ["React 19", "Express", "MongoDB", "OpenAI", "Gemini", "Tesseract.js"],
        context: "A personal project exploring document processing and AI integration in a web application.",
        contribution:
          "React 19, Vite and TailwindCSS frontend; Express and MongoDB backend; OpenAI, Google Gemini and Tesseract.js integrations.",
        evidence:
          "Live personal application. AI work here is presented separately from my commercial POS and robotics experience.",
        links: [{ label: "Open application", href: "https://agenda-inteligente-b34e7.web.app/dashboard" }],
      },
      {
        id: "project-robots",
        category: ["hardware", "software"],
        kind: "PROFESSIONAL PROJECT",
        title: "Autonomous Vending Robots",
        sub: "Bimbo · Ricolino & Barcel",
        text: "Electronics, firmware and an embedded dashboard connecting a physical product with its operation.",
        tags: ["C/C++", "ROS", "ESP32", "PSoC", "React", "Firmware"],
        context: "Robots showcased at Plaza Galerías Toluca as a Bimbo innovation project during my time at SpringLabs / Octopy.",
        contribution:
          "Robot design, fabrication and programming; firmware, electronics and embedded product-management interfaces, with leadership of the Electronics area.",
        evidence: "Navigation, interaction and load-test videos. SpringLabs received Intel Partner of the Year #1 in AI in 2020.",
        links: [
          { label: "Navigation video", href: ROBOT_LINKS.navigation },
          { label: "Interaction video", href: ROBOT_LINKS.interaction },
          { label: "Load test", href: ROBOT_LINKS.loadTest },
          { label: "Gallery", href: ROBOT_LINKS.gallery },
        ],
      },
      {
        id: "project-orthosis",
        category: ["hardware"],
        kind: "GRADUATION PROJECT",
        title: "ORTESISCODO",
        sub: "Engineering applied to rehabilitation.",
        text: "Active elbow orthosis made with additive manufacturing, embedded firmware and Bluetooth configuration.",
        tags: ["Embedded C", "LabVIEW", "Bluetooth", "Sensors", "Additive manufacturing"],
        context: "Biomedical Engineering thesis: design and characterization of an active elbow-rehabilitation orthosis prototype.",
        contribution:
          "Firmware driving sensors and actuators to run programmed therapy; Bluetooth configuration through a LabVIEW application.",
        evidence: "Academic graduation project. Its scope is the thesis prototype, rather than a commercial clinical device.",
        links: [],
      },
    ],
  },
  recognition: {
    eyebrow: "03 / RECOGNITION",
    title: ["Engineering as a team.", "International recognition."],
    lead: "Intel Partner of the Year #1 in Artificial Intelligence.",
    text: "Awarded to SpringLabs at Intel Partner Connect in May 2020. I was part of the team as Head of Electronics, developing systems that integrated software, firmware and robotics.",
    link: "Read the press release",
    small: "Company recognition · SpringLabs · 2020",
  },
  skills: {
    eyebrow: "04 / SKILLS",
    title: ["A broad stack.", "Experience in context."],
    intro: "Technologies make more sense alongside the work where I have used them.",
    groups: [
      {
        title: "Recent production work",
        text: "Angular, TypeScript, Vue 3, SQLite and Electron for POS systems and kitchen management software. Jest and Playwright for automated testing.",
        tags: ["Angular", "TypeScript", "Vue 3", "SQLite", "Electron", "Jest", "Playwright"],
      },
      {
        title: "Web development & integrations",
        text: "React, Node.js and Socket.IO for applications, internal chatbots and dashboards connected to physical systems.",
        tags: ["React", "Node.js", "Socket.IO", "REST APIs", "Payments", "POS peripherals"],
      },
      {
        title: "Personal projects & demos",
        text: "Full-Stack and applied AI with SQL/NoSQL databases, OCR, language models, testing and containers.",
        tags: ["Next.js", "Express", "Flask", "PostgreSQL", "MongoDB", "Docker", "OpenAI", "Gemini", "OCR"],
      },
      {
        title: "Engineering & embedded systems",
        text: "Electronics, firmware, robotics and manufacturing. A foundation for understanding products beyond the interface.",
        tags: ["C/C++", "Python", "ROS / RVIZ", "Gazebo", "ESP32", "PSoC", "PCB", "LabVIEW"],
      },
    ],
    allLabel: "Explore the complete technical repertoire",
    all: sharedAllSkills,
  },
  education: {
    eyebrow: "05 / EDUCATION & LEARNING",
    title: ["Engineering foundations.", "Continuous learning."],
    degree: {
      label: "Universidad Modelo · 2012-2016",
      title: "B.Sc. in Biomedical Engineering",
      text: "Instrumentation, electronics and systems integration. Graduation thesis on an active elbow-rehabilitation orthosis.",
    },
    platzi: {
      label: "2022 · Courses and additional training",
      title: "Technical training · Platzi",
      items: ["Python, TypeScript and Advanced TypeScript", "Database Fundamentals and PostgreSQL", "Node.js and REST APIs with Express"],
    },
    trailblazer: {
      label: "2023 · Learning profile",
      title: "Salesforce Trailblazer",
      text: "Learning activity in the Salesforce ecosystem.",
      link: "View Trailblazer profile",
      href: "https://trailblazer.me/id/dfaustofranco1",
    },
  },
  contact: {
    eyebrow: "THE NEXT CONVERSATION",
    title: ["Let’s talk about what", "we can build together."],
    text: "I’m looking for remote Full-Stack / Frontend opportunities where I can contribute production experience, systems integration and software quality.",
    copy: "Copy email",
    copied: "Email copied",
    copyFailed: "Select the email to copy it",
  },
  cv: {
    eyebrow: "CURRICULUM VITAE",
    dialogTitle: "Choose the CV for your role.",
    dialogText: "Two perspectives on the same career. Choose the version that fits the opportunity.",
    close: "Close",
    download: "Download PDF",
    options: [
      {
        label: "English · PDF · ATS-friendly",
        title: "Full-Stack / Software",
        text: "TypeScript, Angular, Node.js, POS, payments and automated testing.",
        href: CV.softwareEn,
      },
      {
        label: "English · PDF · ATS-friendly",
        title: "Hybrid profile",
        text: "Software, electronics, firmware, robotics and systems integration.",
        href: CV.hybridEn,
      },
    ],
    otherLabel: "Also in Spanish:",
    other: [
      { label: "Software", href: CV.softwareEs },
      { label: "Híbrido", href: CV.hybridEs },
    ],
  },
  footer: { tagline: "Software, systems and an end-to-end perspective.", backToTop: "Back to top" },
};

export const dictionaries: Record<Locale, Dictionary> = { es, en };
