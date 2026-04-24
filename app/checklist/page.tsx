import type { Metadata } from "next";
import PageHero       from "@/components/PageHero";
import ChecklistClient from "@/components/ChecklistClient";
import PageCtaBanner  from "@/components/PageCtaBanner";

export const metadata: Metadata = {
  title: "Home Buying Checklist | AmeriDream Mortgage Group",
  description:
    "A step-by-step home buying checklist — from credit check to closing day. Track your progress and get pre-approved with AmeriDream Mortgage Group.",
};

export default function ChecklistPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Checklist"
        title={<>Your step-by-step<br /><em>home buying checklist.</em></>}
        subtitle="29 steps from credit check to closing day. Check off each item as you go — your progress saves automatically in your browser."
      />

      <ChecklistClient />

      <PageCtaBanner
        variant="blue"
        heading="Ready to take the next step?"
        body="Get pre-approved today and let our loan officers guide you through every item on this list — in plain English, with no pressure."
        secondaryLabel="Talk to a loan officer"
      />
    </main>
  );
}
