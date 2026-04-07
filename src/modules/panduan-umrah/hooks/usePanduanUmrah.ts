"use client"

import { useEffect, useMemo, useState } from "react"
import { getPanduanUmrahData } from "../service/panduanUmrahService"
import { getPanduanQuickLinks } from "../utils/panduan-umrah.utils"

export function usePanduanUmrah() {
  const items = useMemo(() => getPanduanUmrahData(), [])
  const quickLinks = useMemo(() => getPanduanQuickLinks(items), [items])
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "")

  useEffect(() => {
    const ids = items.map((item) => item.id)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: "-120px 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [items])

  return {
    items,
    quickLinks,
    activeId,
  }
}