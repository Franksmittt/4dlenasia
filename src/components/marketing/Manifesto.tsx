import Link from "next/link";

export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-screen py-20 text-foam md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(111,175,160,0.14),transparent_45%)]" />
      <div className="relative mx-auto max-w-4xl px-5 md:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-signal-soft md:text-xs">
          What we believe
        </p>
        <div className="mt-4 h-px w-10 bg-signal/50" aria-hidden />

        <p className="font-display mt-10 text-2xl leading-snug tracking-tight md:text-[2.75rem] md:leading-[1.2]">
          The first time you see your baby&apos;s face is one of the great
          moments of a life.
        </p>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-foam/60 md:text-lg">
          It shouldn&apos;t happen in a corridor, under fluorescent lights, with
          one eye on the clock. We built a studio where that moment gets the
          room it deserves: clinical skill, unhurried time, and images you keep.
        </p>

        <p className="mt-10 text-sm text-foam/40">
          Nasreen Ali · Founder · B.Tech Radiography (UJ)
        </p>

        <Link
          href="/our-story"
          className="mt-8 inline-flex text-sm font-medium text-signal-soft underline-offset-4 hover:underline"
        >
          Our story
        </Link>
      </div>
    </section>
  );
}
