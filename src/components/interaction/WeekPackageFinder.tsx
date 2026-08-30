"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PACKAGES, SITE } from "@/lib/constants";

const MIN = 4;
const MAX = 40;

type Rec = {
  slug: string;
  headline: string;
  note: string;
  timing: "now" | "ahead" | "late";
};

function recommend(week: number): Rec {
  if (week < 11)
    return {
      slug: "nuchal-translucency-scan",
      headline: "You're early, and that's perfect",
      note: `The NT screening window opens at 11 weeks. Book now for week 11–14 and the date is yours.`,
      timing: "ahead",
    };
  if (week <= 14)
    return {
      slug: "nuchal-translucency-scan",
      headline: "You're in the NT window right now",
      note: "The 11–14 week screening measures the fluid at the back of baby's neck. This window doesn't wait.",
      timing: "now",
    };
  if (week === 15)
    return {
      slug: "gender-scan",
      headline: "One week from gender",
      note: "Gender is confirmed on 2D from 16 weeks. Book your reveal for next week.",
      timing: "ahead",
    };
  if (week <= 17)
    return {
      slug: "gender-scan",
      headline: "It's gender week",
      note: "From 16 weeks we confirm gender on 2D. No 4D needed, no guessing.",
      timing: "now",
    };
  if (week <= 22)
    return {
      slug: "detailed-anatomy-scan",
      headline: "The anatomy window is open",
      note: "Weeks 18–22 are ideal for the head-to-toe check: heart, brain, spine, limbs, placenta. Gender comes free with the view.",
      timing: "now",
    };
  if (week <= 26)
    return {
      slug: "complete-4d-scan",
      headline: "Almost time for the face",
      note: `The golden 4D window opens at 27 weeks. You're ${27 - week} ${27 - week === 1 ? "week" : "weeks"} away, so book ahead and lock your slot.`,
      timing: "ahead",
    };
  if (week <= 32)
    return {
      slug: "complete-4d-scan",
      headline: "This is the golden window",
      note: "Weeks 27–32: enough fat for real features, enough room to move. The best 4D faces happen right now.",
      timing: "now",
    };
  return {
    slug: "maternal-antenatal-checkup",
    headline: "Focus on wellbeing now",
    note: "After 33 weeks a clear 4D face view is rarely possible because baby is too snug. A growth and wellbeing check is the smarter scan.",
    timing: "late",
  };
}

const MARKERS = [
  { at: 11, label: "NT" },
  { at: 16, label: "Gender" },
  { at: 18, label: "Anatomy" },
  { at: 27, label: "4D" },
  { at: 33, label: "Growth" },
];

export function WeekPackageFinder() {
  const [week, setWeek] = useState(24);
  const rec = useMemo(() => recommend(week), [week]);
  const pkg = PACKAGES.find((p) => p.slug === rec.slug)!;
  const pct = ((week - MIN) / (MAX - MIN)) * 100;

  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hi Nasreen, I'm ${week} weeks pregnant and I'd like to book the ${pkg.name}${pkg.price ? ` (R${pkg.price})` : ""}.`,
  )}`;

  return (
    <section id="find-your-scan" className="border-y border-line bg-foam py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal">
              Find your scan
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-ink md:text-5xl">
              Tell us your week.
              <br />
              <span className="text-ink-soft/50">We&apos;ll tell you the scan.</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-ink-soft/65 md:col-span-4 md:col-start-9 md:text-base">
            Every scan has a window where it works best. Slide to your week and
            see exactly what to book. No browsing required.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-14">
          <div className="flex items-baseline justify-between">
            <p className="font-display text-6xl tracking-tight text-ink md:text-7xl">
              {week}
              <span className="ml-2 text-lg text-ink-soft/45 md:text-xl">weeks</span>
            </p>
            <p className="hidden text-xs uppercase tracking-[0.18em] text-ink-soft/40 sm:block">
              Weeks {MIN}–{MAX}
            </p>
          </div>

          <div className="relative mt-6">
            <input
              type="range"
              min={MIN}
              max={MAX}
              value={week}
              onChange={(e) => setWeek(Number(e.target.value))}
              aria-label="How many weeks pregnant are you?"
              className="week-slider relative z-10 w-full"
              style={{ ["--pct" as string]: `${pct}%` }}
            />
            {/* Window markers */}
            <div className="relative mt-2 hidden h-5 sm:block">
              {MARKERS.map((m) => (
                <button
                  key={m.at}
                  type="button"
                  onClick={() => setWeek(m.at)}
                  className="absolute -translate-x-1/2 text-[10px] uppercase tracking-wider text-ink-soft/45 transition hover:text-ink"
                  style={{ left: `${((m.at - MIN) / (MAX - MIN)) * 100}%` }}
                >
                  <span className="mx-auto mb-0.5 block h-1.5 w-px bg-ink-soft/30" />
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={rec.slug + rec.timing}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid gap-0 border border-ink/12 bg-canvas md:grid-cols-[1.4fr_1fr]"
          >
            <div className="p-7 md:p-10">
              <div className="flex items-center gap-3">
                <span
                  className={
                    rec.timing === "now"
                      ? "rounded-full bg-signal/15 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-signal"
                      : "rounded-full bg-ink/6 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-soft/60"
                  }
                >
                  {rec.timing === "now"
                    ? "Book now, you're in the window"
                    : rec.timing === "ahead"
                      ? "Book ahead"
                      : "Recommended instead"}
                </span>
              </div>
              <h3 className="font-display mt-4 text-2xl text-ink md:text-3xl">
                {rec.headline}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft/70 md:text-base">
                {rec.note}
              </p>
            </div>

            <div className="flex flex-col justify-between border-t border-ink/12 bg-mist/40 p-7 md:border-l md:border-t-0 md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-ink-soft/50">
                  {pkg.weeks}
                </p>
                <p className="font-display mt-2 text-xl text-ink md:text-2xl">
                  {pkg.name}
                </p>
                <p className="mt-1 font-display text-3xl text-ink">
                  {pkg.price ? `R${pkg.price}` : "POA"}
                  {pkg.priceWas && (
                    <span className="ml-2 text-base text-ink-soft/40 line-through">
                      R{pkg.priceWas}
                    </span>
                  )}
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-foam transition hover:bg-ink-soft"
                >
                  Book on WhatsApp at {week} weeks
                </a>
                <Link
                  href={`/packages/${pkg.slug}`}
                  className="inline-flex items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-sm text-ink transition hover:border-ink"
                >
                  See what&apos;s included
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
