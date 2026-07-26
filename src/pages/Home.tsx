import { MainLayout } from "@/components/templates/MainLayout";
import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { SkillsSection } from "@/components/organisms/SkillsSection";
import { PortfolioSection } from "@/components/organisms/PortfolioSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import { TestimonialSection } from "@/components/organisms/TestimonialSection";
import { ContactSection } from "@/components/organisms/ContactSection";

export function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialSection />
      <ContactSection />
    </MainLayout>
  );
}
