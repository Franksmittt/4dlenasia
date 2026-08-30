"use client";

import { motion } from "framer-motion";
import { WHATSAPP_BOOK } from "@/lib/constants";

const PRINTS = [
  { src: "/keepsakes/print-28w.jpg", label: "4D STUDIO · 28W0D" },
  { src: "/keepsakes/print-29w.jpg", label: "4D STUDIO · 29W3D" },
  { src: "/keepsakes/print-30w.jpg", label: "4D STUDIO · 30W6D" },
] as const;

const GALLERY = [
  "/keepsakes/gallery-01.jpg",
  "/keepsakes/gallery-02.jpg",
  "/keepsakes/gallery-03.jpg",
  "/keepsakes/gallery-04.jpg",
] as const;

const EXTRAS = [
  {
    k: "01",
    title: "Heartbeat recording",
    body: "The sound that starts everything — captured in-session and yours to keep.",
  },
  {
    k: "02",
    title: "Images on disc",
    body: "Your full 4D set, ready for any screen in the house.",
  },
  {
    k: "03",
    title: "Private online gallery",
    body: "Share the moment with everyone who couldn’t be in the room.",
  },
] as const;

export function KeepsakeShowcase() {
  return (
    <section className="relative overflow-hidden bg-screen py-20 text-foam md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(61,122,106,0.22),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-12">
          <div className="md:col-span-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal-soft">
              The keepsakes
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight md:text-5xl">
              You don&apos;t leave with a memory. You leave with proof.
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 text-sm leading-relaxed text-foam/60 md:text-base">
            Every Complete 4D session ends at a table, not a till: prints in
            hand, images on disc, a private gallery, and your baby&apos;s
            heartbeat to keep.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Keep the print strip — it works */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="mx-auto max-w-[260px] rotate-[-2deg] bg-[#f2f0ea] p-2.5 shadow-[0_28px_70px_rgba(0,0,0,0.55)] md:mx-0">
              {PRINTS.map((print) => (
                <div
                  key={print.src}
                  className="relative mb-2 aspect-[4/3] overflow-hidden bg-black last:mb-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={print.src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <p className="absolute bottom-1 left-1.5 font-mono text-[7px] tracking-wider text-white/70">
                    {print.label}
                  </p>
                </div>
              ))}
            </div>
            <h3 className="mt-8 font-display text-2xl tracking-tight">
              Printed pictures
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-foam/55">
              Physical prints from your session. The ones that end up on the
              fridge and in grandma&apos;s handbag.
            </p>
          </motion.div>

          {/* Editorial extras + real gallery mosaic */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="md:col-span-7"
          >
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={GALLERY[0]}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-2 md:gap-3">
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={GALLERY[1]}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {GALLERY.slice(2).map((src) => (
                    <div
                      key={src}
                      className="relative aspect-square overflow-hidden bg-black"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ul className="mt-10 space-y-0 border-t border-foam/15">
              {EXTRAS.map((item) => (
                <li
                  key={item.k}
                  className="grid gap-2 border-b border-foam/15 py-5 sm:grid-cols-[3rem_1fr] sm:gap-6"
                >
                  <p className="font-mono text-[11px] tracking-[0.18em] text-signal-soft">
                    {item.k}
                  </p>
                  <div>
                    <h3 className="font-display text-xl tracking-tight md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foam/55">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-5">
          <a
            href={WHATSAPP_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-foam px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-mist"
          >
            Book the Complete 4D · R900
          </a>
          <p className="text-xs text-foam/40">
            Plus weight estimation, gender determination &amp; gestational aging
          </p>
        </div>
      </div>
    </section>
  );
}
