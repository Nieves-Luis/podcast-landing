"use client";

import { useState } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  actionUrl?: string; // opcional: endpoint de suscripción
};

export default function Newsletter({ title, subtitle, actionUrl }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (!actionUrl) {
      setStatus("ok");
      setEmail("");
      return;
    }

    try {
      const res = await fetch(actionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("ok");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      {title ? (
        <h2 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <p className="mb-6 text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      ) : null}

      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          className="w-full rounded-lg border border-zinc-300 bg-white/70 px-4 py-3 text-base text-zinc-900 placeholder-zinc-400 shadow-sm outline-none backdrop-blur transition focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-100 dark:placeholder-zinc-500"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Suscribirme
        </button>
      </form>
      {status === "ok" && (
        <p className="mt-3 text-sm text-emerald-600 dark:text-emerald-400">
          ¡Gracias! Revisa tu correo para confirmar la suscripción.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-rose-600 dark:text-rose-400">
          Hubo un problema. Inténtalo de nuevo más tarde.
        </p>
      )}
    </div>
  );
}

