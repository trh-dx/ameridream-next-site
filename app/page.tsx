import HeroSection    from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LoanPrograms    from "@/components/LoanPrograms";
import ProcessSection  from "@/components/ProcessSection";
import ReviewsSection  from "@/components/ReviewsSection";
import TeamSection     from "@/components/TeamSection";
import FaqSection      from "@/components/FaqSection";
import CtaBanner       from "@/components/CtaBanner";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <LoanPrograms />
      <ProcessSection />
      <ReviewsSection />
      <TeamSection />
      <FaqSection />
      <CtaBanner />
    </main>
  );
}
