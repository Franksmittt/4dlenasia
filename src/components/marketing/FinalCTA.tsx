import { SITE, WHATSAPP_BOOK } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-screen py-20 text-foam md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(61,122,106,0.4),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(111,175,160,0.18),transparent_45%)]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal-soft">
          Ready when you are
        </p>
        <h2 className="font-display mt-5 text-3xl leading-tight tracking-tight md:text-5xl">
          Your baby&apos;s first memory is waiting.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foam/70 md:text-lg">
          Message Nasreen on WhatsApp to check availability for your week of
          pregnancy.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-foam px-8 py-3.5 text-sm font-medium text-ink transition hover:bg-mist"
          >
            WhatsApp to book
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex rounded-full border border-foam/30 px-8 py-3.5 text-sm font-medium text-foam/90 transition hover:border-foam/60"
          >
            Call {SITE.phoneDisplay}
          </a>
        </div>
        <p className="mt-8 text-sm text-foam/50">{SITE.address.full}</p>
      </div>
    </section>
  );
}
