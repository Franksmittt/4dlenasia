"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const CHAPTERS = [
  { id: "dimensions", label: "Dimensions" },
  { id: "what-youll-see", label: "What you'll see" },
  { id: "timing", label: "Timing" },
  { id: "safety", label: "Safety" },
  { id: "prepare", label: "Prepare" },
  { id: "keepsakes", label: "Keepsakes" },
] as const;

export function GuideChapterNav() {
  const [active, setActive] = useState<string>(CHAPTERS[0].id);

  useEffect(() => {
    const nodes = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Guide chapters"
      className="sticky top-16 z-40 border-b border-line/80 bg-foam/90 backdrop-blur-xl md:top-20"
    >
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 py-3 scrollbar-none md:px-8">
        {CHAPTERS.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-xs font-medium tracking-wide transition md:text-sm",
              active === c.id
                ? "bg-ink text-foam"
                : "text-ink-soft/70 hover:bg-mist hover:text-ink",
            )}
          >
            {c.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
