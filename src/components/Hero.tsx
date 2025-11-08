type Props = {
  title: string;
  subtitle?: string;
};

export default function Hero({ title, subtitle }: Props) {
  return (
    <header className="relative flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20 text-center sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_50%_-10%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(30rem_30rem_at_80%_20%,rgba(236,72,153,0.12),transparent_55%)]" />
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#youtube"
          className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Ver en YouTube
        </a>
        <a
          href="#spotify"
          className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          Escuchar en Spotify
        </a>
        <a
          href="#newsletter"
          className="inline-flex items-center rounded-full border border-transparent px-5 py-2 text-sm font-medium text-zinc-900/80 underline decoration-zinc-400 underline-offset-4 transition hover:text-zinc-900 dark:text-zinc-100/80 dark:hover:text-zinc-100"
        >
          Newsletter
        </a>
      </div>
    </header>
  );
}

