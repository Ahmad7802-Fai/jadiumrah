"use client"

import PanduanUmrahCard from "../components/PanduanUmrahCard"
import PanduanUmrahHero from "../components/PanduanUmrahHero"
import PanduanUmrahInfoStrip from "../components/PanduanUmrahInfoStrip"
import PanduanUmrahQuickNav from "../components/PanduanUmrahQuickNav"
import PanduanUmrahSectionHeader from "../components/PanduanUmrahSectionHeader"
import { usePanduanUmrah } from "../hooks/usePanduanUmrah"

export default function PanduanUmrahPage() {
  const { items, quickLinks, activeId } = usePanduanUmrah()

  return (
    <section className="min-h-screen bg-slate-50 px-3 pb-24 md:px-5 md:pb-10">

      <div className="mx-auto w-full max-w-7xl pt-2 md:pt-3">

        <div className="mb-2">
          <PanduanUmrahHero />
        </div>

        <div className="mb-2">
          <PanduanUmrahInfoStrip />
        </div>

        {/* 🔥 sticky tetap pakai offset navbar */}
        <div className="sticky top-[var(--nav-h)] z-30 mb-2">
          <div className="rounded-[18px] border border-gray-200 bg-white/92 p-2 shadow-sm backdrop-blur">
            <PanduanUmrahQuickNav items={quickLinks} activeId={activeId} />
          </div>
        </div>

        <PanduanUmrahSectionHeader
          title="Urutan Lengkap Panduan Umrah"
          subtitle="Mudah diikuti untuk desktop dan mobile."
        />

        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <PanduanUmrahCard
              key={item.id}
              item={item}
              isActive={activeId === item.id}
            />
          ))}
        </div>

      </div>
    </section>
  )
}