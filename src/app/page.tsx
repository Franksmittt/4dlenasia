import { Hero } from "@/components/marketing/Hero";
import { SocialProof } from "@/components/marketing/SocialProof";
import { Manifesto } from "@/components/marketing/Manifesto";
import { AntiHospital } from "@/components/marketing/AntiHospital";
import { Journey } from "@/components/marketing/Journey";
import { MeetNasreen } from "@/components/marketing/MeetNasreen";
import { UltrasoundGuide } from "@/components/marketing/UltrasoundGuide";
import { TrackerSection } from "@/components/marketing/TrackerSection";
import { Gallery } from "@/components/marketing/Gallery";
import { ShyBabyGuarantee } from "@/components/marketing/ShyBabyGuarantee";
import { Pricing } from "@/components/marketing/Pricing";
import { GiftVoucher } from "@/components/marketing/GiftVoucher";
import { Testimonials } from "@/components/marketing/Testimonials";
import { FAQ } from "@/components/marketing/FAQ";
import { BookingSection } from "@/components/marketing/BookingSection";
import { KeepsakeShowcase } from "@/components/marketing/KeepsakeShowcase";
import { MapArrival } from "@/components/marketing/MapArrival";
import { WeekPackageFinder } from "@/components/interaction/WeekPackageFinder";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Manifesto />
      <AntiHospital />
      <Journey />
      <UltrasoundGuide />
      <MeetNasreen />
      <TrackerSection />
      <WeekPackageFinder />
      <ShyBabyGuarantee />
      <Pricing />
      <KeepsakeShowcase />
      <GiftVoucher />
      <Gallery />
      <Testimonials />
      <FAQ />
      <BookingSection />
      <MapArrival />
    </>
  );
}
