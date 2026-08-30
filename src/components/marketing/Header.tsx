"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { WHATSAPP_BOOK } from "@/lib/constants";
import { cn } from "@/lib/utils";

const links = [
  { href: "/packages", label: "Services" },
  { href: "/understanding-ultrasound", label: "2D · 3D · 4D" },
  { href: "/tracker", label: "Week by Week" },
  { href: "/our-story", label: "Nasreen" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#book", label: "Book" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-foam/90 backdrop-blur-xl border-b border-line shadow-[0_10px_40px_rgba(20,17,15,0.06)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link href="/" className="group relative z-10" onClick={() => setOpen(false)}>
          <span
            className={cn(
              "font-display text-[1.15rem] tracking-tight transition-colors md:text-xl",
              scrolled || open ? "text-ink" : "text-foam",
            )}
          >
            4D Ultrasound{" "}
            <span className={scrolled || open ? "text-accent-deep" : "text-signal-soft"}>
              Studio
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wide transition-opacity hover:opacity-70",
                scrolled ? "text-ink-soft" : "text-foam/90",
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:scale-[1.02]",
              scrolled
                ? "bg-ink text-foam"
                : "bg-foam/95 text-ink shadow-[0_8px_30px_rgba(0,0,0,0.18)]",
            )}
          >
            Book on WhatsApp
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className={cn(
            "relative z-10 flex h-10 w-10 items-center justify-center md:hidden",
            scrolled || open ? "text-ink" : "text-foam",
          )}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={cn(
                "block h-0.5 w-6 origin-center bg-current transition",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-current transition",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 origin-center bg-current transition",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-400 bg-foam",
          open ? "max-h-[28rem] opacity-100 border-b border-line" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-ink-soft"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-foam"
            onClick={() => setOpen(false)}
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
