
import { ReactNode } from 'react';

export interface ProductType {
  title: string;
  description: string;
  fullDescription: string;
  icon: ReactNode;
  isNew?: boolean;
  isFeatured?: boolean;
  imageSrc: string;
}
