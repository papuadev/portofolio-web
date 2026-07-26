import type { TestimonialItem } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col relative bg-muted/50 border-none">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20 rotate-180" />
      <CardContent className="pt-8 flex-grow">
        <p className="italic text-muted-foreground relative z-10">
          "{testimonial.quote}"
        </p>
      </CardContent>
      <CardHeader className="pt-0 flex flex-row items-center gap-4">
        {testimonial.avatarUrl ? (
          <img 
            src={testimonial.avatarUrl} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
            {testimonial.name.substring(0, 2).toUpperCase()}
          </div>
        )}
        <div className="flex flex-col">
          <span className="font-semibold">{testimonial.name}</span>
          <span className="text-xs text-muted-foreground">{testimonial.role}</span>
        </div>
      </CardHeader>
    </Card>
  );
}
