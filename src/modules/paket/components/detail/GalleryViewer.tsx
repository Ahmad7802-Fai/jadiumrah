"use client"

import { useState, useEffect, useRef } from "react"
import { toCDNImage } from "@/lib/image"

type Props = {
  images: string[]
  index: number
  onClose: () => void
}

export default function GalleryViewer({ images, index, onClose }: Props) {
  const [current, setCurrent] = useState<number>(index)
  const startX = useRef<number>(0)

  // ===============================
  // SWIPE
  // ===============================
  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    startX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    const endX = e.changedTouches[0].clientX
    const diff = startX.current - endX

    if (diff > 70) next()
    if (diff < -70) prev()
  }

  function next() {
    setCurrent((c: number) => (c + 1) % images.length)
  }

  function prev() {
    setCurrent((c: number) => (c - 1 + images.length) % images.length)
  }

  // ===============================
  // KEYBOARD
  // ===============================
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [images.length])

  // ===============================
  // PRELOAD NEXT IMAGE
  // ===============================
  useEffect(() => {
    if (!images.length) return

    const nextIndex = (current + 1) % images.length
    const img = new Image()
    img.src = toCDNImage(images[nextIndex], 1200)
  }, [current, images])

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center">

      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-xl z-20 bg-black/50 px-3 py-1 rounded-md"
      >
        ✕
      </button>

      {/* LEFT */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-6 text-white text-3xl z-20 px-3 py-1 bg-black/40 rounded-full"
      >
        ‹
      </button>

      {/* RIGHT */}
      <button
        onClick={next}
        className="absolute right-2 md:right-6 text-white text-3xl z-20 px-3 py-1 bg-black/40 rounded-full"
      >
        ›
      </button>

      {/* IMAGE */}
      <div
        className="w-full h-full flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex items-center justify-center w-full h-full">

          <img
            src={toCDNImage(images[current], 1200)}
            alt="preview"
            className="
              max-w-[92vw]
              max-h-[85vh]
              object-contain
              rounded-lg
              shadow-2xl
              transition-all duration-300
              select-none
            "
            draggable={false}
          />

        </div>
      </div>

      {/* INDICATOR */}
      <div className="absolute bottom-4 text-white text-xs bg-black/50 px-3 py-1 rounded-full">
        {current + 1} / {images.length}
      </div>

    </div>
  )
}