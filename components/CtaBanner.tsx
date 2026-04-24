import { APPLY_URL } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <h2>
          Ready to take<br />the <em>first step?</em>
        </h2>
        <p>
          No obligation. No pressure. Just honest guidance from a local team
          that genuinely cares about getting you into the right home at the
          right rate.
        </p>
        <div className="cta-btns">
          <a
            href={APPLY_URL}
            className="btn-primary"
            style={{ fontSize: "16px", padding: "15px 32px" }}
          >
            Apply Now
          </a>
          <a
            href="tel:4693624700"
            className="btn-ghost"
            style={{ fontSize: "16px", padding: "15px 32px" }}
          >
            Talk to a Loan Officer
          </a>
        </div>
        <div className="cta-trust">
          Equal Housing Lender &nbsp;·&nbsp; NMLS #275209 &nbsp;·&nbsp;
          Licensed in Texas
        </div>
      </div>
    </section>
  );
}
