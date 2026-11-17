export type RoutePath = '/' | '/work' | '/about' | '/contact' | '/cv';

export type ProjectCategory = 'all' | 'ecommerce' | 'b2b' | 'fullstack';

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  slug: string;
  title: string;
  shortTitleTop: string;
  shortTitleBottom?: string;
  subtitle: string;
  domainLabel: string;
  categories: Exclude<ProjectCategory, 'all'>[];
  summary: string;
  challenge: string;
  solution: string;
  metrics: ProjectMetric[];
  techStack: string[];
  cardGradientClass: string;
  cardBorderClass: string;
  mockupBgClass: string;
  cardPreviewImage: string;
  caseStudyImage: string;
  deliverables: string[];
  highlights?: string[];
  status?: string;
  liveUrl: string;
  year: string;
  role: string;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  description: string;
  capabilities: string[];
  targetFilter: ProjectCategory;
  cardGradientClass: string;
  cardBorderClass: string;
  image: string;
  variant: 'frontend' | 'backend' | 'integrate';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  keyAchievements?: string[];
  stack: string[];
}

export interface TechnicalSkillGroup {
  category: string;
  items: string;
}

export interface CvProjectItem {
  id: string;
  name: string;
  status: string;
  highlights: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  grade: string;
}

export interface CvData {
  name: string;
  role: string;
  email: string;
  phone: string;
  phoneHref: string;
  githubLabel: string;
  githubUrl: string;
  linkedinLabel: string;
  linkedinUrl: string;
  portfolioLabel: string;
  portfolioUrl: string;
  summary: string;
  technicalSkills: TechnicalSkillGroup[];
  experiences: ExperienceItem[];
  projects: CvProjectItem[];
  internships: ExperienceItem[];
  education: EducationItem[];
  strengths: string[];
  achievements: string[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}
