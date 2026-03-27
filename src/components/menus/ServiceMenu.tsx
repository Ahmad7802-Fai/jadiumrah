"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { baseMenus } from "./menu-data"

export default function ServiceMenu() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // ================= TRACK CENTER =================
  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return

    const center = el.scrollLeft + el.offsetWidth / 2
    const items = Array.from(el.children)

    let closest = 0
    let minDiff = Infinity

    items.forEach((child, i) => {
      const c = child as HTMLElement
      const childCenter = c.offsetLeft + c.offsetWidth / 2
      const diff = Math.abs(center - childCenter)

      if (diff < minDiff) {
        minDiff = diff
        closest = i
      }
    })

    setActiveIndex(closest)
  }

  // ================= SCROLL ARROW =================
  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return

    el.scrollBy({
      left: dir === "left" ? -220 : 220,
      behavior: "smooth",
    })
  }

  return (
    <div className="w-full">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex gap-2 overflow-x-auto no-scrollbar
            px-3
            snap-x snap-mandatory
          "
        >
          {baseMenus.map((item, i) => {
            const Icon = item.icon
            const active = i === activeIndex

            return (
              <Link
                key={item.title}
                href={item.href}
                className="shrink-0 snap-center"
              >
                <div
                  className={`
                    flex flex-col items-center justify-center

                    w-[64px]
                    py-2

                    transition-all duration-300

                    ${
                      active
                        ? "scale-105 opacity-100"
                        : "scale-90 opacity-60"
                    }

                    active:scale-90
                  `}
                >
                  {/* ICON */}
                  <div
                    className={`
                      w-10 h-10
                      rounded-2xl

                      flex items-center justify-center

                      ${item.bg}

                      backdrop-blur
                      shadow-sm

                      transition-all duration-300

                      ${
                        active
                          ? "shadow-md"
                          : "shadow-none"
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      className={item.iconColor}
                    />
                  </div>

                  {/* TEXT */}
                  <div
                    className={`
                      mt-1 text-[9px] text-center leading-tight

                      transition-all duration-300

                      ${
                        active
                          ? "text-gray-900 font-medium"
                          : "text-gray-400"
                      }
                    `}
                  >
                    {item.title}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* INDICATOR (APPLE STYLE MINIMAL) */}
        <div className="flex justify-center mt-2">
          <div className="h-[3px] w-10 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-600 transition-all duration-300"
              style={{
                width: `${(activeIndex + 1) * 20}%`,
              }}
            />
          </div>
        </div>

      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block relative">

        {/* LEFT */}
        <button
          onClick={() => scroll("left")}
          className="
            absolute left-0 top-1/2 -translate-y-1/2 z-10

            w-9 h-9 rounded-full
            bg-white/80 backdrop-blur

            border border-gray-200

            flex items-center justify-center

            shadow-sm
            hover:scale-105
            transition
          "
        >
          ←
        </button>

        {/* RIGHT */}
        <button
          onClick={() => scroll("right")}
          className="
            absolute right-0 top-1/2 -translate-y-1/2 z-10

            w-9 h-9 rounded-full
            bg-white/80 backdrop-blur

            border border-gray-200

            flex items-center justify-center

            shadow-sm
            hover:scale-105
            transition
          "
        >
          →
        </button>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex gap-5 overflow-x-auto no-scrollbar

            px-12 py-3

            snap-x snap-mandatory
          "
        >
          {baseMenus.map((item, i) => {
            const Icon = item.icon
            const active = i === activeIndex

            return (
              <Link
                key={item.title}
                href={item.href}
                className="shrink-0 snap-center"
              >
                <div
                  className={`
                    flex flex-col items-center

                    w-[88px]

                    transition-all duration-300

                    ${
                      active
                        ? "scale-105 opacity-100"
                        : "scale-95 opacity-60"
                    }
                  `}
                >
                  <div
                    className={`
                      w-12 h-12 rounded-2xl
                      flex items-center justify-center

                      ${item.bg}

                      transition-all duration-300

                      ${
                        active
                          ? "shadow-md"
                          : "shadow-none"
                      }
                    `}
                  >
                    <Icon size={20} className={item.iconColor} />
                  </div>

                  <div
                    className={`
                      text-xs mt-2 text-center

                      ${
                        active
                          ? "text-gray-900 font-medium"
                          : "text-gray-400"
                      }
                    `}
                  >
                    {item.title}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

      </div>

    </div>
  )
}