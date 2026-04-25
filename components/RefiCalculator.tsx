"use client";

import { useState } from "react";
import { APPLY_URL } from "@/lib/constants";

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString();
}

const SEGMENTS = [
  { key: "newPayment",     label: "New Payment",      color: "#1A5BA6" },
  { key: "savings",        label: "Monthly Savings",  color: "#2EAF8A" },
];

export default function RefiCalculator() {
  const [balance, setBalance] = useState(280000);
  const [oldRate, setOldRate] = useState(7.5);
  const [oldTerm, setOldTerm] = useState(30);
  const [newRate, setNewRate] = useState(6.5);
  const [newTerm, setNewTerm] = useState(30);
  const [closing, setClosing] = useState(5000);

  function monthly(loan: number, annualRate: number, termYears: number) {
    const r = annualRate / 100 / 12;
    const n = termYears * 12;
    if (r === 0) return loan / n;
    return loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  }

  const oldPayment     = monthly(balance, oldRate, oldTerm);
  const newPayment     = monthly(balance, newRate, newTerm);
  const monthlySavings = Math.max(0, oldPayment - newPayment);
  const breakEvenMonths = monthlySavings > 0 ? Math.ceil(closing / monthlySavings) : Infinity;
  const breakEvenLabel  = monthlySavings <= 0
    ? "N/A"
    : breakEvenMonths < 12
      ? `${breakEvenMonths} mo`
      : `${(breakEvenMonths / 12).toFixed(1)} yrs`;
  const lifetimeSavings = monthlySavings > 0
    ? monthlySavings * newTerm * 12 - closing
    : 0;

  // Donut: new payment + savings = old payment
  const total = oldPayment;
  const cx = 100, cy = 100, R = 76, SW = 22;
  const circ = 2 * Math.PI * R;
  const donutSegs = [
    { color: "#1A5BA6", value: newPayment },
    { color: "#2EAF8A", value: monthlySavings },
  ];
  let angle = -90;
  const slices = donutSegs.map((seg, i) => {
    const pct  = total > 0 ? seg.value / total : 0;
    const dash = pct * circ;
    const rot  = angle;
    angle += pct * 360;
    if (dash < 0.5) return null;
    return (
      <circle key={i} cx={cx} cy={cy} r={R} fill="none"
        stroke={seg.color} strokeWidth={SW}
        strokeDasharray={`${dash} ${circ - dash}`}
        transform={`rotate(${rot}, ${cx}, ${cy})`}
      />
    );
  });

  return (
    <section className="calc-section calc-alt" id="refinance">
      <div className="wrap">
        <span className="eyebrow" style={{ fontSize: "22px", fontWeight: "800", letterSpacing: ".02em" }}>Refinance Calculator</span>
        <h2 className="sec-title">Could you save by refinancing?</h2>
        <div className="calc-grid">

          {/* ── Sliders ── */}
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

          {/* ── Results panel ── */}
          <div className="calc-result-panel">

            {/* Line items */}
            <div className="calc-line-items">
              <div className="calc-line-item">
                <div className="calc-line-meta">
                  <span className="calc-line-swatch" style={{ background: "#E07820" }} />
                  <span className="calc-line-label">Current Payment</span>
                </div>
                <div className="calc-line-input calc-line-input--readonly">
                  <span className="calc-line-dollar">$</span>
                  <span className="calc-line-num">{Math.round(oldPayment).toLocaleString()}</span>
                </div>
              </div>
              {SEGMENTS.map(seg => (
                <div key={seg.key} className="calc-line-item">
                  <div className="calc-line-meta">
                    <span className="calc-line-swatch" style={{ background: seg.color }} />
                    <span className="calc-line-label">{seg.label}</span>
                  </div>
                  <div className="calc-line-input calc-line-input--readonly">
                    <span className="calc-line-dollar">$</span>
                    <span className="calc-line-num">
                      {seg.key === "newPayment"
                        ? Math.round(newPayment).toLocaleString()
                        : Math.round(monthlySavings).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
              <div className="calc-line-item">
                <div className="calc-line-meta">
                  <span className="calc-line-swatch" style={{ background: "#152535" }} />
                  <span className="calc-line-label">Break-even Point</span>
                </div>
                <div className="calc-line-input calc-line-input--readonly">
                  <span className="calc-line-num">{breakEvenLabel}</span>
                </div>
              </div>
              <div className="calc-line-item">
                <div className="calc-line-meta">
                  <span className="calc-line-swatch" style={{ background: "#1A4F5C" }} />
                  <span className="calc-line-label">Lifetime Savings</span>
                </div>
                <div className="calc-line-input calc-line-input--readonly">
                  <span className="calc-line-dollar">{lifetimeSavings > 0 ? "$" : ""}</span>
                  <span className="calc-line-num">
                    {lifetimeSavings > 0 ? Math.round(lifetimeSavings).toLocaleString() : "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {/* Donut + CTA */}
            <div className="calc-donut-wrap">
              <svg viewBox="0 0 200 200" className="calc-donut-svg">
                <circle cx={cx} cy={cy} r={R} fill="none" stroke="#E8EFF7" strokeWidth={SW} />
                {slices}
                <text x={cx} y={87}  textAnchor="middle" fontSize="14" fontWeight="600" fill="#2EAF8A">$</text>
                <text x={cx} y={114} textAnchor="middle" fontSize="30" fontWeight="700" fill="#2EAF8A"
                  fontFamily="Georgia, serif">
                  {Math.round(monthlySavings).toLocaleString()}
                </text>
                <text x={cx} y={130} textAnchor="middle" fontSize="9.5" fill="#7A98B8">Monthly</text>
                <text x={cx} y={142} textAnchor="middle" fontSize="9.5" fill="#7A98B8">Savings*</text>
              </svg>
              <a href={APPLY_URL} className="calc-cta">Start my refi →</a>
              <p className="calc-disclaimer">
                *Estimates assume fixed-rate loans on the same balance. Actual savings depend on your remaining term, credit, and lender fees.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
