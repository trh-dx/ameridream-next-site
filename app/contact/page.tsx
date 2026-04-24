import type { Metadata } from "next";
import PageHero     from "@/components/PageHero";
import ContactForm  from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | AmeriDream Mortgage Group",
  description:
    "Reach AmeriDream Mortgage Group at any of our three North Texas offices — The Colony, Decatur, or Bridgeport. Call, email, or send us a message.",
};

const offices = [
  {
    badge: "Main office",
    name: "The Colony",
    address: "3700 Standridge Dr, Ste 101\nThe Colony, TX 75056",
    phone: "(469) 362-4700",
    tel: "4693624700",
    mapUrl: "https://maps.google.com/?q=3700+Standridge+Dr+Ste+101+The+Colony+TX+75056",
  },
  {
    badge: "NMLS #1652928",
    name: "Decatur",
    address: "207 W Main Street\nDecatur, TX 76234",
    phone: "(940) 627-2034",
    tel: "9406272034",
    mapUrl: "https://maps.google.com/?q=207+W+Main+Street+Decatur+TX+76234",
  },
  {
    badge: "NMLS #2286544",
    name: "Bridgeport",
    address: "1005 Stevens St\nBridgeport, TX 76426",
    phone: "(940) 644-0024",
    tel: "9406440024",
    mapUrl: "https://maps.google.com/?q=1005+Stevens+St+Bridgeport+TX+76426",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Contact"
        title={<>Let&apos;s talk about<br /><em>your next home.</em></>}
        subtitle="Call us, stop by any of our three offices, or send a message below. We typically respond within one business day."
      />

      <section className="contact-section">
        <div className="contact-layout">

          {/* Contact form */}
          <div className="contact-form-card">
            <h2>Send us a message</h2>
            <p className="contact-sub">
              Not ready to call? Fill out the form and a loan officer will follow up — no
              obligation, no sales pressure.
            </p>
            <ContactForm />
          </div>

          {/* Office cards */}
          <aside className="contact-sidebar">
            {offices.map((office) => (
              <div key={office.name} className="office-card">
                <div className="office-card-header">
                  <span className="office-badge">{office.badge}</span>
                </div>
                <h3>{office.name}</h3>

                <div className="office-detail">
                  <span className="office-detail-icon">📍</span>
                  <span>
                    {office.address.split("\n").map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}
                    {" "}<a href={office.mapUrl} target="_blank" rel="noopener noreferrer">
                      Get directions ↗
                    </a>
                  </span>
                </div>

                <div className="office-detail">
                  <span className="office-detail-icon">📞</span>
                  <a href={`tel:${office.tel}`}>{office.phone}</a>
                </div>

                <div className="office-hours">
                  <strong>Mon – Fri</strong> · 9:00 am – 5:00 pm<br />
                  <strong>Sat – Sun</strong> · By appointment
                </div>
              </div>
            ))}

            {/* NMLS info card */}
            <div className="office-card" style={{ background: "var(--blue-pale)" }}>
              <div className="office-detail" style={{ marginBottom: 0 }}>
                <span className="office-detail-icon">🏦</span>
                <span style={{ fontSize: 12, color: "var(--text-mid)", lineHeight: 1.6 }}>
                  AmeriDream Mortgage Group, LLC · NMLS #275209 · Equal Housing Lender.{" "}
                  <a
                    href="https://www.nmlsconsumeraccess.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NMLS Consumer Access ↗
                  </a>
                </span>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}
