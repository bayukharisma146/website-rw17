"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import GalleryCard from "@/components/GalleryCard";
import GalleryModal from "@/components/GalleryModal";

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  const photos = [
    {
      title: "CKG (Cek Kesehatan Gratis)",
      desc: "Kegiatan cek kesehatan gratis untuk warga RW 17",
      images: ["/images/gallery/ckg-1.jpg", "/images/gallery/ckg-2.jpg"],
    },
    {
      title: "Senam Lansia",
      desc: "Kegiatan senam lansia",
      images: ["/images/gallery/senam-1.jpg", "/images/gallery/senam-2.jpg", "/images/gallery/senam-3.jpg"],
    },
    {
      title: "Posyandu balita",
      desc: "Kegiatan pemeriksaan kesehatan anak",
      images: ["/images/gallery/posyandu-1.jpg", "/images/gallery/posyandu-2.jpg", "/images/gallery/posyandu-3.jpg", "/images/gallery/posyandu-4.jpg"],
    },
    {
      title: "Posyandu lansia",
      desc: "Kegiatan pemeriksaan kesehatan lansia",
      images: ["/images/gallery/posyandu-lansia-1.jpg", "/images/gallery/posyandu-lansia-2.jpg"],
    },
    {
      title: "Takbiran Keliling",
      desc: "Kegiatan takbiran keliling meperingati hari raya idul adha",
      images: ["/images/gallery/Takbiran-keliling-1.jpg", "/images/gallery/Takbiran-keliling-2.jpg"],
    },
    {
      title: "Ecoprint",
      desc: "Kegiatan Karya seni Ecoprint bersama anak-anak RW 17",
      images: ["/images/gallery/ecoprint-1.jpg", "/images/gallery/ecoprint-2.jpg", "/images/gallery/ecoprint-3.jpg", "/images/gallery/ecoprint-4.jpg"],
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
        {/* HERO */}
        <section className="mx-auto max-w-full px-6 pt-10 pb-14 text-center">
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
            Gallery Kegiatan
          </h1>
        </section>

        {/* GALLERY GRID (FIXED 3 COLUMNS) */}
        <section className="mx-auto max-w-full px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((item, index) => (
              <GalleryCard
                key={index}
                item={item}
                onClick={() => setSelected(item)}
              />
            ))}
          </div>
        </section>

        {/* MODAL */}
        <GalleryModal item={selected} onClose={() => setSelected(null)} />
      </main>
    </>
  );
}
