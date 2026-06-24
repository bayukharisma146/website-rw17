"use client";

import { useEffect, useState } from "react";

export default function GalleryCard({ item, onClick }) {
  // safety guard (WAJIB biar tidak error undefined)
  if (!item || !item.images || item.images.length === 0) return null;

  const [index, setIndex] = useState(0);

  const images = item.images || [];

  // auto slide (safe version)
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid"
    >
      {/* IMAGE */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={images[index]}
          alt={item.title}
          className="h-full w-full object-cover transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
      </div>

      {/* DOT INDICATOR */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
