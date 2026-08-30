import Image from "next/image";

export function AntiHospital() {
  return (
    <section className="bg-canvas py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        <div className="relative min-h-[320px] overflow-hidden md:min-h-0">
          <Image
            src="/studio/studio-room.png"
            alt="Calm private studio atmosphere"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-display text-2xl text-foam md:text-3xl">
            Comfortable care, clinical skill.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
            The difference
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-ink md:text-4xl">
            This isn&apos;t a rushed hospital scan.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft/80">
            Hospital scans are often brief and clinical by design. Our studio is
            built for a memorable, reassuring bonding experience, with the
            clinical training of a qualified radiographer behind every session.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              {
                title: "Time for baby to cooperate",
                body: "If baby is shy, we may ask you to walk or drink something cold. If needed, we will reschedule a follow-up at no extra cost.",
              },
              {
                title: "Comfortable environment",
                body: "A setting designed for expectant families: expertise, advanced technology, and care in one place.",
              },
              {
                title: "Qualified radiographer",
                body: "Every scan with Nasreen Ali, B.Tech Radiography (UJ), specialised in fetal and 4D imaging.",
              },
            ].map((item) => (
              <li key={item.title} className="border-t border-line pt-4">
                <p className="font-medium text-ink">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft/75">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
