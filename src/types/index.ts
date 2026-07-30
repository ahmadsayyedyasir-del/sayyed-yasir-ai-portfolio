import type { Project } from "../data/projects";
import type { Experience } from "../data/experience";
import type { Certification } from "../data/certifications";
import type { TechCategory } from "../data/technologies";

export type { Project, Experience, Certification, TechCategory };

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};