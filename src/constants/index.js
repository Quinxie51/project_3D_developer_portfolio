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
  edge,
  augustana,
  skimble,
  pastport,
  expiro,
  orbit,
  threejs,
} from "../assets";

// constants.js
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },

  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: " Software Developer",
    icon: mobile,
  },
  {
    title: "UX/UI Designer",
    icon: backend,
  },
  {
    title: "AI Engineer",
    icon: creator,
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
    name: "Flutter",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Edge Center",
    icon: edge,
    iconBg: "#383E56",
    date: "Sept 2022 - March 2023",
    points: [
      "Spearheaded a team of 6 software developers to craft 8 responsive websites using React, TypeScript, and Tailwind.",
      "Partnered with over 10 clients, using Agile methodology to refine design prototypes based on iterative feedback, improving project turnover times.",
    ],
  },
  {
    title: "AI Research Assistant",
    company_name: "Augustana College",
    icon: augustana,
    iconBg: "#E6DEDD",
    date: "April 2023 - July 2023",
    points: [
      "Played a key role in a published study in the International Journal of Computer Science & Information Technology (Impact factor: 1.9), comparing text comprehension in IELTS Reading using GPT-3.5.",
      "Executed experiments and collected data, improved the accuracy to 65.38% on 50 IELTS Reading tests by using the RAG model, Database FAISS and Langchain.",
    ],
  },
  {
    title: "AI Project Management Intern",
    company_name: "Skimble",
    icon: skimble,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Led AI project management initiatives to implement new AI features in the workout app, delivered the updated version for 20M users 1 week ahead of time.",
      "Enhanced AI 1:1 Chat feature to give better workout recommendations, increasing user satisfaction by 15%.",
      "Conducted QA testing across Android and iOS, reporting 5 critical bugs and improving overall user experience.",
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
    name: "PastPort",
    description:
      "A mobile app that revolutionizes History Education",
    tags: [
      {
        name: "dart",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "sqline",
        color: "pink-text-gradient",
      },
    ],
    image: pastport,
    source_code_link: "https://devpost.com/software/pastport-ihxy6p",
  },
  {
    name: "Expiro",
    description:
      "Mobile applications that keeps track of your food's expired dates",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: expiro,
    source_code_link: "https://devpost.com/software/expiro-fgp3nq?ref_content=user-portfolio&ref_feature=in_progress",
  },
  {
    name: "Orbit Guardian",
    description:
      "Fiction world: an application to help the citizens of Hackunia survive the harsh alien invasion",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "leaflet.js",
        color: "pink-text-gradient",
      },
    ],
    image: orbit,
    source_code_link: "https://devpost.com/software/orbit-guardians",
  },
];

export { services, technologies, experiences, testimonials, projects };
