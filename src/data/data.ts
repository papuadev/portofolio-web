import type {
  AboutData,
  ContactData,
  ExperienceItem,
  HeroData,
  PortfolioItem,
  SiteMetadata,
  SkillCategory,
  TestimonialItem,
} from "../types";

export const siteMetadata: SiteMetadata = {
  title: "John Doe | Full-Stack Developer",
  description: "Personal portfolio of John Doe, a Full-Stack Developer.",
  themeColor: "#0066ff",
};

export const heroData: HeroData = {
  name: "John Doe",
  jobTitle: "Full-Stack Web Developer",
  avatarUrl: "/avatar.png",
  greeting: "Building scalable and high-performance web solutions.",
  ctaText: "View Portfolio",
};

export const aboutData: AboutData = {
  description: [
    "I am a passionate software engineer with a strong focus on building scalable web applications. I love solving complex problems and turning ideas into reality.",
    "When I'm not coding, you can find me exploring new technologies, writing technical articles, or enjoying a good cup of coffee.",
  ],
  coreValues: [
    "Clean Code",
    "Continuous Learning",
    "Effective Communication",
    "Attention to Detail",
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: "Front-End",
    skills: [
      { name: "React", iconClass: "devicon-react-original colored" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
      { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored" },
      { name: "Next.js", iconClass: "devicon-nextjs-plain" },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
      { name: "Express", iconClass: "devicon-express-original" },
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
      { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", iconClass: "devicon-git-plain colored" },
      { name: "Docker", iconClass: "devicon-docker-plain colored" },
      { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark colored" },
    ],
  },
];

export const portfolioData: PortfolioItem[] = [
  {
    id: "proj-01",
    title: "E-Commerce Platform Redesign",
    summary: "A complete overhaul of a legacy e-commerce platform using React and Node.js.",
    thumbnailUrl: "",
    technologies: [
      { name: "React", iconClass: "devicon-react-original colored" },
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
    ],
    star: {
      situation: "Client XYZ retail was losing mobile traffic due to a slow, outdated storefront.",
      task: "Rebuild the entire frontend UI using modern React and Vite, with a scalable backend.",
      action: "Implemented a responsive, mobile-first design using Tailwind CSS and optimized API endpoints.",
      result: "Decreased bounce rate by 35% and improved mobile conversion rates by 20%.",
    },
    projectUrl: "#",
    githubUrl: "#",
  },
  {
    id: "proj-02",
    title: "Task Management SaaS",
    summary: "A real-time collaborative task management tool for remote teams.",
    thumbnailUrl: "",
    technologies: [
      { name: "Next.js", iconClass: "devicon-nextjs-plain" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
      { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
    ],
    star: {
      situation: "A startup needed a way to manage cross-functional projects efficiently.",
      task: "Build a real-time Kanban board with drag-and-drop functionality.",
      action: "Utilized Next.js for SSR, WebSockets for real-time updates, and Tailwind for styling.",
      result: "Successfully launched MVP in 3 months, acquiring 500+ active users in the first week.",
    },
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-01",
    role: "Senior Frontend Engineer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2023 - Present",
    responsibilities: [
      "Lead a team of 4 developers to build a modern analytics dashboard.",
      "Improved frontend performance by 40% through code splitting and lazy loading.",
      "Mentored junior developers and established code review best practices.",
    ],
  },
  {
    id: "exp-02",
    role: "Full-Stack Developer",
    company: "Digital Agency Web",
    duration: "Mar 2021 - Dec 2022",
    responsibilities: [
      "Developed custom web applications for various enterprise clients.",
      "Integrated third-party APIs and payment gateways.",
      "Maintained and updated legacy PHP applications.",
    ],
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-01",
    name: "Sarah Jenkins",
    role: "Product Manager at Tech Solutions",
    quote: "John is an exceptional engineer. His attention to detail and ability to translate complex requirements into intuitive UI is unparalleled.",
  },
  {
    id: "test-02",
    name: "Michael Brown",
    role: "CEO at Digital Agency",
    quote: "Working with John was a breeze. He always delivered high-quality code on time and was a great team player.",
  },
];

export const contactData: ContactData = {
  email: "hello@johndoe.com",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      iconClass: "devicon-linkedin-plain colored",
    },
    {
      platform: "GitHub",
      url: "https://github.com",
      iconClass: "devicon-github-original",
    },
  ],
};
