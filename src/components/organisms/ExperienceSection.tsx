import { experienceData } from "@/data/data";
import { ExperienceTimelineItem } from "../molecules/ExperienceTimelineItem";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp) => (
            <ExperienceTimelineItem key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
