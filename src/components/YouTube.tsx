type Props = {
  title?: string;
  videoId?: string; // YouTube video ID (opcional)
  playlistId?: string; // YouTube playlist ID (opcional)
};

export default function YouTube({ title, videoId, playlistId }: Props) {
  const src = playlistId
    ? `https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(playlistId)}`
    : videoId
      ? `https://www.youtube.com/embed/${encodeURIComponent(videoId)}`
      : null;

  return (
    <div className="mx-auto max-w-4xl">
      {title ? (
        <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      ) : null}

      {src ? (
        <div className="aspect-video w-full overflow-hidden rounded-xl border border-zinc-200 shadow-sm dark:border-zinc-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <iframe
            className="h-full w-full"
            src={src}
            title="YouTube player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-zinc-300 p-8 text-center text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          Añade un videoId o playlistId para mostrar contenido.
        </div>
      )}
    </div>
  );
}

