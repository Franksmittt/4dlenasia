import { PRACTITIONER, SITE, WHATSAPP_VOUCHER } from "@/lib/constants";

function Barcode() {
  const bars = [2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2, 1, 3, 1, 2, 4, 1, 3, 2];
  return (
    <div className="flex h-8 items-stretch gap-[2px]" aria-hidden>
      {bars.map((w, i) => (
        <span
          key={i}
          className="bg-ink/80"
          style={{ width: `${w}px` }}
        />
      ))}
    </div>
  );
}

export function GiftVoucher() {
  return (
    <section id="gift-voucher" className="bg-ink py-20 text-foam md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal-soft">
            Gift a scan
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight md:text-5xl">
            The only gift that lets them meet their baby early.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-foam/65 md:text-lg">
            Grandparents, sisters, best friends: gift a Gender Scan or a
            Complete 4D session. Message Nasreen, choose the package, and we
            arrange everything with the parents-to-be.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href={WHATSAPP_VOUCHER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded-full bg-foam px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-mist"
            >
              Enquire about vouchers
            </a>
            <p className="text-xs text-foam/40">Arranged on WhatsApp in minutes</p>
          </div>
        </div>

        {/* The voucher, as an object */}
        <div className="relative">
          <div
            className="absolute -inset-6 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(ellipse, rgba(111,175,160,0.35), transparent 70%)" }}
            aria-hidden
          />
          <div className="relative rotate-[1.5deg] bg-canvas p-7 text-ink shadow-[0_32px_80px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:rotate-0 md:p-9">
            <div className="flex items-start justify-between border-b border-ink/12 pb-5">
              <div>
                <p className="font-display text-lg leading-none">{SITE.name}</p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.24em] text-ink-soft/55">
                  {SITE.address.locality} · Johannesburg
                </p>
              </div>
              <p className="rounded-full border border-signal/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-signal">
                Gift voucher
              </p>
            </div>

            <div className="py-7">
              <p className="text-[10px] uppercase tracking-[0.24em] text-ink-soft/50">
                Admits two
              </p>
              <p className="font-display mt-2 text-2xl leading-snug md:text-3xl">
                One meeting with your baby,
                <br />
                before the world meets them.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-dashed border-ink/20 pt-5 text-xs text-ink-soft/70">
              <div>
                <p className="text-[9px] uppercase tracking-[0.22em] text-ink-soft/45">To</p>
                <p className="mt-1.5 border-b border-ink/15 pb-1">&nbsp;</p>
                <p className="mt-3 text-[9px] uppercase tracking-[0.22em] text-ink-soft/45">From</p>
                <p className="mt-1.5 border-b border-ink/15 pb-1">&nbsp;</p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <Barcode />
                <p className="text-[9px] uppercase tracking-[0.18em] text-ink-soft/45">
                  Redeemed with {PRACTITIONER.name.split(" ")[0]} · by appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
