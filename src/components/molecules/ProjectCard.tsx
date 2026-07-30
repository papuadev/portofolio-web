import type { PortfolioItem } from "@/types";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: PortfolioItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Thumbnail Section */}
      <div className="w-full h-48 bg-primary/10 flex items-center justify-center overflow-hidden relative">
        {project.thumbnailUrl ? (
          <picture className="w-full h-full block">
            {project.thumbnailUrlMobile && (
              <source media="(max-width: 767px)" srcSet={project.thumbnailUrlMobile} />
            )}
            <img 
              src={project.thumbnailUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        ) : (
          <div className="w-full h-full bg-primary/20 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-primary/50">
              {project.title.substring(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        <CardDescription className="text-sm">{project.summary}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <Badge key={idx} variant="secondary" className="flex items-center gap-1.5">
              <img 
                src={tech.iconUrl} 
                alt={tech.name} 
                className={cn(
                  "w-4 h-4 object-contain",
                  ["Next.js", "Express", "Express JS"].includes(tech.name) && "dark:invert"
                )} 
              />
              {tech.name}
            </Badge>
          ))}
        </div>

        {/* STAR Method Narrative */}
        <div className="space-y-2 text-sm pt-2">
          <p><span className="font-semibold text-primary">Situation:</span> {project.star.situation}</p>
          <p><span className="font-semibold text-primary">Task:</span> {project.star.task}</p>
          <p><span className="font-semibold text-primary">Action:</span> {project.star.action}</p>
          <p><span className="font-semibold text-primary">Result:</span> {project.star.result}</p>
        </div>
      </CardContent>

      <CardFooter className="flex gap-4 pt-4 border-t">
        {project.projectUrl && (
          <a 
            href={project.projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium flex items-center gap-1 text-primary hover:underline"
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium flex items-center gap-1 text-muted-foreground hover:text-foreground hover:underline"
          >
            <img src="/img/icons/github.svg" alt="GitHub" className="w-4 h-4 object-contain dark:invert" /> Repository
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
