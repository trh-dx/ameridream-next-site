import type { Metadata } from "next";
import Link from "next/link";
import PageHero              from "@/components/PageHero";
import MortgageCalculator    from "@/components/MortgageCalculator";
import AffordabilityCalculator from "@/components/AffordabilityCalculator";
import RefiCalculator        from "@/components/RefiCalculator";
import PageCtaBanner         from "@/components/PageCtaBanner";

export const metadata: Metadata = {
  title: "Learning Center | AmeriDream Mortgage Group",
  description:
    "Free mortgage calculators, home-buying basics, a glossary of terms, and a step-by-step checklist — everything you need to buy your first home in North Texas.",
};

/* ── Home Purchase Basics cards ── */
const basics = [
  {
    icon: "🏦",
    title: "Get Pre-Approved First",
    body: "Before you fall in love with a home, know your budget. Pre-approval shows sellers you're serious and gives you a realistic price range.",
  },
  {
    icon: "📊",
    title: "Understand Your Credit Score",
    body: "Your credit score is one of the biggest factors in your interest rate. Check yours early and work on improvements if needed.",
  },
  {
    icon: "💰",
    title: "Save for More Than a Down Payment",
    body: "You'll also need closing costs (2–5% of the loan), moving expenses, and an emergency fund for repairs and unexpected costs.",
  },
  {
    icon: "🔍",
    title: "Compare Loan Programs",
    body: "Conventional, FHA, VA, and USDA loans all have different requirements. The right one depends on your credit, savings, and eligibility.",
  },
  {
    icon: "🏠",
    title: "Factor in All Monthly Costs",
    body: "Your payment includes principal, interest, property taxes, homeowner's insurance, and possibly HOA dues and mortgage insurance.",
  },
  {
    icon: "🤝",
    title: "Work with a Local Expert",
    body: "A loan officer who knows the North Texas market can guide you from pre-approval through closing — and handle surprises along the way.",
  },
];

/* ── Glossary terms ── */
const glossary = [
  { term: "APR",              def: "Annual Percentage Rate — the total yearly cost of your loan including interest and fees, making it easier to compare offers." },
  { term: "DTI",              def: "Debt-to-Income Ratio — your total monthly debts divided by gross monthly income. Lenders typically want 43% or less." },
  { term: "Escrow",           def: "An account your lender controls to collect and pay property taxes and homeowner's insurance on your behalf each month." },
  { term: "PMI",              def: "Private Mortgage Insurance — required on conventional loans with less than 20% down. It protects the lender, not you." },
  { term: "Amortization",     def: "The schedule of monthly payments that gradually pay off both principal and interest over your loan term." },
  { term: "Points",           def: "Prepaid interest paid at closing to \"buy down\" your rate. One point = 1% of the loan amount." },
  { term: "LTV",              def: "Loan-to-Value Ratio — your loan amount divided by the home's value. Lower LTV means better rates and no PMI at 80%." },
  { term: "Pre-qualification", def: "An informal estimate of what you might borrow based on self-reported info — not the same as a full pre-approval." },
];

/* ── Checklist preview items ── */
const checklistItems = [
  { label: "Check & improve your credit score", done: true  },
  { label: "Calculate your target budget",      done: true  },
  { label: "Get pre-approved",                  done: true  },
  { label: "Research neighborhoods",            done: false },
  { label: "Make an offer",                     done: false },
  { label: "Complete home inspection",          done: false },
];

export default function LearningCenterPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Learning Center"
        title={<>Everything you need to<br /><em>buy with confidence.</em></>}
        subtitle="Free calculators, plain-English guides, and a step-by-step checklist — all in one place. No sign-up required."
      />

      {/* Jump links */}
      <div style={{ background: "var(--off-white)", borderBottom: "1px solid var(--border)", padding: "0 5%" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", gap: 24, overflowX: "auto", padding: "16px 0" }}>
          {[
            ["#calculator",   "Payment Calculator"],
            ["#affordability","Affordability"],
            ["#refinance",    "Refi Calculator"],
            ["#basics",       "Home Buying Basics"],
            ["#glossary",     "Glossary"],
            ["#checklist",    "Checklist"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{ whiteSpace: "nowrap", fontSize: 14, fontWeight: 500, color: "var(--blue)", textDecoration: "none" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Calculators */}
      <MortgageCalculator />
      <AffordabilityCalculator />
      <RefiCalculator />

      {/* Home Purchase Basics */}
      <section className="basics-section" id="basics">
        <div className="wrap">
          <span className="eyebrow">Home buying basics</span>
          <h2 className="sec-title">What every buyer should know.</h2>
          <div className="basics-grid">
            {basics.map((card) => (
              <div key={card.title} className="basics-card">
                <div className="basics-num" style={{ fontSize: 20, background: "transparent", color: "inherit" }}>
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="glossary-section" id="glossary">
        <div className="wrap">
          <span className="eyebrow">Mortgage glossary</span>
          <h2 className="sec-title">Plain-English definitions.</h2>
          <div className="glossary-grid">
            {glossary.map((item) => (
              <div key={item.term} className="glossary-item">
                <div className="glossary-term">{item.term}</div>
                <div className="glossary-def">{item.def}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Promo */}
      <section className="checklist-promo" id="checklist">
        <div className="checklist-promo-grid">
          <div>
            <span className="eyebrow">Step-by-step checklist</span>
            <h2 className="sec-title" style={{ marginBottom: 16 }}>Your home-buying checklist.</h2>
            <p style={{ color: "var(--text-mid)", marginBottom: 32, lineHeight: 1.7 }}>
              Track every step from credit check to closing day. Our interactive checklist
              keeps you organized so nothing slips through the cracks.
            </p>
            <Link href="/checklist" className="btn-primary" style={{ display: "inline-block" }}>
              Open the full checklist →
            </Link>
          </div>
          <div className="checklist-promo-items">
            {checklistItems.map((item) => (
              <div
                key={item.label}
                className={`checklist-promo-item${item.done ? " active" : " faded"}`}
              >
                <span style={{ fontSize: 18 }}>{item.done ? "✅" : "⬜"}</span>
                <span style={{ fontSize: 14, color: "var(--text-dark)", fontWeight: 500 }}>
                  {item.label}
                </span>
              </div>
            ))}
            <p className="checklist-promo-more">+ 23 more steps in the full checklist</p>
          </div>
        </div>
      </section>

      <PageCtaBanner
        variant="light"
        heading="Still have questions? We're here."
        body="Our loan officers can walk you through any of these topics in plain English — no pressure, no obligation. Most people leave the first call feeling much more confident."
        secondaryLabel="Talk to a loan officer"
      />
    </main>
  );
}
