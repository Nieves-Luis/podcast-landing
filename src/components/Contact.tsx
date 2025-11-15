export type ContactProps = {
  email?: string;
  twitter?: string;
  instagram?: string;
};

export default function Contact({ email, twitter, instagram }: ContactProps) {
  const formatUrl = (value: string | undefined, type: "twitter" | "instagram") => {
    if (!value) return "";
    if (value.startsWith("http")) return value;

    const handle = value.replace(/^@/, "");
    if (type === "twitter") {
      return `https://x.com/${handle}`;
    }
    return `https://instagram.com/${handle}`;
  };

  const twitterUrl = formatUrl(twitter, "twitter");
  const instagramUrl = formatUrl(instagram, "instagram");

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 shadow-inner shadow-black/40 sm:p-12">
      <header className="mb-6 space-y-2">
        <h2 className="text-3xl font-semibold text-white">Contacto</h2>
        <p className="text-sm text-zinc-400">
          ¿Tienes feedback, quieres ser invitado o proponer una colaboración? Escríbenos por cualquiera de estos canales.
        </p>
      </header>

      <dl className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
          <dt className="text-xs font-semibold uppercase tracking-wide text-[#95D31F]">Email</dt>
          <dd className="mt-2 text-sm text-zinc-200">
            {email ? (
              <a className="underline decoration-[#95D31F]/40 underline-offset-4" href={`mailto:${email}`}>
                {email}
              </a>
            ) : (
              <span className="text-zinc-500">Añade un correo para recibir mensajes.</span>
            )}
          </dd>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
          <dt className="text-xs font-semibold uppercase tracking-wide text-[#95D31F]">Twitter / X</dt>
          <dd className="mt-2 text-sm text-zinc-200">
            {twitterUrl ? (
              <a className="underline decoration-[#95D31F]/40 underline-offset-4" href={twitterUrl} target="_blank" rel="noreferrer">
                {twitterUrl}
              </a>
            ) : (
              <span className="text-zinc-500">Comparte tu usuario o enlace.</span>
            )}
          </dd>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 sm:col-span-2">
          <dt className="text-xs font-semibold uppercase tracking-wide text-[#95D31F]">Instagram</dt>
          <dd className="mt-2 text-sm text-zinc-200">
            {instagramUrl ? (
              <a className="underline decoration-[#95D31F]/40 underline-offset-4" href={instagramUrl} target="_blank" rel="noreferrer">
                {instagramUrl}
              </a>
            ) : (
              <span className="text-zinc-500">Comparte tu usuario o enlace.</span>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
}
