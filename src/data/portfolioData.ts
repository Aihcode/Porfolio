import hermeposImg from '../assets/images/project_hermepos_pos_1793793813202.jpg';
import cardStudioImg from '../assets/images/project_card_studio_1793793813566.jpg';
import streamingImg from '../assets/images/project_streaming_platform_1793793812266.jpg';

export interface Repository {
  id: string;
  name: string;
  owner: 'Aihcode' | 'Phermidex';
  title: string;
  description: {
    en: string;
    es: string;
  };
  category: 'enterprise' | 'fullstack' | 'tools' | 'shopify' | 'python' | 'community' | 'templates';
  language: string;
  stars: number;
  forks: number;
  githubUrl: string;
  liveUrl?: string | null;
  isFeatured?: boolean;
  image?: string;
  tags: string[];
  highlights?: {
    en: string[];
    es: string[];
  };
  updatedAt: string;
  defaultBranch?: string;
}

export interface ProfileInfo {
  name: string;
  handles: {
    aihcode: string;
    phermidex: string;
  };
  roles: {
    en: string;
    es: string;
  };
  bio: {
    en: string;
    es: string;
  };
  location: string;
  email: string;
  linkedin: string;
  website: string;
  hireable: boolean;
  experienceYears: number;
  stats: {
    totalRepos: number;
    aihcodeRepos: number;
    phermidexRepos: number;
    yearsActive: number;
  };
}

export const PROFILE_INFO: ProfileInfo = {
  name: "Hermides Medina",
  handles: {
    aihcode: "Aihcode",
    phermidex: "Phermidex"
  },
  roles: {
    en: "Senior Full-Stack & Systems Developer",
    es: "Desarrollador Full-Stack Senior y Especialista en Sistemas"
  },
  bio: {
    en: "Web and software engineer based in Santiago de los Caballeros, Dominican Republic. Creator of HermePOS enterprise inventory & DGII eCF electronic fiscal billing solutions, custom ID badge generators, and modern Next.js/TypeScript applications.",
    es: "Desarrollador web y de software radicado en Santiago de los Caballeros, República Dominicana. Creador de HermePOS para control de inventario y facturación electrónica eCF de la DGII, generadores de carnets y sistemas modernos en Next.js y TypeScript."
  },
  location: "Santiago de los Caballeros, Dominican Republic",
  email: "hermidesm05@gmail.com",
  linkedin: "https://www.linkedin.com/in/hermides-medina-80992813b/",
  website: "https://hermepos.com",
  hireable: true,
  experienceYears: 10,
  stats: {
    totalRepos: 66,
    aihcodeRepos: 22,
    phermidexRepos: 44,
    yearsActive: 10
  }
};

