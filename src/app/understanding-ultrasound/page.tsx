import type { Metadata } from "next";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { GiftVoucher } from "@/components/marketing/GiftVoucher";
import { GuideChapterNav } from "@/components/guide/GuideChapterNav";
import { GuideHero } from "@/components/guide/GuideHero";
import { GuideModes } from "@/components/guide/GuideModes";
import { GuideTimeline } from "@/components/guide/GuideTimeline";
import { GuideWhatYoullSee } from "@/components/guide/GuideWhatYoullSee";
import {
  GuidePrepAndKeepsakes,
  GuideSafety,
} from "@/components/guide/GuidePrepAndKeepsakes";
import { ScanModeDemo } from "@/components/interaction/ScanModeDemo";
import { WeekPackageFinder } from "@/components/interaction/WeekPackageFinder";

export const metadata: Metadata = {
  title: "Understanding 2D, 3D & 4D Ultrasound",
  description:
    "What 2D, 3D and 4D baby scans look like, when to book, ALARA safety, preparation, and what you take home at 4D Ultrasound Studio in Lenasia.",
};

export default function UnderstandingUltrasoundPage() {
  return (
    <>
      <GuideHero />
      <GuideChapterNav />
      <GuideModes />
      <GuideWhatYoullSee />
      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal-soft">
            Interactive
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight tracking-tight text-foam md:text-5xl">
            Switch modes. Watch the image change.
          </h2>
          <div className="mt-10">
            <ScanModeDemo />
          </div>
        </div>
      </section>
      <GuideTimeline />
      <GuideSafety />
      <GuidePrepAndKeepsakes />
      <WeekPackageFinder />
      <GiftVoucher />
      <FinalCTA />
    </>
  );
}
