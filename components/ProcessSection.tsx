const steps = [
  {
    num: 1,
    title: "Apply in minutes",
    desc: "Start your application online — secure, simple, and no commitment required.",
  },
  {
    num: 2,
    title: "Talk to your loan officer",
    desc: "A local expert reviews your application and walks you through your options.",
  },
  {
    num: 3,
    title: "Get pre-approved",
    desc: "We'll issue your pre-approval letter so you can shop with confidence.",
  },
  {
    num: 4,
    title: "Close & celebrate",
    desc: "We guide you to the closing table — and stay in touch long after the keys are yours.",
  },
];

const timeline = [
  { label: "Application submitted",    badge: "Complete",    dotClass: "dot-done",   badgeClass: "b-done"   },
  { label: "Loan officer assigned",    badge: "Complete",    dotClass: "dot-done",   badgeClass: "b-done"   },
  { label: "Pre-approval review",      badge: "In progress", dotClass: "dot-active", badgeClass: "b-active" },
  { label: "Pre-approval letter issued",badge: "Up next",    dotClass: "dot-next",   badgeClass: "b-next"   },
  { label: "Home search",              badge: "Upcoming",    dotClass: "dot-next",   badgeClass: "b-next"   },
  { label: "Underwriting & closing",   badge: "Upcoming",    dotClass: "dot-next",   badgeClass: "b-next"   },
];

export default function ProcessSection() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="process-grid">
          {/* Left: steps */}
          <div>
            <span className="eyebrow">The process</span>
            <h2 className="sec-title">
              From application<br />to keys.
            </h2>
            <p className="sec-sub" style={{ marginBottom: 0 }}>
              We&apos;ve streamlined the process so you always know where you
              stand — and there&apos;s never a surprise.
            </p>
            <div className="steps">
              {steps.map((step) => (
                <div key={step.num} className="step">
                  <div className="step-num">{step.num}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="step-note">
              Most clients receive their pre-approval letter within 24–48 hours
              of submitting their application.
            </div>
          </div>

          {/* Right: timeline card */}
          <div>
            <div className="timeline-card">
              <div className="tl-title">Your loan journey</div>
              {timeline.map((row, i) => (
                <div key={row.label}>
                  <div className="tl-row">
                    <div className={`tl-dot ${row.dotClass}`} />
                    <span className="tl-label">{row.label}</span>
                    <span className={`tl-badge ${row.badgeClass}`}>{row.badge}</span>
                  </div>
                  {i < timeline.length - 1 && <div className="tl-divider" />}
                </div>
              ))}
              <div className="tl-footer">
                <span className="tl-badge-dark">Avg. 22 days to close</span>
                <span className="tl-footer-txt">From application to closing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
