import { skillsData } from "@/data/data";
import { SkillBadge } from "../molecules/SkillBadge";

import { FadeIn } from "../atoms/FadeIn";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-12">
          {skillsData.map((category, idx) => (
            <FadeIn key={idx} delay={idx * 150} direction="up" className="space-y-6">
              <h3 className="text-xl font-semibold text-primary border-b pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <SkillBadge key={sIdx} skill={skill} />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
