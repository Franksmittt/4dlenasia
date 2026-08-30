import { FAQS, WHATSAPP_BOOK } from "@/lib/constants";
import { FAQClient } from "@/components/marketing/FAQClient";

export function FAQ() {
  return (
    <section id="faq" className="bg-foam py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
            Questions
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-ink md:text-5xl">
            Before you book
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft/70 md:text-lg">
            Safety, timing, take-homes, and vouchers — answered from studio
            policy, not guesswork.
          </p>
        </div>

        <div className="mt-14 md:mt-16">
          <FAQClient items={[...FAQS]} />
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p className="text-sm text-ink-soft/50">
            Still unsure about your week?{" "}
            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-deep underline-offset-4 hover:underline"
            >
              Message Nasreen on WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
