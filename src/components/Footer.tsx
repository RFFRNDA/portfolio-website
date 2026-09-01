import { Link } from "react-router-dom";
import { Mail, MessageCircle, MapPin, Clock3 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// lucide-react dropped brand/logo icons (Github, Linkedin, Instagram) from
// its package, so these are hand-written to match lucide's own stroke style
// (24x24 viewBox, stroke=currentColor, round caps/joins) for visual consistency.
interface IconProps {
  size?: number;
}

// Shared wrapper carrying the common lucide-style SVG attributes so each
// brand icon only needs to supply its own path(s).
function BrandIcon({ size = 20, children }: IconProps & { children: React.ReactNode }) {
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

const EMAIL = "rafif.fernanda.id@gmail.com";
const WHATSAPP_DISPLAY = "0821-4328-9622";
const WHATSAPP_LINK = "https://wa.me/6282143289622";

const SOCIALS = [
  {name:"GitHub", href:"https://github.com/RFFRNDA", Icon: GithubIcon },
  {name: "LinkedIn", href: "https://www.linkedin.com/in/rafif-fernanda", Icon: LinkedinIcon,},
  {name: "Instagram",href: "https://www.instagram.com/rff_fernanda",Icon: InstagramIcon,},
];

const QUICK_LINKS = [
  { to: "/", key: "nav.home" as const },
  { to: "/about", key: "nav.about" as const },
  { to: "/project", key: "nav.project" as const },
];

function Footer() {
	const { t } = useLanguage();
	const year = new Date().getFullYear();
  	return (
		<footer className="border-t border-text-on-dark-secondary/30 bg-dark-base font-body text-text-on-dark">
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-4 md:grid-cols-3 md:gap-6">
				
				<div className="cflex flex-col items-center md:items-start">
					<Link to="/">
						<img src="/images/rf-logo.png" alt="Rafif Logo" className="block h-auto w-16"/>
					</Link>
					<p className="mt-2 text-sm text-text-on-dark-secondary md:text-left">
						{t("hero.tagline")}
					</p>
					<div className="mt-2 flex gap-4">
						{SOCIALS.map(({ name, href, Icon }) => (
							<a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-text-on-dark-secondary transition-colors hover:text-accent-orange">
								<Icon size={20} />
							</a>
						))}
					</div>
				</div>

				<div className="flex flex-col md:items-center">
					<h3 className="mb-3 font-heading text-sm font-semibold">
						{t("footer.quickLinks")}
					</h3>
					<ul className="space-y-2 text-sm text-text-on-dark-secondary">
						{QUICK_LINKS.map((link) => (
							<li key={link.to}>
								<Link to={link.to} className="hover:text-accent-orange">
									{t(link.key)}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="flex flex-col md:items-start">
					<h3 className="mb-3 font-heading text-sm font-semibold">
						{t("footer.contact")}
					</h3>
					<ul className="space-y-2 text-sm text-text-on-dark-secondary">
						<li className="flex items-center gap-2">
							<Mail size={16} />
							<a href={`mailto:${EMAIL}`} className="break-all hover:text-accent-orange">
								{EMAIL}
							</a>
						</li>
						<li className="flex items-center gap-2">
							<MessageCircle size={16} />  
							<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange">					
								{WHATSAPP_DISPLAY}
							</a>          
						</li>
						<li className="flex items-center gap-2">
							<MapPin size={18} />
							{t("aboutPreview.locationValue")} 
						</li>
						<li className="flex items-center gap-2">
							<Clock3 size={18} />
							{t("aboutPreview.availabilityDescription")}
						</li>
					</ul>
				</div>
			</div>

			<div className="border-t border-text-on-dark-secondary/30 px-6 py-4 text-center text-xs text-text-on-dark-secondary">
				© {year} Rafif Fernanda. All rights reserved.
			</div>
		</footer>
	);
}

export default Footer;