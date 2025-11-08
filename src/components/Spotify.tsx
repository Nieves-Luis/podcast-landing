type Props = {
  title?: string;
  showId?: string; // Spotify show ID (opcional)
  episodeId?: string; // Spotify episode ID (opcional)
};

export default function Spotify({ title, showId, episodeId }: Props) {
  const src = showId
    ? `https://open.spotify.com/embed/show/${encodeURIComponent(showId)}`
    : episodeId
      ? `https://open.spotify.com/embed/episode/${encodeURIComponent(episodeId)}`
      : null;

  return (
    <div className="mx-auto max-w-4xl">
      {title ? (
        <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      ) : null}

      {src ? (
        <div className="w-full overflow-hidden rounded-xl border border-zinc-200 shadow-sm dark:border-zinc-800">
          <iframe
            className="h-[232px] w-full sm:h-[352px]"
            src={src}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-zinc-300 p-8 text-center text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          Añade un showId o episodeId para mostrar contenido.
        </div>
      )}
    </div>
  );
}

