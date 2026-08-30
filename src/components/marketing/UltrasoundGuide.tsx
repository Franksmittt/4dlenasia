import Link from "next/link";
import { ScanModeDemo } from "@/components/interaction/ScanModeDemo";

export function UltrasoundGuide() {
  return (
    <section id="ultrasound-guide" className="bg-ink py-20 text-foam md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal-soft">
              Plain English
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight md:text-5xl">
              2D. 3D. 4D.
              <br />
              <span className="text-foam/45">See the difference yourself.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foam/55">
              Plus what the real scan looks like—amber tones, grain, shadows,
              and honest expectations before you book.
            </p>
          </div>
          <Link
            href="/understanding-ultrasound"
            className="shrink-0 text-sm font-medium text-signal-soft underline-offset-4 hover:underline"
          >
            Open the full clinical guide →
          </Link>
        </div>

        <div className="mt-14">
          <ScanModeDemo />
        </div>
      </div>
    </section>
  );
}
