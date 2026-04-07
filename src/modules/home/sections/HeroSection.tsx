"use client"

import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="
      relative w-full overflow-hidden

      h-[520px] md:h-[640px] lg:h-[680px]   /* 🔥 FIX utama */

      pt-[80px] md:pt-[100px]
    ">

      {/* BG */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-kabah.png"
          alt="Umrah"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6 w-full text-white">

          <div className="max-w-lg md:max-w-2xl">

            <div className="inline-block text-[10px] md:text-xs bg-green-600 px-3 py-1 rounded-full mb-3">
              ✨ Umrah Resmi & Terpercaya
            </div>

            <h1 className="font-bold leading-tight text-lg md:text-4xl lg:text-5xl">
              Umrah Jadi Lebih Mudah,
              <br className="hidden md:block" />
              Mulai Dari <span className="text-green-400">Cicilan Ringan</span>
            </h1>

            <p className="mt-3 text-xs md:text-base text-white/80 max-w-md">
              Program fleksibel, aman, dan didampingi hingga berangkat.
            </p>

            <div className="mt-5 flex gap-3">

              <Link
                href="/paket"
                className="bg-green-600 px-5 py-3 rounded-xl text-sm md:text-base"
              >
                ✈️ Pilih Paket
              </Link>

              <Link
                href="/kontak"
                className="bg-white/10 px-5 py-3 rounded-xl text-sm md:text-base"
              >
                💬 Konsultasi
              </Link>

            </div>

          </div>

        </div>
      </div>

    </section>
  )
}