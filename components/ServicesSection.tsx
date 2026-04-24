import { APPLY_URL } from "@/lib/constants";

const services = [
  {
    icon: "🏠",
    iconColor: "i-blue",
    title: "Buy a home",
    description:
      "Whether it's your first home or your fifth, we'll match you with the right loan and walk you through every step — from offer to closing. Offering great rates and exceptional service every step of the way.",
    linkText: "Get pre-approved",
  },
  {
    icon: "🔄",
    iconColor: "i-red",
    title: "Refinance",
    description:
      "Lower your monthly payment, shorten your term, or tap into your home's equity. Let's find out what you could be saving.",
    linkText: "Check my savings",
  },
  {
    icon: "🏗️",
    iconColor: "i-mix",
    title: "New construction",
    description:
      "Building your dream home? We offer construction-to-permanent financing so you have one seamless loan from groundbreak to move-in.",
    linkText: "Get started",
  },
];

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <span className="eyebrow">What we do</span>
        <h2 className="sec-title">
          Whether you&apos;re buying, building,<br />
          or refinancing — we&apos;ve got you.
        </h2>
        <p className="sec-sub">
          AmeriDream guides North Texas families through every type of home
          loan, from first-time purchases to investment properties.
        </p>
        <div className="svc-grid">
          {services.map((svc) => (
            <div key={svc.title} className="svc-card">
              <div className={`svc-icon ${svc.iconColor}`}>{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <a href={APPLY_URL} className="svc-link">
                {svc.linkText} <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
