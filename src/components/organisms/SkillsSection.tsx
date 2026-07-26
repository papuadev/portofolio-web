import { skillsData } from "@/data/data";
import { SkillBadge } from "../molecules/SkillBadge";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {skillsData.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-xl font-semibold text-primary border-b pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <SkillBadge key={sIdx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
