import Link from "next/link";
import { SITE, WHATSAPP_BOOK } from "@/lib/constants";

const nav = [
  { href: "/packages", label: "Services" },
  { href: "/understanding-ultrasound", label: "2D · 3D · 4D" },
  { href: "/tracker", label: "Week by Week" },
  { href: "/our-story", label: "Nasreen" },
  { href: "/#gift-voucher", label: "Gift voucher" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#book", label: "Book" },
  { href: "/#visit", label: "Visit" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-foam">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="font-display text-xl tracking-tight">
              4D Ultrasound <span className="text-signal-soft">Studio</span>
            </Link>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-foam/50">
              Private prenatal imaging in Lenasia for Johannesburg South
              families.
            </p>
          </div>
          <a
            href={WHATSAPP_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-foam px-6 py-3 text-sm font-medium text-ink transition hover:bg-mist"
          >
            Book on WhatsApp
          </a>
        </div>

        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-8 text-sm text-foam/70">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-foam"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.18em] text-foam/35">
            Serving
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foam/60">
            {SITE.areas.map((area) =>
              area === "Lenasia" ? (
                <span key={area}>{area}</span>
              ) : (
                <Link
                  key={area}
                  href={`/locations/${area.toLowerCase().replace(/\s+/g, "-")}`}
                  className="transition hover:text-foam"
                >
                  {area}
                </Link>
              ),
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-foam/45 md:flex-row md:items-center md:justify-between">
          <p>
            {SITE.address.full} ·{" "}
            <a href={`tel:${SITE.phone}`} className="hover:text-foam/70">
              {SITE.phoneDisplay}
            </a>
            {" · "}
            <a href={`mailto:${SITE.email}`} className="hover:text-foam/70">
              {SITE.email}
            </a>
          </p>
          <p>
            © {new Date().getFullYear()} {SITE.name} · Bonding scans complement,
            and never replace, your doctor or clinic care.
          </p>
        </div>
      </div>
    </footer>
  );
}
