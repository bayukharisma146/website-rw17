"use client";

import { useEffect, useState } from "react";

export default function ImageSlider({ images = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // ganti tiap 3 detik

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-3xl">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="slider"
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out
            ${i === index ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
        />
      ))}

      {/* overlay gradient biar fancy */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
    </div>
  );
}
