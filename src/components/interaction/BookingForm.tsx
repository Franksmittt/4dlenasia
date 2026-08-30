"use client";

import { useState } from "react";
import { PACKAGES, SITE } from "@/lib/constants";

export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pkg: PACKAGES.find((p) => p.popular)?.name ?? PACKAGES[0].name,
    weeks: "",
    date: "",
    notes: "",
  });
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi Nasreen, I'd like to book a scan.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Package: ${form.pkg}`,
      form.weeks && `Weeks pregnant: ${form.weeks}`,
      form.date && `Preferred date: ${form.date}`,
      form.notes && `Notes: ${form.notes}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  const inputClass =
    "w-full border border-line bg-foam px-4 py-3 text-sm text-ink placeholder:text-ink-soft/40 outline-none transition focus:border-ink";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-name" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-soft/70">
            Your name *
          </label>
          <input
            id="bf-name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="e.g. Aaliyah"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="bf-phone" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-soft/70">
            Phone / WhatsApp *
          </label>
          <input
            id="bf-phone"
            required
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="e.g. 083 123 4567"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-pkg" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-soft/70">
            Package
          </label>
          <select id="bf-pkg" value={form.pkg} onChange={update("pkg")} className={inputClass}>
            {PACKAGES.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}{" "}
                {p.price > 0 ? `(R${p.price.toLocaleString("en-ZA")})` : "(on enquiry)"}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet, please advise</option>
          </select>
        </div>
        <div>
          <label htmlFor="bf-weeks" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-soft/70">
            How far along?
          </label>
          <input
            id="bf-weeks"
            value={form.weeks}
            onChange={update("weeks")}
            placeholder="e.g. 28 weeks"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="bf-date" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-soft/70">
          Preferred date &amp; time
        </label>
        <input
          id="bf-date"
          value={form.date}
          onChange={update("date")}
          placeholder="e.g. Saturday morning, or 14 March"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="bf-notes" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-soft/70">
          Anything we should know?
        </label>
        <textarea
          id="bf-notes"
          rows={3}
          value={form.notes}
          onChange={update("notes")}
          placeholder="Twins? Bringing the grandparents? Special occasion?"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-foam transition hover:bg-ink-soft"
      >
        Send booking request on WhatsApp
      </button>

      {sent && (
        <p className="text-sm text-accent-deep">
          Your WhatsApp should have opened with your details filled in. Just
          press send and we&apos;ll confirm your slot.
        </p>
      )}

      <p className="text-xs leading-relaxed text-ink-soft/55">
        Your details go directly to our WhatsApp and nothing is stored online.
        We only use them to confirm your appointment.
      </p>
    </form>
  );
}
