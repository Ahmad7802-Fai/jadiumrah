"use client"

import { useRouter } from "next/navigation"
import PaketList from "../components/PaketList"

export default function PaketSection() {
  const router = useRouter()

  return (
    <section className="relative z-20 pt-4 pb-6 md:pt-6 md:pb-10 bg-white rounded-t-3xl shadow-[0_-6px_20px_rgba(0,0,0,0.08)]">

      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto px-3 md:px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-3 md:mb-4">

          <div className="leading-tight">
            <h2 className="font-semibold text-[13px] md:text-lg">
              Promo Umrah 🔥
            </h2>
            <p className="text-[10px] md:text-sm text-gray-500">
              Harga terbaik bulan ini
            </p>
          </div>

          <button
            onClick={() => router.push("/paket")}
            className="text-[10px] md:text-sm text-green-600 font-medium px-2 py-1 rounded-md hover:bg-green-50 active:scale-95 transition"
          >
            Lihat Semua
          </button>

        </div>

        {/* LIST */}
        <div className="space-y-3 md:space-y-4">
          <PaketList promoOnly />
        </div>

      </div>

    </section>
  )
}