export const STORY_SECTIONS = [
  {
    id: "infotep",
    title: {
      es: "La Chispa Inicial e Infotep",
      en: "The Initial Spark & Infotep"
    },
    subtitle: {
      es: "De la electrónica al arte del código",
      en: "From electronics to the art of code"
    },
    content: {
      es: "Mi pasión por la programación nació de una chispa encendida en las aulas de Infotep. Al terminar electrónica, me sumergí en el mundo de la informática, donde descubrí una lógica que resonaba profundamente conmigo. Programar era como escribir una sinfonía, donde cada línea de código era una nota que contribuía a una melodía mayor.",
      en: "My passion for programming was ignited in the classrooms of Infotep. After completing electronics, I immersed myself in computing, discovering a logic that resonated deeply with me. Programming was like composing a symphony, where every line of code was a note contributing to a larger melody."
    },
    badge: "2014 - 2015"
  },
  {
    id: "roots",
    title: {
      es: "De la Herrería Familiar a la Tecnología",
      en: "From Family Metalcraft to Technology"
    },
    subtitle: {
      es: "Disciplina de taller y pasantía en Prodacom",
      en: "Workshop discipline and Prodacom internship"
    },
    content: {
      es: "Mis inicios en la programación fueron poco convencionales. Tras trabajar varios años en la herrería familiar, tuve la oportunidad de realizar una pasantía en Prodacom como ayudante de técnico de reparación. Allí, rodeado de profesionales experimentados como Elías Mercado y Damian Ureña, mi interés por la tecnología se intensificó.",
      en: "My beginnings were non-conventional. After years working in the family blacksmith workshop, I had the opportunity to intern at Prodacom as a repair technician assistant. Surrounded by seasoned professionals like Elías Mercado and Damian Ureña, my passion for computing intensified."
    },
    badge: "2015"
  },
  {
    id: "mentorship",
    title: {
      es: "Mentores y Fundamentos de Lógica",
      en: "Mentors and First Logic Steps"
    },
    subtitle: {
      es: "Damian Ureña, Jehovany Córdova e Ing. Diosiris Camacho",
      en: "Damian Ureña, Jehovany Córdova, and Eng. Diosiris Camacho"
    },
    content: {
      es: "Damian fue mi mentor y quien me presentó a Jehovany Córdova, quien se encargaría de introducirme al mundo de la programación. Recuerdo claramente nuestra primera conversación sobre lógica de programación: me explicó que programar no era solo tener talento, sino disciplina y práctica constante. Con la guía de Damian y del ingeniero Diosiris Camacho, escribí mi primer programa funcional: una sensación de logro inolvidable.",
      en: "Damian was my mentor who introduced me to Jehovany Córdova, who guided my entry into programming. I vividly remember our first conversation on programming logic: he explained that coding wasn't merely talent, but discipline and deliberate practice. Guided by Damian and engineer Diosiris Camacho, I wrote my first working program—an unforgettable milestone."
    },
    badge: "2016 - 2018"
  },
  {
    id: "growth",
    title: {
      es: "Crecimiento Profesional y Agrofem",
      en: "Enterprise Systems & Agrofem"
    },
    subtitle: {
      es: "Sistemas de gestión, facturación DGII e inventarios",
      en: "Management platforms, DGII billing, and databases"
    },
    content: {
      es: "Con el tiempo mi experiencia se amplió a sistemas de gestión complejos. Uno de los proyectos más desafiantes fue mi trabajo en Agrofem, donde colaboré con Eduardo Reyes, experto en bases de datos. Juntos optimizamos procesos, diseñamos herramientas de identificación como Agrofem Card Studio y consolidamos soluciones empresariales como HermePOS.",
      en: "Over time my experience expanded into complex management architectures. One of the most challenging chapters was my work at Agrofem, collaborating closely with database expert Eduardo Reyes. Together we streamlined workflows, designed ID badge engines like Agrofem Card Studio, and built robust business platforms like HermePOS."
    },
    badge: "2019 - Presente"
  },
  {
    id: "philosophy",
    title: {
      es: "Filosofía y Lecciones Aprendidas",
      en: "Core Philosophy & Lessons"
    },
    subtitle: {
      es: "Perseverancia, curiosidad y colaboración",
      en: "Perseverance, curiosity, and collaboration"
    },
    content: {
      es: "A lo largo de mi trayectoria he aprendido que la programación es mucho más que escribir código. Es una forma de pensar, de resolver problemas y de crear soluciones reales. La perseverancia, la curiosidad y la colaboración son cualidades fundamentales. Agradezco sinceramente a mi familia, amigos y mentores por forjar el programador que soy hoy.",
      en: "Throughout my career I have learned that software engineering is far more than writing syntax. It is a way of thinking, solving systemic problems, and building tangible value. Perseverance, curiosity, and collaboration are essential. Deep thanks to my family, friends, and mentors who shaped the engineer I am today."
    },
    badge: "Valores"
  }
];

export const SKILLS_LIST = [
  {
    category: { es: "Desarrollo Frontend", en: "Frontend Development" },
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "Vue.js", "Astro", "HTML5 & CSS3 Canvas"]
  },
  {
    category: { es: "Backend y APIs", en: "Backend & APIs" },
    skills: ["Node.js", "Express", "Python", "FastAPI", "Flask", "PHP", "RESTful Architecture", "HLS Video Streaming"]
  },
  {
    category: { es: "Bases de Datos y Cloud", en: "Databases & Cloud" },
    skills: ["PostgreSQL", "SQLite", "Firebase / Firestore", "Docker", "Git / GitHub", "Vercel", "GitHub Actions"]
  },
  {
    category: { es: "Especialidades de Negocio", en: "Enterprise & Business Domain" },
    skills: ["Facturación Electrónica DGII (eCF)", "Comprobantes Fiscales NCF (Norma 06-18)", "Sistemas POS & Inventario", "Diseñador de Carnets PVC / RFID", "Shopify Liquid & Headless"]
  }
];

