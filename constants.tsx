import { Product, Service, Page } from './types';
import { Building2, Factory, HardHat, Truck, ShieldCheck, Ruler, Anchor, Warehouse, Clock, Banknote, PackageCheck, Users } from 'lucide-react';

export const COMPANY_NAME = "Shree Dada Steel Traders";
export const TAGLINE = "Strength That Builds the Future";
export const ADDRESS = "Municipal No.385, & 386, 10th Cross, 4th Main Peenya Industrial Area, Bengaluru, Karnataka - 560 058";
export const PHONE = "8904310854, 9886082044";
export const EMAIL = "shreedadasteel@gmail.com";
export const GSTIN = "29ADCFS9187R1ZT";

export const NAV_LINKS = [
  { path: Page.HOME, label: 'Home' },
  { path: Page.ABOUT, label: 'About Us' },
  { path: Page.PRODUCTS, label: 'Products' },
  { path: Page.SERVICES, label: 'Services' },
  { path: Page.CONTACT, label: 'Contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'TMT Bars',
    category: 'Construction Steel',
    description: 'High-strength TMT bars (Fe500/500D/550) essential for earthquake-resistant structures. Available in 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, and 32mm diameters.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1DPZQku_d6W9DAyRH5N0r6k-3KYftnqIT',
    features: ['Grades: Fe500, Fe550', 'Sizes: 8mm - 32mm', 'High Ductility']
  },
  {
    id: 'p2',
    name: 'Steel Beams (I-Beams)',
    category: 'Structural Steel',
    description: 'Heavy-duty I-Beams and H-Beams designed for industrial construction, warehousing, and load-bearing structures.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1hcLF5tVQg7-UPFDtpVEWLNBDZYxqSNj9',
    features: ['High Load Bearing', 'Industrial Use', 'Standard Sections']
  },
  {
    id: 'p3',
    name: 'MS Angles',
    category: 'Structural Steel',
    description: 'Versatile mild steel angles used in fabrication, brackets, transmission towers, and structural frameworks.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1Ammofx1HyCc2SI-Jn0LsvnZ8NdO8Cena',
    features: ['Fabrication Ready', 'Uniform Thickness', 'Multiple Sizes']
  },
  {
    id: 'p4',
    name: 'MS Plates & Sheets',
    category: 'Industrial Steel',
    description: 'Premium quality steel plates and sheets for manufacturing, flooring, and heavy machinery applications.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1IJXLUi6Ix2IqrMok_diYAf7Lx7jdvqnJ',
    features: ['High Tensile Strength', 'Custom Dimensions', 'Corrosion Resistant']
  },
  {
    id: 'p5',
    name: 'Round Pipes',
    category: 'Pipes & Tubes',
    description: 'Seamless and welded round pipes ideal for fluid transport, structural columns, scaffolding, and fencing.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1ZbDe412rqyheOq4dwjNjBb8V66BZz4g1',
    features: ['Leak Proof', 'High Pressure Rating', 'Construction & Plumbing']
  },
  {
    id: 'p6',
    name: 'Square Hollow Sections',
    category: 'Pipes & Tubes',
    description: 'Square and rectangular hollow sections (RHS/SHS) providing superior strength-to-weight ratios for modern architectural needs.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1__yMXfga1Tsk0rlS-v42r--TJtXRrBsL',
    features: ['Aesthetic Appeal', 'Lightweight & Strong', 'Furniture & Frameworks']
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Steel Supply for Construction',
    description: 'Reliable supply of TMT, beams, pipes, and structural sections for residential and commercial projects.',
    icon: Building2
  },
  {
    id: 's2',
    title: 'Industrial & Fabrication Support',
    description: 'Material supply for heavy fabrication, machine manufacturing, and workshop operations.',
    icon: Factory
  },
  {
    id: 's3',
    title: 'Infrastructure Project Support',
    description: 'Dedicated supply for roadworks, metro projects, bridges, flyovers, and large industrial construction.',
    icon: HardHat
  },
  {
    id: 's4',
    title: 'Bulk & Contract Supply',
    description: 'Long-term supply agreements with competitive rates, stable inventory, and scheduled delivery cycles.',
    icon: Truck
  }
];

export const INDUSTRIES_SERVED = [
  "Civil Construction",
  "Fabrication Workshops",
  "Infrastructure Projects",
  "Manufacturing & Engineering Plants",
  "Warehousing & PEB Structures"
];

export const CORE_VALUES = [
  { title: 'Quality You Can Trust', icon: ShieldCheck, text: 'We source steel from certified mills ensuring durability and strength for every project.' },
  { title: 'Timely Delivery', icon: Clock, text: 'Well-maintained logistics and inventory ensure on-time deliveries, every time.' },
  { title: 'Competitive Pricing', icon: Banknote, text: 'Get the best rates without compromising quality.' },
  { title: 'Wide Product Range', icon: PackageCheck, text: 'A one-stop hub for all steel materials required in construction and fabrication.' },
  { title: 'Customer-Centric Approach', icon: Users, text: 'Professional support, honest dealings, and flexible supply capabilities.' },
];