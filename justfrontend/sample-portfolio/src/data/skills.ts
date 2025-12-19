export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Design Software",
    skills: [
      { name: "AutoCAD", level: 95, category: "Design" },
      { name: "STAAD Pro", level: 90, category: "Design" },
      { name: "ETABS", level: 85, category: "Design" },
      { name: "Tekla Structures", level: 80, category: "Design" },
      { name: "Revit", level: 75, category: "Design" },
      { name: "Civil 3D", level: 70, category: "Design" }
    ]
  },
  {
    title: "Analysis Tools",
    skills: [
      { name: "SAP2000", level: 88, category: "Analysis" },
      { name: "MIDAS Civil", level: 82, category: "Analysis" },
      { name: "SAFE", level: 85, category: "Analysis" },
      { name: "HEC-RAS", level: 75, category: "Analysis" },
      { name: "EPANET", level: 70, category: "Analysis" }
    ]
  },
  {
    title: "Project Management",
    skills: [
      { name: "MS Project", level: 90, category: "Management" },
      { name: "Primavera P6", level: 85, category: "Management" },
      { name: "Cost Estimation", level: 88, category: "Management" },
      { name: "Quality Control", level: 92, category: "Management" },
      { name: "Risk Assessment", level: 80, category: "Management" }
    ]
  },
  {
    title: "Technical Skills",
    skills: [
      { name: "Structural Design", level: 95, category: "Technical" },
      { name: "Foundation Design", level: 90, category: "Technical" },
      { name: "Earthquake Analysis", level: 85, category: "Technical" },
      { name: "Construction Planning", level: 88, category: "Technical" },
      { name: "Site Supervision", level: 92, category: "Technical" }
    ]
  }
];