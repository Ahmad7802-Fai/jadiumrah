"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function PaketSearch({
  onChange,
}: {
  onChange?: (val: string) => void
}) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const wrapperRef = useRef<HTMLDivElement>(null)

  // ================= HANDLE INPUT =================
  const handleChange = (val: string) => {
    setQuery(val)
    onChange?.(val)
  }

  // ================= CLICK OUTSIDE (CLOSE DROPDOWN) =================
  useEffect(() => {
    const handleClick = (e: any) => {
      if (!wrapperRef.current?.contains(e.target)) {
        setResults([])
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  // ================= DEBOUNCE =================
  useEffect(() => {
    if (!query) {
      setResults([])
      return
    }

    const timeout = setTimeout(async () => {
      try {
        setLoading(true)

        const res = await fetch(
          `http://192.168.0.10:8000/api/v1/pakets?search=${query}`
        )
        const json = await res.json()

        setResults(json.data || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }, 300) // 🔥 lebih cepat

    return () => clearTimeout(timeout)
  }, [query])

  return (
    <div ref={wrapperRef} className="relative">

      {/* ================= INPUT ================= */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Cari paket..."
          className="
            w-full
            pl-9 pr-8 py-2

            rounded-lg
            border border-gray-200

            text-[12px]

            focus:outline-none
            focus:ring-2 focus:ring-green-500
          "
        />

        {/* ICON */}
        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-[12px]">
          🔍
        </div>

        {/* CLEAR */}
        {query && (
          <button
            onClick={() => handleChange("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-[12px]"
          >
            ✕
          </button>
        )}
      </div>

      {/* ================= DROPDOWN ================= */}
      {query && (
        <div
          className="
            absolute left-0 right-0 mt-1

            bg-white
            rounded-lg

            shadow-[0_8px_20px_rgba(0,0,0,0.08)]
            border border-gray-100

            z-50
            max-h-[260px]
            overflow-y-auto
          "
        >

          {/* LOADING */}
          {loading && (
            <div className="p-2 text-[10px] text-gray-400">
              Mencari...
            </div>
          )}

          {/* EMPTY */}
          {!loading && results.length === 0 && (
            <div className="p-2 text-[10px] text-gray-400">
              Tidak ditemukan
            </div>
          )}

          {/* RESULTS */}
          {results.map((item) => (
            <div
              key={item.id}
              onClick={() => router.push(`/paket/${item.slug}`)}
              className="
                flex gap-2 items-center

                px-2 py-2
                hover:bg-gray-50

                cursor-pointer
              "
            >
              {/* IMAGE */}
              <div className="relative w-[50px] h-[38px] rounded-md overflow-hidden shrink-0">
                <Image
                  src={item.thumbnail || "/images/fallback.png"}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* INFO */}
              <div className="flex-1 min-w-0">

                <div className="text-[11px] font-medium line-clamp-1">
                  {item.name}
                </div>

                <div className="text-[9px] text-gray-400">
                  {item.duration_label} • {item.airline}
                </div>

                <div className="text-[10px] text-green-600 font-semibold">
                  {item.price_label}
                </div>

              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  )
}