
"use client";

import Navbar from "@/components/Navbar";

export default function Program() {
  const programs = [
    {
      title: "Posyandu Balita dan Lansia",
      description:
        "Posyandu merupakan kegiatan rutin yang bertujuan meningkatkan kesehatan masyarakat, khususnya balita dan lansia. Kegiatan ini meliputi pemeriksaan kesehatan, pemantauan pertumbuhan dan perkembangan balita, pemberian vitamin, serta pemeriksaan kesehatan bagi lansia guna mendukung kualitas hidup yang lebih baik.",
    },
    {
      title: "Kerja Bakti",
      description:
        "Kerja bakti dilaksanakan secara berkala dengan melibatkan seluruh warga RW 17. Kegiatan ini bertujuan menjaga kebersihan lingkungan, merawat fasilitas umum, serta memperkuat semangat gotong royong dan kebersamaan antarwarga dalam menciptakan lingkungan yang bersih dan nyaman.",
    },
    {
      title: "Bank Sampah",
      description:
        "Bank Sampah merupakan program pengelolaan sampah berbasis masyarakat yang mendorong warga untuk memilah sampah sesuai jenisnya. Melalui program ini, sampah yang masih memiliki nilai guna dapat didaur ulang sehingga membantu menjaga kebersihan lingkungan sekaligus memberikan manfaat ekonomi bagi masyarakat.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Program RW 17
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-relaxed">
              Berbagai program kemasyarakatan yang dilaksanakan secara rutin
              sebagai bentuk kepedulian terhadap kesehatan, kebersihan
              lingkungan, serta pemberdayaan masyarakat di RW 17 Karanganyar.
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition duration-300"
              >
                <h2 className="text-2xl font-bold text-emerald-700 mb-4">
                  {program.title}
                </h2>

                <p className="text-gray-600 leading-relaxed text-justify">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

