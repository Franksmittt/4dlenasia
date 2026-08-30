const LOOKS = [
  {
    title: "Warm amber, not a photograph",
    body: "Standard 4D is sound rendered as colour. Machines use amber, gold, and sepia because warm tones show subtle contrast better than pure grey. The surface can look a little matte or plastic—that is surface rendering, not soft lighting from a camera.",
  },
  {
    title: "Grainy on purpose",
    body: "The fine sparkle across the image is acoustic speckle: interference from sound waves bouncing through tissue. It is part of real ultrasound physics, not a broken screen. Overly smooth “CGI baby” clips online erase this texture and set the wrong expectation.",
  },
  {
    title: "A dark void around baby",
    body: "Amniotic fluid looks black on the render—an echo-free space, not clear swimming-pool water. Later in pregnancy you may see bright swirling flecks (vernix and skin cells). That “snow globe” look is normal.",
  },
  {
    title: "Slightly stuttery motion",
    body: "4D updates a few volumes per second, not cinematic 60 fps. Yawns unfold slowly. Fast kicks can briefly stretch, stair-step, or melt before the next volume rebuilds the face. That lag is the probe keeping up, not a glitch we can polish away.",
  },
] as const;

const MAY_SEE = [
  {
    title: "Expressions & sleep",
    body: "In the golden window you may catch slow yawns, swallows, brow furrows, thumb-sucking, or tiny eyelid flutters during REM sleep.",
  },
  {
    title: "Hands, cord, placenta",
    body: "A hand over the nose casts a hard black acoustic shadow—a data void behind bone, not a soft studio shadow. Cord can rope across the face. Placenta can blend into skin when they touch.",
  },
  {
    title: "Shy or “melted” moments",
    body: "When fluid is low or baby presses the wall, edges fuse and the face can look squished. We wait, encourage movement, and reschedule if needed—honest images beat filtered marketing.",
  },
] as const;

export function GuideWhatYoullSee() {
  return (
    <section
      id="what-youll-see"
      className="scroll-mt-28 border-t border-line bg-foam py-20 md:scroll-mt-32 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
            Before you book
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-ink md:text-5xl">
            What the scan actually looks like
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft/75 md:text-lg">
            Ultrasound is sound, not light. Knowing the real look of 4D—colours,
            grain, shadows, and slow motion—makes the appointment feel magical
            instead of surprising.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-2 md:gap-3">
          {[
            { src: "/demo/scan-2d.jpg", label: "2D" },
            { src: "/demo/scan-3d.jpg", label: "3D" },
            { src: "/demo/scan-4d.jpg", label: "4D" },
          ].map((shot) => (
            <div key={shot.src} className="relative aspect-[4/3] overflow-hidden bg-ink">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot.src}
                alt={`Example ${shot.label} ultrasound look`}
                className="h-full w-full object-cover"
              />
              <p className="absolute bottom-2 left-2 font-mono text-[10px] tracking-[0.18em] text-foam/80">
                {shot.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {LOOKS.map((item, i) => (
            <article key={item.title} className="border-t border-line pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft/45">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-3 text-2xl tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft/75 md:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-20 bg-ink py-16 text-foam md:mt-24 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal-soft">
                In the room
              </p>
              <h3 className="font-display mt-4 text-3xl leading-tight tracking-tight md:text-4xl">
                What you might see on screen
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foam/60">
                Every baby cooperates differently. Perfect unobstructed portraits
                happen—and so do cord, hands, and naps. Both are real ultrasound.
              </p>
            </div>

            <div className="space-y-8 md:col-span-8">
              {MAY_SEE.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-foam/15 pt-6 first:border-t-0 first:pt-0 md:first:border-t md:first:pt-6"
                >
                  <h4 className="font-display text-xl tracking-tight md:text-2xl">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-foam/65 md:text-base">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-12 max-w-3xl text-xs leading-relaxed text-foam/40">
            Ideal cosmetic 4D is usually 27–32 weeks, when facial fat and fluid
            give the clearest window. We follow ALARA and keep Complete 4D
            sessions to 20 minutes. Bonding scans never replace your doctor or
            clinic care.
          </p>
        </div>
      </div>
    </section>
  );
}
