import type { Technology } from "@/types";

interface SkillBadgeProps {
  skill: Technology;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border rounded-full bg-card hover:border-primary hover:text-primary transition-colors cursor-default shadow-sm">
      <i className={`${skill.iconClass} text-xl`}></i>
      <span className="font-medium text-sm">{skill.name}</span>
    </div>
  );
}
