"use client";

import { useState } from "react";
import Link from "next/link";
import { APPLY_URL } from "@/lib/constants";

/* ── Filter buttons ── */
const filters = [
  { label: "All loans",        tag: "all"        },
  { label: "First-time buyers",tag: "first-time" },
  { label: "Veterans",         tag: "veteran"    },
  { label: "Rural / USDA",     tag: "rural"      },
  { label: "High-value homes", tag: "jumbo"      },
  { label: "Refinancing",      tag: "refi"       },
];

/* ── Loan data ── */
const loans = [
  {
    tag: "Conventional",
    name: "Conventional Loan",
    panelClass: "panel-blue",
    redChecks: false,
    bestFor: "Buyers with solid credit and stable income looking for the most flexible loan available.",
    tagline: "The most common loan type — flexible, widely available, and great for buyers who have good credit and want competitive rates without government restrictions.",
    stats: [
      { label: "Min. down payment",  value: "3%"           },
      { label: "Min. credit score",  value: "620+"         },
      { label: "Loan limit",         value: "$806,500"     },
      { label: "Mortgage insurance", value: "If <20% down" },
    ],
    features: [
      "Fixed and adjustable rate options",
      "No upfront mortgage insurance premium",
      "PMI drops off once you reach 20% equity",
      "Works for primary, second homes & investment",
      "Competitive rates for strong-credit borrowers",
      "Widely accepted by sellers",
    ],
    actionLabel: "Ask a question",
    tags: ["all", "refi", "first-time"],
  },
  {
    tag: "FHA",
    name: "FHA Loan",
    panelClass: "panel-red",
    redChecks: true,
    bestFor: "First-time buyers or those rebuilding credit who need more flexible qualification requirements.",
    tagline: "Government-backed and designed to help more people qualify — lower credit score thresholds and smaller down payments make this a popular choice for first-time buyers across North Texas.",
    stats: [
      { label: "Min. down payment",  value: "3.5%"     },
      { label: "Min. credit score",  value: "580+"     },
      { label: "Loan limit",         value: "$524,225" },
      { label: "Mortgage insurance", value: "Required" },
    ],
    features: [
      "Lower credit score requirements than conventional",
      "Down payment gifts from family are allowed",
      "Great for buyers with limited savings",
      "Backed by the Federal Housing Administration",
      "Fixed and adjustable rate options",
      "Available in The Colony, Decatur & Bridgeport",
    ],
    actionLabel: "Ask a question",
    tags: ["all", "first-time"],
  },
  {
    tag: "VA",
    name: "VA Loan",
    panelClass: "panel-blue",
    redChecks: false,
    bestFor: "Veterans, active-duty service members, and eligible surviving spouses who deserve the best loan available.",
    tagline: "Exclusively for those who've served — VA loans offer zero down payment, no mortgage insurance, and some of the lowest interest rates available. It's one of the most powerful benefits of military service.",
    stats: [
      { label: "Min. down payment",  value: "0%"      },
      { label: "Min. credit score",  value: "580+"    },
      { label: "Loan limit",         value: "No limit"},
      { label: "Mortgage insurance", value: "None"    },
    ],
    features: [
      "Zero down payment required",
      "No private mortgage insurance (PMI) ever",
      "Rates often lower than conventional loans",
      "No prepayment penalties",
      "Available for purchase, refinance & cash-out",
      "Lifetime benefit — can be used multiple times",
    ],
    actionLabel: "Ask a question",
    tags: ["all", "veteran"],
  },
  {
    tag: "USDA",
    name: "USDA Loan",
    panelClass: "panel-mix",
    redChecks: false,
    bestFor: "Buyers in rural and suburban areas — including many Decatur and Bridgeport communities — who want zero down.",
    tagline: "Zero down payment for eligible buyers in USDA-designated rural and suburban areas. Many North Texas communities around Decatur and Bridgeport qualify — ask us if your area is eligible.",
    stats: [
      { label: "Min. down payment", value: "0%"             },
      { label: "Min. credit score", value: "640+"           },
      { label: "Property location", value: "Rural / suburban"},
      { label: "Income limits",     value: "Apply"          },
    ],
    features: [
      "No down payment required for eligible areas",
      "Lower mortgage insurance costs than FHA",
      "Decatur & Bridgeport areas often qualify",
      "Income limits based on household size",
      "Must be a primary residence",
      "Backed by the U.S. Dept. of Agriculture",
    ],
    actionLabel: "Check eligibility",
    tags: ["all", "rural", "first-time"],
  },
  {
    tag: "Jumbo",
    name: "Jumbo Loan",
    panelClass: "panel-blue",
    redChecks: false,
    bestFor: "Buyers of high-value properties above conventional loan limits who have strong credit and income.",
    tagline: "For properties that exceed conventional conforming limits. Jumbo loans require a stronger financial profile but offer competitive rates and the flexibility to finance luxury or high-value homes.",
    stats: [
      { label: "Min. down payment", value: "10–20%"    },
      { label: "Min. credit score", value: "700+"      },
      { label: "Loan amount",       value: "$806,500+" },
      { label: "Reserves required", value: "Yes"       },
    ],
    features: [
      "Finance luxury or high-cost properties",
      "Fixed and adjustable rate options",
      "Requires strong credit history",
      "Cash reserves typically required at closing",
      "Available for primary and second homes",
      "Competitive rates for qualified borrowers",
    ],
    actionLabel: "Ask a question",
    tags: ["all", "jumbo"],
  },
  {
    tag: "Non-Conforming",
    name: "Non-Conforming Loan",
    panelClass: "panel-red",
    redChecks: true,
    bestFor: "Self-employed buyers, investors, or borrowers with unique income or credit situations who don't fit standard requirements.",
    tagline: "Not everyone fits the standard mold — and that's okay. Non-conforming loans offer flexible underwriting for self-employed borrowers, investors, or those with complex financial situations.",
    stats: [
      { label: "Min. down payment",  value: "Varies"           },
      { label: "Min. credit score",  value: "Varies"           },
      { label: "Income verification",value: "Flexible"         },
      { label: "Best for",           value: "Unique situations"},
    ],
    features: [
      "Bank statement loans for self-employed",
      "Asset-based income qualification",
      "Higher loan amounts beyond jumbo limits",
      "Recent credit events may still qualify",
      "Investment & portfolio loans available",
      "Flexible terms tailored to your situation",
    ],
    actionLabel: "Talk to us first",
    tags: ["all", "refi"],
  },
];

