import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  features: string[];
  galleryImages?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavLink {
  path: string;
  label: string;
}

export enum Page {
  HOME = '/',
  ABOUT = '/about',
  PRODUCTS = '/products',
  SERVICES = '/services',
  CONTACT = '/contact',
}