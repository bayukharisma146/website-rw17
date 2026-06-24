"use client";

import { useState, useEffect } from "react";

export default function GalleryModal({ item, onClose }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [item]);

  if (!item) return null;

  const next = () => setIndex((prev) => (prev + 1) % item.images.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + item.images.length) % item.images.length);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 text-3xl text-white"
      >
        ×
      </button>

      {/* PREV */}
      <button onClick={prev} className="absolute left-6 text-4xl text-white">
        ‹
      </button>

      {/* IMAGE */}
      <img
        src={item.images[index]}
        className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
        alt=""
      />

      {/* NEXT */}
      <button onClick={next} className="absolute right-6 text-4xl text-white">
        ›
      </button>
    </div>
  );
}
