import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();
    
    // We keep track of which sections are currently intersecting
    const intersectingSections = new Set<string>();

    const callback = (entries: IntersectionObserverEntry[]) => {
      let changed = false;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectingSections.add(entry.target.id);
          changed = true;
        } else {
          intersectingSections.delete(entry.target.id);
          changed = true;
        }
      });

      if (changed) {
        // If multiple sections are visible, we might want to prioritize the first one in the DOM
        // or the one taking up the most space. For simplicity, we just find the first one in the order of sectionIds.
        const currentActive = sectionIds.find((id) => intersectingSections.has(id));
        if (currentActive) {
          setActiveSection(currentActive);
        }
      }
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(callback, {
          rootMargin: "-20% 0px -80% 0px", // Trigger when element is near the top
        });
        observer.observe(element);
        observers.set(id, observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}
