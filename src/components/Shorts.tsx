'use client';

import { useEffect, useRef, useState } from "react";

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
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const updateArrows = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scroller;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
    };

    updateArrows();
    scroller.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    return () => {
      scroller.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const distance = scroller.clientWidth * 0.8;
    scroller.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  };

  return (
    <section id="shorts" className="scroll-mt-32 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 shadow-inner shadow-black/40 sm:p-12">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#95D31F]">YouTube Shorts</p>
          <h2 className="text-3xl font-semibold text-white">Shorts recientes</h2>
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

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
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
                    <img
                      src={thumbnail}
                      alt={`Short ${index + 1}`}
                      loading="lazy"
                      className="h-full w-full rounded-2xl object-cover"
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

        {showLeftArrow && (
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Ver shorts anteriores"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-[#95D31F] p-3 text-black shadow-lg transition hover:scale-105"
          >
            ←
          </button>
        )}

        {showRightArrow && (
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Ver más shorts"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-[#95D31F] p-3 text-black shadow-lg transition hover:scale-105"
          >
            →
          </button>
        )}
      </div>
    </section>
  );
}
