"use client"

import { formatRupiah } from "@/lib/format"

export default function MobileCTA({ price }: { price: number }) {
  return (
    <div
      className="
        md:hidden
        fixed inset-x-0 bottom-0
        z-[9998]

        flex justify-center
        pointer-events-none
      "
    >
      <div
        className="
          w-full max-w-md
          px-3
          pb-[calc(70px+env(safe-area-inset-bottom)+6px)]
          pointer-events-auto
        "
      >
        <div
          className="
            bg-white/95 backdrop-blur

            rounded-xl
            border border-gray-100

            shadow-[0_6px_20px_rgba(0,0,0,0.10)]

            px-3 py-2

            flex items-center justify-between
          "
        >
          {/* PRICE */}
          <div className="leading-tight">
            <div className="text-[10px] text-gray-400">
              Mulai
            </div>

            <div className="text-green-600 font-semibold text-[13px]">
              {formatRupiah(price)}
            </div>
          </div>

          {/* BUTTON */}
          <button
            className="
              bg-green-600 hover:bg-green-700
              text-white

              text-[11px]
              px-3 py-2

              rounded-lg
              font-semibold

              shadow-sm
              active:scale-95
              transition
            "
          >
            Booking
          </button>
        </div>
      </div>
    </div>
  )
}