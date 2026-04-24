import type { Metadata } from "next";
import Link        from "next/link";
import PageHero    from "@/components/PageHero";
import PageCtaBanner from "@/components/PageCtaBanner";
import { APPLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Meet the Team | AmeriDream Mortgage Group",
  description:
    "Meet the loan officers at AmeriDream Mortgage Group — local North Texas experts serving The Colony, Decatur, and Bridgeport. Real people, real guidance.",
};

const members = [
  {
    initials: "JW",
    name: "Jesse Woskowicz",
    red: false,
    nmls: "NMLS #———",
    title: "Loan Originator",
    specialty: "Specializes in conventional and VA loans for North Texas buyers. Known for clear communication and fast pre-approvals.",
    office: "The Colony",
    siteUrl: "https://www.teamjessehomeloans.com",
  },
  {
    initials: "KS",
    name: "Kevin Shaw",
    red: true,
    nmls: "NMLS #———",
    title: "Loan Originator",
    specialty: "Expert in FHA and first-time buyer programs. Helps clients build a strong financial foundation from day one.",
    office: "The Colony",
    siteUrl: "http://www.kevinamg.com",
  },
  {
    initials: "JM",
    name: "Jacob Mejia",
    red: false,
    nmls: "NMLS #———",
    title: "Loan Originator",
    specialty: "Focused on purchase transactions in the Decatur and Bridgeport markets. Fluent in English and Spanish.",
    office: "Decatur",
    siteUrl: "http://www.jacobamg.com",
  },
  {
    initials: "BH",
    name: "Brad Hunter",
    red: true,
    nmls: "NMLS #———",
    title: "Loan Originator",
    specialty: "Jumbo and non-conforming loan specialist. Helps self-employed borrowers and high-value property buyers navigate complex financing.",
    office: "The Colony",
    siteUrl: "https://bradamg.com",
  },
  {
    initials: "SA",
    name: "Shea Armstrong",
    red: false,
    nmls: "NMLS #———",
    title: "Loan Originator",
    specialty: "USDA and rural loan expert. Helps buyers in Decatur, Bridgeport, and surrounding communities qualify for zero-down programs.",
    office: "Bridgeport",
    siteUrl: "https://sheaamg.com",
  },
  {
    initials: "LR",
    name: "Leslie Riccitelli",
    red: true,
    nmls: "NMLS #———",
    title: "Loan Originator",
    specialty: "Refinance and cash-out specialist. Helps existing homeowners lower their rate or tap equity to reach their financial goals.",
    office: "The Colony",
    siteUrl: "https://leslieamg.com",
  },
  {
    initials: "ST",
    name: "Shaley Tate",
    red: false,
    nmls: "NMLS #———",
    title: "Loan Originator",
    specialty: "VA loan advocate dedicated to serving veterans and active-duty service members across North Texas.",
    office: "Decatur",
    siteUrl: "https://shaleyamg.com",
  },
  {
    initials: "JM",
    name: "Jake Martinez",
    red: true,
    nmls: "NMLS #———",
    title: "Loan Originator",
    specialty: "First-time buyer coach. Walks clients through every step from credit check to closing day — no jargon, no surprises.",
    office: "The Colony",
    siteUrl: "https://jakeamg.com",
  },
  {
    initials: "MH",
    name: "Menda Huddleston",
    red: false,
    nmls: "NMLS #———",
    title: "Loan Originator",
    specialty: "Conventional and investment property specialist with deep knowledge of the North Texas market.",
    office: "Bridgeport",
    siteUrl: "https://mendaamg.com",
  },
];

const culture = [
  {
    icon: "🏡",
    title: "Local knowledge",
    body: "Every loan officer on our team lives and works in North Texas. We know the neighborhoods, the market, and the lenders who serve this area best.",
  },
  {
    icon: "📞",
    title: "Direct access",
    body: "You work with one person from application to closing — not a call center. Your loan officer picks up the phone and keeps you in the loop.",
  },
  {
    icon: "🤝",
    title: "No pressure",
    body: "We earn your business by being genuinely helpful. If a loan isn't right for you, we'll tell you. Our goal is a client for life, not just a closed file.",
  },
];

export default function MeetTheTeamPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Meet the Team"
        title={<>Real people.<br /><em>Local experts.</em></>}
        subtitle="Our loan originators are based right here in North Texas. They know the market, the neighborhoods, and they're here to help — not just to close a deal."
      />

      {/* Team grid */}
      <section className="mtt-section">
        <div className="wrap">
          <span className="eyebrow">Our loan officers</span>
          <h2 className="sec-title">Meet the AmeriDream team.</h2>
          <div className="mtt-grid">
            {members.map((m) => (
              <div key={m.siteUrl} className="mtt-card">
                {/* Avatar + name */}
                <div className="mtt-card-top">
                  <div className={`mtt-avatar${m.red ? " red" : ""}`}>
                    {m.initials}
                  </div>
                  <div className="mtt-name">{m.name}</div>
                  <div className="mtt-title">{m.title}</div>
                  <span className="mtt-nmls">{m.nmls}</span>
                </div>

                {/* Specialty + office */}
                <div className="mtt-card-body">
                  <p className="mtt-specialty">{m.specialty}</p>
                  <div className="mtt-office">
                    <span className="mtt-office-dot" />
                    {m.office}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mtt-card-footer">
                  <a
                    href={m.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mtt-btn-site"
                  >
                    View profile ↗
                  </a>
                  <Link href="/contact" className="mtt-btn-contact">
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture strip */}
      <div className="mtt-culture">
        <div className="mtt-culture-inner">
          {culture.map((item) => (
            <div key={item.title} className="mtt-culture-item">
              <div className="mtt-culture-icon">{item.icon}</div>
              <div className="mtt-culture-title">{item.title}</div>
              <p className="mtt-culture-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <PageCtaBanner
        heading="Ready to work with us?"
        body="Start your application online in minutes, or reach out to any loan officer directly. We serve buyers across the entire North Texas area."
        secondaryLabel="Talk to a loan officer"
        secondaryHref="/contact"
      />
    </main>
  );
}
