"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components"

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        min-h-[520px] md:min-h-[640px]
        pt-[calc(var(--nav-h)+20px)]
      "
    >

      {/* BG */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-kabah.png"
          alt="Umrah"
          fill
          priority
          className="object-cover scale-105"
        />

        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/80 via-black/40 to-black/10
        " />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center min-h-[inherit]">
        <div className="container text-white">

          <div className="max-w-xl space-y-content">

            {/* BADGE */}
            <div className="
              inline-flex items-center gap-1
              text-caption
              bg-primary/90 px-3 py-1 rounded-full
            ">
              ✨ Umrah Resmi & Terpercaya
            </div>

            {/* TITLE */}
            <h1 className="text-h1 md:text-[36px] font-semibold leading-tight">
              Umrah Jadi Lebih Mudah,
              <br className="hidden md:block" />
              Mulai Dari{" "}
              <span className="text-primary-light">
                Cicilan Ringan
              </span>
            </h1>

            {/* DESC */}
            <p className="text-body text-white/80 max-w-md">
              Program fleksibel, aman, dan didampingi hingga berangkat.
            </p>

            {/* CTA */}
            <div className="flex gap-2 pt-content">

              <Link href="/paket">
                <Button size="md">
                  ✈️ Pilih Paket
                </Button>
              </Link>

              <Link href="/kontak">
                <Button size="md">
                  💬 Konsultasi
                </Button>
              </Link>

            </div>

          </div>

        </div>
      </div>

    </section>
  )
}