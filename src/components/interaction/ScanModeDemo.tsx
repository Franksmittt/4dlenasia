"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MODES = [
  {
    id: "2d",
    label: "2D",
    name: "Clinical slice",
    line: "Flat cross-sections. Gender from 16 weeks, dating, anatomy.",
    spec: "GREYSCALE · SECTOR SCAN",
    src: "/demo/scan-2d.jpg",
  },
  {
    id: "3d",
    label: "3D",
    name: "Surface still",
    line: "A sculpted volume render. The photograph before the film.",
    spec: "VOLUME RENDER · STATIC",
    src: "/demo/scan-3d.jpg",
  },
  {
    id: "4d",
    label: "4D",
    name: "Live motion",
    line: "3D over time. Yawns, stretches and thumb-sucking, live as they happen.",
    spec: "VOLUME RENDER · REALTIME",
    src: "/demo/scan-4d.jpg",
  },
] as const;

type ModeId = (typeof MODES)[number]["id"];

export function ScanModeDemo() {
  const [mode, setMode] = useState<ModeId>("4d");
  const active = MODES.find((m) => m.id === mode)!;

  return (
    <div className="overflow-hidden border border-white/10 bg-[#060907]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 md:px-6">
        <p className="font-mono text-[10px] tracking-[0.2em] text-white/45">
          4D ULTRASOUND STUDIO · LENASIA
        </p>
        <div className="flex items-center gap-4 font-mono text-[10px] tracking-wider text-white/35">
          <span>TI&lt;1.0</span>
          <span>ALARA</span>
          <span className="hidden sm:inline">20 MIN CAP</span>
        </div>
      </div>

      <div className="grid md:grid-cols-[1.25fr_1fr]">
        <div className="relative bg-black">
          <div className="relative flex min-h-[280px] items-center justify-center md:min-h-[440px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={active.src}
              src={active.src}
              alt={`Simulated ${active.label} ultrasound view`}
              width={1200}
              height={900}
              className="max-h-[440px] w-full object-contain"
              decoding="async"
            />

            {mode === "2d" && (
              <motion.div
                className="pointer-events-none absolute inset-y-0 z-10 w-10 bg-gradient-to-r from-transparent via-[#9dcec2]/10 to-transparent"
                animate={{ left: ["2%", "88%", "2%"] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              />
            )}

            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/12 bg-black/75 px-3.5 py-1.5 font-mono text-[10px] tracking-widest text-white/75 backdrop-blur">
              {mode === "4d" ? (
                <>
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-soft/60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal-soft" />
                  </span>
                  LIVE · 142 BPM
                </>
              ) : mode === "3d" ? (
                <>STILL FRAME</>
              ) : (
                <>B-MODE · SECTOR</>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between border-t border-white/10 p-6 md:border-l md:border-t-0 md:p-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-signal-soft">
              Try the difference
            </p>
            <div className="mt-5 flex gap-2">
              {MODES.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMode(m.id)}
                  aria-pressed={mode === m.id}
                  className={cn(
                    "flex-1 rounded-sm border px-3 py-3 font-display text-xl transition md:text-2xl",
                    mode === m.id
                      ? "border-signal-soft/60 bg-signal/15 text-white"
                      : "border-white/12 text-white/40 hover:border-white/30 hover:text-white/70",
                  )}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="mt-7"
              >
                <h3 className="font-display text-2xl text-white md:text-3xl">
                  {active.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
                  {active.line}
                </p>
                <p className="mt-5 font-mono text-[10px] tracking-[0.18em] text-white/30">
                  {active.spec}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/35">
            Simulated preview. “5D” is a lighting filter, not a dimension. We
            offer authentic 2D &amp; 4D imaging.
          </p>
        </div>
      </div>
    </div>
  );
}
