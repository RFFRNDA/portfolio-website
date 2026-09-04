export type SkillIcon =
  | "python"
  | "javascript"
  | "typescript"
  | "php"
  | "html5"
  | "css3"
  | "tensorflow"
  | "pytorch"
  | "scikitlearn"
  | "pandas"
  | "numpy"
  | "laravel"
  | "flask"
  | "react"
  | "tailwind"
  | "mysql"
  | "postgresql"
  | "enterpriseArchitect"
  | "bizagi"
  | "figma"
  | "softwareIdeas"
  | "vscode"
  | "googleColab"
  | "laragon"
  | "github"
  | "trello"
  | "excel"
  | "word"
  | "powerpoint"
  | "fabric";

export interface Skill {
  name: string;
  icon: SkillIcon;
  image?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "PHP", icon: "php" },
    ],
  },
  {
    title: "Machine Learning & Data",
    skills: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
    ],
  },
  {
    title: "Framework",
    skills: [
      { name: "Laravel", icon: "laravel" },
      { name: "Flask", icon: "flask", image: "/images/skills/flask.svg" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    title: "System Analysis",
    skills: [
      { name: "Enterprise Architect", icon: "enterpriseArchitect", image: "/images/skills/enterprise-architect.png" },
      { name: "Bizagi", icon: "bizagi", image: "/images/skills/bizagi-modeler.png" },
      { name: "Figma", icon: "figma", image: "/images/skills/figma.svg" },
      { name: "Software Ideas Modeler", icon: "softwareIdeas", image: "/images/skills/software-ideas-modeler.png" },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Visual Studio Code", icon: "vscode" },
      { name: "Google Colab", icon: "googleColab" },
      { name: "Laragon", icon: "laragon",image: "/images/skills/laragon.svg" },
      { name: "GitHub", icon: "github" },
      { name: "Trello", icon: "trello" },
    ],
  },
  {
    title: "Office Applications",
    skills: [
      { name: "Microsoft Excel", icon: "excel" },
      { name: "Microsoft Word", icon: "word" },
      { name: "Microsoft PowerPoint", icon: "powerpoint" },
      { name: "Microsoft Fabric", icon: "fabric", image: "/images/skills/microsoft-fabric.svg" },
    ],
  },
];