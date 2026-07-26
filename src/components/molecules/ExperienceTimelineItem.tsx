import type { ExperienceItem } from "@/types";
import { Briefcase } from "lucide-react";

interface ExperienceTimelineItemProps {
  experience: ExperienceItem;
}

export function ExperienceTimelineItem({ experience }: ExperienceTimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline Line (Desktop) */}
      <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
      
      {/* Timeline Line (Mobile) */}
      <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-border"></div>

      <div className="md:flex items-center justify-between w-full mb-8">
        
        {/* Left Side (Empty on Desktop, content on Mobile) */}
        <div className="hidden md:block w-5/12 text-right pr-8">
          <div className="text-sm text-muted-foreground font-semibold">{experience.duration}</div>
        </div>

        {/* Icon Center */}
        <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground border-4 border-background flex items-center justify-center -translate-x-1.5 md:-translate-x-1/2 mt-1.5 md:mt-0 z-10">
          <Briefcase className="w-3 h-3" />
        </div>

        {/* Right Side / Mobile Content */}
        <div className="w-full md:w-5/12 md:pl-8">
          <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-primary">{experience.role}</h3>
            <h4 className="text-md font-medium mb-1">{experience.company}</h4>
            {/* Mobile Duration */}
            <div className="md:hidden text-sm text-muted-foreground font-semibold mb-4">{experience.duration}</div>
            
            <ul className="list-disc list-inside text-sm space-y-1 mt-3 text-muted-foreground">
              {experience.responsibilities.map((resp, idx) => (
                <li key={idx} className="leading-relaxed">{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
