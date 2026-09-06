export type SocialId =
  | "github"
  | "linkedin"
  | "instagram";

export interface Social {
  id: SocialId;
  name: string;
  href: string;
}

export const socials: Social[] = [
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/RFFRNDA",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rafif-fernanda",
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/rff_fernanda",
  },
];