export interface Project {
  id: string;
  brand: string;
  category: string;
  campaignType: string;
  description: string;
  image: string;
  aspectRatio: string;
  deliverables: string[];
  metrics?: { label: string; value: string }[];
  creativeHook: string;
  directorNotes: string;
  storyboardShots: string[];
}

export interface Service {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  formats: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  milestones: string[];
  timeline: string;
}

export interface ClientCategory {
  id: string;
  name: string;
  tagline: string;
  aesthetic: string;
  lightingSetup: string;
  typicalDeliverables: string;
  sampleBrandTypes: string;
}
