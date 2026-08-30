import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_BOOK } from "@/lib/constants";

export function GuideHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-foam">
      <div className="absolute inset-0">
        <Image
          src="/studio/couple-screen.png"
          alt="Parents watching their baby in 4D on the studio screen"
          fill
          priority
          className="object-cover object-[center_30%] opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
      </div>

      <div className="relative mx-auto grid min-h-[88svh] max-w-6xl items-end gap-10 px-5 pb-14 pt-32 md:grid-cols-12 md:px-8 md:pb-20 md:pt-40">
        <div className="md:col-span-7">
          <p className="animate-rise text-[11px] font-medium uppercase tracking-[0.32em] text-signal-soft">
            Clinical guide · Lenasia
          </p>
          <h1 className="font-display animate-rise animate-rise-delay-1 mt-6 max-w-[11ch] text-[clamp(2.8rem,8vw,5.6rem)] leading-[0.95] tracking-tight">
            How ultrasound
            <span className="block text-foam/45">actually works.</span>
          </h1>
          <p className="animate-rise animate-rise-delay-2 mt-8 max-w-md text-base leading-relaxed text-foam/70 md:text-lg">
            What the image looks like, when to book, safety, and what you take
            home—reading material for parents before they WhatsApp to book.
          </p>
          <div className="animate-rise animate-rise-delay-3 mt-10 flex flex-wrap gap-3">
            <a
              href="#dimensions"
              className="inline-flex rounded-full bg-foam px-6 py-3 text-sm font-medium text-ink"
            >
              Start with dimensions
            </a>
            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-foam/25 px-6 py-3 text-sm font-medium text-foam/90"
            >
              Book with Nasreen
            </a>
          </div>
        </div>

        <div className="md:col-span-5 md:justify-self-end">
          <div className="grid max-w-xs grid-cols-3 gap-px overflow-hidden border border-foam/15 bg-foam/10 backdrop-blur-sm">
            {[
              { k: "2D", v: "Clinical" },
              { k: "3D", v: "Still" },
              { k: "4D", v: "Live" },
            ].map((item) => (
              <div key={item.k} className="bg-ink/60 px-3 py-5 text-center">
                <p className="font-display text-2xl tracking-tight">{item.k}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-foam/45">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-foam/40">
            Written from studio policy + obstetric imaging standards.
            Bonding scans never replace your doctor or clinic.
          </p>
          <Link
            href="/packages"
            className="mt-3 inline-flex text-xs font-medium text-signal-soft underline-offset-4 hover:underline"
          >
            View services →
          </Link>
        </div>
      </div>
    </section>
  );
}
