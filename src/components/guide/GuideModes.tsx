import Image from "next/image";

const MODES = [
  {
    id: "2d",
    label: "2D",
    kicker: "The clinical foundation",
    title: "Flat, real-time slices",
    body: "The black-and-white view hospitals use. It cuts through tissue so we can measure growth, check the heartbeat, and determine gender from 16 weeks. Gender needs a specific cross-section, so 2D is the right tool, not 4D.",
    meta: "Used for · Gender · Dating · NT · Anatomy",
    tone: "dark" as const,
    img: "/demo/scan-2d.jpg",
    imgAlt: "Clinical 2D greyscale ultrasound of a fetal profile",
  },
  {
    id: "3d",
    label: "3D",
    kicker: "Surface, frozen in time",
    title: "A still sculpted volume",
    body: "Software gathers acoustic volume data and rebuilds a lifelike still of baby’s surface: nose, cheeks, lips. It is the photograph; 4D is the film.",
    meta: "Best thought of as · A keepsake still frame",
    tone: "light" as const,
    img: "/demo/scan-3d.jpg",
    imgAlt: "Amber 3D surface render of a fetal face",
  },
  {
    id: "4d",
    label: "4D",
    kicker: "3D + time",
    title: "Live movement on screen",
    body: "Real-time surface video: amber tones, fine acoustic grain, and a slightly stuttery refresh as volumes update. You may catch yawns, stretches, or thumb-sucking—and sometimes a hand, cord, or shadow across the face. Sessions are capped at 20 minutes with gallery, disc, print, and heartbeat recording.",
    meta: "Ideal cosmetic window · 27–32 weeks",
    tone: "ink" as const,
    img: "/demo/scan-4d.jpg",
    imgAlt: "4D ultrasound of a fetal yawn with hand near the face",
  },
] as const;

export function GuideModes() {
  return (
    <section id="dimensions" className="scroll-mt-28 bg-canvas md:scroll-mt-32">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
              Dimensions
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-ink md:text-5xl">
              Speak the language of the scan
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft/70 md:text-right">
            Marketing loves extra letters. Medicine cares about what the image
            is for. Here is the honest map.
          </p>
        </div>
      </div>

      <div className="space-y-0">
        {MODES.map((mode, i) => {
          const reverse = i % 2 === 1;
          const shell =
            mode.tone === "dark"
              ? "bg-screen text-foam"
              : mode.tone === "ink"
                ? "bg-ink text-foam"
                : "bg-foam text-ink";
          const soft =
            mode.tone === "light" ? "text-ink-soft/75" : "text-foam/65";
          const meta =
            mode.tone === "light" ? "text-accent-deep" : "text-signal-soft";

          return (
            <article
              key={mode.id}
              className={`${shell} border-t border-white/5`}
            >
              <div
                className={`mx-auto grid max-w-6xl items-stretch md:grid-cols-2 ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[320px] bg-black md:min-h-[520px]">
                  <Image
                    src={mode.img}
                    alt={mode.imgAlt}
                    fill
                    className="object-contain object-center p-4 md:p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <p
                    className={`pointer-events-none absolute bottom-4 left-5 font-display text-[5.5rem] leading-none tracking-tight opacity-[0.12] md:bottom-8 md:left-8 md:text-[8rem] ${
                      mode.tone === "light" ? "text-ink" : "text-foam"
                    }`}
                  >
                    {mode.label}
                  </p>
                </div>

                <div className="flex flex-col justify-center px-5 py-12 md:px-12 md:py-16">
                  <p className={`text-xs uppercase tracking-[0.22em] ${meta}`}>
                    {mode.kicker}
                  </p>
                  <h3 className="font-display mt-4 text-3xl tracking-tight md:text-4xl">
                    {mode.label}
                    <span className="mt-2 block text-xl font-normal opacity-70 md:text-2xl">
                      {mode.title}
                    </span>
                  </h3>
                  <p className={`mt-6 text-base leading-relaxed md:text-lg ${soft}`}>
                    {mode.body}
                  </p>
                  <p
                    className={`mt-8 border-t pt-5 text-xs uppercase tracking-[0.16em] ${
                      mode.tone === "light"
                        ? "border-line text-ink-soft/55"
                        : "border-white/10 text-foam/45"
                    }`}
                  >
                    {mode.meta}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="border-t border-line bg-mist/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8 md:py-14">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
              The 5D myth
            </p>
            <p className="mt-3 text-lg leading-relaxed text-ink md:text-xl">
              There is no fifth medical dimension.{" "}
              <span className="text-ink-soft/70">
                “5D” is usually software lighting on a 4D image. We do not offer
                5D. We offer authentic 4D, without the gimmick.
              </span>
            </p>
          </div>
          <p className="shrink-0 font-display text-5xl text-ink/15 md:text-6xl">
            ≠ 5D
          </p>
        </div>
      </div>
    </section>
  );
}
