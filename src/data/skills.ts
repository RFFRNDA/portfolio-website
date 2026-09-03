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
  | "matplotlib"
  | "opencv"
  | "laravel"
  | "flask"
  | "react"
  | "tailwind"
  | "sql"
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
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "PHP", icon: "php" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
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
      { name: "Matplotlib", icon: "matplotlib" },
      { name: "OpenCV", icon: "opencv" },
    ],
  },
  {
    title: "Framework",
    skills: [
      { name: "Laravel", icon: "laravel" },
      { name: "Flask", icon: "flask" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL", icon: "sql" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    title: "System Analysis",
    skills: [
      { name: "Enterprise Architect", icon: "enterpriseArchitect" },
      { name: "Bizagi", icon: "bizagi" },
      { name: "Figma", icon: "figma" },
      { name: "Software Ideas Modeler", icon: "softwareIdeas" },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Visual Studio Code", icon: "vscode" },
      { name: "Google Colab", icon: "googleColab" },
      { name: "Laragon", icon: "laragon" },
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
      { name: "Microsoft Fabric", icon: "fabric" },
    ],
  },
];