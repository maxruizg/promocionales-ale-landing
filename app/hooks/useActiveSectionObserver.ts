import { useState, useEffect } from "react";

const sectionColors: Record<string, string> = {
  hero: "#3b82f6",
  solutions: "#f43f5e",
  process: "#a855f7",
  brands: "#eab308",
  categories: "#14b8a6",
  techniques: "#f43f5e",
  stats: "#3b82f6",
  cta: "#25D366",
};

export function useActiveSectionObserver(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  return {
    activeSection,
    activeSectionColor: sectionColors[activeSection] || "#3b82f6",
  };
}
