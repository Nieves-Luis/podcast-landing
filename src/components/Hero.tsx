"use client";

import { useState } from "react";

type HeroProps = {
  youtubeUrl: string;
  spotifyUrl: string;
};

type Slide = "community" | "episode" | "about";

export default function Hero({ youtubeUrl, spotifyUrl }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState<Slide>("community");

  return (
    <section id="hero" className="scroll-mt-32">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80 px-6 py-10 shadow-[0_0_60px_rgba(0,0,0,0.7)] sm:px-10 sm:py-12">
        {/* tabs superiores */}
        <div className="mb-6 flex w-full items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 rounded-full bg-zinc-900/70 p-1 text-xs sm:text-sm">
            <button
              onClick={() => setActiveSlide("community")}
              className={`rounded-full px-3 py-1 transition ${
                activeSlide === "community"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Únete a la comunidad
            </button>
            <button
              onClick={() => setActiveSlide("episode")}
              className={`rounded-full px-3 py-1 transition ${
                activeSlide === "episode"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Último episodio
            </button>
            <button
              onClick={() => setActiveSlide("about")}
              className={`rounded-full px-3 py-1 transition ${
                activeSlide === "about"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Sobre el podcast
            </button>
          </div>

          <span className="hidden text-xs text-zinc-500 sm:inline">
            Selecciona la sección que quieras explorar
          </span>
        </div>

        {/* contenido del slide */}
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] sm:items-center">
          {activeSlide === "community" && (
            <>
              {/* slide 1: comunidad + newsletter */}
              <div className="space-y-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400">
                  COMUNIDAD
                </p>
                <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Únete a la comunidad de{" "}
                  <span className="text-[#95D31F]">Temporada K</span>
                </h1>
                <p className="max-w-xl text-sm text-zinc-300 sm:text-base">
                  Recibe cada semana los aprendizajes clave, recursos y episodios
                  nuevos directamente en tu correo. Cero spam, solo energía para la semana.
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-[#95D31F] focus:ring-1 focus:ring-[#95D31F]"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#95D31F] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#bffb4b]"
                  >
                    Unirme a la newsletter
                  </button>
                </form>

                <p className="text-xs text-zinc-500">
                  Puedes darte de baja cuando quieras. No compartimos tu correo con nadie.
                </p>
              </div>

              <div className="relative mx-auto flex max-w-xs items-center justify-center sm:max-w-sm">
                <div className="relative h-72 w-40 rounded-[2.5rem] border border-zinc-700 bg-black/80 p-2 shadow-[0_25px_60px_rgba(0,0,0,0.9)] sm:h-80 sm:w-48">
                  <div className="mx-auto mb-2 h-1 w-16 rounded-full bg-zinc-700" />
                  <div className="h-full w-full overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-800 via-zinc-900 to-black p-3 text-xs text-zinc-200">
                    <p className="mb-2 text-[10px] text-zinc-400">
                      Comunidad Temporada K
                    </p>
                    <div className="mb-3 space-y-1.5 text-[11px]">
                      <p className="font-semibold text-white">
                        Nuevo episodio disponible 🎧
                      </p>
                      <p className="text-zinc-400">
                        “Conversaciones que te recargan para la semana”.
                      </p>
                    </div>
                    <div className="mt-auto flex flex-col gap-2">
                      <div className="flex gap-2">
                        <span className="flex-1 rounded-full bg-zinc-800/80 px-2 py-1 text-[10px] text-center">
                          Clips en YouTube
                        </span>
                        <span className="flex-1 rounded-full bg-zinc-800/80 px-2 py-1 text-[10px] text-center">
                          Comunidad IG
                        </span>
                      </div>
                      <span className="rounded-full bg-[#95D31F] px-2 py-1 text-[11px] font-semibold text-black text-center">
                        Suscríbete gratis
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSlide === "episode" && (
            <>
              {/* slide 2: último episodio */}
              <div className="space-y-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400">
                  NUEVO EPISODIO
                </p>
                <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Escucha el último episodio del podcast
                </h1>
                <p className="max-w-xl text-sm text-zinc-300 sm:text-base">
                  Historias reales, creatividad y aprendizajes para construir la
                  vida que quieres. Elige tu plataforma favorita y dale play.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#95D31F] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#bffb4b]"
                  >
                    Ver en YouTube
                  </a>
                  <a
                    href={spotifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#95D31F] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#bffb4b]"
                  >
                    Escuchar en Spotify
                  </a>
                </div>

                <p className="text-xs text-zinc-500">
                  También disponible en otras plataformas de audio.
                </p>
              </div>

              <div className="relative mx-auto flex max-w-md items-center justify-center">
                <div className="aspect-video w-full rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-4">
                  <div className="mb-3 flex items-center justify-between text-xs text-zinc-400">
                    <span>Temporada K · Podcast</span>
                    <span>Nuevo</span>
                  </div>
                  <div className="mb-3 h-32 rounded-2xl bg-zinc-800/60" />
                  <div className="flex items-center justify-between text-xs text-zinc-300">
                    <span className="truncate pr-4">
                      Último episodio: título del episodio aquí
                    </span>
                    <span>45:21</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSlide === "about" && (
            <>
              {/* slide 3: sobre el podcast + logo */}
              <div className="space-y-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400">
                  SOBRE TEMPORADA K
                </p>
                <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  ¿Qué es <span className="text-[#95D31F]">Temporada K</span>?
                </h1>
                <p className="max-w-xl text-sm text-zinc-300 sm:text-base">
                  Temporada K es el podcast de Kike donde se mezclan
                  conversaciones profundas, actualidad, cultura urbana y
                  aprendizajes muy personales. Un espacio para parar, escuchar
                  y recargar energía antes de la próxima semana.
                </p>
                <p className="max-w-xl text-sm text-zinc-300 sm:text-base">
                  Invitados, historias reales y reflexiones sin filtro, siempre
                  con el objetivo de dejarte pensando y con ganas de hacer algo
                  distinto con tu vida.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#95D31F] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#bffb4b]"
                  >
                    Empezar en YouTube
                  </a>
                  <a
                    href={spotifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#95D31F] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#bffb4b]"
                  >
                    Escuchar en Spotify
                  </a>
                </div>
              </div>

              <div className="relative mx-auto flex max-w-xs items-center justify-center sm:max-w-sm">
                <div className="flex flex-col items-center gap-4 rounded-3xl border border-zinc-800 bg-zinc-950/80 px-6 py-6 text-center">
                  <div className="relative h-20 w-40">
                    <img
                      src="/img/logo-temporada-k.png"
                      alt="Logo Temporada K"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-zinc-400">
                    Conducido por Kike, creado para quienes quieren avanzar,
                    equivocarse, volver a empezar y seguir en su propia
                    temporada.
                  </p>
                  <span className="rounded-full border border-zinc-700 px-3 py-1 text-[11px] text-zinc-300">
                    Nuevos episodios regularmente
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
