import { BookingForm } from "@/components/interaction/BookingForm";
import { SITE } from "@/lib/constants";

export function BookingSection() {
  return (
    <section id="book" className="bg-ink py-20 text-foam md:py-28">
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 md:grid-cols-2 md:gap-0 md:px-8">
        <div className="flex flex-col justify-center md:pr-14">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal-soft">
            Book your session
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight md:text-5xl">
            Ready to meet your little one?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foam/65">
            Send the form and it opens WhatsApp with your details. We&apos;ll reply
            with times. Prefer to talk? Call or message us directly.
          </p>

          <div className="mt-10 space-y-5 border-t border-foam/10 pt-8 text-sm">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foam/40">
                Studio
              </p>
              <p className="mt-1 text-foam/85">{SITE.address.full}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foam/40">
                Phone / WhatsApp
              </p>
              <a
                href={`tel:${SITE.phone}`}
                className="mt-1 block text-foam/85 hover:text-foam"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
            <p className="text-xs leading-relaxed text-foam/45">
              Prep depends on the scan; we confirm when you book. Bonding scans
              never replace your doctor or clinic care.
            </p>
          </div>
        </div>

        <div className="border border-foam/10 bg-foam p-7 text-ink md:p-10">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
