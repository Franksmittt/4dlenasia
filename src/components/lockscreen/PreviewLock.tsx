import { DEVELOPER, SITE, WHATSAPP_DEVELOPER } from "@/lib/constants";

export function PreviewLock() {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-lock-title"
      className="grain fixed inset-0 z-[10000] flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-screen px-5 py-16 text-foam"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_10%,rgba(61,122,106,0.28),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_90%,rgba(111,175,160,0.16),transparent_45%)]" />

      <div className="relative w-full max-w-lg text-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal-soft">
          {SITE.name}
        </p>

        <div
          className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full border border-white/12 bg-white/5"
          aria-hidden
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 text-foam/80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4.5" y="11" width="15" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
        </div>

        <h1
          id="preview-lock-title"
          className="font-display mt-8 text-3xl leading-tight tracking-tight md:text-[2.6rem]"
        >
          This preview is no longer available
        </h1>

        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-foam/65 md:text-lg">
          This website preview has expired. To restore access, contact:
        </p>

        <div className="mx-auto mt-10 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-8 backdrop-blur-sm">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-foam/40">
            Contact
          </p>
          <p className="font-display mt-3 text-2xl tracking-tight md:text-3xl">
            {DEVELOPER.name}
          </p>
          <a
            href={`tel:${DEVELOPER.phone}`}
            className="mt-3 inline-block text-xl tracking-wide text-signal-soft transition hover:text-foam md:text-2xl"
          >
            {DEVELOPER.phoneDisplay}
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${DEVELOPER.phone}`}
            className="inline-flex w-full items-center justify-center rounded-full bg-foam px-8 py-3.5 text-sm font-medium text-ink transition hover:bg-mist sm:w-auto"
          >
            Call {DEVELOPER.phoneDisplay}
          </a>
          <a
            href={WHATSAPP_DEVELOPER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-foam/30 px-8 py-3.5 text-sm font-medium text-foam/90 transition hover:border-foam/60 sm:w-auto"
          >
            WhatsApp {DEVELOPER.name}
          </a>
        </div>
      </div>
    </div>
  );
}
