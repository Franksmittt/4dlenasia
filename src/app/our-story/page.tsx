import type { Metadata } from "next";
import Image from "next/image";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { PageHero } from "@/components/marketing/PageHero";
import { PRACTITIONER, SITE, WHATSAPP_BOOK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Meet Nasreen Ali",
  description:
    "Nasreen Ali, B.Tech Radiography (UJ), qualified radiographer and founder of 4D Ultrasound Studio in Lenasia.",
};

const CREDENTIALS = [
  {
    label: "2006",
    title: "B.Tech Radiography",
    body: "University of Johannesburg: the clinical foundation behind every scan.",
  },
  {
    label: "2009",
    title: "Fetal & 4D specialised",
    body: "Further training focused on prenatal imaging and volume ultrasound.",
  },
  {
    label: "Studio",
    title: "Lenasia practice",
    body: "Serving Johannesburg South families with 2D gender, 4D bonding, anatomy, NT, and antenatal care.",
  },
] as const;

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        kicker="Founder · Radiographer"
        title={
          <>
            {PRACTITIONER.name}
            <span className="mt-3 block text-2xl font-normal text-foam/50 md:text-3xl">
              {PRACTITIONER.title}
            </span>
          </>
        }
        description={`${PRACTITIONER.credentials}. Graduated 2006, specialised fetal imaging from 2009. Clinical skill with maternal insight.`}
        image="/studio/practitioner-portrait.png"
        imageAlt="Nasreen Ali, radiographer and founder of 4D Ultrasound Studio"
      >
        <a
          href={WHATSAPP_BOOK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full bg-foam px-6 py-3 text-sm font-medium text-ink"
        >
          Book with Nasreen
        </a>
      </PageHero>

      <section className="bg-canvas">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <div className="relative min-h-[420px] md:min-h-[640px]">
            <Image
              src="/studio/studio-room.png"
              alt="The private scan room at 4D Ultrasound Studio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 md:px-14 md:py-24">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
              Why this studio exists
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft/80 md:text-lg">
              <p>
                The first time you see your baby&apos;s face should be the most
                breathtaking moment of your pregnancy, not a rushed clinical
                procedure.
              </p>
              <p>
                I founded {SITE.name} so Johannesburg South families get time,
                clarity, and images you&apos;ll treasure, with a qualified
                radiographer in the room.
              </p>
              <p>
                As a wife and mother of two, I understand the anticipation and
                the quiet worries. Bonding scans complement your doctor or
                clinic care. They never replace it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-foam md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="font-display max-w-xl text-3xl tracking-tight md:text-5xl">
            Credentials that matter in the scan room
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden border border-foam/10 bg-foam/10 md:grid-cols-3">
            {CREDENTIALS.map((item) => (
              <div key={item.label} className="bg-ink px-6 py-8 md:px-8 md:py-10">
                <p className="font-mono text-xs tracking-wider text-signal-soft">
                  {item.label}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foam/60">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
