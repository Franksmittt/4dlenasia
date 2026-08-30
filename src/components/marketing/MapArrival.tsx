import { SITE, WHATSAPP_BOOK } from "@/lib/constants";

const ARRIVAL = [
  {
    step: "01",
    title: "Getting here",
    body: `${SITE.address.street}, ${SITE.address.locality}. Minutes from Soweto, Ennerdale, and Johannesburg South, with free parking at the door.`,
  },
  {
    step: "02",
    title: "When you arrive",
    body: "No queue, no ticket. Your slot is yours alone. Walk in, get comfortable, and we begin when you're ready.",
  },
  {
    step: "03",
    title: "Bring your people",
    body: "Partners, kids, and grandparents are welcome in the room. The big screen means nobody misses the moment.",
  },
] as const;

export function MapArrival() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.postalCode}`,
  )}&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.postalCode}`,
  )}`;

  return (
    <section id="visit" className="border-t border-line bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal">
              Visit the studio
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-ink md:text-5xl">
              One street in Lenasia.
              <br />
              <span className="text-ink-soft/50">Worth the drive from anywhere.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-sm leading-relaxed text-ink-soft/65 md:text-base">
              {SITE.address.full}
            </p>
            <a
              href={directions}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full border border-ink/20 px-5 py-2.5 text-sm text-ink transition hover:border-ink"
            >
              Get directions
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-[1.5fr_1fr]">
          <div className="relative min-h-[320px] overflow-hidden border border-line md:min-h-[440px]">
            <iframe
              src={mapSrc}
              title={`Map to ${SITE.name}, ${SITE.address.full}`}
              className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col divide-y divide-line border border-line bg-foam">
            {ARRIVAL.map((a) => (
              <div key={a.step} className="flex flex-1 flex-col justify-center p-6 md:p-7">
                <p className="font-mono text-[10px] tracking-[0.24em] text-signal">
                  {a.step}
                </p>
                <h3 className="font-display mt-2 text-xl text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft/70">
                  {a.body}
                </p>
              </div>
            ))}
            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-ink p-6 text-foam transition hover:bg-ink-soft md:p-7"
            >
              <span className="text-sm font-medium">WhatsApp before you drive</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
