export interface Project {
  title: string;
  role: string;
  tech: string[];
  description: string;
  responsibilities: string[];
  image: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Profile {
  name: string;
  role: string;
  experience: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  social: {
    linkedin: string;
    github: string;
  };
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  CONTACT = 'contact',
}