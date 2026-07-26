import { aboutData } from "@/data/data";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
            {aboutData.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-center text-primary">Core Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {aboutData.coreValues.map((value, idx) => (
                <div 
                  key={idx} 
                  className="bg-card border p-4 rounded-lg text-center font-medium shadow-sm hover:border-primary transition-colors"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
