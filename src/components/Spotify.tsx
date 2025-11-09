const DEFAULT_MESSAGE = "Añade un show o episodio de Spotify para incrustar.";

type Props = {
  title?: string;
  description?: string;
  embedUrl?: string;
  showId?: string;
  episodeId?: string;
};

export default function Spotify({ title, description, embedUrl, showId, episodeId }: Props) {
  const src = embedUrl
    ?? (showId
      ? `https://open.spotify.com/embed/show/${encodeURIComponent(showId)}`
      : episodeId
        ? `https://open.spotify.com/embed/episode/${encodeURIComponent(episodeId)}`
        : "");

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 shadow-inner shadow-black/40 sm:p-12">
      <header className="mb-8 space-y-2">
        <h2 className="text-3xl font-semibold text-white">{title ?? "Disponible en Spotify"}</h2>
        <p className="text-sm text-zinc-400">
          {description ?? "Escucha cada episodio en tu plataforma favorita con notas extendidas."}
        </p>
      </header>

      {src ? (
        embedUrl ? (
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800">
            <iframe
              className="h-full w-full"
              src={src}
              title="Temporada K en Spotify"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="w-full overflow-hidden rounded-2xl border border-zinc-800">
            <iframe
              className="h-[232px] w-full sm:h-[352px]"
              src={src}
              title="Temporada K en Spotify"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        )
      ) : (
        <div className="rounded-2xl border border-dashed border-zinc-700 p-10 text-center text-zinc-400">
          {DEFAULT_MESSAGE}
        </div>
      )}
    </div>
  );
}
