"use client"

import { useRef, useState, useEffect } from "react"
import PaketCard from "./PaketCard"

export default function PaketRekomendasi({ pakets }: any) {
  if (!pakets || pakets.length === 0) return null

  const data = pakets.slice(0, 6)

  const scrollRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [isInteracting, setIsInteracting] = useState(false)

  // ================= SCROLL DETECTOR =================
  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return

    const firstChild = container.firstChild as HTMLElement
    if (!firstChild) return

    const gap = 12
    const cardWidth = firstChild.offsetWidth + gap

    const index = Math.round(container.scrollLeft / cardWidth)
    setActive(index)
  }

  // ================= AUTOPLAY =================
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current || isInteracting) return

      const container = scrollRef.current
      const firstChild = container.firstChild as HTMLElement
      if (!firstChild) return

      const gap = 12
      const cardWidth = firstChild.offsetWidth + gap

      let nextIndex = active + 1
      if (nextIndex >= data.length) nextIndex = 0

      container.scrollTo({
        left: nextIndex * cardWidth,
        behavior: "smooth",
      })

      setActive(nextIndex)
    }, 3500)

    return () => clearInterval(interval)
  }, [active, isInteracting, data.length])

  // ================= TOUCH =================
  const handleTouchStart = () => setIsInteracting(true)
  const handleTouchEnd = () => {
    setTimeout(() => setIsInteracting(false), 1200)
  }

  return (
    <section
      className="
        mt-4
        bg-white rounded-2xl
        border border-gray-100
        shadow-sm

        p-3
        space-y-3
        isolate
      "
    >
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-bold flex items-center gap-1">
          🔥 Rekomendasi
        </h2>

        <span className="text-[11px] text-gray-400">
          Pilihan terbaik
        </span>
      </div>

      {/* ================= SLIDER (ALL DEVICE) ================= */}
      <div className="space-y-2">

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="
            flex gap-3 overflow-x-auto
            snap-x snap-mandatory
            scrollbar-hide

            px-1
          "
        >
          {data.map((item: any, i: number) => {
            const isActive = i === active

            return (
              <div
                key={item.id}
                className={`
                  snap-start
                  shrink-0

                  /* 🔥 MOBILE */
                  min-w-[55%]
                  max-w-[75%]

                  /* 🔥 DESKTOP */
                  md:min-w-[240px]
                  md:max-w-[240px]

                  transition-all duration-300
                  ${isActive ? "scale-100" : "scale-[0.96] opacity-90"}
                `}
              >
                <PaketCard paket={item} />
              </div>
            )
          })}
        </div>

        {/* ================= DOT ================= */}
        <div className="flex justify-center gap-1">
          {data.map((_: any, i: number) => (
            <div
              key={i}
              className={`
                h-1 rounded-full transition-all duration-300
                ${active === i
                  ? "w-3 bg-green-600"
                  : "w-1 bg-gray-300"}
              `}
            />
          ))}
        </div>

      </div>
    </section>
  )
}