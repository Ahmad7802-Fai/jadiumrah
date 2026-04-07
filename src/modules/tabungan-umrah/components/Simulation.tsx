"use client"

import { useMemo, useState } from "react"
import { calculateTabungan } from "../utils/calculation"

export default function Simulation({ pakets }: { pakets: any[] }) {
  const [month, setMonth] = useState(36)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const selected = useMemo(() => {
    if (!pakets.length) return null
    return (
      pakets.find((p) => p.id === selectedId) ||
      [...pakets].sort((a, b) => a.price - b.price)[0]
    )
  }, [pakets, selectedId])

  const price = selected?.price || 0
  const result = calculateTabungan(price, month)

  // 🔥 WA MESSAGE (AUTO)
  const waMessage = encodeURIComponent(
    `Assalamu’alaikum, saya tertarik tabungan umrah

📦 Paket: ${selected?.name}
💰 Harga: Rp ${price.toLocaleString("id-ID")}
📆 Tenor: ${month} bulan
💸 Per bulan: Rp ${Math.round(result.perMonth).toLocaleString("id-ID")}

Mohon info lebih lanjut 🙏`
  )

  return (
    <section className="space-y-3">

      <h2 className="text-center text-sm md:text-lg font-semibold">
        Simulasi Tabungan
      </h2>

      <div className="grid md:grid-cols-2 gap-2 md:gap-4">

        {/* LEFT */}
        <div className="
          bg-white
          p-2.5 md:p-4
          rounded-xl
          border border-gray-100
          shadow-sm
          space-y-2
        ">

          {/* SELECT */}
          <select
            onChange={(e) => setSelectedId(Number(e.target.value))}
            className="
              w-full
              border border-gray-200
              rounded-md
              px-2 py-1
              text-[10px] md:text-xs
            "
          >
            {pakets.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} - Rp {p.price.toLocaleString("id-ID")}
              </option>
            ))}
          </select>

          {/* TENOR */}
          <div className="grid grid-cols-4 gap-1">
            {[6, 12, 24, 36].map((m) => (
              <button
                key={m}
                onClick={() => setMonth(m)}
                className={`
                  py-1
                  text-[10px]
                  rounded-md
                  transition
                  ${
                    month === m
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }
                `}
              >
                {m} Bulan
              </button>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="
          bg-green-600 text-white
          p-3 md:p-5
          rounded-xl
          flex flex-col justify-between
        ">

          {/* HEADER */}
          <div>
            <div className="text-[9px] opacity-80 truncate">
              {selected?.name}
            </div>

            <div className="text-lg md:text-2xl font-bold leading-tight">
              Rp {price.toLocaleString("id-ID")}
            </div>
          </div>

          {/* RESULT */}
          <div className="
            mt-2
            grid grid-cols-3
            text-center
            text-[9px] md:text-xs
          ">
            <div>
              <div className="opacity-70">Bulan</div>
              <div className="font-semibold">
                {Math.round(result.perMonth).toLocaleString("id-ID")}
              </div>
            </div>

            <div>
              <div className="opacity-70">Minggu</div>
              <div className="font-semibold">
                {Math.round(result.perWeek).toLocaleString("id-ID")}
              </div>
            </div>

            <div>
              <div className="opacity-70">Hari</div>
              <div className="font-semibold">
                {Math.round(result.perDay).toLocaleString("id-ID")}
              </div>
            </div>
          </div>

          {/* 🔥 CTA WA */}
          <a
            href={`https://wa.me/62811922952?text=${waMessage}`}
            target="_blank"
            className="
              mt-2
              bg-white text-green-600
              text-[10px] md:text-xs
              font-medium
              py-1.5
              rounded-md
              text-center
              active:scale-95
              transition
            "
          >
            Konsultasi WA
          </a>

        </div>

      </div>

    </section>
  )
}