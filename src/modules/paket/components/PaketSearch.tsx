"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

import { toCDNImage, shimmer, toBase64 } from "@/lib/image"
import { useImageSize } from "@/lib/useImageSize"

export default function PaketSearch({
  onChange,
}: {
  onChange?: (val: string) => void
}) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  const router = useRouter()
  const wrapperRef = useRef<HTMLDivElement>(null)

  const size = useImageSize()

  // ================= HANDLE INPUT =================
  const handleChange = (val: string) => {
    setQuery(val)
    setActiveIndex(-1)
    onChange?.(val)
  }

  // ================= CLICK OUTSIDE =================
  useEffect(() => {
    const handleClick = (e: any) => {
      if (!wrapperRef.current?.contains(e.target)) {
        setResults([])
        setActiveIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  // ================= KEYBOARD NAV =================
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((prev) =>
        prev < results.length - 1 ? prev + 1 : prev
      )
    }

    if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0))
    }

    if (e.key === "Enter") {
      if (activeIndex >= 0) {
        router.push(`/paket/${results[activeIndex].slug}`)
      }
    }
  }

  // ================= FETCH =================
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const timeout = setTimeout(async () => {
      try {
        setLoading(true)

        const res = await fetch(
          `https://app.jadiumrah.cloud/api/v1/pakets?search=${query}`
        )

        if (!res.ok) throw new Error("API error")

        const json = await res.json()
        setResults(json.data || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }, 300)

    return () => clearTimeout(timeout)
  }, [query])

  return (
    <div ref={wrapperRef} className="relative z-[999]">

      {/* ================= INPUT ================= */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Cari paket..."
          className="
            w-full
            pl-10 pr-9 py-2
            rounded-xl
            border border-gray-200
            text-xs
            bg-white
            shadow-sm
            focus:outline-none
            focus:ring-2 focus:ring-primary
            focus:border-primary
          "
        />

        {/* ICON */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
          🔍
        </div>

        {/* CLEAR */}
        {query && (
          <button
            onClick={() => handleChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      {/* ================= DROPDOWN ================= */}
      {query.trim() && (
        <div
          className="
            absolute left-0 right-0 mt-3
            bg-white/95 backdrop-blur-md
            rounded-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            border border-gray-100
            z-[9999]
            max-h-[300px]
            overflow-y-auto
          "
        >

          {/* LOADING */}
          {loading && (
            <div className="p-3 text-xs text-gray-400 text-center">
              Mencari paket terbaik...
            </div>
          )}

          {/* EMPTY */}
          {!loading && results.length === 0 && (
            <div className="p-4 text-xs text-gray-400 text-center">
              Tidak ditemukan hasil
            </div>
          )}

          {/* RESULTS */}
          {results.map((item, index) => (
            <div
              key={item.id}
              onClick={() => router.push(`/paket/${item.slug}`)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`
                flex gap-3 items-center
                px-3 py-2
                cursor-pointer
                transition
                ${
                  activeIndex === index
                    ? "bg-green-50"
                    : "hover:bg-gray-50"
                }
              `}
            >
              {/* IMAGE */}
              <div className="relative w-[52px] h-[40px] rounded-md overflow-hidden shrink-0">
                <Image
                  src={toCDNImage(item.thumbnail, size)}
                  alt={item.name}
                  fill
                  sizes="52px"
                  className="object-cover"

                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(52, 40)
                  )}`}

                  onError={(e) => {
                    e.currentTarget.src = "/images/fallback.png"
                  }}
                />
              </div>

              {/* INFO */}
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium line-clamp-1">
                  {item.name}
                </div>

                <div className="text-[10px] text-gray-400">
                  {item.duration_label} • {item.airline}
                </div>

                <div className="text-xs text-primary font-semibold">
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