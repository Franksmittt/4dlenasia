import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { PageHero } from "@/components/marketing/PageHero";
import { Pricing } from "@/components/marketing/Pricing";
import { SITE, SUBURBS, WHATSAPP_BOOK } from "@/lib/constants";

type Props = { params: Promise<{ suburb: string }> };

export async function generateStaticParams() {
  return SUBURBS.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { suburb } = await params;
  const place = SUBURBS.find((s) => s.slug === suburb);
  if (!place) return {};
  return {
    title: `4D Baby Scan near ${place.name}`,
    description: `Book a premium 4D ultrasound near ${place.name}. Private studio in Lenasia serving Johannesburg South families.`,
  };
}

const LOCATION_IMAGES: Record<string, string> = {
  soweto: "/studio/studio-reception.png",
  mondeor: "/studio/studio-room.png",
  ennerdale: "/studio/scanning-moment.png",
  "kibler-park": "/keepsakes/print-29w.jpg",
  southgate: "/studio/couple-screen.png",
};

export default async function LocationPage({ params }: Props) {
  const { suburb } = await params;
  const place = SUBURBS.find((s) => s.slug === suburb);
  if (!place) notFound();

  const heroImage = LOCATION_IMAGES[place.slug] ?? "/studio/couple-screen.png";

  return (
    <>
      <PageHero
        kicker={`Serving ${place.name}`}
        title={
          <>
            4D baby scans
            <span className="block text-foam/45">near {place.name}</span>
          </>
        }
        description={place.blurb}
        image={heroImage}
        imageAlt={`Prenatal imaging for families near ${place.name}`}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={WHATSAPP_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-foam px-6 py-3 text-sm font-medium text-ink"
          >
            Book from {place.name}
          </a>
          <Link
            href="/packages"
            className="inline-flex rounded-full border border-foam/25 px-6 py-3 text-sm text-foam/90"
          >
            View services
          </Link>
        </div>
        <p className="mt-6 text-xs text-foam/45">
          {place.drive} · Studio at {SITE.address.full}
        </p>
      </PageHero>

      <section className="border-b border-line bg-foam py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden">
              <Image
                src="/studio/studio-reception.png"
                alt=""
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-ink">
                Private Lenasia studio
              </p>
              <p className="text-xs text-ink-soft/60">
                Short drive from {place.name} · Qualified radiographer
              </p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft/70">
            Bonding scans complement, never replace, your doctor or clinic
            care.
          </p>
        </div>
      </section>

      <Pricing />
      <FinalCTA />
    </>
  );
}
