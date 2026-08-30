"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { WHATSAPP_BOOK } from "@/lib/constants";

const FuzzySignalOrb = dynamic(
  () =>
    import("@/components/interaction/FuzzySignalOrb").then(
      (m) => m.FuzzySignalOrb,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse rounded-full bg-white/5" />
    ),
  },
);

const SPRING = { stiffness: 180, damping: 28 };

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, SPRING);
  const sy = useSpring(my, SPRING);
  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const glowX = useTransform(sx, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(sy, [-0.5, 0.5], [0, 100]);
  const glow = useMotionTemplate`radial-gradient(640px circle at ${glowX}% ${glowY}%, rgba(250,249,247,0.08), transparent 55%)`;

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative isolate h-[100svh] overflow-hidden bg-[#0a0a0a] text-[#f5f4f1]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: glow }}
      />

      <div className="relative mx-auto grid h-full max-w-6xl items-center gap-8 px-5 pt-16 md:grid-cols-2 md:px-8 md:pt-20">
        <div className="relative order-1 flex items-center justify-center md:justify-start">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative aspect-square w-[min(82vw,400px)]"
          >
            <div className="absolute inset-[2%] overflow-hidden rounded-full ring-1 ring-white/15">
              <FuzzySignalOrb className="h-full w-full" aria-hidden />
            </div>

            <div className="absolute -bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/12 bg-black/80 px-4 py-2 font-mono text-[11px] tracking-wider text-[#f5f4f1]/80 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f5f4f1]/70" />
              142 BPM · LIVE
            </div>
          </motion.div>
        </div>

        <div className="order-2">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f5f4f1]/55" />
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#f5f4f1]/50">
              Signal locked · Lenasia
            </p>
          </div>
          <h1 className="font-display mt-5 text-[clamp(2.4rem,5vw,4.1rem)] leading-[1.05] tracking-tight text-[#f5f4f1]">
            Hear them.
            <br />
            <span className="text-[#f5f4f1]/55">Then see them.</span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#f5f4f1]/55">
            A private prenatal imaging studio where the heartbeat is the opening act,
            and your baby&apos;s face is the encore. Guided by Nasreen Ali.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#book"
              className="inline-flex items-center justify-center rounded-full bg-[#f5f4f1] px-8 py-3.5 text-sm font-medium text-[#0a0a0a]"
            >
              Book your session
            </Link>
            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-[#f5f4f1]/85"
            >
              WhatsApp Nasreen
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.18em] text-[#f5f4f1]/35">
            <p>Antenatal from R250</p>
            <p>4D from R900</p>
            <p>Free follow-up if shy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
