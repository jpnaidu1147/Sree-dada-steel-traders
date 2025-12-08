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
    name: 'TMT Rebars (Fe 550D)',
    category: 'Construction Steel',
    description: 'Premium quality Thermo-Mechanically Treated (TMT) bars featuring superior ductility and high yield strength. Ideal for critical infrastructure and residential projects requiring earthquake resistance.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1wNxuwVATUwvvTWB3hKMEmubeIHLx2Hgw',
    features: ['Grades: Fe 500D, Fe 550D', 'IS: 1786 Certified', 'Excellent Weldability', 'Corrosion Resistant']
  },
  {
    id: 'p2',
    name: 'MS Angles',
    category: 'Structural Steel',
    description: 'L-shaped structural steel sections manufactured to IS: 2062 standards. Widely used in transmission towers, trusses, and general fabrication frameworks.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1C9DwT3OJT_swmFaXolFSkpcWtnSeO_rh',
    features: ['Equal & Unequal Sizes', 'High Tensile Strength', 'Precision Dimensions', 'Structural Support']
  },
  {
    id: 'p3',
    name: 'MS Channels (ISMC)',
    category: 'Structural Steel',
    description: 'C-shaped channel sections providing excellent structural support for heavy machinery, truck bodies, and industrial sheds. Available in light and heavy weight categories.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1k24cmyK6EGs-k9kmnrMNb7B49bk-YqZe',
    features: ['ISMC Standard Sizes', 'High Load Bearing', 'Uniform Thickness', 'Industrial Fabrication']
  },
  {
    id: 'p4',
    name: 'Universal Beams (I-Beams)',
    category: 'Heavy Structural',
    description: 'Heavy-duty I-section beams designed for major load-bearing applications in bridges, warehouses, and high-rise buildings. Offers superior strength-to-weight ratio.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1sntF4gfsT9pPwfWJTFSOBFxTFQ0mZjnM',
    features: ['MB / NPB Sections', 'Maximum Durability', 'Span Capability', 'Structural Integrity']
  },
  {
    id: 'p5',
    name: 'MS Flats',
    category: 'General Fabrication',
    description: 'Versatile mild steel flat bars used in grating, fencing, gates, and earthing strips. Known for malleability and ease of welding.',
    imageUrl: 'https://lh3.googleusercontent.com/d/19VVWO2HPuVbHbDJ-bfu6mPf6RUmEBTox',
    features: ['Smooth Surface Finish', 'Various Widths/Thickness', 'Easy Fabrication', 'Cost-Effective']
  },
  {
    id: 'p6',
    name: 'MS Square Bars',
    category: 'Bright Bars',
    description: 'Solid square steel bars used in manufacturing of crane rails, machine keys, and bright bar applications. Offers high precision and straightness.',
    imageUrl: 'https://lh3.googleusercontent.com/d/11RIpZg9rfs70eE2o2cxdPNRvY4-ws4sw',
    features: ['Solid Cross-Section', 'Machining Grade', 'High Strength', 'Decorative Uses']
  },
  {
    id: 'p7',
    name: 'MS Round Pipes',
    category: 'Pipes & Tubes',
    description: 'ERW (Electric Resistance Welded) round pipes suitable for water lines, structural scaffolding, and fencing. Conforms to IS: 1239 / IS: 3589 standards.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1-DJ2RVMvx-lj9DPwWM8j1GMa-aQWXljg',
    features: ['Leak Proof Tested', 'Smooth Internal Flow', 'Various Wall Thickness', 'Scaffolding Ready']
  },
  {
    id: 'p8',
    name: 'Square Hollow Sections (SHS)',
    category: 'Pipes & Tubes',
    description: 'Square steel tubes offering a modern aesthetic and efficient structural performance. Ideal for furniture, architectural frameworks, and automotive chassis.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1V-K09h3MTxcRlKe9ok68Smlhiamlfgf9',
    features: ['Uniform Corner Radius', 'High Torsion Resistance', 'Aesthetic Finish', 'Lightweight']
  },
  {
    id: 'p9',
    name: 'Rectangular Hollow Sections (RHS)',
    category: 'Pipes & Tubes',
    description: 'Rectangular tubing extensively used in construction of industrial sheds, bridges, and agricultural equipment. Combines strength with functionality.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1LPfRrQGMOB8UPcyfijbntiRaAk1l90QV',
    features: ['High Strength-to-Weight', 'Easy Joining/Welding', 'Structural Efficiency', 'Versatile Sizes']
  },
  {
    id: 'p10',
    name: 'MS Plates',
    category: 'Industrial Plates',
    description: 'Hot rolled mild steel plates available in various thicknesses. Essential for heavy fabrication, ship building, pressure vessels, and base plates.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1QhSi-ekMXTqzREvpCYWWzNU7Koh2dpLV',
    features: ['High Tensile Steel', 'Custom Cut Sizes', 'Boiler Quality Available', 'Heavy Engineering']
  },
  {
    id: 'p11',
    name: 'Chequered Plates',
    category: 'Flooring',
    description: 'Anti-skid steel plates with a raised diamond or teardrop pattern. Perfect for industrial walkways, stair treads, bus floors, and loading docks.',
    imageUrl: 'https://lh3.googleusercontent.com/d/10lrP48tqJaDduujl9HSNFHq8bRZqE080',
    features: ['Anti-Slip Surface', 'Durable & Tough', 'Weather Resistant', 'Low Maintenance']
  },
  {
    id: 'p12',
    name: 'GP Sheets & Coils',
    category: 'Coated Steel',
    description: 'Galvanized Plain (GP) steel sheets coated with zinc to prevent corrosion. Used in air conditioning ducts, panels, electrical appliances, and automotive parts.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1fCF7c4E1gKphMcVQJfqaBsuGR6GBGGNz',
    features: ['Zinc Coated (GSM 120+)', 'Rust Protection', 'Formability', 'Shiny Surface']
  },
  {
    id: 'p13',
    name: 'Binding Wire',
    category: 'Construction Accessories',
    description: 'Soft annealed mild steel wire used for tying reinforcing bars in construction. pliable yet strong enough to hold heavy steel mesh in place.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1u7nZkALGDMfef3bObnL3GL3-bqqbCiar',
    features: ['Fully Annealed', 'Soft & Flexible', 'Uniform Gauge', 'Breakage Resistant']
  },
  {
    id: 'p14',
    name: 'Roofing Sheets',
    category: 'Roofing Solutions',
    description: 'Corrugated steel sheets providing durable roofing solutions for warehouses, parking sheds, and industrial units. Available in GC (Galvanized Corrugated) options.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1W00b3LWWN5LUe5W-5G4MYfnfMTbBSv-O',
    features: ['Weather Proof', 'High Strength', 'Easy Installation', 'Long Lifespan']
  },
  {
    id: 'p15',
    name: 'Color Coated Profile Sheets',
    category: 'Roofing Solutions',
    description: 'Pre-painted galvanized steel sheets offering superior aesthetics and corrosion resistance. Popular for modern industrial roofing and wall cladding.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1NoNdwL45ej-vy_LRW7HvEX7fGFa2FygJ',
    features: ['Vibrant Colors', 'UV Resistant Paint', 'Thermal Efficiency', 'Architectural Appeal']
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