"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { WHATSAPP_BOOK } from "@/lib/constants";

export function StickyBookingFooter() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 420);
  });

  return (
    <motion.div
      initial={false}
      animate={visible ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 28 }}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-foam/90 px-4 py-3 backdrop-blur-xl md:hidden pb-safe"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-ink">Book a scan</p>
          <p className="text-xs text-ink-soft/70">WhatsApp Nasreen · Lenasia</p>
        </div>
        <a
          href={WHATSAPP_BOOK}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-foam"
        >
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
