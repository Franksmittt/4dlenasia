"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Item = { q: string; a: string };

export function FAQClient({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(0);
  const active = items[open] ?? items[0];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <ol className="space-y-1 lg:col-span-5">
        {items.map((item, i) => {
          const isActive = open === i;
          return (
            <li key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-pressed={isActive}
                className={cn(
                  "group flex w-full items-baseline gap-4 border-l-2 py-3.5 pl-4 text-left transition",
                  isActive
                    ? "border-accent-deep text-ink"
                    : "border-transparent text-ink-soft/40 hover:border-ink/20 hover:text-ink-soft/70",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[11px] tracking-[0.16em]",
                    isActive ? "text-accent-deep" : "text-ink-soft/30",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "text-sm leading-snug md:text-[15px]",
                    isActive ? "font-medium" : "font-normal",
                  )}
                >
                  {item.q}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="relative min-h-[220px] border-t border-line pt-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-1">
        <p className="font-mono text-[11px] tracking-[0.22em] text-accent-deep">
          Answer · {String(open + 1).padStart(2, "0")}
        </p>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.q}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="mt-5"
          >
            <h3 className="font-display text-2xl leading-tight tracking-tight text-ink md:text-3xl">
              {active.q}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft/75 md:text-lg">
              {active.a}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
