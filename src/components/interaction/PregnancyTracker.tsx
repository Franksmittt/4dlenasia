"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock } from "lucide-react";
import {
  calcPregnancy,
  FREE_THROUGH_WEEK,
  getWeekInfo,
  MAX_WEEK,
  MIN_WEEK,
  scanWindowFor,
  WEEKS,
  type DatingMode,
} from "@/lib/pregnancy";
import { WHATSAPP_BOOK, WHATSAPP_TRACKER_UNLOCK } from "@/lib/constants";
import { cn } from "@/lib/utils";

const STORAGE_DATE = "4d-tracker-date";
const STORAGE_MODE = "4d-tracker-mode";

/** Free preview: weeks 1–12 only. Later weeks stay off the public CDN. */
const WEEK_IMAGES: Partial<Record<number, string>> = {
  1: "/weeks/ww1.jpg",
  2: "/weeks/ww2.jpg",
  3: "/weeks/ww3.jpg",
  4: "/weeks/ww4.jpg",
  5: "/weeks/ww5.jpg",
  6: "/weeks/ww6.jpg",
  7: "/weeks/ww7.jpg",
  8: "/weeks/ww8.jpg",
  9: "/weeks/ww9.jpg",
  10: "/weeks/ww10.jpg",
  11: "/weeks/ww11.jpg",
  12: "/weeks/ww12.jpg",
};

function isWeekLocked(week: number) {
  return week > FREE_THROUGH_WEEK;
}

