"use client";

import { useState } from "react";
import Link from "next/link";
import { APPLY_URL, PORTAL_URL } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <li><Link href="/loan-types">Loan types</Link></li>
            <li><Link href="/learning-center">Learning center</Link></li>
            <li><Link href="/checklist">Buyer checklist</Link></li>
            <li><Link href="/meet-the-team">Our team</Link></li>
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
        </div>
      </nav>

      <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
        <Link href="/loan-types" onClick={() => setMenuOpen(false)}>Loan types</Link>
        <Link href="/learning-center" onClick={() => setMenuOpen(false)}>Learning center</Link>
        <Link href="/checklist" onClick={() => setMenuOpen(false)}>Buyer checklist</Link>
        <Link href="/meet-the-team" onClick={() => setMenuOpen(false)}>Our team</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <a href="tel:4693624700">(469) 362-4700</a>
        <a href={APPLY_URL} className="btn-red" style={{ textAlign: "center" }}>Apply Now</a>
      </div>
    </>
  );
}
