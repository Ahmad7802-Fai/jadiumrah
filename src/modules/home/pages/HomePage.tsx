"use client"

import HeroSection from "../sections/HeroSection"
import PaketSection from "@/modules/paket/sections/PaketSection"
import ServiceMenu from "@/components/menus/ServiceMenu"

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* ================= HERO ================= */}
      <HeroSection />

      {/* ================= SERVICE MENU ================= */}
      <div
        className="
          relative z-30

          -mt-14 md:-mt-20   /* overlap ke hero */

          px-3 md:px-6

          mb-6 md:mb-8       /* 🔥 jarak ke bawah biar gak mepet */
        "
      >
        <div
          className="
            bg-white/85 backdrop-blur-xl

            rounded-2xl
            border border-white/40

            shadow-[0_20px_40px_rgba(0,0,0,0.12)]

            py-3

            ring-1 ring-black/5   /* subtle premium edge */
          "
        >
          <ServiceMenu />
        </div>
      </div>

      {/* ================= PAKET ================= */}
      <div
        className="
          relative z-20
        "
      >
        <PaketSection />
      </div>

    </div>
  )
}