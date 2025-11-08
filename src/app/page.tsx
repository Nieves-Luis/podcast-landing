import Hero from "@/components/Hero";
import YouTube from "@/components/YouTube";
import Spotify from "@/components/Spotify";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";

export default function Home() {
  // IDs opcionales para incrustar contenido real
  const YOUTUBE_VIDEO_ID = ""; // e.g. "5qap5aO4i9A"
  const YOUTUBE_PLAYLIST_ID = ""; // e.g. "PL..."
  const SPOTIFY_SHOW_ID = ""; // e.g. "0ofXAdFIQQRsCYj9754UFx"
  const SPOTIFY_EPISODE_ID = ""; // e.g. "3Vd6Jt9..."

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900 dark:from-black dark:to-zinc-950 dark:text-zinc-50">
      <main className="mx-auto max-w-5xl px-6 pb-24">
        <Hero
          title="Temporada K"
          subtitle="Conversaciones, aprendizajes y energía para la semana."
        />

        <section id="youtube" className="scroll-mt-24 py-16">
          <YouTube
            title="Últimos episodios en YouTube"
            videoId={YOUTUBE_VIDEO_ID}
            playlistId={YOUTUBE_PLAYLIST_ID}
          />
        </section>

        <section id="spotify" className="scroll-mt-24 py-16">
          <Spotify
            title="Escúchalo en Spotify"
            showId={SPOTIFY_SHOW_ID}
            episodeId={SPOTIFY_EPISODE_ID}
          />
        </section>

        <section id="newsletter" className="scroll-mt-24 py-16">
          <Newsletter title="Suscríbete al boletín" subtitle="Recibe novedades y episodios destacados en tu correo." />
        </section>

        <section id="contact" className="scroll-mt-24 py-16">
          <Contact
            email=""
            twitter=""
            instagram=""
          />
        </section>
      </main>
    </div>
  );
}
