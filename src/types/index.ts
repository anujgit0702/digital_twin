// Shared TypeScript types for all data objects used across the portfolio

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  summary: string;
}

export interface Job {
  company: string;
  client?: string; // e.g. EXL deployed at American Express
  title: string;
  duration: string;
  location: string;
  team: string;
  domain?: string; // optional context for certain roles
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tools: string[];
  status: "In Progress" | "Live" | "Completed";
  link?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Award {
  title: string;
  period: string;
  company: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certificate {
  course: string;
  platform: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
