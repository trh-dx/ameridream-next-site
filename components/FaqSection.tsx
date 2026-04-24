"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "How long does it take to get pre-approved?",
    a: "Most clients receive their pre-approval letter within 24–48 hours of submitting their application. The more complete your application, the faster we can move.",
  },
  {
    q: "What credit score do I need to qualify?",
    a: "It depends on the loan type. FHA loans can qualify with scores as low as 580, while conventional loans typically require 620 or higher. Our team will help you find the best program for your situation.",
  },
  {
    q: "How much do I need for a down payment?",
    a: "VA and USDA loans can require 0% down. FHA loans start at 3.5%, and conventional loans can be as low as 3% for qualified buyers. We'll walk you through what makes sense for your budget.",
  },
  {
    q: "Do you only lend in Texas?",
    a: "We are based in North Texas with offices in The Colony, Decatur, and Bridgeport. Contact us to confirm whether we can serve your specific area.",
  },
  {
    q: "Can I get pre-approved before I find a house?",
    a: "Absolutely — in fact, we recommend it. A pre-approval letter shows sellers you're a serious buyer and gives you a clear budget to shop within.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <span className="eyebrow">Common questions</span>
        <h2 className="sec-title">
          Honest answers to<br />your biggest questions.
        </h2>
        <div className="faq-grid">
          <div>
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`faq-item${openIndex === i ? " open" : ""}`}
                onClick={() => toggle(i)}
              >
                <div className="faq-q">
                  {item.q}
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>

          <div>
            <div className="faq-box">
              <h3>Have a question we didn&apos;t answer?</h3>
              <p>
                Our loan officers are real people based right here in North
                Texas — reach out and you&apos;ll hear back fast.
              </p>
              <div className="faq-contact">
                <div className="faq-icon-box">📞</div>
                <a href="tel:4693624700" className="faq-link">
                  (469) 362-4700
                </a>
              </div>
              <div className="faq-contact">
                <div className="faq-icon-box">📍</div>
                <span>The Colony · Decatur · Bridgeport</span>
              </div>
              <div className="faq-contact" style={{ marginBottom: "24px" }}>
                <div className="faq-icon-box">🕐</div>
                <span>Mon–Fri 9am–5pm · Sat by appt</span>
              </div>
              <Link
                href="/contact"
                className="btn-primary"
                style={{ fontSize: "14px", padding: "12px 22px" }}
              >
                Send us a message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
