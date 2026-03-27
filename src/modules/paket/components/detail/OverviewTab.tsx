"use client"

export default function OverviewTab({ paket }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-2.5 md:p-3 space-y-2 text-[13px] text-gray-600">

      <div className="font-semibold text-gray-800">
        Deskripsi
      </div>

      <p>
        {paket.description || "Tidak ada deskripsi"}
      </p>

      <div className="pt-2 text-xs text-gray-500">
        📍 {paket.city} • ✈️ {paket.airline}
      </div>

    </div>
  )
}