"use client"

export default function OverviewTab({ paket }: any) {
  const desc =
  paket.description ||
  paket.shortDesc ||
  "Tidak ada deskripsi"

  const formatted = desc.replace(/\r\n|\n/g, "<br/>")

  return (
    <div className="bg-white rounded-2xl shadow-sm p-2.5 md:p-3 space-y-3 text-[13px] text-gray-600">

      <div className="font-semibold text-gray-800 text-sm">
        Deskripsi
      </div>

      <div
        className="leading-relaxed"
        dangerouslySetInnerHTML={{ __html: formatted }}
      />

      <div className="pt-2 text-[11px] text-gray-500 flex gap-2">
        <span>📍 {paket.city}</span>
        <span>•</span>
        <span>✈️ {paket.airline}</span>
      </div>

    </div>
  )
}