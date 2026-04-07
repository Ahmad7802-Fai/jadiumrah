"use client"

import { useEffect, useState } from "react"

export default function CicilanCompactHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
        sticky

        top-[calc(58px+env(safe-area-inset-top))]
        md:top-[56px]

        z-30

        pt-[2px]   /* 🔥 micro spacing dari navbar */

        transition-all duration-300
        will-change-transform

        ${
          scrolled
            ? "bg-white/95 backdrop-blur border-b border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }
      `}
    >
      {/* ================= HERO ================= */}
      <div
        className={`
          transition-all duration-300 ease-out

          ${
            scrolled
              ? "opacity-0 -translate-y-2 pointer-events-none"
              : "opacity-100 translate-y-0"
          }
        `}
      >
        <div className="px-3 md:px-4 pb-2">
          <div
            className="
              rounded-xl
              bg-gradient-to-r from-green-600 to-green-500
              text-white

              px-3 py-2 md:px-4 md:py-3

              shadow-[0_8px_24px_rgba(0,0,0,0.12)]
            "
          >
            <p className="text-[12px] md:text-sm font-semibold">
              Umrah Bisa Dicicil 💳
            </p>
            <p className="text-[10px] md:text-xs text-white/90">
              Mulai ringan tanpa DP besar
            </p>
          </div>
        </div>
      </div>

      {/* ================= TOP BAR ================= */}
      <div
        className={`
          mx-auto max-w-6xl
          flex items-center justify-between
          px-3 md:px-4

          transition-all duration-300

          ${
            scrolled
              ? "h-10 md:h-12"
              : "h-11 md:h-14"
          }
        `}
      >
        {/* LEFT */}
        <div className="leading-tight">
          <h1 className="text-[13px] md:text-sm font-bold text-slate-900">
            Cicilan Umrah
          </h1>

          {!scrolled && (
            <p className="text-[9px] md:text-[10px] text-slate-500">
              Simulasi cepat
            </p>
          )}
        </div>

        {/* CTA */}
        <a
          href="#simulasi"
          className={`
            rounded-full
            font-semibold
            transition-all duration-300

            active:scale-95

            ${
              scrolled
                ? "bg-green-600 text-white px-3 py-1.5 text-xs shadow-md"
                : "bg-green-600/90 text-white px-2.5 py-1 text-[10px]"
            }
          `}
        >
          Simulasi
        </a>
      </div>
    </header>
  )
}