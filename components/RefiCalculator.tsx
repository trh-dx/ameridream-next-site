"use client";

import { useState } from "react";
import { APPLY_URL } from "@/lib/constants";

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString();
}

export default function RefiCalculator() {
  const [balance,  setBalance]  = useState(280000);
  const [oldRate,  setOldRate]  = useState(7.5);
  const [oldTerm,  setOldTerm]  = useState(30);
  const [newRate,  setNewRate]  = useState(6.5);
  const [newTerm,  setNewTerm]  = useState(30);
  const [closing,  setClosing]  = useState(5000);

  function monthly(loan: number, annualRate: number, termYears: number) {
    const r = annualRate / 100 / 12;
    const n = termYears * 12;
    if (r === 0) return loan / n;
    return loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  }

  const oldPayment = monthly(balance, oldRate, oldTerm);
  const newPayment = monthly(balance, newRate, newTerm);
  const monthlySavings = oldPayment - newPayment;
  const breakEvenMonths = monthlySavings > 0 ? Math.ceil(closing / monthlySavings) : Infinity;
  const breakEvenYears  = breakEvenMonths / 12;
  const lifetimeSavings = monthlySavings > 0
    ? monthlySavings * newTerm * 12 - closing
    : 0;

  const breakEvenLabel = monthlySavings <= 0
    ? "N/A"
    : breakEvenMonths < 12
      ? `${breakEvenMonths} mo`
      : `${breakEvenYears.toFixed(1)} yrs`;

  return (
    <section className="calc-section" id="refinance">
      <div className="wrap">
        <span className="eyebrow">Refinance calculator</span>
        <h2 className="sec-title">Could you save by refinancing?</h2>
        <div className="calc-grid">
          {/* Sliders */}
          <div className="calc-inputs">
            <div className="calc-field">
              <label>Remaining loan balance</label>
              <span className="calc-field-current">{fmt(balance)}</span>
              <input type="range" min={50000} max={1000000} step={5000}
                value={balance} onChange={e => setBalance(+e.target.value)} />
              <div className="calc-field-vals"><span>$50k</span><span>$1M</span></div>
            </div>
            <div className="calc-field">
              <label>Current interest rate</label>
              <span className="calc-field-current">{oldRate.toFixed(1)}%</span>
              <input type="range" min={3} max={12} step={0.1}
                value={oldRate} onChange={e => setOldRate(+e.target.value)} />
              <div className="calc-field-vals"><span>3%</span><span>12%</span></div>
            </div>
            <div className="calc-field">
              <label>New interest rate</label>
              <span className="calc-field-current">{newRate.toFixed(1)}%</span>
              <input type="range" min={3} max={12} step={0.1}
                value={newRate} onChange={e => setNewRate(+e.target.value)} />
              <div className="calc-field-vals"><span>3%</span><span>12%</span></div>
            </div>
            <div className="calc-field">
              <label>Estimated closing costs</label>
              <span className="calc-field-current">{fmt(closing)}</span>
              <input type="range" min={0} max={20000} step={500}
                value={closing} onChange={e => setClosing(+e.target.value)} />
              <div className="calc-field-vals"><span>$0</span><span>$20k</span></div>
            </div>
          </div>

          {/* Results */}
          <div className="calc-result">
            <div className="calc-result-label">Monthly savings</div>
            <div className="calc-result-payment">
              {monthlySavings > 0 ? fmt(monthlySavings) : "$0"}
            </div>
            <div className="calc-result-sub">Per month after refinancing</div>
            <div className="calc-breakdown">
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Current payment</span>
                <span className="calc-breakdown-val">{fmt(oldPayment)}/mo</span>
              </div>
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">New payment</span>
                <span className="calc-breakdown-val">{fmt(newPayment)}/mo</span>
              </div>
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Break-even point</span>
                <span className="calc-breakdown-val">{breakEvenLabel}</span>
              </div>
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Lifetime savings</span>
                <span className="calc-breakdown-val">
                  {lifetimeSavings > 0 ? fmt(lifetimeSavings) : "N/A"}
                </span>
              </div>
            </div>
            <a href={APPLY_URL} className="calc-cta">Start my refi →</a>
            <p className="calc-disclaimer">
              Estimates assume fixed-rate loans on the same balance. Actual savings
              depend on your remaining term, credit, and lender fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
