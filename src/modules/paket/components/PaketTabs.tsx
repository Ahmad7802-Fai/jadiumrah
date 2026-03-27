"use client"

import { useState, useRef, useEffect } from "react"

import OverviewTab from "./detail/OverviewTab"
import ItineraryTab from "./detail/ItineraryTab"
import HotelTab from "./detail/HotelTab"
import HargaTab from "./detail/HargaTab"
import GalleryTab from "./detail/GalleryTab"

type TabKey =
  | "overview"
  | "itinerary"
  | "hotel"
  | "harga"
  | "gallery"

const TABS: { key: TabKey; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "itinerary", label: "Itinerary" },
  { key: "hotel", label: "Hotel" },
  { key: "harga", label: "Harga" },
  { key: "gallery", label: "Gallery" },
]

export default function PaketTabs({ paket }: any) {
  const [active, setActive] = useState<TabKey>("overview")

  const containerRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // ================= INDICATOR =================
  useEffect(() => {
    const index = TABS.findIndex((t) => t.key === active)
    const el = tabRefs.current[index]
    const container = containerRef.current
    const indicator = indicatorRef.current

    if (!el || !container || !indicator) return

    const left = el.offsetLeft
    const width = el.offsetWidth

    // 🔥 smooth GPU
    indicator.style.width = `${width}px`
    indicator.style.transform = `translate3d(${left}px,0,0)`

    // 🔥 center scroll (lebih stabil)
    const scrollTarget =
      left - container.clientWidth / 2 + width / 2

    container.scrollTo({
      left: scrollTarget,
      behavior: "smooth",
    })
  }, [active])

  return (
    <div className="space-y-2">

      {/* ================= STICKY ================= */}
      <div
        className="
          sticky top-[64px] z-[40]

          bg-gray-50/95 backdrop-blur
          border-b border-gray-100

          py-1
        "
      >
        <div className="px-3">

          <div
            ref={containerRef}
            className="
              relative
              flex gap-[4px]

              p-[3px]

              bg-gray-100
              rounded-lg

              overflow-x-auto
              scrollbar-hide

              will-change-transform
            "
          >

            {/* INDICATOR */}
            <div
              ref={indicatorRef}
              className="
                absolute top-[3px] left-0
                h-[calc(100%-6px)]

                bg-white
                rounded-md

                shadow-[0_1px_6px_rgba(0,0,0,0.08)]

                transition-all duration-300 ease-out
              "
            />

            {/* TABS */}
            {TABS.map((tab, i) => {
              const isActive = active === tab.key

              return (
                <button
                  key={tab.key}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  onClick={() => setActive(tab.key)}
                  className={`
                    relative z-10
                    shrink-0

                    px-2 py-[4px]
                    rounded-md

                    text-[10px]
                    leading-none
                    font-medium

                    whitespace-nowrap

                    transition-all duration-200

                    ${
                      isActive
                        ? "text-green-600"
                        : "text-gray-500 active:scale-95"
                    }
                  `}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="pt-1 px-3">

        {active === "overview" && <OverviewTab paket={paket} />}
        {active === "itinerary" && <ItineraryTab paket={paket} />}
        {active === "hotel" && <HotelTab paket={paket} />}
        {active === "harga" && <HargaTab paket={paket} />}
        {active === "gallery" && <GalleryTab paket={paket} />}

      </div>
    </div>
  )
}