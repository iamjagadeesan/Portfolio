export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  color?: string;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: 'Design' | 'Development' | 'Soft Skills';
  icon: React.ReactNode | string;
  rating: number;
  status: 'GET' | 'OPEN' | 'VIEW';
  color?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
  tags?: string[];
}

export type ActiveWindow = 'projects' | 'skills' | 'about' | 'experience' | 'contact' | null;