// All 22 repositories from https://github.com/Aihcode plus flagship repositories from Phermidex
export const ALL_PROJECTS: Repository[] = [
  // --- FLAGSHIP ENTERPRISE PROJECTS ---
  {
    id: "hermepos_v3",
    name: "hermepos_v3",
    owner: "Aihcode",
    title: "HermePOS v3 - DGII eCF Invoicing & Inventory",
    description: {
      es: "Sistema empresarial completo de control de inventario, punto de venta (POS) y facturación electrónica fiscal eCF para la Dirección General de Impuestos Internos (DGII) de República Dominicana.",
      en: "Enterprise inventory control, point-of-sale (POS), and electronic fiscal billing (eCF) system certified for the DGII in the Dominican Republic."
    },
    category: "enterprise",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/hermepos_v3",
    liveUrl: "https://hermepos.com",
    isFeatured: true,
    image: hermeposImg,
    tags: ["TypeScript", "POS", "DGII eCF", "Inventory", "Retail"],
    highlights: {
      es: [
        "Módulo de comprobantes fiscales eCF y NCF para cumplimiento normativo",
        "Control de stock en tiempo real y alerta de reorden",
        "Módulo de caja, turnos, ventas y reportes financieros",
        "Arquitectura escalable en TypeScript"
      ],
      en: [
        "Certified eCF and NCF fiscal invoice module for Dominican DGII compliance",
        "Real-time multi-warehouse inventory and restock alerts",
        "Cashier register, shifts, sales auditing, and P&L financial reports",
        "Scalable modular TypeScript architecture"
      ]
    },
    updatedAt: "2026-10-30T03:00:06Z",
    defaultBranch: "main"
  },
  {
    id: "agrofem-card-studio",
    name: "Agrofem-Card-Studio",
    owner: "Aihcode",
    title: "Agrofem Card Studio",
    description: {
      es: "Diseñador visual e interactivo de carnets de identificación corporativa, membresías y credenciales con exportación de alta resolución para impresión en PVC.",
      en: "Visual interactive corporate ID card, membership, and credential designer with high-resolution export for direct PVC thermal printing."
    },
    category: "enterprise",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/Agrofem-Card-Studio",
    liveUrl: null,
    isFeatured: true,
    image: cardStudioImg,
    tags: ["TypeScript", "Canvas", "ID Badges", "Agrofem", "Print Design"],
    highlights: {
      es: [
        "Editor visual drag-and-drop de elementos (fotos, códigos de barra, QR)",
        "Soporte para plantillas estándar CR80 de tarjetas PVC",
        "Integración con bases de datos para emisión masiva",
        "Colaboración inspirada en flujos de producción de Agrofem"
      ],
      en: [
        "Drag-and-drop visual canvas editor for badges, photos, barcodes, and QRs",
        "Native CR80 standard PVC card template support",
        "Batch issuance integration for enterprise employee databases",
        "Engineered for high-volume corporate badge operations"
      ]
    },
    updatedAt: "2026-11-03T12:20:38Z",
    defaultBranch: "main"
  },
  {
    id: "streaming-platform",
    name: "streaming-platform",
    owner: "Aihcode",
    title: "Next.js HLS Video Streaming Platform",
    description: {
      es: "Plataforma de streaming de video construida con Next.js y TMDB API, equipada con reproductor personalizado y soporte para protocolo HLS de baja latencia.",
      en: "Modern video streaming platform built with Next.js and TMDB API, featuring a bespoke video player engine with HLS protocol support."
    },
    category: "fullstack",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/streaming-platform",
    liveUrl: "https://streaming-platform-tmdb.vercel.app/",
    isFeatured: true,
    image: streamingImg,
    tags: ["Next.js", "HLS Video", "TMDB API", "React", "Tailwind CSS"],
    highlights: {
      es: [
        "Reproductor HLS personalizado con controles de calidad y audio",
        "Integración con TMDB API para catálogo dinámico y metadatos",
        "Interfaz inmersiva con temática oscura y respuesta ultra fluida",
        "Desplegado y optimizado en Vercel"
      ],
      en: [
        "Custom HLS player with adaptive bitrate and audio track switching",
        "TMDB API integration for rich catalog browsing and metadata",
        "Immersive cinema dark UI with buttery-smooth interactions",
        "Production deployment on Vercel"
      ]
    },
    updatedAt: "2024-08-27T14:49:15Z",
    defaultBranch: "main"
  },
  {
    id: "carnets-rd",
    name: "CARNETS-RD",
    owner: "Aihcode",
    title: "CARNETS-RD Generator",
    description: {
      es: "Aplicación especializada para la generación y gestión de carnets y credenciales institucionales en República Dominicana.",
      en: "Specialized web application for institutional badge generation and credential management in the Dominican Republic."
    },
    category: "enterprise",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/CARNETS-RD",
    liveUrl: null,
    isFeatured: false,
    tags: ["TypeScript", "Badges", "ID Generation", "Canvas"],
    updatedAt: "2026-10-13T19:42:35Z",
    defaultBranch: "main"
  },
  {
    id: "aihnoa-notes",
    name: "Aihnoa-Notes",
    owner: "Aihcode",
    title: "Aihnoa Notes",
    description: {
      es: "Aplicación de notas de alta velocidad con almacenamiento local-first offline, búsqueda rápida y soporte para markdown.",
      en: "High-speed local-first offline notes application with instant full-text search and markdown formatting."
    },
    category: "tools",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/Aihnoa-Notes",
    liveUrl: null,
    isFeatured: false,
    tags: ["TypeScript", "Local-First", "Markdown", "IndexedDB"],
    updatedAt: "2026-10-06T11:51:33Z",
    defaultBranch: "main"
  },
  {
    id: "my_portfolio",
    name: "my_portfolio",
    owner: "Aihcode",
    title: "Aihcode Portfolio v1 (Next.js)",
    description: {
      es: "Portafolio web personal desarrollado con Next.js y publicado en GitHub Pages.",
      en: "Personal developer portfolio website built with Next.js and deployed to GitHub Pages."
    },
    category: "fullstack",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/my_portfolio",
    liveUrl: "https://aihcode.github.io/my_portfolio/",
    isFeatured: false,
    tags: ["Next.js", "JavaScript", "GitHub Pages", "Portfolio"],
    updatedAt: "2026-04-08T01:42:35Z",
    defaultBranch: "main"
  },
  {
    id: "kioskshell",
    name: "KioskShell",
    owner: "Aihcode",
    title: "KioskShell Terminal Launcher",
    description: {
      es: "Entorno shell para quioscos de autoservicio y terminales comerciales con bloqueo de interfaz y ejecución garantizada.",
      en: "Dedicated kiosk shell environment for self-service hardware terminals with locked interface and resilient execution."
    },
    category: "enterprise",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/KioskShell",
    liveUrl: null,
    isFeatured: false,
    tags: ["Kiosk", "Hardware", "POS", "Terminal"],
    updatedAt: "2026-10-20T23:47:13Z",
    defaultBranch: "main"
  },
  {
    id: "fastapi-pynoa",
    name: "fastApi-pynoa",
    owner: "Aihcode",
    title: "FastAPI Pynoa Backend",
    description: {
      es: "Servicio backend RESTful construido con FastAPI en Python para procesamiento de datos de alta velocidad y autenticación JWT.",
      en: "High-performance RESTful API backend service built with FastAPI in Python, featuring JWT auth and asynchronous workers."
    },
    category: "python",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/fastApi-pynoa",
    liveUrl: null,
    isFeatured: false,
    tags: ["Python", "FastAPI", "REST API", "Pydantic"],
    updatedAt: "2024-10-23T14:49:33Z",
    defaultBranch: "main"
  },
  {
    id: "full-stack-fastapi-template",
    name: "full-stack-fastapi-template",
    owner: "Aihcode",
    title: "Full-Stack FastAPI & React Template",
    description: {
      es: "Plantilla completa para desarrollo full-stack moderno: FastAPI, React, SQLModel, PostgreSQL, Docker y GitHub Actions con HTTPS automático.",
      en: "Full-stack modern template: FastAPI, React, SQLModel, PostgreSQL, Docker, and GitHub Actions with automatic HTTPS."
    },
    category: "templates",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/full-stack-fastapi-template",
    liveUrl: null,
    isFeatured: false,
    tags: ["Docker", "FastAPI", "PostgreSQL", "React", "SQLModel"],
    updatedAt: "2024-08-02T19:32:21Z",
    defaultBranch: "master"
  },
  {
    id: "flask_report_system",
    name: "flask_report_system",
    owner: "Aihcode",
    title: "Flask SQL Report System",
    description: {
      es: "Sistema interactivo en Flask que permite diseñar, consultar y generar reportes dinámicos escribiendo SQL directamente en la aplicación.",
      en: "Interactive Flask reporting system allowing users to design, query, and generate dynamic reports by writing SQL directly."
    },
    category: "python",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/flask_report_system",
    liveUrl: null,
    isFeatured: false,
    tags: ["Python", "Flask", "SQL", "Reporting"],
    updatedAt: "2024-04-27T02:12:08Z",
    defaultBranch: "master"
  },
  {
    id: "nextui-dashboard-template",
    name: "nextui-dashboard-template",
    owner: "Aihcode",
    title: "NextUI Dashboard Template",
    description: {
      es: "Plantilla inicial de panel administrativo construida con NextUI v2 y Next.js con métricas, tablas y diseño responsive.",
      en: "Dashboard starter template built with NextUI v2 and Next.js featuring metrics, data tables, and responsive layout."
    },
    category: "templates",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/nextui-dashboard-template",
    liveUrl: "https://nextui-dashboard-template.vercel.app/",
    isFeatured: false,
    tags: ["Next.js", "NextUI", "Dashboard", "Admin"],
    updatedAt: "2024-05-01T21:23:06Z",
    defaultBranch: "main"
  },
  {
    id: "astro-shopify",
    name: "astro-shopify",
    owner: "Aihcode",
    title: "Astro Shopify Headless Storefront",
    description: {
      es: "Tema inicial liviano y ultrarrápido para construir tiendas Shopify headless utilizando Astro y Storefront API.",
      en: "Lightweight, blazing-fast starter theme to build headless Shopify storefronts using Astro and Storefront API."
    },
    category: "shopify",
    language: "Astro",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/astro-shopify",
    liveUrl: "https://astro-shopify.frontvibe.com",
    isFeatured: false,
    tags: ["Astro", "Shopify", "Headless", "E-Commerce"],
    updatedAt: "2024-05-01T21:22:28Z",
    defaultBranch: "main"
  },
  {
    id: "astro-ecommerce",
    name: "astro-ecommerce",
    owner: "Aihcode",
    title: "Astro E-Commerce UI Components",
    description: {
      es: "Conjunto de componentes listos para usar en tiendas de comercio electrónico creadas sobre Astro.",
      en: "Ready-to-use e-commerce component kit crafted for high-speed Astro online storefronts."
    },
    category: "shopify",
    language: "Astro",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/astro-ecommerce",
    liveUrl: "https://www.creative-tim.com/astro",
    isFeatured: false,
    tags: ["Astro", "E-Commerce", "UI Kit"],
    updatedAt: "2024-05-01T21:22:05Z",
    defaultBranch: "main"
  },
  {
    id: "searchbar-shopify",
    name: "searchbar-shopify",
    owner: "Aihcode",
    title: "Shopify Custom Live Searchbar",
    description: {
      es: "Barra de búsqueda con autocompletado en tiempo real para temas personalizados de Shopify en JavaScript.",
      en: "Real-time autocomplete search bar snippet for customized Shopify storefronts using vanilla JavaScript."
    },
    category: "shopify",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/searchbar-shopify",
    liveUrl: null,
    isFeatured: false,
    tags: ["Shopify", "JavaScript", "Liquid", "Search"],
    updatedAt: "2023-04-26T18:23:40Z",
    defaultBranch: "main"
  },
  {
    id: "notch-shopify-snippets",
    name: "notch-shopify-snippets",
    owner: "Aihcode",
    title: "Shopify Custom Liquid Snippets",
    description: {
      es: "Colección de snippets reutilizables y optimizaciones Liquid para tiendas de alta conversión en Shopify.",
      en: "Curated collection of reusable Liquid snippets and speed optimizations for high-converting Shopify shops."
    },
    category: "shopify",
    language: "Liquid",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/notch-shopify-snippets",
    liveUrl: null,
    isFeatured: false,
    tags: ["Shopify", "Liquid", "Snippets"],
    updatedAt: "2023-04-11T00:12:46Z",
    defaultBranch: "main"
  },
  {
    id: "guia-entrevistas-de-programacion",
    name: "guia-entrevistas-de-programacion",
    owner: "Aihcode",
    title: "Guía de Entrevistas de Programación",
    description: {
      es: "Recurso educativo y compendio de algoritmos y patrones para preparación en entrevistas técnicas.",
      en: "Comprehensive Spanish programming interview prep guide, algorithms, and technical assessment patterns."
    },
    category: "community",
    language: "Markdown",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/guia-entrevistas-de-programacion",
    liveUrl: null,
    isFeatured: false,
    tags: ["Algorithms", "Interview Prep", "Education", "Spanish"],
    updatedAt: "2024-08-06T19:45:32Z",
    defaultBranch: "main"
  },
  {
    id: "pruebas-tecnicas",
    name: "pruebas-tecnicas",
    owner: "Aihcode",
    title: "Soluciones a Pruebas Técnicas",
    description: {
      es: "Resolución de retos de código y pruebas técnicas comunitarias con implementaciones limpias y estructuradas.",
      en: "Solutions to community technical coding challenges with clean, well-tested implementations."
    },
    category: "community",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/pruebas-tecnicas",
    liveUrl: "https://pruebastecnicas.com",
    isFeatured: false,
    tags: ["Coding Challenges", "Community", "Algorithms"],
    updatedAt: "2023-07-14T13:41:21Z",
    defaultBranch: "main"
  },
  {
    id: "tesseract.js",
    name: "tesseract.js",
    owner: "Aihcode",
    title: "Tesseract.js OCR Exploration",
    description: {
      es: "Implementación de reconocimiento óptico de caracteres (OCR) puramente en JavaScript para más de 100 idiomas.",
      en: "Pure JavaScript optical character recognition (OCR) engine for over 100 languages in the browser and Node."
    },
    category: "tools",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/tesseract.js",
    liveUrl: "http://tesseract.projectnaptha.com/",
    isFeatured: false,
    tags: ["OCR", "JavaScript", "Computer Vision"],
    updatedAt: "2023-10-30T14:23:59Z",
    defaultBranch: "master"
  },
  {
    id: "cdnjs",
    name: "cdnjs",
    owner: "Aihcode",
    title: "cdnjs Contributions",
    description: {
      es: "Mantenimiento y contribución de paquetes para cdnjs, la red CDN libre más grande de internet.",
      en: "Open-source package maintenance and asset updates for cdnjs, the web's premier free library CDN."
    },
    category: "community",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/cdnjs",
    liveUrl: "https://cdnjs.com",
    isFeatured: false,
    tags: ["CDN", "Open Source", "Infrastructure"],
    updatedAt: "2024-05-24T14:03:10Z",
    defaultBranch: "master"
  },
  {
    id: "jsdelivr",
    name: "jsdelivr",
    owner: "Aihcode",
    title: "jsDelivr Open Source CDN",
    description: {
      es: "Repositorio de soporte y distribución para la red de entrega de contenido jsDelivr.",
      en: "Support and package integration fork for the ultra-fast jsDelivr open source public CDN."
    },
    category: "community",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/jsdelivr",
    liveUrl: "https://www.jsdelivr.com",
    isFeatured: false,
    tags: ["CDN", "Open Source", "ESM"],
    updatedAt: "2024-05-24T14:03:53Z",
    defaultBranch: "master"
  },
  {
    id: "dist",
    name: "dist",
    owner: "Aihcode",
    title: "Distribution Build Pipeline",
    description: {
      es: "Artefactos y scripts de empaquetado para distribución y despliegues estáticos.",
      en: "Distribution artifacts, build pipelines, and production release bundles."
    },
    category: "tools",
    language: "Shell",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/dist",
    liveUrl: null,
    isFeatured: false,
    tags: ["Build Tools", "Distribution"],
    updatedAt: "2024-03-14T16:31:20Z",
    defaultBranch: "main"
  },
  {
    id: "aihcode-config",
    name: "Aihcode",
    owner: "Aihcode",
    title: "Aihcode GitHub Special Profile",
    description: {
      es: "Configuración central y perfil especial de GitHub para @Aihcode.",
      en: "GitHub special configuration repository and profile dotfiles for @Aihcode."
    },
    category: "community",
    language: "Markdown",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Aihcode/Aihcode",
    liveUrl: "https://github.com/Aihcode",
    isFeatured: false,
    tags: ["GitHub Config", "Profile"],
    updatedAt: "2022-07-27T14:00:43Z",
    defaultBranch: "main"
  },

  // --- HIGHLIGHTS FROM PHERMIDEX (User's other GitHub account with 44 repos) ---
  {
    id: "zenithcrypto",
    name: "zenithCrypto",
    owner: "Phermidex",
    title: "Zenith Crypto Wallet",
    description: {
      es: "Billetera moderna y segura de criptomonedas desarrollada con Next.js y Firebase con seguimiento en vivo de carteras y transacciones.",
      en: "Modern, secure cryptocurrency wallet application built with Next.js and Firebase with live portfolio tracking."
    },
    category: "fullstack",
    language: "TypeScript",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/Phermidex/zenithCrypto",
    liveUrl: "https://zenith-crypto-gamma.vercel.app/",
    isFeatured: true,
    tags: ["Next.js", "Firebase", "Crypto", "TypeScript"],
    highlights: {
      es: [
        "Autenticación segura y persistencia en Firebase",
        "Seguimiento de saldos y tipos de cambio en tiempo real",
        "Diseño financiero minimalista y responsive"
      ],
      en: [
        "Secure Firebase auth and state persistence",
        "Real-time asset balance tracking and market conversions",
        "Minimalist fintech responsive UI"
      ]
    },
    updatedAt: "2026-02-26T16:33:26Z",
    defaultBranch: "main"
  },
  {
    id: "minine",
    name: "minine",
    owner: "Phermidex",
    title: "Minine Cinema Hub",
    description: {
      es: "Aplicación web moderna construida con Next.js y Firebase para explorar estrenos de cine y gestionar catálogos personales de películas.",
      en: "Modern Next.js and Firebase cinema catalog platform to discover new releases and curate personal watchlists."
    },
    category: "fullstack",
    language: "TypeScript",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/Phermidex/minine",
    liveUrl: "https://minine.vercel.app/",
    isFeatured: true,
    tags: ["Next.js", "Firebase Auth", "Cinema", "TypeScript"],
    highlights: {
      es: [
        "Gestión de listas personalizadas 'Por ver' y 'Vistas'",
        "Búsqueda instantánea y filtrado por género",
        "Integración con Firebase Auth"
      ],
      en: [
        "Custom watchlists and favorites curation",
        "Instant title search and genre categorization",
        "Firebase Auth user accounts"
      ]
    },
    updatedAt: "2026-02-22T17:16:57Z",
    defaultBranch: "main"
  },
  {
    id: "ruta-logix",
    name: "Ruta-Logix",
    owner: "Phermidex",
    title: "Ruta-Logix Delivery Manager",
    description: {
      es: "Sistema integral de logística, despacho de pedidos y gestión de rutas de entrega para flotas locales.",
      en: "Comprehensive logistics, order dispatch, and delivery route management system for courier fleets."
    },
    category: "enterprise",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Phermidex/Ruta-Logix",
    liveUrl: null,
    isFeatured: false,
    tags: ["TypeScript", "Logistics", "Delivery", "Routes"],
    updatedAt: "2026-04-17T00:47:05Z",
    defaultBranch: "main"
  },
  {
    id: "ncf_dgii_reports",
    name: "ncf_dgii_reports",
    owner: "Phermidex",
    title: "DGII Norma 06-18 NCF Module",
    description: {
      es: "Módulo especializado para Odoo y sistemas ERP que implementa los reportes de NCF para la norma 06-18 de la DGII en República Dominicana.",
      en: "Enterprise ERP module implementing Dominican Republic DGII Rule 06-18 NCF tax compliance reporting."
    },
    category: "enterprise",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Phermidex/ncf_dgii_reports",
    liveUrl: null,
    isFeatured: false,
    tags: ["Python", "DGII", "NCF 06-18", "ERP", "Dominican Republic"],
    updatedAt: "2024-11-22T18:05:11Z",
    defaultBranch: "master"
  },
  {
    id: "caonabo",
    name: "Caonabo-El-Despertar-de-la-Maguana",
    owner: "Phermidex",
    title: "Caonabo: El Despertar de la Maguana",
    description: {
      es: "Experiencia web interactiva conmemorativa y cultural desarrollada en TypeScript y Next.js.",
      en: "Interactive historical and cultural web experience celebrating Taíno heritage, built with TypeScript."
    },
    category: "fullstack",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/Phermidex/Caonabo-El-Despertar-de-la-Maguana",
    liveUrl: "https://caonabo-el-despertar-de-la-maguana.vercel.app",
    isFeatured: false,
    tags: ["TypeScript", "Next.js", "Culture", "Creative Web"],
    updatedAt: "2026-03-02T15:38:56Z",
    defaultBranch: "main"
  }
];
