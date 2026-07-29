import { Button } from "@/components/ui/button";
import { heroData } from "@/data/data";


import { CodingBackground } from "../atoms/CodingBackground";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 md:py-24 overflow-hidden relative">
      <CodingBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
          <div className="flex-1 text-center md:text-left space-y-6 animate-in fade-in slide-in-from-left-8 duration-700 ease-out fill-mode-both">
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
          </div>
          <div className="flex-1 flex justify-center md:justify-end relative animate-in fade-in slide-in-from-right-8 duration-700 ease-out fill-mode-both delay-200">
            {/* Radial Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-primary/30 dark:bg-primary/20 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              {/* Added a solid background color as a fallback while the image loads */}
              <div className="absolute inset-0 bg-muted"></div>
              <picture className="w-full h-full object-cover relative z-10 block">
                <source media="(max-width: 767px)" srcSet="/img/avatar-mobile.webp" />
                <img
                  src={heroData.avatarUrl}
                  alt={heroData.name}
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
