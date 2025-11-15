"use client";

import { useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

type HeaderProps = {
  links: NavLink[];
};

export default function Header({ links }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative flex items-center justify-between gap-6 rounded-full border border-zinc-800 bg-zinc-950/70 px-6 py-4 backdrop-blur">
      <span className="text-sm font-semibold tracking-[0.4em] text-[#95D31F]">TEMPORADA K</span>

      <nav className="hidden md:block">
        <ul className="flex flex-wrap items-center gap-4 text-sm text-zinc-300">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-full px-4 py-2 transition hover:bg-[#95D31F]/10 hover:text-[#95D31F]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isMenuOpen}
        onClick={handleToggleMenu}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-200 transition hover:border-[#95D31F] hover:text-[#95D31F] md:hidden"
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden
          >
            <path d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
            aria-hidden
          >
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full mt-3 rounded-3xl border border-zinc-800 bg-zinc-950/90 p-4 text-zinc-100 shadow-xl md:hidden">
          <nav>
            <ul className="flex flex-col gap-2 text-sm">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block rounded-2xl px-4 py-2 transition hover:bg-[#95D31F]/10 hover:text-[#95D31F]"
                    onClick={handleLinkClick}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
