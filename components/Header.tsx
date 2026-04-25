"use client";

import { useState } from "react";
import Link from "next/link";
import { APPLY_URL, PORTAL_URL } from "@/lib/constants";

const LC_LINKS = [
  { label: "Calculators",            href: "/calculators" },
  { label: "Home Buying Basics",     href: "/learning-center#home-buying-basics" },
  { label: "Mortgage Glossary",      href: "/learning-center#mortgage-glossary" },
  { label: "FAQs",                   href: "/learning-center#faqs" },
  { label: "Helpful Downloads",      href: "/resources/documents" },
];

export default function Header() {
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

  const closeAll = () => { setMenuOpen(false); setLearnOpen(false); };

  return (
    <>
      <nav>
        <div className="nav-top">
          <Link href="/" className="logo">
            <div className="logo-name">
              <span className="logo-name-text">
                Amer<span className="logo-i-star">
                  ı<span className="logo-star">★</span>
                </span>Dream
              </span>
              <span className="logo-sub">Mortgage Group, LLC</span>
            </div>
          </Link>
          <div className="nav-top-right">
            <a href={PORTAL_URL} className="btn-portal">Client Login</a>
            <a href={APPLY_URL} className="btn-red">Apply Now</a>
          </div>
        </div>

        <div className="nav-bottom">
          <ul className="nav-links">
            <li><Link href="/loan-types">Loan Options</Link></li>

            {/* Learning Center dropdown */}
            <li className="nav-dropdown">
              <Link href="/learning-center" className="nav-dropdown-btn" aria-haspopup="true">
                Learning Center <span className="nav-dropdown-arrow">▾</span>
              </Link>
              <ul className="nav-dropdown-menu" role="menu">
                {LC_LINKS.map(({ label, href }) => (
                  <li key={href} role="none">
                    <Link href={href} className="nav-dropdown-item" role="menuitem">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li><Link href="/checklist">Buyer Checklist</Link></li>
            <li><Link href="/meet-the-team">Our Team</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          <div className="nav-right">
            <a
              href="https://www.facebook.com/450436438398721"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="nav-fb"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="tel:4693624700" className="nav-phone">(469) 362-4700</a>
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
          <div className="nav-mobile-btns">
            <a href={PORTAL_URL} className="btn-portal">Client Login</a>
            <a href={APPLY_URL} className="btn-red">Apply Now</a>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
        <Link href="/loan-types" onClick={closeAll}>Loan Options</Link>

        {/* Learning Center expandable */}
        <button
          className="mobile-nav-group-btn"
          onClick={() => setLearnOpen(!learnOpen)}
          aria-expanded={learnOpen}
        >
          Learning Center <span>{learnOpen ? "▲" : "▾"}</span>
        </button>
        {learnOpen && (
          <div className="mobile-nav-sub">
            {LC_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} className="mobile-nav-sub-link" onClick={closeAll}>
                {label}
              </Link>
            ))}
          </div>
        )}

        <Link href="/checklist" onClick={closeAll}>Buyer Checklist</Link>
        <Link href="/meet-the-team" onClick={closeAll}>Our Team</Link>
        <Link href="/contact" onClick={closeAll}>Contact</Link>
        <a href="tel:4693624700">(469) 362-4700</a>
        <a href={APPLY_URL} className="btn-red" style={{ textAlign: "center" }}>Apply Now</a>
      </div>
    </>
  );
}
