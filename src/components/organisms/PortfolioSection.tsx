import { portfolioData } from "@/data/data";
import { ProjectCard } from "../molecules/ProjectCard";

import { FadeIn } from "../atoms/FadeIn";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work. Each project breaks down the situation, task, action, and result (STAR method) to provide clear insight into my problem-solving approach.
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioData.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 150} direction="up">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
