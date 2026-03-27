"use client"

import { FolderKanban } from "lucide-react"

import { formatRupiah } from "../utils/formatRupiah"
import type {
  CicilanPackage,
  CicilanSimulationResult,
} from "../types"

interface Props {
  packages: CicilanPackage[]
  tenors: number[]
  selectedPackageId: number
  selectedTenor: number
  onPackageChange: (value: number) => void
  onTenorChange: (value: number) => void
  result: CicilanSimulationResult | null
}

export default function CicilanSimulatorSection({
  packages,
  tenors,
  selectedPackageId,
  selectedTenor,
  onPackageChange,
  onTenorChange,
  result,
}: Props) {
  return (
    <section
      id="simulasi"
      className="
        mx-auto max-w-6xl
        px-3 md:px-4
        py-4 md:py-6
      "
    >
      {/* TITLE */}
      <div className="mb-3 md:mb-4">
        <h2 className="text-base md:text-xl font-extrabold text-slate-900">
          Simulasi Cicilan
        </h2>
        <p className="text-[11px] md:text-sm text-slate-500">
          Pilih paket & tenor
        </p>
      </div>

      <div className="grid gap-3 md:gap-4 lg:grid-cols-2">

        {/* ================= LEFT ================= */}
        <div className="
          rounded-xl md:rounded-2xl
          border border-gray-200
          bg-white

          p-3 md:p-4
          shadow-sm
        ">

          {/* HEADER */}
          <div className="flex items-center gap-2 mb-3">
            <div className="
              w-9 h-9 md:w-11 md:h-11
              flex items-center justify-center
              rounded-lg bg-green-100 text-green-600
            ">
              <FolderKanban className="w-4 h-4 md:w-5 md:h-5" />
            </div>

            <h3 className="text-sm md:text-base font-bold text-slate-900">
              Simulasi
            </h3>
          </div>

          <div className="space-y-3">

            {/* SELECT */}
            <div>
              <label className="text-[11px] md:text-xs font-semibold text-slate-600">
                Paket Umrah
              </label>

              <select
                value={selectedPackageId}
                onChange={(e) => onPackageChange(Number(e.target.value))}
                className="
                  mt-1
                  h-10 md:h-11
                  w-full

                  rounded-lg
                  border border-gray-300

                  px-3
                  text-sm

                  focus:border-green-500
                  outline-none
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
              <label className="text-[11px] md:text-xs font-semibold text-slate-600">
                Tenor
              </label>

              <div className="mt-1 grid grid-cols-2 gap-2">
                {tenors.map((tenor) => {
                  const active = tenor === selectedTenor

                  return (
                    <button
                      key={tenor}
                      onClick={() => onTenorChange(tenor)}
                      className={`
                        h-9 md:h-10
                        rounded-lg

                        text-xs md:text-sm
                        font-semibold

                        border transition

                        ${
                          active
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-slate-700 border-gray-300"
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
        <div className="
          overflow-hidden
          rounded-xl md:rounded-2xl

          border border-green-100
          bg-green-50

          shadow-sm
        ">

          {/* TOP */}
          <div className="p-3 md:p-4">
            <p className="text-[11px] md:text-xs text-slate-600">
              Estimasi
            </p>

            <h3 className="text-sm md:text-lg font-bold text-slate-900">
              {result?.packageName ?? "-"}
            </h3>

            <div className="mt-1 text-lg md:text-2xl font-extrabold text-green-600">
              {formatRupiah(result?.total ?? 0)}
            </div>

            <p className="text-[11px] md:text-sm text-slate-600">
              Mulai{" "}
              <span className="font-bold text-green-700">
                {formatRupiah(result?.perMonth ?? 0)}
              </span>
              /bulan
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-px bg-green-200">
            <div className="bg-green-600 text-white text-center py-2">
              <p className="text-[10px] md:text-xs opacity-80">
                /Minggu
              </p>
              <p className="text-sm md:text-lg font-bold">
                {formatRupiah(result?.perWeek ?? 0)}
              </p>
            </div>

            <div className="bg-green-600 text-white text-center py-2">
              <p className="text-[10px] md:text-xs opacity-80">
                /Hari
              </p>
              <p className="text-sm md:text-lg font-bold">
                {formatRupiah(result?.perDay ?? 0)}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="p-3 md:p-4">
            <button
              className="
                w-full
                h-10 md:h-11

                rounded-lg

                bg-white
                text-green-700

                text-xs md:text-sm
                font-bold

                shadow-sm
                active:scale-95
                transition
              "
            >
              Konsultasi
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}