"use client"

import type { CicilanPackage, CicilanSimulationResult } from "../types"
import { formatRupiah } from "../utils/formatRupiah"
import CicilanSectionTitle from "./CicilanSectionTitle"
import CicilanWhatsappCTA from "./CicilanWhatsappCTA"

interface Props {
  packages: CicilanPackage[]
  tenors: number[]
  selectedPackageId: number
  selectedTenor: number
  onPackageChange: (value: number) => void
  onTenorChange: (value: number) => void
  result: CicilanSimulationResult | null
}

export default function CicilanSimulatorCompact({
  packages,
  tenors,
  selectedPackageId,
  selectedTenor,
  onPackageChange,
  onTenorChange,
  result,
}: Props) {
  return (
    <section id="simulasi" className="space-y-2">

      <CicilanSectionTitle
        title="Simulasi Cicilan"
        subtitle="Pilih paket dan tenor."
      />

      <div className="grid gap-2 md:gap-3 lg:grid-cols-[1.05fr_0.95fr]">

        {/* ================= LEFT ================= */}
        <div className="rounded-xl md:rounded-2xl border border-gray-200 bg-white px-3 py-2.5 md:p-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">

          <div className="space-y-2.5 md:space-y-3">

            {/* PAKET */}
            <div>
              <label className="mb-1 block text-[10px] md:text-xs font-semibold text-slate-600">
                Paket Umrah
              </label>

              <select
                value={selectedPackageId}
                onChange={(e) => onPackageChange(Number(e.target.value))}
                className="
                  h-9 md:h-10 w-full
                  rounded-lg md:rounded-xl

                  border border-gray-300
                  bg-white

                  px-3

                  text-xs md:text-sm font-medium
                  text-slate-800

                  outline-none
                  focus:border-green-500
                "
              >
                {packages.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {/* TENOR */}
            <div>
              <label className="mb-1 block text-[10px] md:text-xs font-semibold text-slate-600">
                Tenor Cicilan
              </label>

              <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                {tenors.map((tenor) => {
                  const active = tenor === selectedTenor

                  return (
                    <button
                      key={tenor}
                      type="button"
                      onClick={() => onTenorChange(tenor)}
                      className={`
                        h-9 md:h-10

                        rounded-lg md:rounded-xl

                        text-[10px] md:text-sm
                        font-semibold

                        transition

                        ${
                          active
                            ? "bg-green-600 text-white shadow-sm"
                            : "bg-white border border-gray-300 text-slate-700"
                        }
                      `}
                    >
                      {tenor} Bln
                    </button>
                  )
                })}
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="overflow-hidden rounded-xl md:rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-green-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">

          {/* TOP */}
          <div className="px-3 py-2.5 md:p-4">

            <div className="text-[10px] md:text-xs font-semibold text-slate-600">
              Estimasi Cicilan
            </div>

            <div className="mt-1 text-sm md:text-base font-bold text-slate-900 line-clamp-2">
              {result?.packageName ?? "-"}
            </div>

            <div className="mt-1 text-xl md:text-3xl font-extrabold text-green-600 leading-tight">
              {formatRupiah(result?.total ?? 0)}
            </div>

            <div className="mt-1 text-[11px] md:text-sm text-slate-600">
              Mulai dari{" "}
              <span className="font-bold text-green-700">
                {formatRupiah(result?.perMonth ?? 0)}
              </span>
              /bulan
            </div>

          </div>

          {/* BREAKDOWN */}
          <div className="grid grid-cols-2 gap-px bg-green-200">

            <div className="bg-green-600 py-2 md:p-3 text-center text-white">
              <div className="text-[9px] md:text-xs text-white/80">
                Per Minggu
              </div>
              <div className="text-sm md:text-lg font-bold">
                {formatRupiah(result?.perWeek ?? 0)}
              </div>
            </div>

            <div className="bg-green-600 py-2 md:p-3 text-center text-white">
              <div className="text-[9px] md:text-xs text-white/80">
                Per Hari
              </div>
              <div className="text-sm md:text-lg font-bold">
                {formatRupiah(result?.perDay ?? 0)}
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="bg-green-600 px-3 pb-3 md:px-4 md:pb-4">
            <CicilanWhatsappCTA
              packageName={result?.packageName}
              tenor={selectedTenor}
            />
          </div>

        </div>

      </div>
    </section>
  )
}