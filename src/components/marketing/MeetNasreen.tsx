import Image from "next/image";
import Link from "next/link";
import { PRACTITIONER } from "@/lib/constants";

export function MeetNasreen() {
  return (
    <section className="bg-ink py-20 text-foam md:py-28">
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        <div className="order-2 flex flex-col justify-center md:order-1">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal-soft">
            Your guide
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight md:text-4xl">
            Clinical training. Compassionate care.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foam/70">
            I am {PRACTITIONER.name}, a qualified radiographer with a B.Tech from
            the University of Johannesburg (2006) and specialised training in
            fetal and 4D ultrasound imaging from 2009. As a wife and mother of
            two, I bring both professional expertise and personal insight to
            every session.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foam/70">
            Continuous education keeps our imaging current. Your bonding scan is
            warm and unhurried, and it never replaces your routine doctor or
            clinic care.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-foam/20 px-4 py-2 text-foam/85">
              {PRACTITIONER.credentials}
            </span>
            <span className="rounded-full border border-foam/20 px-4 py-2 text-foam/85">
              Fetal &amp; 4D specialised (2009)
            </span>
            <span className="rounded-full border border-foam/20 px-4 py-2 text-foam/85">
              Mother of two
            </span>
          </div>

          <Link
            href="/our-story"
            className="mt-8 inline-flex text-sm font-medium text-signal-soft underline-offset-4 hover:underline"
          >
            Read Nasreen&apos;s story →
          </Link>
        </div>

        <div className="relative order-1 min-h-[360px] overflow-hidden md:order-2 md:min-h-0">
          <Image
            src="/studio/practitioner-portrait.png"
            alt="Nasreen Ali, qualified radiographer, in the studio"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="font-display text-2xl">{PRACTITIONER.name}</p>
            <p className="mt-1 text-sm text-foam/75">{PRACTITIONER.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
