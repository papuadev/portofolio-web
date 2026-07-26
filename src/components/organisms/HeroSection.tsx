import { Button } from "@/components/ui/button";
import { heroData } from "@/data/data";

import { FadeIn } from "../atoms/FadeIn";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
          <FadeIn className="flex-1 text-center md:text-left space-y-6" direction="right">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">{heroData.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              {heroData.jobTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto md:mx-0">
              {heroData.greeting}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <a href="#portfolio">{heroData.ctaText}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </FadeIn>
          <FadeIn className="flex-1 flex justify-center md:justify-end" direction="left" delay={200}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              {/* Added a solid background color as a fallback while the image loads */}
              <div className="absolute inset-0 bg-muted"></div>
              <img
                src={heroData.avatarUrl}
                alt={heroData.name}
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
