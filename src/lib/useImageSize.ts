"use client"

import { useEffect, useState } from "react"

export function useImageSize() {
  const [size, setSize] = useState(800)

  useEffect(() => {
    function updateSize() {
      const width = window.innerWidth

      if (width < 640) setSize(400)       // mobile
      else if (width < 1024) setSize(800) // tablet
      else setSize(1200)                  // desktop
    }

    updateSize()
    window.addEventListener("resize", updateSize)

    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return size
}