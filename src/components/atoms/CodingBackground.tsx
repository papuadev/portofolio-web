export function CodingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Container to restrict animations within the hero boundaries */}
      <div className="relative w-full h-full max-w-7xl mx-auto">
        
        {/* Floating Symbol 1 */}
        <div 
          className="absolute text-primary/10 dark:text-primary/20 font-mono font-bold text-6xl md:text-8xl animate-float"
          style={{ top: "15%", left: "5%" }}
        >
          {"</>"}
        </div>

        {/* Floating Symbol 2 */}
        <div 
          className="absolute text-muted-foreground/10 dark:text-muted-foreground/20 font-mono font-bold text-5xl md:text-7xl animate-float-reverse"
          style={{ top: "60%", left: "15%", animationDelay: "1s" }}
        >
          {"{ }"}
        </div>

        {/* Floating Symbol 3 */}
        <div 
          className="absolute text-primary/10 dark:text-primary/20 font-mono font-bold text-7xl md:text-9xl animate-float"
          style={{ top: "25%", right: "10%", animationDelay: "2s" }}
        >
          {"()"}
        </div>

        {/* Floating Symbol 4 */}
        <div 
          className="absolute text-muted-foreground/10 dark:text-muted-foreground/20 font-mono font-bold text-6xl md:text-8xl animate-float-reverse"
          style={{ top: "70%", right: "20%", animationDelay: "0.5s" }}
        >
          {"[]"}
        </div>

        {/* Floating Symbol 5 (Hidden on very small screens) */}
        <div 
          className="hidden md:block absolute text-primary/5 dark:text-primary/10 font-mono font-bold text-8xl animate-float"
          style={{ top: "10%", left: "45%", animationDelay: "1.5s" }}
        >
          {"&&"}
        </div>
        
        {/* Floating Symbol 6 */}
        <div 
          className="hidden md:block absolute text-muted-foreground/5 dark:text-muted-foreground/10 font-mono font-bold text-9xl animate-float-reverse"
          style={{ bottom: "5%", left: "40%", animationDelay: "2.5s" }}
        >
          {";"}
        </div>

      </div>
    </div>
  );
}
