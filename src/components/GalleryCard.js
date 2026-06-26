"use client";

export default function GalleryCard({ item, onClick }) {
  if (!item || !item.images || item.images.length === 0) return null;

  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid"
    >
      {/* COVER IMAGE */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={item.images[0]}
          alt={item.title}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
      </div>
    </div>
  );
}
