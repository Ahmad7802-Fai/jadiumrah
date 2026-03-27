export default function CicilanHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0f3f30] via-[#184b39] to-[#0f3f30] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4b46a] text-xl font-bold text-[#123b2d] shadow-sm">
            J
          </div>
          <div>
            <div className="text-xl font-extrabold tracking-tight">jadiumrah</div>
            <div className="text-xs text-white/70">Cicilan Umrah Aman & Ringan</div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          <a href="#home" className="text-[#6ed17f]">Beranda</a>
          <a href="#fitur" className="hover:text-[#6ed17f]">Keunggulan</a>
          <a href="#simulasi" className="hover:text-[#6ed17f]">Simulasi</a>
          <a href="#faq" className="hover:text-[#6ed17f]">FAQ</a>
        </nav>
      </div>

      <div id="home" className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14 lg:px-8 lg:py-16">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-5">
            <span className="inline-flex rounded-full bg-[#e4f3e7] px-4 py-2 text-sm font-semibold text-[#2f7d42]">
              Solusi Umrah Lebih Terjangkau
            </span>

            <h1 className="max-w-xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Cicilan Umrah yang ringan, jelas, dan siap bantu sampai berangkat.
            </h1>

            <p className="max-w-xl text-base leading-7 text-white/80 md:text-lg">
              Halaman landing modern untuk simulasi cicilan umrah, compact, rapi,
              dan enak dipakai di desktop maupun mobile app.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="rounded-2xl bg-[#4ca653] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-900/20 transition hover:-translate-y-0.5">
                Konsultasi Sekarang
              </button>

              <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur">
                Lihat Simulasi
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur md:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/95 p-5 text-slate-900 shadow-sm">
                <div className="mb-2 text-sm font-semibold text-slate-500">Mulai dari</div>
                <div className="text-3xl font-extrabold text-[#4ca653]">Rp 2.075.000</div>
                <div className="mt-1 text-sm text-slate-500">per bulan</div>
              </div>

              <div className="rounded-3xl bg-[#4ca653] p-5 text-white shadow-sm">
                <div className="mb-2 text-sm font-semibold text-white/80">Tenor favorit</div>
                <div className="text-3xl font-extrabold">12 Bulan</div>
                <div className="mt-1 text-sm text-white/80">fleksibel & mudah</div>
              </div>
            </div>

            <div className="mt-4 rounded-3xl bg-white/95 p-5 text-slate-900">
              <div className="mb-3 text-lg font-bold">Paket Low Budget</div>

              <div className="flex items-end justify-between gap-3">
                <div>
                  <div className="text-sm text-slate-500">Total Paket</div>
                  <div className="text-4xl font-extrabold text-[#4ca653]">Rp 24.900.000</div>
                </div>

                <div className="rounded-2xl bg-[#eef6ef] px-4 py-3 text-center shadow-sm">
                  <div className="text-xs text-slate-500">Per Hari</div>
                  <div className="text-lg font-bold text-slate-900">Rp 69.167</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}