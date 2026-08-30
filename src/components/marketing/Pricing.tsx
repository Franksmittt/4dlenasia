import Link from "next/link";
import { PACKAGES, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

function priceLabel(price: number) {
  return price > 0 ? `R${price.toLocaleString("en-ZA")}` : "On enquiry";
}

export function Pricing() {
  return (
    <section id="packages" className="bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
              Our services
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-ink md:text-5xl">
              Choose your glimpse
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft/80 md:text-lg">
              Transparent pricing. Ideal cosmetic 4D is 27–32 weeks; gender is
              confirmed on 2D from 16 weeks.
            </p>
          </div>
          <Link
            href="/packages"
            className="shrink-0 text-sm font-medium text-accent-deep underline-offset-4 hover:underline"
          >
            Full service list →
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.slug}
              className={cn(
                "relative flex flex-col border p-7 md:p-8",
                pkg.popular
                  ? "border-ink bg-ink text-foam"
                  : "border-line bg-foam text-ink",
              )}
            >
              {pkg.popular && (
                <p className="absolute -top-3 left-7 rounded-full bg-signal px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-ink">
                  Popular
                </p>
              )}
              {pkg.priceWas != null && (
                <p
                  className={cn(
                    "absolute -top-3 right-7 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider",
                    pkg.popular ? "bg-foam text-ink" : "bg-ink text-foam",
                  )}
                >
                  Sale
                </p>
              )}
              <p
                className={cn(
                  "text-xs uppercase tracking-[0.18em]",
                  pkg.popular ? "text-signal-soft" : "text-accent-deep",
                )}
              >
                {pkg.subtitle}
              </p>
              <h3 className="font-display mt-3 text-2xl md:text-3xl">{pkg.name}</h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  pkg.popular ? "text-foam/70" : "text-ink-soft/75",
                )}
              >
                {pkg.description}
              </p>

              <div className="mt-8 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                {pkg.priceWas != null && (
                  <span
                    className={cn(
                      "text-lg line-through",
                      pkg.popular ? "text-foam/40" : "text-ink-soft/40",
                    )}
                  >
                    R{pkg.priceWas.toLocaleString("en-ZA")}
                  </span>
                )}
                <span className="font-display text-4xl tracking-tight">
                  {priceLabel(pkg.price)}
                </span>
              </div>
              <p
                className={cn(
                  "mt-1 text-xs",
                  pkg.popular ? "text-foam/55" : "text-ink-soft/55",
                )}
              >
                {pkg.duration} · {pkg.weeks}
              </p>

              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {pkg.features.slice(0, 5).map((f) => (
                  <li key={f} className="flex gap-2">
                    <span
                      className={cn(
                        "mt-1.5 h-1 w-1 shrink-0 rounded-full",
                        pkg.popular ? "bg-signal-soft" : "bg-accent",
                      )}
                    />
                    <span className={pkg.popular ? "text-foam/85" : "text-ink-soft/85"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                    pkg.price > 0
                      ? `Hi Nasreen, I'd like to book ${pkg.name} (R${pkg.price}).`
                      : `Hi Nasreen, I'd like to enquire about ${pkg.name}.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition",
                    pkg.popular
                      ? "bg-foam text-ink hover:bg-mist"
                      : "bg-ink text-foam hover:bg-ink-soft",
                  )}
                >
                  Book this service
                </a>
                <Link
                  href={`/packages/${pkg.slug}`}
                  className={cn(
                    "text-center text-sm underline-offset-4 hover:underline",
                    pkg.popular ? "text-foam/70" : "text-ink-soft/70",
                  )}
                >
                  Full details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
