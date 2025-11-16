import Header from "@/components/Header";
import Hero from "@/components/Hero";
import YouTube from "@/components/YouTube";
import Shorts from "@/components/Shorts";
import Spotify from "@/components/Spotify";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";

const NAV_LINKS = [
  { href: "#hero", label: "Inicio" },
  { href: "#youtube", label: "YouTube" },
  { href: "#shorts", label: "Shorts" },
  { href: "#spotify", label: "Spotify" },
  { href: "#contact", label: "Contacto" },
];

const YOUTUBE_URL = "https://www.youtube.com/@TemporadaK";
const SPOTIFY_URL =
  "https://open.spotify.com/show/6RMEec8rzNUEFgkblpAHN8?si=e488fe4e63684b89";
const INSTAGRAM_URL = "https://www.instagram.com/temporada.k/";

const SOCIAL_LINKS = [
  { href: SPOTIFY_URL, label: "Spotify" },
  { href: YOUTUBE_URL, label: "YouTube" },
  { href: INSTAGRAM_URL, label: "Instagram" },
];

export default function Home() {
  const YOUTUBE_VIDEO_ID = "";
  const YOUTUBE_PLAYLIST_ID = "";
  const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/7QMws0Va0bY?si=BaPYjge7BY7kc04t";
  const SPOTIFY_EMBED_URL =
    "https://open.spotify.com/embed/show/6RMEec8rzNUEFgkblpAHN8/video?utm_source=generator";
  const SPOTIFY_SHOW_ID = "";
  const SPOTIFY_EPISODE_ID = "";

  return (
    <div className="relative min-h-screen text-zinc-100">
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(circle_at_top,_rgba(255,213,79,0.12),_transparent_60%)]"
      />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-12 pt-10 sm:px-10">
        <Header links={NAV_LINKS} />

        <main className="flex flex-col gap-24 pb-12">
          <Hero />

          <section id="youtube" className="scroll-mt-32">
            <YouTube
              embedUrl={YOUTUBE_EMBED_URL}
              playlistId={YOUTUBE_PLAYLIST_ID}
              videoId={YOUTUBE_VIDEO_ID}
            />
          </section>

          <Shorts />

          <section id="spotify" className="scroll-mt-32">
            <Spotify
              embedUrl={SPOTIFY_EMBED_URL}
              showId={SPOTIFY_SHOW_ID}
              episodeId={SPOTIFY_EPISODE_ID}
            />
          </section>

          <section id="newsletter" className="scroll-mt-32">
            <Newsletter />
          </section>

          <section id="contact" className="scroll-mt-32">
            <Contact instagram={INSTAGRAM_URL} />
          </section>
        </main>

        <footer className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-950/70 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Temporada K</p>
            <p className="text-xs text-zinc-500">Historias y aprendizajes para crear a tu ritmo.</p>
          </div>
          <nav>
            <ul className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
              {SOCIAL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[#95D31F]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
}
