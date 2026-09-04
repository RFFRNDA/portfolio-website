import {
  SiPython, SiJavascript, SiTypescript, SiPhp, SiHtml5, SiCss,
  SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy,
  SiLaravel, SiReact, SiTailwindcss,
  SiMysql, SiPostgresql, SiGooglecolab, 
  SiGithub,SiTrello,
} from "react-icons/si";
import { FaFileExcel, FaFileWord, FaFilePowerpoint } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { useLanguage } from "../../context/LanguageContext";
import { skillCategories,type SkillIcon} from "../../data/skills";
import type { IconType } from "react-icons";

/**
 * Brand icon + brand color
 */
const brandIcons: Partial<
  Record<SkillIcon, { icon: IconType; color: string }>
> = {
  // Programming
  python: { icon: SiPython, color: "#3776AB" },
  javascript: { icon: SiJavascript, color: "#F7DF1E" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  php: { icon: SiPhp, color: "#777BB4" },
  html5: { icon: SiHtml5, color: "#E34F26" },
  css3: { icon: SiCss, color: "#1572B6" },

  // Machine Learning & Data
  tensorflow: { icon: SiTensorflow, color: "#FF6F00" },
  pytorch: { icon: SiPytorch, color: "#EE4C2C" },
  scikitlearn: { icon: SiScikitlearn, color: "#F7931E" },
  pandas: { icon: SiPandas, color: "#150458" },
  numpy: { icon: SiNumpy, color: "#013243" },

  // Framework
  laravel: { icon: SiLaravel, color: "#FF2D20" },
  react: { icon: SiReact, color: "#61DAFB" },
  tailwind: { icon: SiTailwindcss,color: "#06B6D4"},

  // Database
  mysql: { icon: SiMysql, color: "#4479A1" },
  postgresql: { icon: SiPostgresql, color: "#4169E1" },

  // Development Tools
  vscode: { icon: VscVscode, color: "#007ACC" },
  googleColab: { icon: SiGooglecolab, color: "#F9AB00" },
  github: { icon: SiGithub, color: "#181717" },
  trello: { icon: SiTrello, color: "#0C66E4" },

  // Office Applications
  excel: { icon: FaFileExcel, color: "#217346" },
  word: { icon: FaFileWord, color: "#2B579A" },
  powerpoint: { icon: FaFilePowerpoint, color: "#B7472A" },
};

function SkillIconView({ icon, image }: { icon: SkillIcon; image?: string; }) {
  if (image) {
    return (
      <img src={image} alt="" className="h-8 w-8 object-contain" aria-hidden="true"/>
    );
  }
  const brand = brandIcons[icon];
  if (brand) {
    const BrandIcon = brand.icon;
    return (
      <BrandIcon className="h-8 w-8" style={{ color: brand.color }} aria-hidden="true"/>
    );
  }
  return null;
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="bg-warm-base py-6 pb-6">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 font-heading text-3xl font-bold text-dark-base md:text-4xl">
          {t("aboutPage.skills")}
        </h2>

        <div className="grid grid-cols-1 gap-x-16 gap-y-6 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-3 text-sm font-semibold tracking-wide text-text-on-warm-secondary">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group relative" aria-label={skill.name}>
                    {/* Skill icon */}
                    <div
                      className="
                        flex h-16 w-16
                        items-center justify-center
                        rounded-xl
                        border border-text-on-warm-secondary/20
                        bg-warm-base
                        transition-all duration-200
                        group-hover:-translate-y-1
                        group-hover:border-accent-orange
                        group-hover:bg-white
                        group-hover:shadow-md
                     "
                    >
                    <SkillIconView icon={skill.icon} image={skill.image}/>
                    </div>

                    {/* Skill name tooltip */}
                    <div
                      className="
                        pointer-events-none
                        absolute left-1/2 top-full z-10
                        mt-2 w-max max-w-[180px]
                        -translate-x-1/2
                        rounded-md
                        bg-dark-base
                        px-3 py-1.5
                        text-xs font-medium
                        text-text-on-dark
                        opacity-0
                        shadow-lg
                        transition-all duration-200
                        group-hover:translate-y-1
                        group-hover:opacity-100
                      "
                    >
                      {skill.name}

                      {/* Tooltip arrow */}
                      <div
                        className="
                          absolute left-1/2 top-[-4px]
                          h-2 w-2
                          -translate-x-1/2
                          rotate-45
                          bg-dark-base
                        "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}