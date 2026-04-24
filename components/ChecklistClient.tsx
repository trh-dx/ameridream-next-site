"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { APPLY_URL } from "@/lib/constants";

const STORAGE_KEY = "ameridream-checklist";

const categories = [
  {
    icon: "📊",
    title: "1. Check Your Credit",
    items: [
      { id: "cr1", label: "Pull your free credit report", tip: "Visit AnnualCreditReport.com — you're entitled to one free report per bureau per year." },
      { id: "cr2", label: "Dispute any errors on your report", tip: "Errors affect ~20% of reports. Disputing them can raise your score quickly." },
      { id: "cr3", label: "Pay down credit card balances below 30% utilization", tip: "High utilization is the #2 factor hurting most credit scores." },
      { id: "cr4", label: "Avoid opening new credit accounts", tip: "New inquiries and accounts can temporarily lower your score." },
    ],
  },
  {
    icon: "💰",
    title: "2. Save & Budget",
    items: [
      { id: "sa1", label: "Calculate your target purchase price", tip: "Aim for a home where the payment is ≤28% of your gross monthly income." },
      { id: "sa2", label: "Save for a down payment (3–20%)", tip: "Less than 20% means mortgage insurance — factor that into your budget." },
      { id: "sa3", label: "Set aside 2–5% for closing costs", tip: "These are separate from your down payment and often catch first-time buyers off guard." },
      { id: "sa4", label: "Build a post-move emergency fund", tip: "Aim for 3–6 months of expenses — homes always have unexpected costs." },
    ],
  },
  {
    icon: "🏦",
    title: "3. Get Pre-Approved",
    items: [
      { id: "pa1", label: "Gather documents: pay stubs, W-2s, tax returns (2 yrs)", tip: "Lenders need 2 years of income history. Self-employed? Bring 2 years of tax returns." },
      { id: "pa2", label: "Collect bank statements (last 2–3 months)", tip: "All accounts: checking, savings, investments." },
      { id: "pa3", label: "Get a pre-approval letter from AmeriDream", tip: "A pre-approval (not just pre-qualification) carries weight with sellers." },
      { id: "pa4", label: "Understand your loan options", tip: "Conventional, FHA, VA, USDA — each has different requirements. Your loan officer will help." },
    ],
  },
  {
    icon: "🔍",
    title: "4. Search for a Home",
    items: [
      { id: "sh1", label: "Choose your target neighborhoods", tip: "Consider commute, schools, flood zones, and future development plans." },
      { id: "sh2", label: "Work with a real estate agent", tip: "The seller pays the buyer's agent commission — this service is free to you." },
      { id: "sh3", label: "Attend open houses and schedule tours", tip: "Visit at least 5–10 homes before making an offer to calibrate your expectations." },
      { id: "sh4", label: "Review comparable sales (comps) before offering", tip: "Your agent can pull recent sold prices to help you make a competitive offer." },
    ],
  },
  {
    icon: "📝",
    title: "5. Make an Offer",
    items: [
      { id: "of1", label: "Submit a written offer with your pre-approval letter", tip: "Including pre-approval makes your offer more credible to the seller." },
      { id: "of2", label: "Negotiate price, closing date, and concessions", tip: "Seller credits toward closing costs can reduce your out-of-pocket at signing." },
      { id: "of3", label: "Review the purchase agreement carefully", tip: "Your agent and loan officer should both review this before you sign." },
    ],
  },
  {
    icon: "🏠",
    title: "6. Under Contract",
    items: [
      { id: "uc1", label: "Schedule a home inspection within the option period", tip: "Never skip this — even new builds have issues. Budget $300–600." },
      { id: "uc2", label: "Review inspection report and negotiate repairs", tip: "You can request repairs, a price reduction, or a seller credit." },
      { id: "uc3", label: "Order an appraisal (your lender will arrange this)", tip: "The home must appraise at or above the purchase price for the loan to proceed." },
      { id: "uc4", label: "Finalize your loan with your loan officer", tip: "Respond quickly to any lender requests — delays here can jeopardize your closing date." },
      { id: "uc5", label: "Purchase homeowner's insurance", tip: "Your lender requires this. Shop 2–3 quotes — rates vary significantly." },
    ],
  },
  {
    icon: "🔑",
    title: "7. Close on Your Home",
    items: [
      { id: "cl1", label: "Do a final walk-through 24 hours before closing", tip: "Verify all agreed repairs were done and the home is in the expected condition." },
      { id: "cl2", label: "Review your Closing Disclosure (CD) 3 days before closing", tip: "Compare to your Loan Estimate — flag any unexpected fees immediately." },
      { id: "cl3", label: "Wire closing funds or bring a cashier's check", tip: "Personal checks are rarely accepted at closing. Confirm the wire instructions directly with your title company — wire fraud is common." },
      { id: "cl4", label: "Sign all closing documents", tip: "Bring a valid government-issued photo ID." },
      { id: "cl5", label: "Get your keys — you're a homeowner!", tip: "Congratulations! Make sure you get all keys, garage openers, and security codes." },
    ],
  },
];

