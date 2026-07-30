export interface Technology {
  name: string;
  iconUrl: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  summary: string;
  thumbnailUrl?: string;
  technologies: Technology[];
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  projectUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface SkillCategory {
  title: string;
  skills: Technology[];
}

export interface HeroData {
  name: string;
  jobTitle: string;
  avatarUrl: string;
  greeting: string;
  ctaText: string;
}

export interface AboutData {
  description: string[];
  coreValues: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  iconUrl: string;
}

export interface ContactData {
  email: string;
  socialLinks: SocialLink[];
}

export interface SiteMetadata {
  title: string;
  description: string;
  themeColor: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatarUrl?: string;
  quote: string;
}
