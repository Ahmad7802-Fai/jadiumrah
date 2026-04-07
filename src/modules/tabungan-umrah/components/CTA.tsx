"use client"

import Link from "next/link"

export default function CTA() {
  return (
    <section className="space-y-3">

      <div className="
        bg-gradient-to-r from-green-600 to-green-500
        text-white
        rounded-xl md:rounded-2xl
        px-4 py-4 md:px-6 md:py-6
        shadow-md
        text-center
        space-y-2
      ">

        {/* TITLE */}
        <div className="text-sm md:text-lg font-semibold leading-tight">
          Siap Berangkat Umrah?
        </div>

        {/* SUB */}
        <div className="text-[11px] md:text-sm text-white/80">
          Mulai tabungan sekarang, wujudkan impian Anda ✨
        </div>

        {/* ACTION */}
        <div className="flex justify-center gap-2 pt-1">

          <Link
            href="/paket"
            className="
              bg-white text-green-600
              text-[11px] md:text-sm font-medium
              px-3 py-1.5 md:px-4 md:py-2
              rounded-lg
              shadow-sm
              active:scale-95
              transition
            "
          >
            Lihat Paket
          </Link>

          <a
            href="https://wa.me/62811922952"
            target="_blank"
            className="
              bg-black/20
              text-white
              text-[11px] md:text-sm font-medium
              px-3 py-1.5 md:px-4 md:py-2
              rounded-lg
              backdrop-blur
              active:scale-95
              transition
            "
          >
            Konsultasi
          </a>

        </div>

      </div>

    </section>
  )
}