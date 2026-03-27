"use client"

import { useEffect, useState } from "react"
import PaketCard from "./PaketCard"
import { Paket } from "../types/types"
import { getPakets } from "../services/paketService"

export default function PaketList({
  promoOnly = false,
}: {
  promoOnly?: boolean
}) {
  const [data, setData] = useState<Paket[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getPakets()

        const filtered = promoOnly
          ? res.filter((p) => p.isPromo)
          : res

        setData(filtered)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [promoOnly])

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="flex gap-3 px-3 pb-2">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="
              w-[80%] h-[140px]
              bg-gray-100 rounded-xl
              animate-pulse
            "
          />
        ))}
      </div>
    )
  }

  // ================= EMPTY =================
  if (!data.length) {
    return (
      <div className="text-xs text-gray-400 px-3">
        Tidak ada paket tersedia
      </div>
    )
  }

  const isSingle = data.length === 1

  return (
    <div
      className={`
        flex gap-3
        overflow-x-auto no-scrollbar
        snap-x snap-mandatory

        px-3 pb-2

        md:grid md:grid-cols-2 lg:grid-cols-3
        md:gap-6 md:overflow-visible md:snap-none

        ${isSingle ? "justify-center" : ""}
      `}
    >
      {data.map((paket) => (
        <div
          key={paket.id}
          className={`
            ${
              isSingle
                ? "w-full max-w-md mx-auto"   /* 🔥 FIX SINGLE */
                : "w-[80%] sm:w-[60%]"
            }

            flex-shrink-0
            snap-center

            md:w-full
            md:flex-shrink
            md:snap-none
          `}
        >
          <PaketCard paket={paket} />
        </div>
      ))}
    </div>
  )
}