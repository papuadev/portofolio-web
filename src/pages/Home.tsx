import { Suspense, lazy } from "react";
import { MainLayout } from "@/components/templates/MainLayout";
import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutSection } from "@/components/organisms/AboutSection";

const SkillsSection = lazy(() => import("@/components/organisms/SkillsSection").then(module => ({ default: module.SkillsSection })));
const PortfolioSection = lazy(() => import("@/components/organisms/PortfolioSection").then(module => ({ default: module.PortfolioSection })));
const ExperienceSection = lazy(() => import("@/components/organisms/ExperienceSection").then(module => ({ default: module.ExperienceSection })));
const TestimonialSection = lazy(() => import("@/components/organisms/TestimonialSection").then(module => ({ default: module.TestimonialSection })));
const ContactSection = lazy(() => import("@/components/organisms/ContactSection").then(module => ({ default: module.ContactSection })));

export function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<div className="h-20 w-full" />}>
        <SkillsSection />
        <PortfolioSection />
        <ExperienceSection />
        <TestimonialSection />
        <ContactSection />
      </Suspense>
    </MainLayout>
  );
}
