import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import { business, getCallLink, getWhatsAppLink } from "../../data/business";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark pb-20 text-white/85 lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold text-white">
            {business.name}
          </p>
          <p className="mt-1 text-sm">{business.tagline}</p>
          <p className="mt-2 font-hindi text-sm">{business.hindiTagline}</p>
        </div>

        <div>
          <p className="mb-2 font-semibold text-white">Quick Links</p>
          <ul className="space-y-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="mb-2 font-semibold text-white">Contact</p>
          {business.phones.map((phone) => (
            <a key={phone} href={getCallLink(phone)} className="block hover:text-white">
              📞 {phone}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="block hover:text-white"
          >
            💬 WhatsApp us
          </a>
          <p className="mt-2">📍 {business.address}</p>
        </div>
      </div>

      <p className="border-t border-white/10 py-4 text-center text-xs">
        © {year} {business.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
