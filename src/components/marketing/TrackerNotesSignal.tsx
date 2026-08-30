"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { WHATSAPP_BOOK } from "@/lib/constants";

const NOTES = [
  {
    n: "01",
    title: "How we count the weeks",
    body: "Doctors date pregnancy from the first day of your last period, not the day you conceived. That is why a 40-week pregnancy includes roughly two weeks before baby existed. Only know your conception date? Flip the toggle above and we will adjust for you.",
    mark: "Dating",
  },
  {
    n: "02",
    title: "The best time to visit",
    body: "Gender reveals from 16 weeks on 2D. For cosmetic 4D, aim for 27 to 32 weeks, not after 33. Unsure where you fall? Send Nasreen your dates on WhatsApp and she will tell you exactly when to book.",
    mark: "16–32w",
  },
  {
    n: "03",
    title: "What 4D really looks like",
    body: "Expect warm amber tones, fine acoustic grain, and slightly stuttery motion—not a crystal-clear photo in clear water. Hands, cord, or shadows can cross the face. That is real ultrasound. Read the full guide before you book.",
    mark: "Expect",
  },
  {
    n: "04",
    title: "This is for bonding, not diagnosis",
    body: "Sizes and weights here are averages. Every baby grows at their own pace. Use this as a keepsake companion, and always trust your doctor's dating scan for medical care.",
    mark: "Keepsake",
  },
] as const;

export function TrackerNotesSignal() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 50%"],
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 80, damping: 28 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink py-20 text-foam md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(61,122,106,0.22),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_100%,rgba(111,175,160,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-lg">
            <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-signal-soft">
              Before the weeks
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight md:text-5xl">
              Four signals.
              <br />
              Then you find yourself.
            </h2>
          </div>
          <a
            href={WHATSAPP_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foam/55 transition hover:text-signal-soft"
          >
            Or ask Nasreen →
          </a>
        </div>

        <div className="relative mt-16 hidden md:block">
          <svg
            viewBox="0 0 1100 80"
            className="h-16 w-full"
            fill="none"
            aria-hidden
          >
            <path
              d="M0 40 H120 C160 40 170 12 210 12 C250 12 260 68 300 68 C340 68 350 40 390 40 H710 C750 40 760 12 800 12 C840 12 850 68 890 68 C930 68 940 40 980 40 H1100"
              stroke="rgba(196,164,132,0.18)"
              strokeWidth="1.5"
            />
            <motion.path
              d="M0 40 H120 C160 40 170 12 210 12 C250 12 260 68 300 68 C340 68 350 40 390 40 H710 C750 40 760 12 800 12 C840 12 850 68 890 68 C930 68 940 40 980 40 H1100"
              stroke="rgba(196,164,132,0.85)"
              strokeWidth="1.5"
              style={{ pathLength }}
            />
          </svg>
        </div>

        <div className="mt-10 grid gap-10 md:mt-4 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
          {NOTES.map((note, i) => (
            <motion.article
              key={note.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                delay: i * 0.12,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-signal-soft/40" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-signal-soft" />
                </span>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-signal-soft">
                  {note.mark}
                </p>
              </div>
              <h3 className="font-display mt-5 text-2xl leading-snug">
                {note.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foam/65 md:text-[15px]">
                {note.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
