"use client"

import CicilanCompactHeader from "../components/CicilanCompactHeader"
import CicilanFaqAccordion from "../components/CicilanFaqAccordion"
import CicilanFeatureGrid from "../components/CicilanFeatureGrid"
import CicilanPageSkeleton from "../components/CicilanPageSkeleton"
import CicilanSimulatorCompact from "../components/CicilanSimulatorCompact"
import { useCicilanUmrah } from "../hooks/useCicilanUmrah"

export default function CicilanUmrahPage() {
  const {
    features,
    packages,
    faqs,
    tenors,
    selectedPackageId,
    setSelectedPackageId,
    selectedTenor,
    setSelectedTenor,
    simulation,
    loading,
    error,
  } = useCicilanUmrah()

  // ================= LOADING =================
  if (loading) {
    return <CicilanPageSkeleton />
  }

  // ================= ERROR =================
  if (error) {
    return (
      <div className="min-h-screen bg-[#f5f7f4]">
        <CicilanCompactHeader />

        <div className="px-3 pt-2 pb-4 md:px-4">
          <div className="rounded-xl bg-red-50 text-red-600 text-[12px] px-3 py-2">
            {error}
          </div>
        </div>
      </div>
    )
  }

  // ================= MAIN =================
  return (
    <div className="min-h-screen bg-[#f5f7f4] text-slate-800">

      {/* HEADER */}
      <CicilanCompactHeader />

      {/* CONTENT */}
      <main
        className="
          relative
          pt-2 md:pt-3   /* 🔥 ini kunci */
          pb-6 md:pb-10
        "
      >

        <div
          className="
            max-w-6xl mx-auto

            px-2 md:px-4

            space-y-3 md:space-y-4
          "
        >

          {/* ================= FEATURE ================= */}
          <section
            className="
              bg-white

              mt-3 md:mt-4   /* 🔥 INI YANG DIMAKSUD */

              rounded-xl md:rounded-2xl
              shadow-sm

              p-2 md:p-3
            "
          >
            <CicilanFeatureGrid items={features} />
          </section>

          {/* ================= SIMULATOR ================= */}
          <section
            className="
              bg-white

              rounded-xl md:rounded-2xl
              shadow-sm

              p-2 md:p-4
            "
          >
            <CicilanSimulatorCompact
              packages={packages}
              tenors={tenors}
              selectedPackageId={selectedPackageId}
              selectedTenor={selectedTenor}
              onPackageChange={setSelectedPackageId}
              onTenorChange={setSelectedTenor}
              result={simulation}
            />
          </section>

          {/* ================= FAQ ================= */}
          <section
            className="
              bg-white

              rounded-xl md:rounded-2xl
              shadow-sm

              p-2 md:p-3
            "
          >
            <CicilanFaqAccordion items={faqs} />
          </section>

        </div>
      </main>
    </div>
  )
}