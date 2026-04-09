"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { baseMenus } from "./menu-data"

export default function ServiceMenu() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // ================= AUTO DETECT ACTIVE =================
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

  // ================= AUTO CENTER =================
  const scrollToIndex = (index: number) => {
    const el = scrollRef.current
    if (!el) return

    const child = el.children[index] as HTMLElement
    if (!child) return

    const offset =
      child.offsetLeft -
      el.offsetWidth / 2 +
      child.offsetWidth / 2

    el.scrollTo({
      left: offset,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    scrollToIndex(activeIndex)
  }, [activeIndex])

  // ================= DESKTOP ARROW =================
  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return

    el.scrollBy({
      left: dir === "left" ? -260 : 260,
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
            flex gap-content overflow-x-auto no-scrollbar
            px-content py-content
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
                  onClick={() => setActiveIndex(i)}
                  className={`
                    flex flex-col items-center justify-center
                    w-[64px] py-2
                    transition-all duration-300
                    ${
                      active
                        ? "scale-105 opacity-100"
                        : "scale-90 opacity-60"
                    }
                  `}
                >
                  {/* ICON */}
                  <div
                    className={`
                      w-10 h-10 rounded-xl
                      flex items-center justify-center
                      ${item.bg}
                      ${
                        active
                          ? "shadow-md ring-2 ring-primary-soft"
                          : ""
                      }
                    `}
                  >
                    <Icon size={18} className={item.iconColor} />
                  </div>

                  {/* TEXT */}
                  <div
                    className={`
                      mt-1 text-small text-center
                      ${
                        active
                          ? "text-text font-medium"
                          : "text-text-soft"
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

        {/* INDICATOR */}
        <div className="flex justify-center mt-2">
          <div className="relative h-[3px] w-16 bg-border rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
              style={{
                width: `${100 / baseMenus.length}%`,
                transform: `translateX(${activeIndex * 100}%)`,
              }}
            />
          </div>
        </div>

      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block relative">

        <div className="max-w-5xl mx-auto relative px-section">

          {/* GRADIENT EDGE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-bg to-transparent z-[5]" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-bg to-transparent z-[5]" />

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className="
              absolute -left-6 top-1/2 -translate-y-1/2 z-10
              w-9 h-9 rounded-full
              bg-card/90 backdrop-blur
              border border-border
              flex items-center justify-center
              shadow-sm hover:scale-105 transition
            "
          >
            ←
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className="
              absolute -right-6 top-1/2 -translate-y-1/2 z-10
              w-9 h-9 rounded-full
              bg-card/90 backdrop-blur
              border border-border
              flex items-center justify-center
              shadow-sm hover:scale-105 transition
            "
          >
            →
          </button>

          {/* SCROLL AREA */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="
              overflow-x-auto no-scrollbar
              px-12 py-section
            "
          >

            <div className="flex justify-center w-full">

              <div className="flex gap-section snap-x snap-mandatory">

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
                        onClick={() => setActiveIndex(i)}
                        className={`
                          flex flex-col items-center
                          w-[88px]
                          transition-all duration-300
                          ${
                            active
                              ? "scale-105 opacity-100"
                              : "scale-95 opacity-60 hover:opacity-100"
                          }
                        `}
                      >
                        {/* ICON */}
                        <div
                          className={`
                            w-12 h-12 rounded-xl
                            flex items-center justify-center
                            ${item.bg}
                            ${
                              active
                                ? "shadow-md ring-2 ring-primary-soft"
                                : ""
                            }
                          `}
                        >
                          <Icon size={20} className={item.iconColor} />
                        </div>

                        {/* TEXT */}
                        <div
                          className={`
                            text-caption mt-2 text-center
                            ${
                              active
                                ? "text-text font-medium"
                                : "text-text-soft"
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

        </div>

      </div>

    </div>
  )
}