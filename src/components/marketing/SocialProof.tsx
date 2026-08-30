export function SocialProof() {
  const stats = [
    { value: "2006", label: "B.Tech Radiography (UJ)" },
    { value: "20 min", label: "Complete 4D sessions" },
    { value: "R250", label: "Antenatal checkups from" },
    { value: "Free", label: "Follow-up if baby is shy" },
  ];

  return (
    <section id="trust" className="border-b border-line bg-foam">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-line md:grid-cols-4 md:px-8">
        {stats.map((s) => (
          <div key={s.label} className="px-5 py-8 text-center md:py-10">
            <p className="font-display text-2xl text-ink md:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs text-ink-soft/70 md:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
