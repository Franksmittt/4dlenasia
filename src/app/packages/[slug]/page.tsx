import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { KeepsakeShowcase } from "@/components/marketing/KeepsakeShowcase";
import { PACKAGES, SITE } from "@/lib/constants";
import { getServiceContent } from "@/lib/service-content";

type Props = { params: Promise<{ slug: string }> };

function priceLabel(price: number) {
  return price > 0 ? `R${price.toLocaleString("en-ZA")}` : "On enquiry";
}

export async function generateStaticParams() {
  return PACKAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = PACKAGES.find((p) => p.slug === slug);
  const content = getServiceContent(slug);
  if (!pkg) return {};
  return {
    title: `${pkg.name}${pkg.price > 0 ? ` | R${pkg.price}` : ""}`,
    description: content?.intro ?? pkg.description,
  };
}

const HERO_IMG: Record<string, string> = {
  "gender-scan": "/demo/scan-2d.jpg",
  "complete-4d-scan": "/demo/scan-4d.jpg",
  "maternal-antenatal-checkup": "/studio/practitioner-portrait.png",
  "detailed-anatomy-scan": "/studio/scanning-moment.png",
  "nuchal-translucency-scan": "/weeks/ww12.jpg",
  "gynaecological-pelvic-scan": "/studio/studio-room.png",
};

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = PACKAGES.find((p) => p.slug === slug);
  if (!pkg) notFound();

  const content = getServiceContent(slug);
  const related = (content?.relatedSlugs ?? [])
    .map((s) => PACKAGES.find((p) => p.slug === s))
    .filter(Boolean);

  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    pkg.price > 0
      ? `Hi Nasreen, I'd like to book ${pkg.name} (R${pkg.price}).`
      : `Hi Nasreen, I'd like to enquire about ${pkg.name}.`,
  )}`;

  const faqJsonLd =
    content && content.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: content.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <section className="relative isolate overflow-hidden bg-ink text-foam">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMG[pkg.slug] ?? HERO_IMG["complete-4d-scan"]}
            alt=""
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
          <Link
            href="/packages"
            className="text-xs uppercase tracking-[0.18em] text-foam/45 hover:text-foam"
          >
            ← All services
          </Link>
          <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal-soft">
                {pkg.subtitle}
              </p>
              <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight md:text-5xl">
                {content?.h1 ?? pkg.name}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-foam/70 md:text-lg">
                {content?.intro ?? pkg.description}
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <div className="border border-foam/15 bg-ink/50 p-6 backdrop-blur-sm">
                <div className="flex flex-wrap items-baseline gap-3">
                  {pkg.priceWas != null && (
                    <span className="text-lg text-foam/35 line-through">
                      R{pkg.priceWas.toLocaleString("en-ZA")}
                    </span>
                  )}
                  <p className="font-display text-4xl">{priceLabel(pkg.price)}</p>
                </div>
                <p className="mt-2 text-sm text-foam/50">
                  {pkg.duration} · {pkg.weeks}
                </p>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center rounded-full bg-foam px-5 py-3 text-sm font-medium text-ink"
                >
                  Book this service
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_280px] md:px-8">
          <div className="space-y-14">
            {content?.sections.map((section) => (
              <div key={section.title} className="border-t border-line pt-8">
                <h2 className="font-display text-2xl text-ink md:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-soft/80">
                  {section.body}
                </p>
              </div>
            ))}

            <div className="border-t border-line pt-8">
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                What&apos;s included
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex gap-3 text-ink-soft/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {content && content.prepare.length > 0 && (
              <div className="border-t border-line pt-8">
                <h2 className="font-display text-2xl text-ink md:text-3xl">
                  How to prepare
                </h2>
                <ul className="mt-6 space-y-3">
                  {content.prepare.map((item) => (
                    <li key={item} className="flex gap-3 text-ink-soft/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content && content.faqs.length > 0 && (
              <div className="border-t border-line pt-8">
                <h2 className="font-display text-2xl text-ink md:text-3xl">
                  Frequently asked questions
                </h2>
                <div className="mt-8 divide-y divide-line border-t border-line">
                  {content.faqs.map((faq) => (
                    <details key={faq.q} className="group py-5">
                      <summary className="cursor-pointer list-none font-medium text-ink marker:content-none">
                        <span className="flex items-start justify-between gap-4">
                          {faq.q}
                          <span className="text-ink-soft/40 transition group-open:rotate-45">
                            +
                          </span>
                        </span>
                      </summary>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft/75">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="h-fit border border-line bg-foam p-6 md:sticky md:top-28">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-deep">
              Book {pkg.name}
            </p>
            <p className="font-display mt-3 text-3xl text-ink">
              {priceLabel(pkg.price)}
            </p>
            <p className="mt-1 text-sm text-ink-soft/60">
              {pkg.duration} · {pkg.weeks}
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-foam"
            >
              WhatsApp to book
            </a>
            {related.length > 0 && (
              <div className="mt-8 border-t border-line pt-6">
                <p className="text-xs font-medium uppercase tracking-wide text-ink-soft/55">
                  Related services
                </p>
                <ul className="mt-3 space-y-2">
                  {related.map(
                    (r) =>
                      r && (
                        <li key={r.slug}>
                          <Link
                            href={`/packages/${r.slug}`}
                            className="text-sm text-ink underline-offset-4 hover:underline"
                          >
                            {r.name}
                          </Link>
                        </li>
                      ),
                  )}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      {pkg.slug === "complete-4d-scan" && <KeepsakeShowcase />}

      <FinalCTA />
    </>
  );
}
