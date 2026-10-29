import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import { business, getCallLink } from "../../data/business";

function getNavClass({ isActive }) {
  const base = "block px-3 py-2 rounded-md text-sm font-medium";
  return isActive
    ? `${base} text-brand bg-brand-light`
    : `${base} text-ink hover:text-brand`;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" onClick={closeMenu} className="leading-tight">
          <span className="block font-heading text-xl font-semibold text-brand">
            Uma Home Health Care
          </span>
          <span className="block text-xs text-muted">{business.tagline}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end className={getNavClass}>
              {link.label}
            </NavLink>
          ))}
          <a
            href={getCallLink(business.phones[0])}
            className="ml-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Call Now
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md border border-black/10 px-3 py-2 text-sm lg:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-black/5 bg-white px-4 py-2 lg:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              onClick={closeMenu}
              className={getNavClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
