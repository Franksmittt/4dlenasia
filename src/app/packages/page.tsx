import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { PageHero } from "@/components/marketing/PageHero";
import { PACKAGES, SITE, WHATSAPP_BOOK } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Services & Pricing",
  description:
    "Gender scan, Complete 4D, antenatal checkup, detailed anatomy scan, NT scan, and gynaecological pelvic scan in Lenasia. Transparent pricing from R250.",
};

const PACKAGE_IMAGES: Record<string, string> = {
  "gender-scan": "/demo/scan-2d.jpg",
  "complete-4d-scan": "/demo/scan-4d.jpg",
  "maternal-antenatal-checkup": "/studio/practitioner-portrait.png",
  "detailed-anatomy-scan": "/studio/scanning-moment.png",
  "nuchal-translucency-scan": "/weeks/ww12.jpg",
  "gynaecological-pelvic-scan": "/studio/studio-room.png",
};

function priceLabel(price: number) {
  return price > 0 ? `R${price.toLocaleString("en-ZA")}` : "On enquiry";
}

export default function PackagesPage() {
  return (
    <>
      <PageHero
        kicker="Services · Lenasia"
        title={
          <>
            Clear pricing.
            <span className="block text-foam/45">Honest imaging.</span>
          </>
        }
        description="From first-trimester screening and gender reveals to the 27–32 week 4D bonding window. Every service listed with transparent pricing."
        image="/studio/studio-room.png"
        imageAlt="The private scan room at 4D Ultrasound Studio"
      >
        <a
          href={WHATSAPP_BOOK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full bg-foam px-6 py-3 text-sm font-medium text-ink"
        >
          Book on WhatsApp
        </a>
      </PageHero>

      <section className="bg-canvas py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-4 px-5 md:px-8">
          {PACKAGES.map((pkg, i) => (
            <article
              key={pkg.slug}
              className={cn(
                "group grid overflow-hidden border border-line bg-foam md:grid-cols-[0.9fr_1.3fr]",
                pkg.popular && "border-ink",
              )}
            >
              <div className="relative min-h-[220px] md:min-h-full">
                <Image
                  src={PACKAGE_IMAGES[pkg.slug] ?? PACKAGE_IMAGES["complete-4d-scan"]}
                  alt={`${pkg.name} at 4D Ultrasound Studio`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent md:bg-gradient-to-r" />
                <p className="absolute bottom-4 left-4 font-mono text-xs tracking-wider text-foam/80">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>

              <div className="flex flex-col justify-between gap-8 p-7 md:flex-row md:p-10">
                <div className="max-w-xl">
                  <div className="flex flex-wrap items-center gap-3">
                    {pkg.popular && (
                      <span className="rounded-full bg-ink px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-foam">
                        Popular
                      </span>
                    )}
                    {pkg.priceWas != null && (
                      <span className="rounded-full bg-signal/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-accent-deep">
                        Sale
                      </span>
                    )}
                    <p className="text-xs uppercase tracking-[0.18em] text-accent-deep">
                      {pkg.subtitle}
                    </p>
                  </div>
                  <h2 className="font-display mt-3 text-3xl tracking-tight text-ink md:text-4xl">
                    {pkg.name}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft/75 md:text-base">
                    {pkg.description}
                  </p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {pkg.features.slice(0, 4).map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 text-sm text-ink-soft/80"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex shrink-0 flex-col justify-between border-t border-line pt-6 md:w-44 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <div>
                    {pkg.priceWas != null && (
                      <p className="text-sm text-ink-soft/40 line-through">
                        R{pkg.priceWas.toLocaleString("en-ZA")}
                      </p>
                    )}
                    <p className="font-display text-4xl text-ink">
                      {priceLabel(pkg.price)}
                    </p>
                    <p className="mt-2 text-xs text-ink-soft/55">
                      {pkg.duration} · {pkg.weeks}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                        pkg.price > 0
                          ? `Hi Nasreen, I'd like to book ${pkg.name} (R${pkg.price}).`
                          : `Hi Nasreen, I'd like to enquire about ${pkg.name}.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-foam"
                    >
                      Book
                    </a>
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="text-center text-sm text-ink-soft/70 underline-offset-4 hover:underline"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
