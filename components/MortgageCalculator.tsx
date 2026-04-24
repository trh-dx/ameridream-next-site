"use client";

import { useState } from "react";
import { APPLY_URL } from "@/lib/constants";

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString();
}

export default function MortgageCalculator() {
  const [price,   setPrice]   = useState(350000);
  const [downPct, setDownPct] = useState(20);
  const [rate,    setRate]    = useState(6.8);
  const [term,    setTerm]    = useState(30);

  const downAmt = price * downPct / 100;
  const loan    = price - downAmt;
  const r       = rate / 100 / 12;
  const n       = term * 12;
  const monthly = r > 0
    ? loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)
    : loan / n;
  const totalPaid = monthly * n;
  const totalInt  = totalPaid - loan;

  return (
    <section className="calc-section" id="calculator">
      <div className="wrap">
        <span className="eyebrow">Mortgage calculator</span>
        <h2 className="sec-title">Estimate your monthly payment.</h2>
        <div className="calc-grid">
          {/* Sliders */}
          <div className="calc-inputs">
            <div className="calc-field">
              <label>Home price</label>
              <span className="calc-field-current">{fmt(price)}</span>
              <input type="range" min={50000} max={1500000} step={5000}
                value={price} onChange={e => setPrice(+e.target.value)} />
              <div className="calc-field-vals"><span>$50k</span><span>$1.5M</span></div>
            </div>
            <div className="calc-field">
              <label>Down payment</label>
              <span className="calc-field-current">{fmt(downAmt)} ({downPct}%)</span>
              <input type="range" min={3} max={40} step={1}
                value={downPct} onChange={e => setDownPct(+e.target.value)} />
              <div className="calc-field-vals"><span>3%</span><span>40%</span></div>
            </div>
            <div className="calc-field">
              <label>Interest rate</label>
              <span className="calc-field-current">{rate.toFixed(1)}%</span>
              <input type="range" min={3} max={12} step={0.1}
                value={rate} onChange={e => setRate(+e.target.value)} />
              <div className="calc-field-vals"><span>3%</span><span>12%</span></div>
            </div>
            <div className="calc-field">
              <label>Loan term</label>
              <span className="calc-field-current">{term} years</span>
              <input type="range" min={10} max={30} step={5}
                value={term} onChange={e => setTerm(+e.target.value)} />
              <div className="calc-field-vals"><span>10 yrs</span><span>30 yrs</span></div>
            </div>
          </div>

          {/* Results */}
          <div className="calc-result">
            <div className="calc-result-label">Estimated monthly payment</div>
            <div className="calc-result-payment">{fmt(monthly)}</div>
            <div className="calc-result-sub">Principal &amp; interest only</div>
            <div className="calc-breakdown">
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Loan amount</span>
                <span className="calc-breakdown-val">{fmt(loan)}</span>
              </div>
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Down payment</span>
                <span className="calc-breakdown-val">{fmt(downAmt)}</span>
              </div>
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Total interest paid</span>
                <span className="calc-breakdown-val">{fmt(totalInt)}</span>
              </div>
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Total cost</span>
                <span className="calc-breakdown-val">{fmt(totalPaid + downAmt)}</span>
              </div>
            </div>
            <a href={APPLY_URL} className="calc-cta">Get an exact rate quote →</a>
            <p className="calc-disclaimer">
              This is an estimate for illustration purposes only. Actual payments will vary
              based on credit score, loan type, taxes, insurance, and other factors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
