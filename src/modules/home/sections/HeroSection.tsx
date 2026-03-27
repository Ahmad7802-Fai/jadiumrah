"use client"

import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      className="
        relative z-10
        w-full

        min-h-[320px] md:min-h-[480px]

        pt-8 md:pt-12   /* ✅ cukup ini */

        pb-20 md:pb-28
        overflow-hidden
      "
    >

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero-kabah.png"
          alt="Umrah"
          fill
          priority
          className="object-cover scale-105"   /* 🔥 sedikit zoom biar hidup */
        />

        {/* overlay cinematic */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative">
        <div
          className="
            max-w-6xl mx-auto
            px-4 md:px-6

            pt-4 md:pt-6   /* 🔥 spacing visual (bukan offset) */
          "
        >
          <div className="text-white max-w-lg md:max-w-2xl">

            {/* BADGE */}
            <div className="inline-block text-[10px] md:text-xs bg-green-600/90 px-3 py-1 rounded-full mb-3 shadow">
              ✨ Umrah Resmi & Terpercaya
            </div>

            {/* TITLE */}
            <h1 className="font-bold leading-tight text-lg md:text-4xl">
              Umrah Jadi Lebih Mudah,
              <br className="hidden md:block" />
              Mulai Dari{" "}
              <span className="text-green-400">
                Cicilan Ringan
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="mt-2 text-xs md:text-base text-white/80 max-w-md">
              Program umrah fleksibel, aman, dan didampingi hingga berangkat.
            </p>

            {/* CTA */}
            <div className="mt-5 flex gap-2">

              {/* PRIMARY */}
              <Link
                href="/paket"
                className="
                  flex-1 md:flex-none
                  text-center

                  bg-green-600 hover:bg-green-700
                  text-white

                  text-xs md:text-sm
                  px-4 py-2 md:px-6 md:py-3
                  rounded-xl

                  font-semibold
                  shadow-lg

                  hover:scale-[1.02]
                  active:scale-95
                  transition
                "
              >
                ✈️ Pilih Paket
              </Link>

              {/* SECONDARY */}
              <Link
                href="/kontak"
                className="
                  flex-1 md:flex-none
                  text-center

                  bg-white/10 backdrop-blur
                  text-white

                  text-xs md:text-sm
                  px-4 py-2 md:px-6 md:py-3
                  rounded-xl

                  border border-white/20

                  hover:bg-white/20
                  transition
                "
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