const YOUTUBE_URL = "https://www.youtube.com/@TemporadaK";
const SPOTIFY_URL =
  "https://open.spotify.com/show/6RMEec8rzNUEFgkblpAHN8?si=f1e833a062264334";
const INSTAGRAM_URL = "https://www.instagram.com/temporada.k/";

const CTA_LINKS = [
  {
    href: YOUTUBE_URL,
    label: "Ver en YouTube",
    ariaLabel: "Abrir el canal de YouTube de Temporada K en una nueva pestaña",
  },
  {
    href: SPOTIFY_URL,
    label: "Escuchar en Spotify",
    ariaLabel: "Abrir el podcast Temporada K en Spotify en una nueva pestaña",
  },
  {
    href: INSTAGRAM_URL,
    label: "Instagram",
    ariaLabel: "Abrir la cuenta de Instagram de Temporada K en una nueva pestaña",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 px-6 py-24 text-center shadow-[0_0_60px_rgba(149,211,31,0.08)] sm:px-12"
    >
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(149,211,31,0.28),_transparent_65%)] blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(149,211,31,0.18),_transparent_65%)] blur-3xl" />

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
          {CTA_LINKS.map(({ href, label, ariaLabel }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-2 text-sm font-medium text-white transition hover:border-[#95D31F] hover:bg-[#95D31F]/20 hover:text-[#95D31F]"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
