import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Chi Sono",
  },
  {
    id: "work",
    title: "Progetti",
  },
  {
    id: "contact",
    title: "Contattami",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "php",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sviluppatore freelance",
    company_name: "Me stesso",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Marzo 2020 - Dicembre 2023",
    points: [
      "Sviluppo e manutenzione di applicazioni web utilizzando React.js e altre tecnologie correlate.",
      "Collaborazione con team interfunzionali inclusi designer, product manager e altri sviluppatori per creare prodotti di alta qualità.",
      "Implementazione di design responsivi e assicurazione della compatibilità cross-browser.",
    ],
  },
  {
    title: "Sviluppatore FullStack",
    company_name: "LuxorWeb",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Marzo 2020 - Dicembre 2023",
    points: [
      "Sviluppo e manutenzione di applicazioni web utilizzando React.js e altre tecnologie correlate.",
      "Collaborazione con team interfunzionali inclusi designer, product manager e altri sviluppatori per creare prodotti di alta qualità.",
      "Implementazione di design responsivi e assicurazione della compatibilità cross-browser.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hotel Gabri",
    description:
      "Esplora stanze, prenota e gestisci il profilo con questa app Next.js. Integra Stripe per pagamenti sicuri e utilizza Sanity.io per un CMS dinamico. Il design responsive è garantito da Tailwind CSS. Un'esperienza di prenotazione avanzata con tecnologie all'avanguardia.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/gabrimarch3/hotel-gabriel",
  },
  {
    name: "NoteAI",
    description:
      "Una piattaforma innovativa per la gestione di note e documenti, potenziata da tecnologie all'avanguardia come NextJS 13, DALL•E di OpenAI, DrizzleORM e ospitata su Vercel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/gabrimarch3/noteAI",
  },
];

export { services, technologies, experiences, testimonials, projects };
