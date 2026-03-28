"use client"

import PaketTabs from "../components/PaketTabs"
import PaketRekomendasi from "@/modules/paket/components/PaketRekomendasi"
import MobileCTA from "@/components/ui/MobileCTA"
import { formatRupiah } from "@/lib/format"

export default function PaketDetailPage({ paket, pakets }: any) {
  if (!paket) {
    return (
      <div className="p-4 text-center text-gray-500 text-sm">
        Paket tidak ditemukan
      </div>
    )
  }

  const imageSrc =
    typeof paket.image === "string" && paket.image.length > 0
      ? paket.image
      : "/images/fallback.png"

  const rekomendasi =
    Array.isArray(pakets)
      ? pakets.filter((p: any) => p.id !== paket.id).slice(0, 5)
      : []

  return (
    <>
      <div className="bg-gray-50 min-h-screen overflow-x-hidden">

        {/* ================= HERO ================= */}
        <div className="relative w-full h-[190px] md:h-[320px] overflow-hidden">

          <img
            src={imageSrc}
            alt={paket.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-10 left-3 right-3 text-white">

            <h1 className="text-[14px] md:text-xl font-semibold line-clamp-2">
              {paket.name}
            </h1>

            {/* 🔥 FIX */}
            <p className="text-[10px] md:text-xs text-white/80 mt-0.5">
              {paket.duration} • {paket.airline}
            </p>

          </div>

        </div>

        {/* ================= CONTENT ================= */}
        <div className="max-w-4xl mx-auto px-3 mt-3 md:mt-5 pb-[130px] md:pb-8">

          <div className="grid md:grid-cols-3 gap-3 md:gap-5">

            {/* LEFT */}
            <div className="md:col-span-2 space-y-4 md:space-y-6">

              <PaketTabs paket={paket} />

              {rekomendasi.length > 0 && (
                <PaketRekomendasi pakets={rekomendasi} />
              )}

            </div>

            {/* DESKTOP CTA */}
            <div className="hidden md:block">

              <div className="sticky top-[70px] space-y-3">

                <div className="bg-white rounded-xl shadow-sm p-3 space-y-2">

                  <div className="text-[11px] text-gray-500">
                    Mulai dari
                  </div>

                  {/* 🔥 FIX */}
                  <div className="text-lg font-bold text-green-600">
                    {formatRupiah(paket.price || 0)}
                  </div>

                  <button className="w-full bg-green-600 text-white py-2 rounded-lg text-xs font-semibold">
                    Booking
                  </button>

                </div>

                <div className="bg-white rounded-lg shadow-sm p-2 text-[11px] text-gray-600 space-y-1">
                  <div>✈️ {paket.airline}</div>
                  <div>🕋 {paket.duration}</div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* 🔥 FIX */}
      <MobileCTA price={paket.price || 0} />
    </>
  )
}