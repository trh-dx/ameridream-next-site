import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PurchaseCalculator from "@/components/PurchaseCalculator";
import AffordabilityCalculator from "@/components/AffordabilityCalculator";
import RefiCalculator from "@/components/RefiCalculator";
import PageCtaBanner from "@/components/PageCtaBanner";

export const metadata: Metadata = {
  title: "Mortgage Calculators | AmeriDream Mortgage Group",
  description:
    "Free mortgage calculators for home purchase, affordability, and refinancing. Estimate your monthly payment, how much home you can afford, and whether refinancing makes sense.",
};

export default function CalculatorsPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Calculators"
        title={<>Run the numbers<br /><em>before you commit.</em></>}
        subtitle="Free, instant estimates for purchase, affordability, and refinancing — no sign-up required."
      />

      {/* Jump links */}
      <div className="lc-jump-bar">
        <div className="lc-jump-inner">
          {[
            ["#purchase-calculator",      "Purchase Calculator"],
            ["#affordability-calculator", "Affordability Calculator"],
            ["#refinance-calculator",     "Refinance Calculator"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{ whiteSpace: "nowrap", fontSize: 14, fontWeight: 500, color: "var(--blue)", textDecoration: "none" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <PurchaseCalculator />
      <AffordabilityCalculator />
      <RefiCalculator />

      <PageCtaBanner
        variant="light"
        heading="Ready to see your real numbers?"
        body="Our loan officers can give you an exact rate quote and walk you through every line of your estimate — no pressure, no obligation."
        secondaryLabel="Talk to a loan officer"
      />
    </main>
  );
}
