const DEFAULT_MESSAGE = "Añade un video o playlist para mostrar tus episodios.";

type Props = {
  title?: string;
  description?: string;
  videoId?: string;
  playlistId?: string;
};

export default function YouTube({ title, description, videoId, playlistId }: Props) {
  const src = playlistId
    ? `https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(playlistId)}`
    : videoId
      ? `https://www.youtube.com/embed/${encodeURIComponent(videoId)}`
      : "";

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 shadow-inner shadow-black/40 sm:p-12">
      <header className="mb-8 space-y-2">
        <h2 className="text-3xl font-semibold text-white">{title ?? "Episodios en YouTube"}</h2>
        <p className="text-sm text-zinc-400">
          {description ?? "Explora las últimas entrevistas, grabadas con energía en vivo."}
        </p>
      </header>

      {src ? (
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800">
          <iframe
            className="h-full w-full"
            src={src}
            title="Temporada K en YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-zinc-700 p-10 text-center text-zinc-400">
          {DEFAULT_MESSAGE}
        </div>
      )}
    </div>
  );
}
