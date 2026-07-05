import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { StrengthsSection } from "@/components/strengths-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { CasesSection } from "@/components/cases-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TargetSolutions } from "@/components/target-solutions"
import { FaqSection } from "@/components/faq-section"
import { RecruitSection } from "@/components/recruit-section"
import { ProfileSection } from "@/components/profile-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { FloatingCta } from "@/components/floating-cta"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <StrengthsSection />
        <ServicesSection />
        <PricingSection />
        <CasesSection />
        <TestimonialsSection />
        <TargetSolutions />
        <FaqSection />
        <RecruitSection />
        <ProfileSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingCta />
    </div>
  )
}
