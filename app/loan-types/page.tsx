import type { Metadata } from "next";
import PageHero        from "@/components/PageHero";
import LoanTypesClient from "@/components/LoanTypesClient";
import PageCtaBanner   from "@/components/PageCtaBanner";

export const metadata: Metadata = {
  title: "Loan Types | AmeriDream Mortgage Group",
  description:
    "Compare Conventional, FHA, VA, USDA, Jumbo, and Non-Conforming loans. Find the right mortgage for your situation with AmeriDream.",
};

const tableRows = [
  { label: "Min. down payment",  cols: ["3%",                 "3.5%",         { text:"0%",          hl:"blue" }, { text:"0%", hl:"blue" }, "10%+"]          },
  { label: "Min. credit score",  cols: ["620",                "580",          "580",                  "640",                   "700"]                       },
  { label: "Mortgage insurance", cols: ["If <20% down",       "Always",       { text:"None",        hl:"blue" }, "Low fee",               "Varies"]        },
  { label: "Who qualifies",      cols: ["Most buyers",        "Most buyers",  { text:"Veterans only",hl:"red"  }, "Rural/suburban",        "High earners"]  },
  { label: "Loan limit",         cols: ["$806,500",           "$524,225",     { text:"No limit",    hl:"blue" }, "Area-based",            "$806,500+"]      },
  { label: "Best for",           cols: ["Strong credit buyers","First-time buyers","Veterans & service members","Rural/suburban buyers","Luxury properties"]},
];

type Cell = string | { text: string; hl: "blue" | "red" };

function renderCell(cell: Cell) {
  if (typeof cell === "string") return cell;
  return (
    <span className={cell.hl === "blue" ? "td-hl" : "td-hl-red"}>
      {cell.text}
    </span>
  );
}

export default function LoanTypesPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Loan Types"
        title={<>Find the loan that&apos;s<br /><em>right for you.</em></>}
        subtitle="We work with a wide range of loan programs to match you with the best fit — whether you're a first-time buyer, veteran, or seasoned investor."
      />

      {/* Filter bar + loan cards (client component) */}
      <LoanTypesClient />

      {/* Comparison table */}
      <section className="compare-section">
        <div className="compare-inner">
          <span className="eyebrow">Side by side</span>
          <h2 className="sec-title">Quick comparison</h2>
          <table className="compare-table">
            <thead>
              <tr>
                <th></th>
                <th>Conventional</th>
                <th>FHA</th>
                <th>VA</th>
                <th>USDA</th>
                <th>Jumbo</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  {row.cols.map((cell, i) => (
                    <td key={i}>{renderCell(cell as Cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <PageCtaBanner
        heading="Not sure which loan is right for you?"
        body="Our loan officers will walk you through every option in plain English — no jargon, no pressure. Most clients have a clear path forward after one conversation."
        secondaryLabel="Talk to a loan officer"
      />
    </main>
  );
}
