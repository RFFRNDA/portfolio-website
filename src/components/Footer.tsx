import { Link } from "react-router-dom";
import { Mail, MessageCircle, MapPin, Clock3 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SocialLinks from "./common/SocialLinks";

const EMAIL = "rafif.fernanda.id@gmail.com";
const WHATSAPP_DISPLAY = "0821-4328-9622";
const WHATSAPP_LINK = "https://wa.me/6282143289622";

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
					<p className="mt-2 text-sm text-justify text-text-on-dark-secondary">
						{t("hero.tagline")}
					</p>
					<SocialLinks className="mt-2" />
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
							{t("profile.locationValue")}
						</li>
						<li className="flex items-center gap-2">
							<Clock3 size={18} />
							{t("profile.availabilityValue")}
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