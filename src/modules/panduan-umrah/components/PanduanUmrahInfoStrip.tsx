export default function PanduanUmrahInfoStrip() {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto rounded-[18px] border border-gray-200 bg-white p-2 shadow-sm">
      <div className="shrink-0 rounded-[14px] border border-green-100 bg-green-50 px-3 py-2">
        <div className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-green-700">
          Fokus
        </div>
        <div className="mt-1 text-[11px] font-semibold leading-4 text-slate-700">
          Ringkas & nyaman
        </div>
      </div>

      <div className="shrink-0 rounded-[14px] border border-amber-100 bg-amber-50 px-3 py-2">
        <div className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-amber-700">
          Catatan
        </div>
        <div className="mt-1 text-[11px] font-semibold leading-4 text-slate-700">
          Khusyuk & doa pribadi
        </div>
      </div>

      <div className="shrink-0 rounded-[14px] border border-sky-100 bg-sky-50 px-3 py-2">
        <div className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-sky-700">
          Rukun
        </div>
        <div className="mt-1 text-[11px] font-semibold leading-4 text-slate-700">
          Ihram → Thawaf → Sa’i → Tahallul
        </div>
      </div>
    </div>
  )
}