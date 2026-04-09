"use client"

import {
  PageContainer,
  ServiceMenu
} from "@/components"

import HeroSection from "../sections/HeroSection"
import PaketSection from "@/modules/paket/sections/PaketSection"

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* HERO */}
      <HeroSection />

      {/* SERVICE MENU */}
      <div
        className="
          relative z-30
          -mt-16 md:-mt-20
          px-page md:px-page-lg
        "
      >
        <div
          className="
            mx-auto max-w-6xl

            bg-card/90 backdrop-blur-xl
            rounded-xl

            border border-border
            shadow-md

            py-content
          "
        >
          <ServiceMenu />
        </div>
      </div>

      {/* CONTENT */}
      <PageContainer className="pt-section">

        <div className="space-y-section-lg">
          <PaketSection />
        </div>

      </PageContainer>

    </div>
  )
}