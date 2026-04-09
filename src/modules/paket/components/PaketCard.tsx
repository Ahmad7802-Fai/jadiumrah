"use client"

import { toCDNImage } from "@/lib/image"
import Image from "next/image"
import Link from "next/link"
import { Paket } from "../types/types"
import { formatRupiah } from "@/lib/format"

import { Button, Badge } from "@/components"

export default function PaketCard({
  paket,
  variant = "default",
}: {
  paket: Paket
  variant?: "default" | "compact"
}) {
  const percent =
    paket.totalSeat > 0
      ? (paket.seat / paket.totalSeat) * 100
      : 0

  const isLowSeat = paket.seat < 10

  const imageSrc = paket.image
    ? toCDNImage(paket.image, 800)
    : "/images/fallback.png"

  // =====================================================
  // 🔥 MOBILE
  // =====================================================
  if (variant === "compact") {
    return (
      <Link href={`/paket/${paket.slug}`} className="block">
        <div className="flex gap-3 items-center bg-white rounded-xl border border-gray-100 p-2 shadow-sm active:scale-[0.98] transition">

          {/* IMAGE */}
          <div className="relative w-[95px] h-[72px] rounded-lg overflow-hidden shrink-0">
            <Image
              src={imageSrc}
              alt={paket.name}
              fill
              sizes="95px"
              className="object-cover"
            />

            {(paket.promoLabel || paket.isPromo) && (
              <div className="absolute top-1 left-1">
                <Badge size="xs">
                  🔥 {paket.promoLabel || `${paket.discount}%`}
                </Badge>
              </div>
            )}
          </div>

          {/* CONTENT */}
          <div className="flex-1 min-w-0 space-y-[3px]">

            <div className="text-[12px] font-semibold line-clamp-1">
              {paket.name}
            </div>

            <div className="text-[10px] text-gray-400 truncate">
              {paket.duration} • {paket.airline}
            </div>

            {/* PROGRESS */}
            <div className="h-[3px] bg-gray-200 rounded-full overflow-hidden">
              <div
                className={isLowSeat ? "bg-red-500 h-full" : "bg-green-500 h-full"}
                style={{ width: `${percent}%` }}
              />
            </div>

            <div className={`text-[9px] ${isLowSeat ? "text-red-500 font-medium" : "text-gray-400"}`}>
              {isLowSeat ? `🔥 Sisa ${paket.seat} seat` : `Sisa ${paket.seat} seat`}
            </div>

            {/* FOOTER */}
            <div className="flex justify-between items-end">

              <div className="leading-tight">
                {paket.savingLabel && (
                  <div className="text-[9px] text-red-500">
                    {paket.savingLabel}
                  </div>
                )}

                {paket.originalPriceLabel && paket.isPromo && (
                  <div className="text-[9px] text-gray-400 line-through">
                    {paket.originalPriceLabel}
                  </div>
                )}

                <div className="text-green-600 font-bold text-[10px]">
                  {formatRupiah(paket.price)}
                </div>
              </div>

              <Button size="sm">
                Detail
              </Button>

            </div>

          </div>
        </div>
      </Link>
    )
  }

  // =====================================================
  // 🖥️ DESKTOP
  // =====================================================
  return (
    <Link href={`/paket/${paket.slug}`} className="block h-full">
      <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]">

        {/* IMAGE */}
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={imageSrc}
            alt={paket.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {(paket.promoLabel || paket.isPromo) && (
            <div className="absolute top-2 left-2">
              <Badge size="sm">
                🔥 {paket.promoLabel || `${paket.discount}%`}
              </Badge>
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-1 p-3 gap-2">

          <div className="flex justify-between text-gray-500 text-[10px]">
            <span>{paket.duration}</span>
            <span className="truncate max-w-[120px]">
              ✈️ {paket.airline}
            </span>
          </div>

          <div className="font-semibold text-sm line-clamp-2 min-h-[36px]">
            {paket.name}
          </div>

          {/* PROGRESS */}
          <div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={isLowSeat ? "bg-red-500 h-full" : "bg-green-500 h-full"}
                style={{ width: `${percent}%` }}
              />
            </div>

            <div className={`mt-1 text-[10px] ${isLowSeat ? "text-red-500 font-medium" : "text-gray-500"}`}>
              {isLowSeat
                ? `🔥 Sisa ${paket.seat} seat`
                : `Sisa ${paket.seat} seat`}
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-auto space-y-1">

            {paket.savingLabel && (
              <div className="text-[10px] text-red-500">
                {paket.savingLabel}
              </div>
            )}

            <div className="flex justify-between items-end">

              <div>
                <div className="text-[10px] text-gray-400">
                  Mulai dari
                </div>

                {paket.originalPriceLabel && paket.isPromo && (
                  <div className="text-[11px] text-gray-400 line-through">
                    {paket.originalPriceLabel}
                  </div>
                )}

                <div className="text-green-600 font-bold text-[10px]">
                  {formatRupiah(paket.price)}
                </div>
              </div>

              <Button size="md">
                Detail
              </Button>

            </div>

          </div>

        </div>
      </div>
    </Link>
  )
}