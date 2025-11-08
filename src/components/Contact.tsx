type Props = {
  email?: string;
  twitter?: string; // username sin @ o URL completa
  instagram?: string; // username sin @ o URL completa
};

export default function Contact({ email, twitter, instagram }: Props) {
  const twitterUrl = twitter
    ? twitter.startsWith("http")
      ? twitter
      : `https://x.com/${twitter.replace(/^@/, "")}`
    : "";
  const instagramUrl = instagram
    ? instagram.startsWith("http")
      ? instagram
      : `https://instagram.com/${instagram.replace(/^@/, "")}`
    : "";

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">Contacto</h2>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        ¿Tienes feedback, ideas o quieres colaborar? Escríbenos.
      </p>

      <ul className="grid gap-3 sm:grid-cols-2">
        <li className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <span className="block text-sm text-zinc-500 dark:text-zinc-400">Email</span>
          {email ? (
            <a className="font-medium underline decoration-zinc-300 underline-offset-4" href={`mailto:${email}`}>
              {email}
            </a>
          ) : (
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Añade un email</span>
          )}
        </li>

        <li className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <span className="block text-sm text-zinc-500 dark:text-zinc-400">Twitter / X</span>
          {twitterUrl ? (
            <a className="font-medium underline decoration-zinc-300 underline-offset-4" href={twitterUrl} target="_blank" rel="noreferrer">
              {twitterUrl}
            </a>
          ) : (
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Añade un usuario o URL</span>
          )}
        </li>

        <li className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800 sm:col-span-2">
          <span className="block text-sm text-zinc-500 dark:text-zinc-400">Instagram</span>
          {instagramUrl ? (
            <a className="font-medium underline decoration-zinc-300 underline-offset-4" href={instagramUrl} target="_blank" rel="noreferrer">
              {instagramUrl}
            </a>
          ) : (
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Añade un usuario o URL</span>
          )}
        </li>
      </ul>
    </div>
  );
}

