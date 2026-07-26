import { experienceData } from "@/data/data";
import { ExperienceTimelineItem } from "../molecules/ExperienceTimelineItem";

import { FadeIn } from "../atoms/FadeIn";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-16 text-center">Work Experience</h2>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <FadeIn key={exp.id} delay={idx * 150} direction="up">
              <ExperienceTimelineItem experience={exp} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
