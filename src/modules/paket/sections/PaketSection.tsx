"use client"

import { useRouter } from "next/navigation"
import PaketList from "../components/PaketList"

import {
  SectionBlock,
  Button,
} from "@/components"

export default function PaketSection() {
  const router = useRouter()

  return (
    <div
      className="
        relative z-20
        bg-card
        rounded-t-3xl
        shadow-md
        mt-6 md:mt-10
      "
    >

      {/* GRADIENT */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

      {/* CONTAINER */}
      <div className="container">

        <SectionBlock
          title="Promo Umrah 🔥"
          subtitle="Harga terbaik bulan ini"
          className="py-section md:py-section-lg"
          action={
            <Button
              size="sm"
              variant="soft"
              onClick={() => router.push("/paket")}
            >
              Lihat Semua
            </Button>
          }
        >
          <div className="space-y-content md:space-y-content-lg">
            <PaketList promoOnly />
          </div>
        </SectionBlock>

      </div>

    </div>
  )
}