import Link from "next/link";
import { PregnancyTracker } from "@/components/interaction/PregnancyTracker";

export function TrackerSection() {
  return (
    <section className="bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
              Your week by week
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-ink md:text-4xl">
              How big is your baby today?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft/80">
              Tell us when your journey began and we&apos;ll show you where you
              are, what your little one is up to, and the best time to come and
              meet them.
            </p>
          </div>
          <Link
            href="/tracker"
            className="shrink-0 text-sm font-medium text-accent-deep underline-offset-4 hover:underline"
          >
            Open the full tracker →
          </Link>
        </div>

        <div className="mt-10">
          <PregnancyTracker compact />
        </div>
      </div>
    </section>
  );
}
