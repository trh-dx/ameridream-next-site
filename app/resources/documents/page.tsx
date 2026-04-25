import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCtaBanner from "@/components/PageCtaBanner";

export const metadata: Metadata = {
  title: "Helpful Downloads | AmeriDream Mortgage Group",
  description:
    "Download helpful AmeriDream mortgage resources to prepare for your loan process, gather documents, and understand important do's and don'ts before closing.",
};

const documents = [
  {
    icon: "📄",
    type: "PDF",
    typeColor: "#C0272D",
    title: "Loan Process Do's & Don'ts",
    description:
      "A helpful guide covering what to do — and what to avoid — during the mortgage process so your loan can move smoothly toward closing.",
    href: "/documents/loan-process-dos-and-donts.pdf",
    btnLabel: "Download PDF",
  },
  {
    icon: "📋",
    type: "DOCX",
    typeColor: "#1B3A6B",
    title: "AmeriDream Document Checklist",
    description:
      "A checklist of common documents borrowers may need when applying for a mortgage or preparing for pre-approval.",
    href: "/documents/ameridream-document-checklist.docx",
    btnLabel: "Download DOCX",
  },
  {
    icon: "🏠",
    type: "PDF",
    typeColor: "#C0272D",
    title: "Your Home Loan Toolkit",
    description:
      "A step-by-step guide from the CFPB to help homebuyers understand the loan process, shop for the best mortgage, and make informed decisions.",
    href: "/documents/your-home-loan-toolkit.pdf",
    btnLabel: "Download PDF",
  },
  {
    icon: "📈",
    type: "PDF",
    typeColor: "#C0272D",
    title: "Consumer Handbook on Adjustable-Rate Mortgages",
    description:
      "A federal publication explaining how adjustable-rate mortgages work, how rates can change over time, and what to consider before choosing an ARM.",
    href: "/documents/consumer-handbook-adjustable-rate.pdf",
    btnLabel: "Download PDF",
  },
];

export default function HelpfulDownloadsPage() {
  return (
    <main>
      <PageHero
        compact
        breadcrumb="Helpful Downloads"
        title={<>Resources to help you<br /><em>prepare with confidence.</em></>}
        subtitle="Download helpful AmeriDream mortgage resources to prepare for your loan process, gather documents, and understand important do's and don'ts before closing."
      />

      <section className="downloads-section">
        <div className="wrap">
          <div className="downloads-grid">
            {documents.map((doc) => (
              <div key={doc.title} className="download-card">
                <div className="download-card-top">
                  <span className="download-icon">{doc.icon}</span>
                  <span className="download-type" style={{ background: doc.typeColor }}>
                    {doc.type}
                  </span>
                </div>
                <h3 className="download-title">{doc.title}</h3>
                <p className="download-desc">{doc.description}</p>
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary download-btn"
                >
                  {doc.btnLabel} ↓
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCtaBanner
        variant="light"
        heading="Have questions about your documents?"
        body="Our loan officers are happy to walk you through exactly what you'll need. No pressure — just straightforward answers."
        secondaryLabel="Talk to a loan officer"
      />
    </main>
  );
}
