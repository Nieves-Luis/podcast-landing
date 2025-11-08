"use client";

import { useState } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  actionUrl?: string;
};

export default function Newsletter({ title, subtitle, actionUrl }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 shadow-[0_0_40px_rgba(255,213,79,0.06)] sm:p-12">
      <div className="mb-6 space-y-2">
        <h2 className="text-3xl font-semibold text-white">{title ?? "Newsletter semanal"}</h2>
        <p className="text-sm text-zinc-400">
          {subtitle ?? "Recibe los aprendizajes clave, recursos descargables y próximos eventos."}
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="tu@email.com"
          className="w-full rounded-full border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-[#FFD54F] focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-[#FFD54F] px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-[#ffca1b] disabled:opacity-60"
          disabled={status === "ok"}
        >
          Suscribirme
        </button>
      </form>

      {status === "ok" && (
        <p className="mt-4 text-sm text-[#FFD54F]">¡Gracias! Revisa tu correo para confirmar la suscripción.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-rose-400">Hubo un problema. Inténtalo de nuevo más tarde.</p>
      )}
    </div>
  );
}
