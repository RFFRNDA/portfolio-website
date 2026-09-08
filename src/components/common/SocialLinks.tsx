import type { ReactNode } from "react";
import { socials } from "../../data/socials";

interface IconProps {
  size?: number;
}

function BrandIcon({
  size = 20,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function GithubIcon({ size }: IconProps) {
  return (
    <BrandIcon size={size}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </BrandIcon>
  );
}

function LinkedinIcon({ size }: IconProps) {
  return (
    <BrandIcon size={size}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </BrandIcon>
  );
}

function InstagramIcon({ size }: IconProps) {
  return (
    <BrandIcon size={size}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </BrandIcon>
  );
}

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
};

interface SocialLinksProps {
  size?: number;
  className?: string;
  variant?: "default" | "card";
}

export default function SocialLinks({
  size = 20,
  className = "",
  variant = "default",
}: SocialLinksProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socials.map((social) => {
        const Icon = iconMap[social.id];

        return (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={
              variant === "card"
                ? "group relative flex h-12 w-12 items-center justify-center rounded-lg border border-text-on-dark-secondary text-text-on-dark-secondary transition-all duration-200 hover:-translate-y-1 hover:border-accent-orange hover:text-accent-orange hover:shadow-[0_4px_0_#c85314] focus:outline-none focus:-translate-y-1 focus:border-accent-orange focus:text-accent-orange focus:shadow-[0_4px_0_#c85314]"
                : "text-text-on-dark-secondary transition-colors hover:text-accent-orange"
            }
          >
            <Icon size={size} />

            {variant === "card" && (
              <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-dark-base px-2.5 py-1 text-xs font-medium text-text-on-dark opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100">
                {social.name}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}