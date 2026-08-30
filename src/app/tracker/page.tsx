import type { Metadata } from "next";
import { PregnancyTracker } from "@/components/interaction/PregnancyTracker";
import { Stages } from "@/components/marketing/Stages";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { TrackerNotesSignal } from "@/components/marketing/TrackerNotesSignal";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = {
  title: "Pregnancy Week Calculator | How Big Is My Baby?",
  description:
    "Enter your dates and see exactly where you are in your pregnancy, week by week. Baby size comparisons, development milestones, and the best time for your 4D scan.",
};

export default function TrackerPage() {
  return (
    <>
      <PageHero
        kicker="Week by week"
        title={
          <>
            How big is
            <span className="block text-foam/45">your baby today?</span>
          </>
        }
        description="Tell us when your journey began. We’ll show where you are, what your little one is up to this week, and when cosmetic 4D makes sense."
        image="/weeks/ww12.jpg"
        imageAlt="Week-by-week fetal development illustration"
      />

      <section className="bg-canvas py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <PregnancyTracker />
        </div>
      </section>

      <TrackerNotesSignal />
      <Stages />
      <FinalCTA />
    </>
  );
}
