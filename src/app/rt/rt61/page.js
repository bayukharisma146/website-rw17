"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function RT61Page() {
  const sliderRef = useRef(null);

  const items = [
    {
      title: "Masjid Al-Irsyad",
      desc: "Masjid Al-Irsyad dibangun pada tahun 1950. Masjid ini merupakan kategori Masjid Umum dan berlokasi di Jalan Sisingamangaraja 69 RT 61 RW 17, Brontokusuman, Mergangsan, Yogyakarta.",
      img: "/images/RT-61-Masjid.jpeg",
    },
    {
      title: "Pemuda & Kreativitas",
      desc: "Aktivitas Karang Taruna dan pengembangan kreativitas generasi muda.",
      img: "/images/kegiatan/pemuda.jpg",
    },
    {
      title: "Acara Warga",
      desc: "Kegiatan sosial, perayaan hari besar, dan agenda kebersamaan RT.",
      img: "/images/kegiatan/acara.jpg",
    },
    {
      title: "UMKM Lokal",
      desc: "Dukungan terhadap usaha mikro, kecil, dan menengah warga RT 61.",
      img: "/images/kegiatan/umkm.jpg",
    },
  ];

  // AUTO SCROLL (STABLE + MOBILE FRIENDLY)
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            RT 61
          </h1>

          <Link
            href="/"
            className="text-sm text-slate-600 hover:text-black transition"
          >
            ← Kembali
          </Link>
        </div>
      </nav>

      <div className="pt-10 md:pt-16">
        {/* PETA */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              PETA RT 61
            </h2>
            <p className="text-slate-500 mt-2">Batas wilayah RT 61</p>
          </div>

          <div className="overflow-hidden rounded-[28px] border shadow-lg">
            <img
              src="/images/peta-rt61.jpg"
              alt="Peta RT 61"
              className="h-[280px] md:h-[550px] w-full object-cover"
            />
          </div>
        </section>

        {/* FASILITAS UMUM - PREMIUM SLIDER */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <h3 className="mb-6 text-2xl md:text-3xl font-semibold tracking-tight">
            Fasilitas Umum
          </h3>

          <div
            ref={sliderRef}
            className="
              flex gap-4 md:gap-6
              overflow-x-auto scroll-smooth no-scrollbar
              snap-x snap-mandatory
            "
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="
                  snap-start
                  min-w-[85%] sm:min-w-[60%] md:min-w-[340px]
                  group relative
                  rounded-2xl md:rounded-3xl
                  overflow-hidden
                  border
                  bg-white
                  shadow-md md:shadow-lg
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-2xl
                "
              >
                {/* IMAGE */}
                <div className="h-44 md:h-56 overflow-hidden">
                  <img
                    src={item.img || "/images/placeholder.jpg"}
                    alt={item.title}
                    className="
                      h-full w-full object-cover
                      transition duration-700
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* OVERLAY ONLY ON IMAGE (FIX TEXT BUG) */}
                <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* CONTENT */}
                <div className="p-4 md:p-6 relative z-10 bg-white">
                  <h4 className="text-lg md:text-xl font-semibold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* UMKM */}
        <section className="mx-auto max-w-5xl px-6 pb-24 text-center md:text-left">
          <h3 className="mb-4 text-2xl md:text-3xl font-semibold">UMKM</h3>

          <p className="text-slate-600 leading-relaxed">
            Warga RT 61 aktif mengembangkan berbagai usaha lokal mulai dari
            kuliner rumahan, kerajinan tangan, hingga jasa kreatif.
          </p>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            {["Kuliner", "Kerajinan", "Jasa", "Produk Lokal"].map((item) => (
              <span
                key={item}
                className="
                  rounded-full border
                  px-4 py-2
                  text-sm
                  bg-white/60 backdrop-blur
                  hover:bg-white transition
                "
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
