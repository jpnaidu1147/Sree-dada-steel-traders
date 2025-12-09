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
    name: 'Chequered Plates',
    category: 'Flooring & Safety',
    description: 'Anti-skid mild steel plates with a raised diamond or teardrop pattern. Essential for industrial flooring, walkways, bus floors, and loading docks to ensure safety and durability.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1Fohz5UXSZxgJO2P0LfcGYAHDwzpZXE9T',
    features: ['Anti-Slip Surface', 'High Wear Resistance', 'Uniform Pattern', 'Easy Maintenance']
  },
  {
    id: 'p2',
    name: 'Cold Rolled (CR) Sheet Coils',
    category: 'Sheets & Coils',
    description: 'Precision-finished Cold Rolled steel sheets and coils offering superior surface smoothness and tight dimensional tolerances. Ideal for automobile components, furniture, and precision engineering.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1uzY6odwtzNOW-yB7_CIBaiYRSLvRd8eg',
    features: ['Superior Surface Finish', 'High Formability', 'Tight Tolerances', 'Uniform Thickness']
  },
  {
    id: 'p3',
    name: 'Colour Coated Sheet & Coils',
    category: 'Roofing & Cladding',
    description: 'Pre-painted galvanized steel (PPGI) sheets providing excellent corrosion resistance combined with aesthetic appeal. Widely used in modern roofing, wall cladding, and appliances.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1D7IueFTrv8WHRfrrrdDX2DlxsV_PUDCN',
    features: ['Vibrant Colors', 'Corrosion Resistant', 'UV Protection', 'Long-lasting Finish']
  },
  {
    id: 'p4',
    name: 'GI Sheet & Coils',
    category: 'Coated Steel',
    description: 'Galvanized Iron (GI) sheets coated with a protective layer of zinc to prevent rust. Available in various coating masses (GSM) suitable for ducting, automotive parts, and paneling.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1fCF7c4E1gKphMcVQJfqaBsuGR6GBGGNz',
    features: ['Zinc Coated (GSM 120+)', 'Rust Proof', 'Excellent Lock-Forming', 'Versatile Applications']
  },
  {
    id: 'p5',
    name: 'H Beams Sections',
    category: 'Heavy Structural',
    description: 'Parallel flange H-beams designed for heavy load-bearing applications. Their wider flanges provide better lateral support, making them perfect for columns in high-rise buildings and bridges.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1mkq-SWVdfdaVsqSqegXH3BfF4KNbEjuX',
    features: ['Wide Flanges', 'Superior Load Bearing', 'Structural Stability', 'Efficient Joining']
  },
  {
    id: 'p6',
    name: 'Hot Rolled (HR) Sheet Coils',
    category: 'Sheets & Coils',
    description: 'Hot Rolled steel coils suitable for heavy fabrication, pipe manufacturing, and industrial machinery. Known for excellent malleability and weldability at a cost-effective price point.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1EfQS5VpcAlrWhg_WWfr4SF2hiIRpw4he',
    features: ['High Malleability', 'Good Weldability', 'Wide Thickness Range', 'Structural Grade']
  },
  {
    id: 'p7',
    name: 'Hot Rolled Sheets & Plates',
    category: 'Industrial Plates',
    description: 'High-tensile MS plates produced through hot rolling. These plates are the backbone of heavy engineering, used in shipbuilding, storage tanks, pressure vessels, and base plates.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1QhSi-ekMXTqzREvpCYWWzNU7Koh2dpLV',
    features: ['Boiler Quality Available', 'Custom Cut Sizes', 'High Tensile Strength', 'Heavy Fabrication']
  },
  {
    id: 'p8',
    name: 'ISMB Beams',
    category: 'Structural Steel',
    description: 'Indian Standard Medium Weight Beams (ISMB) offering excellent bending resistance. A staple in structural steel construction for support columns, girders, and industrial sheds.',
    imageUrl: 'https://lh3.googleusercontent.com/d/120Kz1UmEFlvYgaJYczVlHpdvom7sEVw4',
    features: ['IS: 2062 Standards', 'High Bending Strength', 'Standard Section Weights', 'Construction Essential']
  },
  {
    id: 'p9',
    name: 'Mild Steel Flat Bars',
    category: 'General Fabrication',
    description: 'Versatile flat steel bars with a smooth surface finish. Extensively used in the fabrication of gates, grills, railings, earthing strips, and machinery base plates.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1xmX-Nh68O9uRyEGBg4uZpqaj2SqpSzYP',
    features: ['Sharp Edges', 'Easily Weldable', 'Various Widths', 'Cost-Effective']
  },
  {
    id: 'p10',
    name: 'Mild Steel Square Pipes (SHS)',
    category: 'Pipes & Tubes',
    description: 'Square Hollow Sections (SHS) combining high strength-to-weight ratio with a modern aesthetic. Ideal for furniture frames, architectural structures, and general fabrication.',
    imageUrl: 'https://lh3.googleusercontent.com/d/10Z_aFudImitihWinG6d_AUVzGZXFTo8j',
    features: ['Uniform Corner Radius', 'Torsion Resistant', 'Aesthetic Finish', 'Lightweight Structure']
  },
  {
    id: 'p11',
    name: 'Mild Steel Angles',
    category: 'Structural Steel',
    description: 'L-shaped structural steel angles providing two-way support. Essential for brackets, transmission towers, framing, and reinforcement in various construction projects.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1gg_IaA3GI8u1yQf0ooEBYL6ELO26YKjV',
    features: ['Equal & Unequal Legs', 'High Structural Rigidity', 'Easy Fabrication', 'Versatile Usage']
  },
  {
    id: 'p12',
    name: 'Mild Steel Channels',
    category: 'Structural Steel',
    description: 'C-shaped structural channels (ISMC) designed for high load-bearing capacity. Widely used in vehicle chassis, industrial shed structures, and heavy machinery supports.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1_SqT1CgfCfyXYBjMuTyy20QGuice7R0Q',
    features: ['U-Section Profile', 'Axial Load Bearing', 'Standard Sizes', 'Durable Construction']
  },
  {
    id: 'p13',
    name: 'Mild Steel Rounds',
    category: 'Bright Bars & Rods',
    description: 'Solid circular steel bars with high tensile strength. Used in machining, shaft manufacturing, anchor bolts, and various engineering applications requiring solid strength.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1aJV4emaWidPAKR4PzRFGU_l7Ppls9cmb',
    features: ['Consistent Diameter', 'Machining Grade', 'High Tensile', 'Smooth Finish']
  },
  {
    id: 'p14',
    name: 'RHS Tubes (HR Tubes)',
    category: 'Pipes & Tubes',
    description: 'Rectangular Hollow Sections (RHS) manufactured from hot rolled coils. Provides superior structural efficiency for industrial sheds, bridges, and agricultural equipment.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1txgqUD9-amQd69tBJKUh4ZAeqGjGuwfm',
    features: ['High Strength-to-Weight', 'Flat Surfaces', 'Easy to Join', 'Structural Efficiency']
  },
  {
    id: 'p15',
    name: 'Round Pipes & Tubes',
    category: 'Pipes & Tubes',
    description: 'ERW mild steel round pipes conforming to IS: 1239 / IS: 3589 standards. Suitable for water transport, structural scaffolding, fencing, and general fluid lines.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1Oz4iAUEGKKNGy7P3QY-fqTJvRa9Skipo',
    features: ['Leak Proof', 'Smooth Flow', 'Pressure Tested', 'Scaffolding Ready']
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