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
  title: "Ali W Purbo | Full-Stack Developer",
  description: "Personal portfolio of Ali W Purbo, a Full-Stack Developer.",
  themeColor: "#0066ff",
};

export const heroData: HeroData = {
  name: "Ali",
  jobTitle: "Full-Stack Web Developer",
  avatarUrl: "/img/avatar.webp",
  greeting: "Building scalable and high-performance web solutions.",
  ctaText: "View Portfolio",
};

export const aboutData: AboutData = {
  description: [
    "I am a passionate software engineer with a strong focus on building scalable web applications. I love coding & solving problems then turning ideas into code.",
    "When I'm not coding, you can find me exploring new technologies, discovering technical articles, or enjoying a good cup of coffee.",
  ],
  coreValues: [
    "Adaptability and Resilience",
    "Continuous Learning",
    "Effective Communication",
    "Agile and Collaborative",
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: "Front-End",
    skills: [
      { name: "React", iconClass: "devicon-react-original colored" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
      {
        name: "Tailwind CSS",
        iconClass: "devicon-tailwindcss-original colored",
      },
      { name: "Next.js", iconClass: "devicon-nextjs-plain" },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
      { name: "Express", iconClass: "devicon-express-original" },
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
      { name: "mySQL", iconClass: "devicon-mysql-plain colored" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", iconClass: "devicon-git-plain colored" },
      { name: "Docker", iconClass: "devicon-docker-plain colored" },
    ],
  },
];

export const portfolioData: PortfolioItem[] = [
  {
    id: "proj-01",
    title: "Gerakin - Health Event Management Platform",
    summary:
      "A full-stack web platform that enables health event organizers to create, manage, and sell event tickets with automated reservation, payment verification, and transaction workflows.",
    thumbnailUrl: "/img/portofolio/gerakin-logo.webp",
    technologies: [
      { name: "React", iconClass: "devicon-react-original colored" },
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
      { name: "Express JS", iconClass: "devicon-express-original" },
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
      { name: "Git", iconClass: "devicon-git-plain colored" },
      { name: "Docker", iconClass: "devicon-docker-plain colored" },
    ],
    star: {
      situation:
        "Health event organizers needed an efficient way to manage event registrations, ticket sales, and manual payment verification while preventing overselling and abandoned transactions.",
      task: "Develop a scalable event management platform with event discovery, secure checkout, voucher support, automated transaction handling, and organizer dashboards.",
      action:
        "Built a full-stack application featuring JWT authentication, event CRUD, debounced event search, seat reservation, voucher engine, manual payment upload, automated transaction expiration using cron jobs, and transactional database operations to maintain data integrity.",
      result:
        "Delivered a complete MVP that streamlines the entire event booking lifecycle, minimizes abandoned reservations through automated expiration, and provides organizers with efficient event and transaction management.",
    },
    githubUrl: "https://github.com/papuadev/gerakin",
  },
  {
    id: "proj-02",
    title: "Presensi Web App",
    summary:
      "A Progressive Web App (PWA) for employee attendance using GPS validation, selfie verification, leave management, and real-time attendance monitoring.",
    thumbnailUrl: "/img/portofolio/presensi-logo.webp",
    technologies: [
      { name: "React", iconClass: "devicon-react-original colored" },
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
      { name: "Express JS", iconClass: "devicon-express-original" },
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
      { name: "Git", iconClass: "devicon-git-plain colored" },
      { name: "Docker", iconClass: "devicon-docker-plain colored" },
    ],
    star: {
      situation:
        "Organizations required a modern attendance system to replace conventional attendance machines while reducing time fraud and simplifying workforce management across multiple branches.",
      task: "Build a mobile-first Progressive Web App that supports GPS-based attendance, selfie verification, leave approval workflows, and centralized attendance management.",
      action:
        "Developed a PWA with geolocation validation, selfie capture with watermark, multi-location attendance support, leave approval workflow, branch-based roster management, dashboard analytics, and automated clock-out processing using scheduled background jobs.",
      result:
        "Delivered a centralized attendance platform that digitizes attendance workflows, improves attendance accuracy through GPS validation, and enables HR and supervisors to monitor employee attendance efficiently across multiple locations.",
    },
    githubUrl: "https://github.com/papuadev/presensi-web-app",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-01",
    role: "Information Technology Teacher",
    company: "SMK Yapis Timika",
    duration: "2017 - 2021",
    responsibilities: [
      "Taught programming, web development, databases, and computer networking to vocational high school students.",
      "Designed project-based learning materials and guided students in developing real-world web applications.",
      "Mentored students for competency assessments and IT competitions while providing technical consultation for school IT initiatives.",
    ],
  },
  {
    id: "exp-02",
    role: "IT Support",
    company: "PT Bina Pertiwi Site Freeport",
    duration: "2021 - Present",
    responsibilities: [
      "Provided end-user technical support by troubleshooting hardware, software, network, and printer issues.",
      "Installed, configured, and maintained Windows workstations, enterprise applications, and peripheral devices.",
      "Managed user accounts, performed preventive maintenance, and ensured IT systems remained operational with minimal downtime.",
    ],
  },
  {
    id: "exp-03",
    role: "Full Stack Web Developer (Freelance)",
    company: "Self-employed",
    duration: "2019 - Present",
    responsibilities: [
      "Designed and developed full-stack web applications using React, Node.js, Express.js, and PostgreSQL.",
      "Built RESTful APIs, implemented authentication and role-based access control, and integrated third-party services.",
      "Collaborated with clients to gather requirements, deliver scalable solutions, and provide ongoing maintenance and feature enhancements.",
    ],
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-01",
    name: "Ony Mahendra",
    role: "Part Analyst at PT U******* T******",
    quote:
      "Ali is an exceptional engineer. His attention to detail and ability to translate complex requirements into intuitive UI is unparalleled.",
  },
  {
    id: "test-02",
    name: "Rifki Aulia",
    role: "BAS at PT B****** P******",
    quote:
      "Working with Ali was a breeze. He always delivered code on time and was a great team player.",
  },
];

export const contactData: ContactData = {
  email: "ali.wpurbo@gmail.com",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/aliwpurbo",
      iconClass: "devicon-linkedin-plain colored",
    },
    {
      platform: "GitHub",
      url: "https://github.com/papuadev",
      iconClass: "devicon-github-original",
    },
  ],
};
