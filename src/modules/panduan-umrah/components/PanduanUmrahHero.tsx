export default function PanduanUmrahHero() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-sm">
      <div className="relative p-4 md:p-5">
        <div className="absolute right-3 top-2 h-20 w-20 rounded-full bg-green-50 blur-2xl md:h-28 md:w-28" />

        <div className="relative z-[1]">
          <div className="mb-2 inline-flex items-center rounded-full border border-green-100 bg-green-50 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.14em] text-green-700">
            Panduan Ibadah Umrah
          </div>

          <h1 className="max-w-3xl text-[20px] font-black leading-[1.1] tracking-tight text-slate-900 md:text-[28px]">
            Panduan Tata Cara Ibadah Umrah
          </h1>

          <p className="mt-2 max-w-2xl text-[12px] leading-5 text-slate-600 md:text-[13px] md:leading-6">
            Ringkas, berurutan, dan nyaman dibaca mulai dari safar sampai
            tahallul.
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {/* <div className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] font-bold text-slate-700">
              Compact UI
            </div>
            <div className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] font-bold text-slate-700">
              Mobile Friendly
            </div> */}
            <div className="rounded-full border border-green-100 bg-green-50 px-2.5 py-1.5 text-[10px] font-bold text-green-700">
              8 Tahapan
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}