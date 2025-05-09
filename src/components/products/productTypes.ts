
import { LucideIcon } from 'lucide-react';

export interface ProductType {
  title: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  isNew?: boolean;
  isFeatured?: boolean;
  imageSrc: string;
}
