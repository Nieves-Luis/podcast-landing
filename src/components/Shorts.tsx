import Image from "next/image";

const SHORTS = [
  "MOtyhrL3rag",
  "D4k-Xiv7VXE",
  "Y2T_nNW-1Tw",
  "rDSfYGsJ-ew",
  "HwnU_ALXOmA",
  "JWMWDR5o4bE",
  "Roat0ari4J0",
  "TQLH5O1-ZuU",
  "FGQmJS_gu5s",
  "EbWQseXm8nc",
  "mb7FPdTH3Y4",
  "lRbaRKTqB_E",
];

export default function Shorts() {
  return (
    <section id="shorts" className="scroll-mt-32 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 shadow-inner shadow-black/40 sm:p-12">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#95D31F]">YouTube Shorts</p>
          <h2 className="text-3xl font-semibold text-white">Shorts recientes</h2>
          <p className="text-sm text-zinc-400">Descubre clips rápidos llenos de energía.</p>
        </div>
        <a
          href="https://www.youtube.com/@TemporadaK/shorts"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#95D31F]/30 px-4 py-2 text-sm font-medium text-[#95D31F] transition hover:border-[#95D31F] hover:bg-[#95D31F]/10"
        >
          Ver todos en YouTube
          <span aria-hidden>→</span>
        </a>
      </header>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {SHORTS.map((id, index) => {
          const url = `https://www.youtube.com/shorts/${id}`;
          const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group flex w-40 shrink-0 flex-col gap-3"
            >
              <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg shadow-black/40">
                <div className="aspect-[9/16] w-full">
                  <Image
                    src={thumbnail}
                    alt={`Short ${index + 1}`}
                    width={360}
                    height={640}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    sizes="160px"
                  />
                </div>
                <span className="absolute right-3 top-3 rounded-full bg-black/80 px-2 py-0.5 text-xs font-semibold text-white">
                  1:00
                </span>
              </div>
              <p className="text-sm font-medium text-zinc-200">
                Clip destacado #{index + 1}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
