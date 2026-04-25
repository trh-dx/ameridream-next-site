import type { Metadata } from "next";
import Link from "next/link";
import PageHero              from "@/components/PageHero";
import PurchaseCalculator    from "@/components/PurchaseCalculator";
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

/* ── FAQs ── */
const faqs = [
  {
    q: "How long does it take to get pre-approved?",
    a: "Most pre-approvals are completed within 24–48 hours. Once you submit your application and documents, we review your credit, income, and assets and issue a pre-approval letter — often the same day.",
  },
  {
    q: "What credit score do I need to qualify?",
    a: "It depends on the loan type. Conventional loans typically require a 620+ score, FHA loans allow scores as low as 580 (with 3.5% down), and VA/USDA loans have flexible requirements. A higher score means a better rate, so it's worth checking before you apply.",
  },
  {
    q: "How much do I need for a down payment?",
    a: "FHA loans require as little as 3.5% down, conventional loans can go as low as 3%, and VA and USDA loans offer 0% down for eligible buyers. Keep in mind you'll also need funds for closing costs and reserves.",
  },
  {
    q: "Can I get pre-approved before I find a house?",
    a: "Yes — and we recommend it! Getting pre-approved before you start house hunting gives you a clear budget, strengthens your offer, and helps you move quickly in a competitive market.",
  },
  {
    q: "What documents do I need to get pre-approved?",
    a: "You'll typically need: W-2s and tax returns (last 2 years), recent pay stubs (last 30 days), bank and asset statements (last 2–3 months), a valid photo ID, and your Social Security number for a credit check. Self-employed borrowers may also need profit & loss statements.",
  },
  {
    q: "What happens after I apply?",
    a: "We'll verify your documents, order an appraisal on the property, and submit your file to underwriting. You'll receive a Loan Estimate within 3 business days. From application to closing typically takes 21–45 days.",
  },
  {
    q: "How much are closing costs?",
    a: "Closing costs typically run 2–5% of the loan amount and include lender fees, title insurance, appraisal, and prepaid taxes and insurance. We'll give you a detailed Loan Estimate early in the process so there are no surprises.",
  },
  {
    q: "What is PMI?",
    a: "Private Mortgage Insurance (PMI) is required on conventional loans when your down payment is less than 20%. It protects the lender — not you — and typically costs 0.5–1.5% of the loan annually. Once you reach 20% equity, you can request to have it removed.",
  },
  {
    q: "Do you only lend in Texas?",
    a: "We are licensed in Texas and primarily serve the North Texas market, including the DFW Metroplex. Contact us to find out if we can assist in your specific area.",
  },
  {
    q: "Do you offer refinance and new construction loans?",
    a: "Yes! In addition to purchase loans, we offer refinancing to lower your rate or tap your equity, as well as new construction loans. Talk to one of our loan officers to explore the options that fit your goals.",
  },
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
      <div className="lc-jump-bar">
        <div className="lc-jump-inner">
          {[
            ["#purchase-calculator",   "Purchase Calculator"],
            ["#affordability-calculator","Affordability Calculator"],
            ["#refinance-calculator",    "Refi Calculator"],
            ["#home-buying-basics",       "Home Buying Basics"],
            ["#mortgage-glossary",     "Glossary"],
            ["#faqs",         "FAQs"],
            ["#checklist",    "Checklist"],
            ["/resources/documents", "Helpful Downloads"],
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
      <PurchaseCalculator />
      <AffordabilityCalculator />
      <RefiCalculator />

      {/* Home Purchase Basics */}
      <section className="basics-section" id="home-buying-basics">
        <div className="wrap">
          <span className="eyebrow" style={{ fontSize: "22px", fontWeight: "800", letterSpacing: ".02em" }}>Home Buying Basics</span>
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
      <section className="glossary-section" id="mortgage-glossary">
        <div className="wrap">
          <span className="eyebrow" style={{ fontSize: "22px", fontWeight: "800", letterSpacing: ".02em" }}>Mortgage Glossary</span>
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

      {/* FAQs */}
      <section className="faq-section" id="faqs">
        <div className="wrap">
          <span className="eyebrow" style={{ fontSize: "22px", fontWeight: "800", letterSpacing: ".02em" }}>FAQs</span>
          <h2 className="sec-title">Common questions, straight answers.</h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.q} className="faq-item">
                <summary className="faq-question">{item.q}</summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Promo */}
      <section className="checklist-promo" id="checklist">
        <div className="checklist-promo-grid">
          <div>
            <span className="eyebrow" style={{ fontSize: "22px", fontWeight: "800", letterSpacing: ".02em" }}>Step-by-Step Checklist</span>
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

      {/* Helpful Downloads */}
      <section className="basics-section" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <span className="eyebrow" style={{ fontSize: "22px", fontWeight: "800", letterSpacing: ".02em" }}>Helpful Downloads</span>
          <h2 className="sec-title">Resources to take with you.</h2>
          <div style={{ marginTop: 32 }}>
            <Link href="/resources/documents" className="basics-card" style={{ display: "flex", alignItems: "center", gap: 20, textDecoration: "none", maxWidth: 520 }}>
              <span style={{ fontSize: 40 }}>📁</span>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 19, color: "var(--text-dark)", fontWeight: 600, marginBottom: 6 }}>
                  Mortgage Resource Library
                </div>
                <p style={{ fontSize: 13.5, color: "var(--text-mid)", lineHeight: 1.65, margin: 0 }}>
                  Download our Do's &amp; Don'ts guide, document checklist, and more — everything you need to prepare for your loan process.
                </p>
                <span style={{ display: "inline-block", marginTop: 12, fontSize: 13, fontWeight: 600, color: "var(--blue)" }}>
                  View all downloads →
                </span>
              </div>
            </Link>
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
