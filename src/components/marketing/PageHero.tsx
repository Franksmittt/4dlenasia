import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  kicker: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
};

export function PageHero({
  kicker,
  title,
  description,
  children,
  image,
  imageAlt = "",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-ink text-foam",
        className,
      )}
    >
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        </div>
      )}

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-28 md:grid-cols-12 md:px-8 md:pb-24 md:pt-36">
        <div className="md:col-span-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-signal-soft">
            {kicker}
          </p>
          <h1 className="font-display mt-5 max-w-[16ch] text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.98] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foam/65 md:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}
