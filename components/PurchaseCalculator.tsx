"use client";

import { useState } from "react";
import { APPLY_URL } from "@/lib/constants";

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString();
}

const PI_COLOR = "#E07820";

const SEGMENTS = [
  { key: "ins" as const, label: "Homeowner's Insurance",      color: "#1A4F5C" },
  { key: "tax" as const, label: "Property Tax",               color: "#2EAF8A" },
  { key: "hoa" as const, label: "HOA Fees",                   color: "#152535" },
  { key: "pmi" as const, label: "Private Mortgage Insurance", color: "#B0B8C1" },
];

type Extras = { ins: string; tax: string; hoa: string; pmi: string };

export default function PurchaseCalculator() {
  const [price,   setPrice]   = useState(350000);
  const [downPct, setDownPct] = useState(20);
  const [rate,    setRate]    = useState(6.8);
  const [term,    setTerm]    = useState(30);
  const [extras,  setExtras]  = useState<Extras>({ ins: "100", tax: "120", hoa: "0", pmi: "0" });

  const toNum = (v: string) => Math.max(0, Number(v) || 0);

  const downAmt = price * downPct / 100;
  const loan    = price - downAmt;
  const r       = rate / 100 / 12;
  const n       = term * 12;
  const pi      = r > 0
    ? loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)
    : loan / n;
  const total   = pi + toNum(extras.ins) + toNum(extras.tax) + toNum(extras.hoa) + toNum(extras.pmi);

  // SVG donut segments
  const cx = 100, cy = 100, R = 76, SW = 22;
  const circ = 2 * Math.PI * R;
  const allSegs = [
    { color: PI_COLOR, value: pi },
    ...SEGMENTS.map(s => ({ color: s.color, value: toNum(extras[s.key]) })),
  ];
  let angle = -90;
  const slices = allSegs.map((seg, i) => {
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
    <section className="calc-section" id="purchase-calculator">
      <div className="wrap">
        <span className="eyebrow" style={{ fontSize: "22px", fontWeight: "800", letterSpacing: ".02em" }}>Purchase Calculator</span>
        <h2 className="sec-title">Estimate your monthly payment.</h2>
        <div className="calc-grid">

          {/* ── Sliders ── */}
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

          {/* ── Results panel ── */}
          <div className="calc-result-panel">

            {/* Line items */}
            <div className="calc-line-items">
              <div className="calc-line-item">
                <div className="calc-line-meta">
                  <span className="calc-line-swatch" style={{ background: PI_COLOR }} />
                  <span className="calc-line-label">Principal &amp; Interest</span>
                </div>
                <div className="calc-line-input calc-line-input--readonly">
                  <span className="calc-line-dollar">$</span>
                  <span className="calc-line-num">{Math.round(pi).toLocaleString()}</span>
                </div>
              </div>
              {SEGMENTS.map(seg => (
                <div key={seg.key} className="calc-line-item">
                  <div className="calc-line-meta">
                    <span className="calc-line-swatch" style={{ background: seg.color }} />
                    <span className="calc-line-label">{seg.label}</span>
                  </div>
                  <div className="calc-line-input">
                    <span className="calc-line-dollar">$</span>
                    <input
                      type="number" min={0}
                      value={extras[seg.key]}
                      onFocus={e => e.target.select()}
                      onChange={e => setExtras(prev => ({
                        ...prev,
                        [seg.key]: e.target.value,
                      }))}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Donut + CTA */}
            <div className="calc-donut-wrap">
              <svg viewBox="0 0 200 200" className="calc-donut-svg">
                <circle cx={cx} cy={cy} r={R} fill="none" stroke="#E8EFF7" strokeWidth={SW} />
                {slices}
                <text x={cx} y={87}  textAnchor="middle" fontSize="14" fontWeight="600" fill={PI_COLOR}>$</text>
                <text x={cx} y={114} textAnchor="middle" fontSize="30" fontWeight="700" fill={PI_COLOR}
                  fontFamily="Georgia, serif">
                  {Math.round(total).toLocaleString()}
                </text>
                <text x={cx} y={130} textAnchor="middle" fontSize="9.5" fill="#7A98B8">Estimated</text>
                <text x={cx} y={142} textAnchor="middle" fontSize="9.5" fill="#7A98B8">Monthly</text>
                <text x={cx} y={154} textAnchor="middle" fontSize="9.5" fill="#7A98B8">Payment*</text>
              </svg>
              <a href={APPLY_URL} className="calc-cta">Get an exact rate quote →</a>
              <p className="calc-disclaimer">
                *Estimate only. Actual payments vary based on credit score, loan type, and other factors.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
