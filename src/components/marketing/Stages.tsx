const stages = [
  {
    weeks: "11–14",
    title: "NT screening",
    body: "Early screening that helps assess development and chromosomal risk. Often the first clear look at shape and movement.",
    tag: "NT Scan · R1 000",
  },
  {
    weeks: "16+",
    title: "Gender reveal",
    body: "Gender confirmed accurately on 2D from 16 weeks. 4D is not required for sex determination.",
    tag: "Gender Scan · R750",
  },
  {
    weeks: "18–22",
    title: "Detailed anatomy",
    body: "The mid-pregnancy structural check: organs, limbs, spine, brain, heart, placenta, and fluid.",
    tag: "Anatomy · R1 000",
  },
  {
    weeks: "27–32",
    title: "Cosmetic 4D",
    body: "The golden bonding window. Features defined, fluid still present. Not recommended after 33 weeks.",
    tag: "Complete 4D · R900",
  },
];

export function Stages() {
  return (
    <section className="bg-foam py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
            Timing your scan
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-ink md:text-4xl">
            What you&apos;ll see at every stage
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage) => (
            <div key={stage.weeks} className="flex flex-col bg-foam p-7">
              <p className="font-mono text-xs tracking-wider text-accent-deep">
                {stage.weeks} wks
              </p>
              <h3 className="font-display mt-3 text-xl tracking-tight text-ink">
                {stage.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft/75">
                {stage.body}
              </p>
              <p className="mt-6 text-[11px] font-medium uppercase tracking-wide text-ink-soft/50">
                {stage.tag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
