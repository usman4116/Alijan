export type Discipline = "civil" | "hse" | "drafting" | "execution";

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  disciplines: Discipline[];
  detailStatus?: "documented" | "title-only";
}

export interface EducationEntry {
  title: string;
  institution: string;
  period: string;
  type: "degree" | "professional" | "technical";
}

export interface Capability {
  name: string;
  description: string;
  disciplines: Discipline[];
}

export interface ExperienceHighlight {
  number: string;
  title: string;
  context: string;
  description: string;
  tags: string[];
}

export interface MediaCredit {
  file: string;
  title: string;
  creator: string;
  sourceUrl: string;
  licenseUrl: string;
}
