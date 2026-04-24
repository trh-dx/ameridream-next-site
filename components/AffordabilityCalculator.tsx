"use client";

import { useState } from "react";
import { APPLY_URL } from "@/lib/constants";

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString();
}

export default function AffordabilityCalculator() {
  const [income,  setIncome]  = useState(80000);
  const [debt,    setDebt]    = useState(500);
  const [saved,   setSaved]   = useState(30000);
  const [rate,    setRate]    = useState(6.8);

  // 28% front-end DTI: max monthly housing payment
  const maxHousing = (income / 12) * 0.28;
  // Back-end: max total debt 43%, subtract existing monthly debt
  const maxBack    = (income / 12) * 0.43 - debt;
  const maxPayment = Math.max(0, Math.min(maxHousing, maxBack));

  // Reverse the mortgage formula to get max loan from max payment
  const r = rate / 100 / 12;
  const n = 30 * 12;
  const maxLoan = r > 0
    ? maxPayment * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n))
    : maxPayment * n;

  const maxPrice = maxLoan + saved;
  const downPct  = maxPrice > 0 ? Math.round((saved / maxPrice) * 100) : 0;

  return (
    <section className="calc-section" style={{ background: "var(--off-white)" }} id="affordability">
      <div className="wrap">
        <span className="eyebrow">Affordability calculator</span>
        <h2 className="sec-title">How much home can you afford?</h2>
        <div className="calc-grid">
          {/* Sliders */}
          <div className="calc-inputs">
            <div className="calc-field">
              <label>Annual household income</label>
              <span className="calc-field-current">{fmt(income)}</span>
              <input type="range" min={30000} max={500000} step={5000}
                value={income} onChange={e => setIncome(+e.target.value)} />
              <div className="calc-field-vals"><span>$30k</span><span>$500k</span></div>
            </div>
            <div className="calc-field">
              <label>Monthly debt payments</label>
              <span className="calc-field-current">{fmt(debt)}/mo</span>
              <input type="range" min={0} max={5000} step={50}
                value={debt} onChange={e => setDebt(+e.target.value)} />
              <div className="calc-field-vals"><span>$0</span><span>$5,000</span></div>
            </div>
            <div className="calc-field">
              <label>Down payment saved</label>
              <span className="calc-field-current">{fmt(saved)}</span>
              <input type="range" min={0} max={200000} step={1000}
                value={saved} onChange={e => setSaved(+e.target.value)} />
              <div className="calc-field-vals"><span>$0</span><span>$200k</span></div>
            </div>
            <div className="calc-field">
              <label>Interest rate</label>
              <span className="calc-field-current">{rate.toFixed(1)}%</span>
              <input type="range" min={3} max={12} step={0.1}
                value={rate} onChange={e => setRate(+e.target.value)} />
              <div className="calc-field-vals"><span>3%</span><span>12%</span></div>
            </div>
          </div>

          {/* Results */}
          <div className="calc-result">
            <div className="calc-result-label">Estimated home price</div>
            <div className="calc-result-payment">{fmt(maxPrice)}</div>
            <div className="calc-result-sub">Based on 28% front-end DTI</div>
            <div className="calc-breakdown">
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Max loan amount</span>
                <span className="calc-breakdown-val">{fmt(maxLoan)}</span>
              </div>
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Down payment</span>
                <span className="calc-breakdown-val">{fmt(saved)} ({downPct}%)</span>
              </div>
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Max monthly payment</span>
                <span className="calc-breakdown-val">{fmt(maxPayment)}/mo</span>
              </div>
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Existing monthly debt</span>
                <span className="calc-breakdown-val">{fmt(debt)}/mo</span>
              </div>
            </div>
            <a href={APPLY_URL} className="calc-cta">See what you qualify for →</a>
            <p className="calc-disclaimer">
              Estimate based on standard debt-to-income guidelines. Actual qualification
              depends on credit score, loan type, and lender criteria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
