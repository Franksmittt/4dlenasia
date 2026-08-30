import Image from "next/image";

const images = [
  {
    src: "/studio/studio-room.png",
    alt: "The private scan room with its glowing screen",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/keepsakes/print-28w.jpg",
    alt: "4D keepsake print from a Complete 4D session",
    span: "",
  },
  {
    src: "/studio/scanning-moment.png",
    alt: "A gentle scanning moment",
    span: "",
  },
  {
    src: "/studio/couple-screen.png",
    alt: "Parents watching their baby on the big screen",
    span: "md:col-span-2",
  },
];

export function Gallery() {
  return (
    <section className="bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
              Atmosphere
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-ink md:text-4xl">
              The feeling of the room
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft/70">
            Soft light, unhurried time, and a qualified radiographer guiding
            every glimpse.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {images.map((img) => (
            <div
              key={img.src}
              className={`relative overflow-hidden ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-700 hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, 40vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
