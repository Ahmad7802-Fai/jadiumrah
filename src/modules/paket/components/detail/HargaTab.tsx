"use client"

import { formatRupiah } from "@/lib/format"

export default function HargaTab({ paket }: any) {
  const departure = paket.departures?.[0]

  if (!departure) return null

  return (
    <div className="space-y-3">

      {/* ================= TANGGAL ================= */}
      <div className="
        bg-white
        rounded-2xl
        shadow-sm
        px-3 py-2.5

        flex justify-between items-center
        text-[13px]
      ">
        <div>
          <div className="font-semibold">
            {new Date(departure.departure_date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>

          <div className="text-[11px] text-gray-500">
            {departure.quota_label}
          </div>
        </div>

        <div className="text-green-600 font-bold">
          {formatRupiah(departure.price_start_from)}
        </div>
      </div>

      {/* ================= ROOM ================= */}
      {departure.prices?.map((item: any) => (
        <div
          key={item.id}
          className="
            bg-white
            rounded-2xl
            shadow-sm

            px-3 py-2.5
            flex justify-between items-center
            text-[13px]
          "
        >

          {/* LEFT */}
          <div className="space-y-[2px]">

            <div className="font-semibold capitalize">
              {item.room_type}
            </div>

            {/* ORIGINAL PRICE */}
            {item.discount > 0 && (
              <div className="text-[11px] text-gray-400 line-through">
                {formatRupiah(item.price)}
              </div>
            )}

            {/* FINAL PRICE */}
            <div className="text-green-600 font-bold leading-none">
              {formatRupiah(item.final_price)}
            </div>

            {/* PROMO */}
            {item.has_promo && (
              <div className="text-[11px] text-red-500">
                🔥 {item.promo_label}
              </div>
            )}

          </div>

          {/* BUTTON */}
          <button className="
            bg-green-600
            text-white
            text-[11px]

            px-3 py-1.5
            rounded-lg

            font-medium
            active:scale-95
          ">
            Pilih
          </button>

        </div>
      ))}

    </div>
  )
}