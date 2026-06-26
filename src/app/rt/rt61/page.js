"use client";

import { useState } from "react";
import Link from "next/link";
import GalleryModal from "@/components/GalleryModal";

export default function RT61Page() {
  const [selected, setSelected] = useState(null);

  const items = [
    {
      title: "Masjid Al-Irsyad",
      desc: "Masjid Al-Irsyad dibangun pada tahun 1950. Masjid ini merupakan kategori Masjid Umum dan berlokasi di Jalan Sisingamangaraja 69 RT 61 RW 17, Brontokusuman, Mergangsan, Yogyakarta.",
      images: [
        "/images/RT-61-Masjid.jpeg",
        "/images/RT 61/RT-61-Masjid-1.jpeg",
      ],
    },
    {
      title: "TK ABA",
      desc: "TK ABA Karanganyar adalah taman kanak-kanak swasta berakreditasi A di bawah naungan Kementerian Pendidikan dan Kebudayaan yang berlokasi di Brontokusuman, Kecamatan Mergangsan, Kota Yogyakarta, dan berkomitmen untuk memberikan kontribusi nyata dalam mencerdaskan anak bangsa sejak didirikan pada tahun 2011.",
      images: [
        "/images/RT-61-TK.jpeg",
        "/images/RT 61/RT-61-TK-1.jpeg",
        "/images/RT 61/RT-61-TK-2.jpeg",
      ],
    },
    {
      title: "Balai RW 17",
      desc: "Balai RW 17 merupakan sarana fasilitas umum yang berfungsi sebagai pusat interaksi, koordinasi, dan pelayanan bagi seluruh warga di lingkungan RW 17, sekaligus menjadi tempat musyawarah serta pusat penyimpanan dan pengelolaan barang inventaris demi mendukung kelancaran berbagai kegiatan kemasyarakatan.",
      images: [],
    },
    {
      title: "Gedung Dakwah dan Tarbiyatul Qur'an PRM Karanganyar",
      desc: "Merupakan fasilitas keagamaan yang berfungsi sebagai pusat dakwah Islam dan pendidikan Al-Qur'an (TPA/TPQ) bagi masyarakat sekitar. Tempat ini menjadi ruang bersama untuk kajian rutin serta musyawarah warga guna memperkuat ukhuwah islamiyah dan mencetak generasi yang Qur'ani di wilayah Karanganyar.",
      images: [
        "/images/RT-61-GD.jpeg"
      ],
    },
    {
      title: "Musholla Al Ukhwah",
      desc: "TPA Aisyiyah Al Ukhuwwah adalah lembaga pendidikan agama Islam yang berfokus pada pengajaran Al-Qur'an dan nilai-nilai keislaman bagi anak-anak di lingkungan RW 17. TPA ini bertujuan untuk membentuk generasi muda yang berakhlak mulia, berpengetahuan agama, dan memiliki pemahaman yang kuat tentang ajaran Islam sejak usia dini.",
      images: [
        "/images/RT-61-M-ukuwah-1.jpeg",
        "/images/RT-61-M-ukuwah-2.jpeg"
      ],
    },
  ];

  const activities = [
    {
      title: "Kerja Bakti",
      date: "15 Juni 2026",
      desc: "Warga bersama-sama membersihkan lingkungan, saluran air, dan fasilitas umum guna menciptakan kawasan yang bersih dan nyaman.",
      size: "large",
      images: [
        "/images/kegiatan/kerjabakti1.jpg",
        "/images/kegiatan/kerjabakti2.jpg",
        "/images/kegiatan/kerjabakti3.jpg",
      ],
    },
    {
      title: "Rapat Bulanan",
      date: "7 Juni 2026",
      desc: "Musyawarah rutin membahas evaluasi kegiatan serta program yang akan dilaksanakan oleh warga RT.",
      size: "small",
      images: [
        "/images/kegiatan/rapat1.jpg",
        "/images/kegiatan/rapat2.jpg",
      ],
    },
  ];

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
              Peta RT 61
            </h2>
            <p className="text-slate-500 mt-2">Batas wilayah</p>
          </div>

          <div className="overflow-hidden rounded-[28px] border shadow-lg">
            <img
              src="/images/PETA-61.png"
              alt="Peta RT 61"
              className="h-[280px] md:h-[550px] w-full object-cover"
            />
          </div>
        </section>

        {/* FASILITAS UMUM */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Fasilitas Umum
            </h3>

            <span className="text-xs md:text-sm text-slate-400">
              Klik card untuk lihat foto
            </span>
          </div>

          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide touch-pan-x pb-2">
            {items.map((item, i) => (
              <div
                key={i} onClick={() => setSelected(item)} className="snap-center flex-shrink-0 w-[85%] sm:w-[70%] md:w-[380px] bg-white border rounded-3xl shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="h-52 md:h-60 overflow-hidden">
                  <img src={item.images[0]}alt={item.title}
                    className="
                      h-full w-full object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h4 className="text-lg md:text-xl font-semibold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    {item.images.length} foto
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KEGIATAN RT */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-14 text-center">
            <h3 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
              Kegiatan Warga RT 61
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-slate-500 leading-relaxed">
              Berbagai kegiatan masyarakat yang menunjukkan semangat gotong
              royong, kebersamaan, serta kepedulian warga dalam menjaga
              lingkungan dan mempererat hubungan sosial di RT 61.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3 auto-rows-[320px]">
            {[
              {
                title: "Kerja Bakti",
                date: "15 Juni 2026",
                desc: "Warga bersama-sama membersihkan lingkungan, saluran air, dan fasilitas umum guna menciptakan kawasan yang bersih dan nyaman.",
                size: "large",
                images: [
                  "/images/kegiatan/kerjabakti1.jpg",
                  "/images/kegiatan/kerjabakti2.jpg",
                  "/images/kegiatan/kerjabakti3.jpg",
                ],
              },

              {
                title: "Rapat Bulanan",
                date: "7 Juni 2026",
                desc: "Musyawarah rutin membahas evaluasi kegiatan serta program yang akan dilaksanakan oleh warga RT.",
                size: "small",
                images: [
                  "/images/kegiatan/rapat1.jpg",
                  "/images/kegiatan/rapat2.jpg",
                ],
              },
            ].map((item, index) => (
              <div key={index} onClick={() => setSelected(item)} className={`
              relative
              cursor-pointer
              overflow-hidden
              rounded-[34px]
              group
              border
              border-white/40
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_35px_70px_rgba(0,0,0,.25)]
          ${
            item.size === "large"
              ? "md:col-span-2 md:row-span-2"
              : item.size === "medium"
                ? "md:row-span-2"
                : ""
          }
        `}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
            group-hover:rotate-1
          "
                />

                <div
                  className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-black/30
            to-transparent
          "
                />

                <div className="absolute left-5 top-5 flex gap-2">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
                    {item.date}
                  </span>

                  <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                    {item.images.length} Foto
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <h4 className="text-2xl font-bold tracking-tight">
                    {item.title}
                  </h4>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200 line-clamp-3">
                    {item.desc}
                  </p>
                  <div className="mt-7 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-200">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Klik untuk melihat dokumentasi
                    </div>

                    <button
                      className="
                rounded-full
                bg-white/90
                px-5
                py-2.5
                text-sm
                font-semibold
                text-slate-900
                backdrop-blu
                transition-all
                duration-300
                hover:bg-emerald-500
                hover:text-white
                hover:scale-105
              "
                    >
                      Lihat →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* MODAL PREVIEW */}
      <GalleryModal item={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
