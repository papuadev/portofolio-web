import { testimonialsData } from "@/data/data";
import { TestimonialCard } from "../molecules/TestimonialCard";

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What people are saying about my work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
