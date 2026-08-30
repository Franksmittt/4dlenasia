import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_BOOK } from "@/lib/constants";

export function GuideSafety() {
  return (
    <section
      id="safety"
      className="scroll-mt-28 bg-canvas md:scroll-mt-32"
    >
      <div className="mx-auto grid max-w-6xl md:grid-cols-12">
        <div className="relative min-h-[360px] md:col-span-5 md:min-h-full">
          <Image
            src="/studio/scanning-moment.png"
            alt="Gentle ultrasound scanning in a calm studio"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-ink/25" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-foam/80">
              ALARA
            </p>
            <p className="mt-2 font-display text-2xl text-foam md:text-3xl">
              As low as reasonably achievable
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-5 py-16 md:col-span-7 md:px-14 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
            Safety, plainly
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-ink md:text-5xl">
            Sound waves, not radiation
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft/80 md:text-lg">
            <p>
              Ultrasound does not use ionising radiation. Bodies such as ACOG
              and ISUOG still ask for prudent use by trained professionals:
              lowest useful power, shortest useful time.
            </p>
            <p>
              That is why our Complete 4D sessions are capped at{" "}
              <strong className="font-medium text-ink">20 minutes</strong>, and
              why every scan is performed by a qualified radiographer.
            </p>
          </div>

          <div className="mt-10 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-ink-soft/50">
                What we are
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft/85">
                A medically trained studio bridging bonding and clinical care.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-ink-soft/50">
                What we are not
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft/85">
                A replacement for your obstetrician or government clinic visits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GuidePrepAndKeepsakes() {
  return (
    <>
      <section
        id="prepare"
        className="scroll-mt-28 border-t border-line bg-foam py-20 md:scroll-mt-32 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
                Before you arrive
              </p>
              <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-ink md:text-4xl">
                How to prepare
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft/70">
                Prep depends on the scan. When you book on WhatsApp, we confirm
                anything specific to your appointment.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:col-span-8">
              <div className="relative overflow-hidden bg-canvas">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/studio/scan-screen-2d.png"
                    alt="2D ultrasound image on the studio monitor"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <div className="border-t border-line p-6">
                  <p className="font-medium text-ink">Anatomy &amp; NT</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft/75">
                    Arrive with a full bladder when advised. It improves the
                    acoustic window and image quality (typically 11–14 weeks for
                    NT; 18–22 for anatomy).
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden bg-canvas">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/studio/practitioner-portrait.png"
                    alt="Qualified radiographer in the studio"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <div className="border-t border-line p-6">
                  <p className="font-medium text-ink">Antenatal checkup</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft/75">
                    Bring your government clinic card. We check blood pressure,
                    glucose, and urine. We do not issue clinic cards for
                    delivery at government facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="keepsakes"
        className="scroll-mt-28 bg-ink py-20 text-foam md:scroll-mt-32 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal-soft">
                After the scan
              </p>
              <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight md:text-5xl">
                What you take home
              </h2>
            </div>
            <p className="md:col-span-5 md:col-start-8 text-sm leading-relaxed text-foam/60 md:text-base">
              Exact inclusions match the package you book. Here is what the
              studio lists for each path.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-foam/10 bg-foam/10 md:grid-cols-3">
            {[
              {
                title: "Gender Scan",
                items: [
                  "Printed pictures",
                  "Weight estimation",
                  "Gestational aging",
                  "Foetal well-being check",
                ],
              },
              {
                title: "Complete 4D",
                items: [
                  "Online gallery access",
                  "Images on disc + print",
                  "Heartbeat recording",
                  "Weight, gender & dating",
                ],
                featured: true,
              },
              {
                title: "Anatomy & NT",
                items: [
                  "Images to take home",
                  "NT: follow-up report",
                  "Structural / screening focus",
                  "Clinical reassurance",
                ],
              },
            ].map((col) => (
              <div
                key={col.title}
                className={`px-6 py-8 md:px-8 md:py-10 ${
                  col.featured ? "bg-foam text-ink" : "bg-ink text-foam"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-[0.2em] ${
                    col.featured ? "text-accent-deep" : "text-signal-soft"
                  }`}
                >
                  {col.featured ? "Most booked" : "Package"}
                </p>
                <h3 className="font-display mt-3 text-2xl tracking-tight">
                  {col.title}
                </h3>
                <ul className="mt-6 space-y-3 text-sm">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className={`flex gap-2 ${
                        col.featured ? "text-ink-soft/80" : "text-foam/70"
                      }`}
                    >
                      <span
                        className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                          col.featured ? "bg-accent" : "bg-signal-soft"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-foam px-7 py-3.5 text-sm font-medium text-ink"
            >
              WhatsApp to book
            </a>
            <Link
              href="/packages"
              className="inline-flex rounded-full border border-foam/25 px-7 py-3.5 text-sm font-medium text-foam/85"
            >
              Compare all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
