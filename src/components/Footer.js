export default function Footer() {
  return (
    <footer className="relative bg-[#0b1b3a] text-white">
      {/* NAVY SHADE / GLOW BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">KKN Website</h2>
            <p className="mt-2 text-sm text-white/70 leading-relaxed max-w-md">
              Website resmi kegiatan KKN yang berisi informasi program,
              dokumentasi, dan kontak.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-2">Kontak</h3>
            <p className="text-sm text-white/70">Email: kkn@example.com</p>
            <p className="text-sm text-white/70">Telp: 0812-3456-7890</p>
            <p className="text-sm text-white/70">
              Lokasi: Yogyakarta, Indonesia
            </p>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold">
            Lokasi RW 17 Brontokusuman
          </h3>

          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=Brontokusuman%20RW%2017%20Yogyakarta&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>

          <a
            href="https://maps.app.goo.gl/ttdtCD9WVNBNNPUa9"
            target="_blank"
            className="text-sm text-white/60 hover:text-white transition"
          >
            Buka di Google Maps →
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between text-xs text-white/60 gap-2">
          <p>© {new Date().getFullYear()} KKN UAD Alternatif 104 II.D.2</p>

          <p>RW 17 • Brontokusuman</p>
        </div>
      </div>
    </footer>
  );
}
