"use client";

import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Tentang RW 17
            </h1>
          </div>

          {/* Content */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-10">
            <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
              <p>
                RW 17 Karanganyar merupakan wilayah permukiman di Kota
                Yogyakarta yang terdiri dari RT 61, RT 62, RT 63, dan RT 83.
                Masyarakatnya dikenal aktif dalam berbagai kegiatan sosial,
                keagamaan, dan kemasyarakatan serta menjunjung tinggi nilai
                gotong royong. Kebersamaan dan partisipasi warga menjadi
                kekuatan utama dalam menciptakan lingkungan yang aman, nyaman,
                dan harmonis.
              </p>

              <p>
                RW 17 juga didukung oleh berbagai fasilitas yang menunjang
                aktivitas masyarakat, seperti RTHP Karanganyar RW 17 yang
                digunakan untuk kegiatan warga, posyandu, dan sosialisasi.
                Selain itu, terdapat TPA Aisyiyah Al Ukhuwwah sebagai sarana
                pendidikan agama bagi anak-anak serta Masjid Al-Irsyad yang
                menjadi pusat kegiatan ibadah dan sosial masyarakat. Keberadaan
                fasilitas tersebut mencerminkan komitmen warga dalam membangun
                lingkungan yang religius, edukatif, dan penuh kebersamaan.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

