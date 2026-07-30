import type { Technology } from "@/types";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: Technology;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border rounded-full bg-card hover:border-primary hover:text-primary transition-colors cursor-default shadow-sm">
      <img 
        src={skill.iconUrl} 
        alt={skill.name} 
        className={cn(
          "w-5 h-5 object-contain",
          ["Next.js", "Express", "Express JS"].includes(skill.name) && "dark:invert"
        )} 
      />
      <span className="font-medium text-sm">{skill.name}</span>
    </div>
  );
}
