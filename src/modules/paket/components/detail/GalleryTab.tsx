"use client"

import { useState } from "react"
import { toCDNImage } from "@/lib/image"
import { useImageSize } from "@/lib/useImageSize"
import GalleryViewer from "./GalleryViewer"

export default function GalleryTab({ paket }: any) {
  const size = useImageSize()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const images = [
    paket.image,
    ...(paket.gallery || []),
  ].filter(Boolean)

  if (!images.length) {
    return (
      <div className="text-center text-gray-400 text-sm">
        Tidak ada foto
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2">

        {images.map((img: string, i: number) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            className="relative h-[110px] rounded-xl overflow-hidden bg-gray-100 cursor-pointer"
          >
            <img
              src={toCDNImage(img, size)}
              alt="gallery"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}

      </div>

      {activeIndex !== null && (
        <GalleryViewer
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  )
}