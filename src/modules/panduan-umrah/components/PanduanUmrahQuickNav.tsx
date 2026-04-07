"use client"

import { useEffect, useMemo, useRef } from "react"
import type { PanduanUmrahQuickLink } from "../types/panduan-umrah.types"

type Props = {
  items: PanduanUmrahQuickLink[]
  activeId?: string
}

export default function PanduanUmrahQuickNav({ items, activeId }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  const activeIndex = useMemo(
    () => items.findIndex((item) => item.id === activeId),
    [items, activeId]
  )

  useEffect(() => {
    if (!activeId) return

    const activeEl = itemRefs.current[activeId]
    const containerEl = containerRef.current

    if (!activeEl || !containerEl) return

    const left =
      activeEl.offsetLeft - containerEl.clientWidth / 2 + activeEl.clientWidth / 2

    containerEl.scrollTo({
      left,
      behavior: "smooth",
    })
  }, [activeId])

  return (
    <div
      ref={containerRef}
      className="no-scrollbar flex gap-2 overflow-x-auto"
    >
      {items.map((item, index) => {
        const isActive = activeId === item.id
        const isPassed = activeIndex > -1 && index < activeIndex

        return (
          <a
            key={item.id}
            ref={(el) => {
              itemRefs.current[item.id] = el
            }}
            href={item.href}
            className={[
              "group flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-[11px] font-bold transition",
              isActive
                ? "border-green-200 bg-green-50 text-green-700 shadow-sm"
                : isPassed
                ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                : "border-gray-200 bg-white text-slate-700 hover:border-green-200 hover:bg-green-50 hover:text-green-700",
            ].join(" ")}
          >
            <span
              className={[
                "flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-black",
                isActive
                  ? "bg-white text-green-700 ring-1 ring-green-200"
                  : isPassed
                  ? "bg-white text-emerald-700 ring-1 ring-emerald-200"
                  : "bg-slate-100 text-slate-700 group-hover:bg-white group-hover:text-green-700",
              ].join(" ")}
            >
              {isPassed ? "✓" : item.step ?? "-"}
            </span>

            <span>{item.label}</span>
          </a>
        )
      })}
    </div>
  )
}