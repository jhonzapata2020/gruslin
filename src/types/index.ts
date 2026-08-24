export type MemberStatus = 'online' | 'busy' | 'away' | 'offline';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  contactRole: string;
  status: MemberStatus;
  avatarUrl: string;
  initials: string;
  unadBadge: string;
  bio: string;
  email: string;
  skills: string[];
  projectsCount: number;
  headline: string;
  linkedinUrl?: string;
  teaching: string[];
  focusAreas: string[];
}

export interface MetricData {
  name: string;
  proyectos: number;
  productos: number;
  meta: number;
}

export interface ResearchLine {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tags: string[];
  metricsCount: string;
  accentColor: string;
}

export interface ApplicationForm {
  fullName: string;
  unadEmail: string;
  roleInterest: string;
  semesterArea: string;
  motivation: string;
  acceptTerms: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  type: string;
  description: string;
  url: string;
  ctaText: string;
  status: string;
  features: string[];
  tags: string[];
  tech: string[];
  badgeType?: 'active_branch' | 'institutional_sigiip';
  isConcept?: boolean;
  year?: string;
  owner?: string;
}

export interface LearningPath {
  id: string;
  title: string;
  level: string;
  description: string;
  topics: string[];
  color: string;
}

export interface Recording {
  id: string;
  title: string;
  level: string;
  duration: string;
  date: string;
  summary: string;
  url: string;
  published: boolean;
  placeholder?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  author: string;
  category: string;
  published: boolean;
  isDemo?: boolean;
}

export interface SiteContent {
  team: TeamMember[];
  projects: ProjectItem[];
  learningPaths: LearningPath[];
  recordings: Recording[];
  posts: BlogPost[];
}

export interface HistoricalPublication {
  id: string;
  title: string;
  category: string;
  locationYear: string;
  summary: string;
  impactBadge: string;
  highlights: string[];
  tags: string[];
}
