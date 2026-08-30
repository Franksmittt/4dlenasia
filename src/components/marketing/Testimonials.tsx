import { TESTIMONIALS, WHATSAPP_BOOK } from "@/lib/constants";

export function Testimonials() {
  const featured = TESTIMONIALS[0];

  return (
    <section className="bg-ink py-20 text-foam md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal-soft">
              From the studio
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight md:text-4xl">
              What families say after they see that face
            </h2>
          </div>

          <blockquote className="md:col-span-7 md:col-start-6">
            <p className="font-display text-2xl leading-snug tracking-tight text-foam md:text-3xl">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-foam/15 pt-6">
              <div>
                <p className="font-medium text-foam">{featured.name}</p>
                <p className="mt-1 text-xs text-foam/45">{featured.meta}</p>
              </div>
              <a
                href={WHATSAPP_BOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-signal-soft underline-offset-4 hover:underline"
              >
                Book your session →
              </a>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
