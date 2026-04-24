import { APPLY_URL } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-geo" />
      <div className="hero-grid" />
      <div className="hero-inner">
        {/* Left column: headline, buttons, stats */}
        <div>
          <div className="hero-tag fade-up">
            <span className="hero-tag-dot" />
            Serving The Colony · Decatur · Bridgeport
          </div>
          <h1 className="fade-up d1">
            Making <em>YOUR</em><br />
            American Dream<br />
            Come True.
          </h1>
          <p className="hero-sub fade-up d2">
            Local mortgage experts helping North Texas families navigate every
            step — from pre-approval to closing day. No jargon. No runaround.
            Just honest guidance from people who live here too.
          </p>
          <div className="hero-btns fade-up d3">
            <a href={APPLY_URL} className="btn-primary">
              Get Pre-Approved
            </a>
            <a href="#loans" className="btn-ghost">
              See Our Loan Options
            </a>
          </div>
          <div className="hero-stats fade-up d4">
            <div>
              <span className="stat-num">$500M+</span>
              <span className="stat-lbl">Loans Closed</span>
            </div>
            <div>
              <span className="stat-num">4.9 ★</span>
              <span className="stat-lbl">Google Rating</span>
            </div>
            <div>
              <span className="stat-num">15+ yrs</span>
              <span className="stat-lbl">Serving North Texas</span>
            </div>
          </div>
        </div>

        {/* Right column: pre-approval widget (hidden on mobile) */}
        <div className="hero-widget fade-up d5">
          <div className="hw-title">Quick pre-approval check</div>
          <div className="hw-field">
            <span className="hw-label">I&apos;m looking to</span>
            <select className="hw-select" defaultValue="Buy a home">
              <option>Buy a home</option>
              <option>Refinance</option>
              <option>New construction</option>
            </select>
          </div>
          <div className="hw-field">
            <span className="hw-label">Estimated home price</span>
            <input className="hw-input" type="text" defaultValue="$350,000" />
          </div>
          <div className="hw-field">
            <span className="hw-label">Credit score range</span>
            <select className="hw-select" defaultValue="Excellent (740+)">
              <option>Excellent (740+)</option>
              <option>Good (680–739)</option>
              <option>Fair (620–679)</option>
              <option>Below 620</option>
            </select>
          </div>
          <a href={APPLY_URL} className="hw-btn">
            Check My Options →
          </a>
          <p className="hw-note">
            <strong>No credit pull · No commitment · 2 minutes</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
