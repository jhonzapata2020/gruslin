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
}
