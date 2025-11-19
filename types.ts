import { LucideIcon } from 'lucide-react';

export enum LinkType {
  TELEGRAM = 'TELEGRAM',
  WHATSAPP = 'WHATSAPP',
  SIGNAL = 'SIGNAL',
  JOURNAL = 'JOURNAL',
  OTHER = 'OTHER'
}

export interface SocialLink {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  icon: LucideIcon;
  type: LinkType;
  isPrimary?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}