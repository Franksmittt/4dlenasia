import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Book on WhatsApp",
    body: "Message Nasreen to choose your service and confirm a time that suits you. We’ll guide you on the right week for gender, anatomy, NT, or cosmetic 4D.",
    img: "/studio/booking-whatsapp.png",
    alt: "Booking a session on WhatsApp from home",
  },
  {
    n: "02",
    title: "Arrive prepared",
    body: "Bring what your scan needs: a full bladder for anatomy or NT, or your government clinic card for an antenatal checkup. You’ll be welcomed into a comfortable studio dedicated to your pregnancy.",
    img: "/studio/studio-reception.png",
    alt: "Calm studio waiting area",
  },
  {
    n: "03",
    title: "Meet your baby",
    body: "Your scan is performed by Nasreen Ali, a qualified radiographer with specialised fetal imaging training. On a Complete 4D session you’ll watch real-time movements, stretches, and expressions for up to 20 minutes.",
    img: "/studio/couple-screen.png",
    alt: "Parents watching their baby on the big screen",
  },
  {
    n: "04",
    title: "Take the moment home",
    body: "Complete 4D includes printed pictures, images on disc, online gallery access, and a heartbeat recording, plus weight estimation, gender determination, and gestational aging.",
    img: "/studio/keepsake-prints.png",
    alt: "Parents holding printed ultrasound photos",
  },
];

export function Journey() {
  return (
    <section className="bg-foam py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
            Your visit
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-ink md:text-4xl">
            What to expect during your visit
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft/80">
            When you visit 4D Ultrasound Studio in Lenasia, you are welcomed
            into a comfortable environment dedicated to the health and joy of
            your pregnancy, with clinical care and time to bond.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n} className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={step.img}
                  alt={step.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p className="mt-5 font-display text-sm text-signal">{step.n}</p>
              <h3 className="mt-2 font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft/75">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
