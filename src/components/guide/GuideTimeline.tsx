import Image from "next/image";

type Stop = {
  week: string;
  title: string;
  detail: string;
  img: string;
  tone: "clinical" | "warm" | "muted";
  highlight?: boolean;
};

const STOPS: Stop[] = [
  {
    week: "11–14",
    title: "NT screening",
    detail:
      "First-trimester screening measuring fluid at the back of the neck. Confirm your exact dates when booking.",
    img: "/weeks/ww12.jpg",
    tone: "clinical",
  },
  {
    week: "16+",
    title: "Gender (2D)",
    detail:
      "Accurate gender determination on 2D. Does not require 4D imaging.",
    img: "/studio/scan-screen-2d.png",
    tone: "warm",
  },
  {
    week: "18–22",
    title: "Anatomy scan",
    detail:
      "Detailed check of organs, limbs, spine, brain, heart, placenta, fluid, and cervix.",
    img: "/studio/scanning-moment.png",
    tone: "clinical",
  },
  {
    week: "20–26",
    title: "4D diagnostic only",
    detail:
      "Features are still small for a keepsake face. Fat under the skin starts building late in this window; cosmetic booking stays 27–32.",
    img: "/studio/studio-room.png",
    tone: "muted",
  },
  {
    week: "27–32",
    title: "Cosmetic 4D",
    detail:
      "Peak bonding window: facial fat + enough amniotic fluid for a clear face view. Week 28 is often the sweetest balance.",
    img: "/studio/couple-screen.png",
    tone: "warm",
    highlight: true,
  },
  {
    week: "33+",
    title: "Too late for cosmetic 4D",
    detail:
      "Less fluid and more crowding: faces often fuse into the wall or placenta. Wellbeing and position checks still matter.",
    img: "/studio/keepsake-prints.png",
    tone: "muted",
  },
];

export function GuideTimeline() {
  return (
    <section
      id="timing"
      className="scroll-mt-28 overflow-hidden bg-ink py-20 text-foam md:scroll-mt-32 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal-soft">
            Gestational windows
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight md:text-5xl">
            When to book what
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foam/65 md:text-lg">
            Image quality is physiology, not preference. Fat under the skin and
            fluid in front of the face decide whether 4D sings or fails.
          </p>
        </div>
      </div>

      <div className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mt-16 md:gap-5 md:px-8">
        {STOPS.map((stop) => (
          <article
            key={stop.week}
            className={`relative w-[78vw] shrink-0 snap-center overflow-hidden sm:w-[42vw] md:w-[280px] lg:w-[300px] ${
              stop.highlight ? "ring-1 ring-signal-soft/60" : ""
            }`}
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={stop.img}
                alt=""
                fill
                className={`object-cover ${
                  stop.tone === "muted" ? "opacity-50 grayscale" : ""
                }`}
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              {stop.highlight && (
                <span className="absolute left-4 top-4 rounded-full bg-signal px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-foam">
                  Ideal 4D
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-mono text-xs tracking-wider text-signal-soft">
                  {stop.week} wks
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight">
                  {stop.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foam/70">
                  {stop.detail}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-6xl px-5 text-xs text-foam/40 md:px-8">
        Swipe the timeline on mobile · Cosmetic 4D after 33 weeks is rarely
        successful
      </p>
    </section>
  );
}