const allItemIds = categories.flatMap(c => c.items.map(i => i.id));
const totalItems = allItemIds.length;

export default function ChecklistClient() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(new Set(JSON.parse(saved)));
    } catch {}
    setLoaded(true);
  }, []);

  // Persist to localStorage on every change
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
    } catch {}
  }, [checked, loaded]);

  function toggle(id: string) {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function reset() {
    setChecked(new Set());
  }

  const doneCount  = checked.size;
  const pct        = Math.round((doneCount / totalItems) * 100);

  return (
    <section className="cl-section">
      <div className="cl-layout">
        {/* Main checklist */}
        <div className="cl-main">
          {/* Progress */}
          <div>
            <div className="cl-progress-bar">
              <div className="cl-progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <p className="cl-progress-label">
              {doneCount} of {totalItems} steps completed ({pct}%)
              {pct === 100 && " 🎉 You're ready to close!"}
            </p>
          </div>

          {/* Category groups */}
          {categories.map((cat) => {
            const catDone = cat.items.filter(i => checked.has(i.id)).length;
            const allDone = catDone === cat.items.length;
            return (
              <div key={cat.title} className={`cl-group${allDone ? " done" : ""}`}>
                <div className="cl-group-header">
                  <span style={{ fontSize: 20 }}>{cat.icon}</span>
                  <span className="cl-group-title">{cat.title}</span>
                  <span className="cl-group-badge">{catDone}/{cat.items.length}</span>
                </div>
                {cat.items.map((item) => (
                  <div
                    key={item.id}
                    className={`cl-item${checked.has(item.id) ? " checked" : ""}`}
                    onClick={() => toggle(item.id)}
                  >
                    <div className="cl-checkbox">
                      {checked.has(item.id) && <span className="cl-check-icon">✓</span>}
                    </div>
                    <div className="cl-item-text">
                      <div className="cl-item-label">{item.label}</div>
                      <div className="cl-item-tip">{item.tip}</div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Sidebar */}
        <aside className="cl-sidebar">
          <div className="cl-sidebar-card">
            <h3>Your progress</h3>
            <div className="cl-progress-bar">
              <div className="cl-progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <p className="cl-progress-label" style={{ marginBottom: 16 }}>
              {doneCount} / {totalItems} complete
            </p>
            <p>Your progress is saved automatically in your browser — pick up right where you left off.</p>
            <button className="cl-reset-btn" onClick={reset}>Reset checklist</button>
          </div>

          <div className="cl-sidebar-card">
            <h3>Ready to start?</h3>
            <p>
              Get pre-approved in minutes. Our loan officers in The Colony, Decatur, and
              Bridgeport are ready to guide you through every step.
            </p>
            <a href={APPLY_URL} className="btn-primary" style={{ display: "block", textAlign: "center" }}>
              Get pre-approved
            </a>
          </div>

          <div className="cl-sidebar-card">
            <h3>Have questions?</h3>
            <p>Talk to a loan officer — no pressure, plain English, and most questions answered in one call.</p>
            <Link href="/contact" className="btn-outline" style={{ display: "block", textAlign: "center" }}>
              Contact us
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
