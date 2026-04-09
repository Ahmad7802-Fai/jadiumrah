"use client"

import { useState } from "react"
import { toCDNImage } from "@/lib/image"
import { useImageSize } from "@/lib/useImageSize"

import PaketTabs from "../components/PaketTabs"
import PaketRekomendasi from "@/modules/paket/components/PaketRekomendasi"

import MobileCTA from "@/components/ui/MobileCTA"
import { Button } from "@/components/ui"

import { formatRupiah } from "@/lib/format"

export default function PaketDetailPage({ paket, pakets }: any) {
  const [loaded, setLoaded] = useState(false)

  if (!paket) {
    return (
      <div className="p-4 text-center text-text-soft text-sm">
        Paket tidak ditemukan
      </div>
    )
  }

  const size = useImageSize()

  const imageSrc = toCDNImage(paket.image, size)
  const blurSrc = toCDNImage(paket.image, 20)

  const rekomendasi =
    Array.isArray(pakets)
      ? pakets.filter((p: any) => p.id !== paket.id).slice(0, 5)
      : []

  return (
    <>
      <div className="bg-bg min-h-screen overflow-x-hidden">

        {/* ================= HERO ================= */}
        <div className="relative w-full h-[200px] md:h-[320px] overflow-hidden">

          {/* BLUR */}
          <img
            src={blurSrc}
            className={`
              absolute inset-0 w-full h-full object-cover
              scale-110 blur-xl
              transition-opacity duration-500
              ${loaded ? "opacity-0" : "opacity-100"}
            `}
          />

          {/* MAIN */}
          <img
            src={imageSrc}
            alt={paket.name}
            onLoad={() => setLoaded(true)}
            className={`
              w-full h-full object-cover
              transition-opacity duration-700
              ${loaded ? "opacity-100" : "opacity-0"}
            `}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* TEXT */}
          <div className="absolute bottom-10 left-3 right-3 text-white">
            <h1 className="text-sm md:text-xl font-semibold line-clamp-2">
              {paket.name}
            </h1>

            <p className="text-[10px] md:text-xs text-white/80 mt-0.5">
              {paket.duration} • {paket.airline}
            </p>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="max-w-4xl mx-auto px-3 mt-3 md:mt-5 pb-[130px] md:pb-8">

          <div className="grid md:grid-cols-3 gap-3 md:gap-5">

            {/* LEFT */}
            <div className="md:col-span-2 space-y-4 md:space-y-6">
              <PaketTabs paket={paket} />

              {rekomendasi.length > 0 && (
                <PaketRekomendasi pakets={rekomendasi} />
              )}
            </div>

            {/* RIGHT */}
            <div className="hidden md:block">
              <div className="sticky top-[70px] space-y-3">

                {/* PRICE CARD */}
                <div className="bg-card border border-border rounded-xl shadow-sm p-3 space-y-2">

                  <div className="text-xs text-text-soft">
                    Mulai dari
                  </div>

                  <div className="text-lg font-bold text-primary">
                    {formatRupiah(paket.price || 0)}
                  </div>

                  <Button className="w-full">
                    Booking
                  </Button>

                </div>

                {/* INFO CARD */}
                <div className="bg-card border border-border rounded-lg shadow-sm p-2 text-xs text-text-soft space-y-1">
                  <div>✈️ {paket.airline}</div>
                  <div>🕋 {paket.duration}</div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= MOBILE CTA ================= */}
      <MobileCTA price={paket.price || 0} />
    </>
  )
}