"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LogoIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <Image
        src="/img/logo-temporada-k.png"
        alt="Logo Temporada K"
        width={240}
        height={240}
        priority
        className="h-auto w-40 sm:w-48 animate-scaleFade"
      />
    </div>
  );
}
