import { WHATSAPP_BOOK } from "@/lib/constants";

export function ShyBabyGuarantee() {
  return (
    <section id="guarantee" className="relative overflow-hidden bg-screen py-20 text-foam md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(111,175,160,0.16),transparent_55%)]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal-soft">
          If baby is shy
        </p>
        <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight md:text-5xl">
          We work with your baby&apos;s timing
        </h2>
        <p className="mt-6 text-base leading-relaxed text-foam/65 md:text-lg">
          If your little one is facing away, we may ask you to take a short walk
          or drink something cold. If we still cannot achieve a clear view, we
          will reschedule a follow-up session at no extra cost.
        </p>
        <a
          href={WHATSAPP_BOOK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-full bg-foam px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-mist"
        >
          Book with peace of mind
        </a>
      </div>
    </section>
  );
}
