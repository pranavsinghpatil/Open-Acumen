export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  duration: string;
  role: string;
  details: string;
  specifications: {
    area?: string;
    budget?: string;
    location?: string;
    completion?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Multi-Story Residential Complex",
    category: "Residential",
    description: "Design and supervision of a 15-story residential building with modern amenities and earthquake-resistant features.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["AutoCAD", "STAAD Pro", "ETABS", "MS Project"],
    duration: "18 months",
    role: "Assistant Project Engineer",
    details: "Led the structural design analysis for a 15-story residential complex housing 120 apartments. Implemented advanced earthquake-resistant design principles and supervised construction activities. Coordinated with architects and MEP consultants to ensure integrated design solutions.",
    specifications: {
      area: "85,000 sq ft",
      budget: "₹25 Crores",
      location: "Pune, Maharashtra",
      completion: "March 2024"
    }
  },
  {
    id: 2,
    title: "Highway Bridge Construction",
    category: "Infrastructure",
    description: "Structural analysis and design of a 4-lane highway bridge spanning 180 meters with pre-stressed concrete technology.",
    image: "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["MIDAS Civil", "AutoCAD", "STAAD Pro", "Primavera P6"],
    duration: "24 months",
    role: "Design Engineer",
    details: "Comprehensive structural design and analysis of a major highway bridge using pre-stressed concrete technology. Conducted load analysis, foundation design, and prepared detailed construction drawings. Ensured compliance with IRC codes and environmental regulations.",
    specifications: {
      area: "180m span",
      budget: "₹45 Crores",
      location: "Mumbai-Pune Expressway",
      completion: "August 2023"
    }
  },
  {
    id: 3,
    title: "Industrial Warehouse Facility",
    category: "Industrial",
    description: "Design of large-span steel structure warehouse with advanced fire safety and material handling systems.",
    image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Tekla Structures", "STAAD Pro", "AutoCAD", "SAP2000"],
    duration: "12 months",
    role: "Structural Designer",
    details: "Designed a large-span industrial warehouse using steel frame construction. Optimized structural members for cost efficiency while maintaining safety standards. Integrated advanced fire safety systems and coordinated with material handling equipment specifications.",
    specifications: {
      area: "120,000 sq ft",
      budget: "₹18 Crores",
      location: "MIDC Aurangabad",
      completion: "December 2023"
    }
  },
  {
    id: 4,
    title: "Water Treatment Plant",
    category: "Infrastructure",
    description: "Civil works design for 50 MLD water treatment plant including pumping stations and distribution network.",
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["AutoCAD", "EPANET", "HEC-RAS", "Civil 3D"],
    duration: "15 months",
    role: "Civil Engineer",
    details: "Comprehensive civil engineering design for a 50 MLD capacity water treatment plant. Designed concrete structures for treatment units, pumping stations, and distribution network. Conducted hydraulic analysis and prepared environmental impact assessments.",
    specifications: {
      area: "15 acres",
      budget: "₹35 Crores",
      location: "Nashik, Maharashtra",
      completion: "June 2024"
    }
  },
  {
    id: 5,
    title: "Commercial Office Complex",
    category: "Commercial",
    description: "Green building certified office complex with sustainable design features and modern amenities.",
    image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Revit", "ETABS", "AutoCAD", "Green Building Studio"],
    duration: "20 months",
    role: "Project Coordinator",
    details: "Coordinated the design and construction of a LEED Gold certified office complex. Implemented sustainable design features including rainwater harvesting, solar panels, and energy-efficient systems. Managed multi-disciplinary team coordination and client communications.",
    specifications: {
      area: "200,000 sq ft",
      budget: "₹60 Crores",
      location: "Baner, Pune",
      completion: "September 2024"
    }
  }
];

export const categories = ["All", "Residential", "Infrastructure", "Industrial", "Commercial"];