export default function LoanTypesClient() {
  const [activeTag, setActiveTag] = useState("all");

  const visibleLoans = loans.filter((loan) =>
    loan.tags.includes(activeTag)
  );

  return (
    <>
      {/* Filter bar */}
      <div className="filter-bar">
        <div className="filter-inner">
          {filters.map((f) => (
            <button
              key={f.tag}
              className={`filter-btn${activeTag === f.tag ? " active" : ""}`}
              onClick={() => setActiveTag(f.tag)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Loan cards */}
      <div className="loans-section">
        {visibleLoans.map((loan) => (
          <div key={loan.tag} className="loan-row">
            <div className="loan-row-header">
              {/* Left colour panel */}
              <div className={`loan-color-panel ${loan.panelClass}`}>
                <div>
                  <span className="loan-tag">{loan.tag}</span>
                  <div className="loan-name">{loan.name}</div>
                </div>
                <div className="loan-best">
                  <strong>Best for</strong>
                  {loan.bestFor}
                </div>
              </div>

              {/* Right content */}
              <div className="loan-content">
                <p className="loan-tagline">{loan.tagline}</p>

                <div className="loan-stats">
                  {loan.stats.map((s) => (
                    <div key={s.label} className="loan-stat">
                      <span className="loan-stat-label">{s.label}</span>
                      <span className="loan-stat-val">{s.value}</span>
                    </div>
                  ))}
                </div>

                <div className="loan-features">
                  {loan.features.map((f) => (
                    <div
                      key={f}
                      className={`loan-feature${loan.redChecks ? " red-check" : ""}`}
                    >
                      {f}
                    </div>
                  ))}
                </div>

                <div className="loan-actions">
                  <a href={APPLY_URL} className="btn-primary">
                    Apply now
                  </a>
                  <Link href="/contact" className="btn-outline">
                    {loan.actionLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
