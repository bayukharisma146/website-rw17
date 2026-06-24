import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  const items = [
    {
      title: "RT 61",
      href: "/rt/rt61",
      desc: "Lingkungan aktif dengan kegiatan warga dan UMKM kuliner.",
      images: [
        "images/RT-61-GD.jpeg",
        "images/RT-61-M -ukuwah-1.jpeg",
        "images/RT-61-M-ukuwah-2.jpeg",
        "images/RT-61-Masjid.jpeg",
        "images/RT-61-TK.jpeg"

      ],
    },
    {
      title: "RT 62",
      href: "/rt/rt62",
      desc: "Berfokus pada kreativitas warga dan ekonomi kreatif.",
      images: [
        "images/RT-62-Bank-sampah.jpeg",
        "images/RT-62-BS.jpeg",
      ],
    },
    {
      title: "RT 63",
      href: "/rt/rt63",
      desc: "Lingkungan asri yang mendukung desa wisata.",
      images: [
        "images/RT-63-TK-Paud.jpeg",
      ],
    },
    {
      title: "RT 83",
      href: "/rt/rt83",
      desc: "Aktif dalam kegiatan sosial dan UMKM masjid.",
      images: [
        "images/RT-83-Balai.jpeg",
        "images/RT-83-Balai-1.jpeg",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white">
      <HeroSlider />
      <Navbar />

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-emerald-200 blur-[120px] opacity-40" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-teal-200 blur-[120px] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            RW 17
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-gray-600 leading-relaxed">
            RW 17 terdiri dari 4 Rukun Tetangga (RT) yang hidup dalam suasana desa yang hangat, harmonis, dan terus berkembang melalui aktivitaswarga serta UMKM lokal. 
            Setiap RT memiliki potensi unik yangmencerminkan semangat gotong royong, kreativitas, dan kemandirian
            masyarakat dalam membangun lingkungan yang lebih maju.
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-24">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/2">
                <ImageSlider images={item.images} />
              </div>

              {/* CARD */}
              <div className="w-full md:w-1/2">
                <Link href={item.href}>
                  <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-lg p-8 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-6 inline-flex items-center text-emerald-600 font-medium">
                      Jelajahi RT →
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