function formatDate(d: Date) {
  return d.toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function PregnancyTracker({ compact = false }: { compact?: boolean }) {
  const [date, setDate] = useState("");
  const [mode, setMode] = useState<DatingMode>("lmp");
  const [selected, setSelected] = useState(8);
  const [hydrated, setHydrated] = useState(false);
  const chipRefs = useRef<Map<number, HTMLButtonElement>>(new Map());

  useEffect(() => {
    const savedDate = localStorage.getItem(STORAGE_DATE) ?? "";
    const savedMode = (localStorage.getItem(STORAGE_MODE) as DatingMode) ?? "lmp";
    setDate(savedDate);
    setMode(savedMode);
    if (savedDate) {
      const p = calcPregnancy(savedDate, savedMode);
      if (p) {
        const week = Math.min(Math.max(p.weeks, MIN_WEEK), MAX_WEEK);
        // Land on a free week if their current week is locked
        setSelected(isWeekLocked(week) ? FREE_THROUGH_WEEK : week);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (date) localStorage.setItem(STORAGE_DATE, date);
    localStorage.setItem(STORAGE_MODE, mode);
  }, [date, mode, hydrated]);

  const hydratedRef = useRef(false);

  useEffect(() => {
    const el = chipRefs.current.get(selected);
    if (!el) return;
    // Only nudge the horizontal chip scroller — never the page (that was
    // yanking visitors past the hero on first load).
    const scroller = el.parentElement;
    if (!(scroller instanceof HTMLElement)) return;
    const left =
      el.offsetLeft - scroller.clientWidth / 2 + el.offsetWidth / 2;
    if (!hydratedRef.current) {
      hydratedRef.current = true;
      scroller.scrollLeft = Math.max(0, left);
      return;
    }
    scroller.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [selected]);

  const pregnancy = date ? calcPregnancy(date, mode) : null;
  const currentWeek = pregnancy
    ? Math.min(Math.max(pregnancy.weeks, MIN_WEEK), MAX_WEEK)
    : null;
  const info = getWeekInfo(selected);
  const window_ = scanWindowFor(selected);
  const locked = isWeekLocked(selected);
  const weekImage = !locked ? WEEK_IMAGES[selected] : undefined;

  return (
    <div className="w-full">
      {/* ── Date input ─────────────────────────────────────────── */}
      <div className="border border-line bg-foam p-5 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end">
          <div className="flex-1">
            <div className="flex gap-2 text-xs">
              <button
                type="button"
                onClick={() => setMode("lmp")}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 transition",
                  mode === "lmp"
                    ? "border-ink bg-ink text-foam"
                    : "border-line text-ink-soft/70 hover:border-ink/40",
                )}
              >
                First day of last period
              </button>
              <button
                type="button"
                onClick={() => setMode("conception")}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 transition",
                  mode === "conception"
                    ? "border-ink bg-ink text-foam"
                    : "border-line text-ink-soft/70 hover:border-ink/40",
                )}
              >
                Conception date
              </button>
            </div>
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                const p = calcPregnancy(e.target.value, mode);
                if (p) {
                  const week = Math.min(Math.max(p.weeks, MIN_WEEK), MAX_WEEK);
                  setSelected(isWeekLocked(week) ? FREE_THROUGH_WEEK : week);
                }
              }}
              aria-label={
                mode === "lmp" ? "First day of your last period" : "Conception date"
              }
              className="mt-3 w-full border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition focus:border-ink md:max-w-xs"
            />
          </div>

          <div className="md:pb-1 md:text-right">
            {pregnancy ? (
              <>
                <p className="font-display text-2xl text-ink md:text-3xl">
                  {pregnancy.weeks} weeks, {pregnancy.days}{" "}
                  {pregnancy.days === 1 ? "day" : "days"}
                </p>
                <p className="mt-1 text-sm text-ink-soft/65">
                  Due around {formatDate(pregnancy.dueDate)}
                </p>
              </>
            ) : (
              <p className="max-w-xs text-sm leading-relaxed text-ink-soft/65">
                {date
                  ? "That date doesn't look right. Please double-check it."
                  : "Pick a date and we'll show you exactly where you are in your journey."}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Week scroller ──────────────────────────────────────── */}
      <div
        className="mt-6 flex snap-x gap-2 overflow-x-auto pb-3 [scrollbar-width:thin]"
        role="tablist"
        aria-label="Pregnancy weeks"
      >
        {WEEKS.map((w) => {
          const isSelected = w.week === selected;
          const isCurrent = w.week === currentWeek;
          const weekLocked = isWeekLocked(w.week);
          return (
            <button
              key={w.week}
              ref={(el) => {
                if (el) chipRefs.current.set(w.week, el);
              }}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-label={
                weekLocked ? `Week ${w.week}, locked. Subscribe to unlock` : `Week ${w.week}`
              }
              onClick={() => setSelected(w.week)}
              className={cn(
                "relative flex shrink-0 snap-center items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition",
                isSelected
                  ? "border-ink bg-ink text-foam"
                  : weekLocked
                    ? "border-line bg-mist/40 text-ink-soft/45 hover:border-ink/25"
                    : "border-line bg-foam text-ink-soft/75 hover:border-ink/40",
              )}
            >
              {isCurrent && (
                <span
                  className={cn(
                    "absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full",
                    isSelected ? "bg-foam" : "bg-ink",
                  )}
                  aria-hidden
                />
              )}
              {weekLocked && <Lock className="size-3 opacity-70" aria-hidden />}
              {w.week}
            </button>
          );
        })}
      </div>

      {/* ── Week detail ────────────────────────────────────────── */}
      <div
        className={cn(
          "mt-4 grid items-center gap-8 border border-line bg-foam p-6 md:grid-cols-[240px_1fr] md:p-10",
          compact && "md:p-8",
        )}
      >
        <div className="flex h-[220px] items-center justify-center md:h-[240px]">
          <AnimatePresence mode="wait">
            {locked ? (
              <motion.div
                key="locked-visual"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex size-[200px] flex-col items-center justify-center rounded-full bg-ink text-foam md:size-[220px]"
              >
                <Lock className="size-8 opacity-80" aria-hidden />
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-foam/55">
                  Locked
                </p>
              </motion.div>
            ) : weekImage ? (
              <motion.div
                key={`img-${selected}`}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                className="relative size-[200px] shrink-0 overflow-hidden rounded-full bg-black md:size-[220px]"
              >
                <Image
                  src={weekImage}
                  alt={`Baby size illustration for week ${selected}`}
                  width={220}
                  height={220}
                  sizes="220px"
                  className="h-full w-full object-contain"
                  priority
                />
              </motion.div>
            ) : (
              <motion.div
                key={`empty-${selected}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="size-[200px] rounded-full bg-black md:size-[220px]"
                aria-hidden
              />
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-deep">
              Week {info.week}
              {currentWeek === info.week && " · You are here"}
            </p>
            <h3 className="font-display mt-2 text-3xl text-ink md:text-4xl">
              {info.week <= 2
                ? info.fruit
                : `The size of ${/^[aeiou]/i.test(info.fruit) ? "an" : "a"} ${info.fruit.toLowerCase()}`}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft/80">
              {info.note}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-soft/70">
              {info.lengthCm > 0 && (
                <p>
                  <span className="font-medium text-ink">{info.lengthCm} cm</span>{" "}
                  {info.week < 20 ? "crown to rump" : "head to heel"}
                </p>
              )}
              {info.weightG > 0 && (
                <p>
                  <span className="font-medium text-ink">
                    {info.weightG >= 1000
                      ? `${(info.weightG / 1000).toFixed(1)} kg`
                      : `${info.weightG} g`}
                  </span>{" "}
                  approx. weight
                </p>
              )}
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-deep">
                On the scan
              </p>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft/75">
                {info.onScan}
              </p>
            </div>

            <div className="mt-6 border-t border-line pt-5">
              <p className="text-xs font-medium uppercase tracking-wide text-signal">
                {window_.label}
              </p>
              <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-ink-soft/75">
                {window_.text}
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <a
                  href={WHATSAPP_BOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-foam transition hover:bg-ink-soft"
                >
                  {window_.cta}
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    info.week <= 2
                      ? `Week ${info.week}: ${info.note} Track along week by week: https://4dultrasoundstudio.co.za/tracker`
                      : `Week ${info.week}: our baby is the size of ${/^[aeiou]/i.test(info.fruit) ? "an" : "a"} ${info.fruit.toLowerCase()} (${info.lengthCm} cm). Track along week by week: https://4dultrasoundstudio.co.za/tracker`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-5 py-2.5 text-sm text-ink transition hover:border-ink"
                >
                  Share week {info.week}
                </a>
              </div>
            </div>

            {locked && (
              <div className="mt-6 rounded-sm border border-line bg-mist/40 px-4 py-3">
                <p className="text-xs leading-relaxed text-ink-soft/65">
                  Week illustrations for 13–40 unlock via WhatsApp. Size, scan
                  tips, and booking windows above stay free.
                </p>
                <a
                  href={WHATSAPP_TRACKER_UNLOCK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-accent-deep underline-offset-4 hover:underline"
                >
                  <Lock className="size-3" aria-hidden />
                  Unlock illustrations
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-ink-soft/50">
        Estimates are based on a standard 40-week pregnancy
        {mode === "conception" ? " (conception + 2 weeks)" : " from your last period"}.
        Your doctor&apos;s dating scan remains the accurate source for your dates.
        {" "}Size notes and scan windows are free for all weeks; illustrations for
        weeks 1–{FREE_THROUGH_WEEK} are included in the preview.
      </p>
    </div>
  );
}
