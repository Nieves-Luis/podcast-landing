const CTA_LINKS = [
  { href: "#youtube", label: "Ver episodios" },
  { href: "#spotify", label: "Escuchar en Spotify" },
  { href: "#newsletter", label: "Unirme a la comunidad" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 px-6 py-24 text-center shadow-[0_0_60px_rgba(255,213,79,0.08)] sm:px-12"
    >
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,213,79,0.28),_transparent_65%)] blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,213,79,0.18),_transparent_65%)] blur-3xl" />

      <div className="relative mx-auto max-w-3xl space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-zinc-400">Podcast</p>
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Temporada K
        </h1>
        <p className="text-lg text-zinc-300 sm:text-xl">
          Conversaciones profundas con líderes creativos y emprendedores latinoamericanos.
          Aprende, inspírate y recarga tu energía para la semana.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {CTA_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-2 text-sm font-medium text-white transition hover:border-[#FFD54F] hover:bg-[#FFD54F]/20 hover:text-[#FFD54F]"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
