"use client"

import type { CicilanFeature } from "../types"

interface Props {
  items: CicilanFeature[]
}

export default function CicilanFeatures({ items }: Props) {
  return (
    <section
      id="fitur"
      className="
        mx-auto max-w-7xl
        px-4 pt-8
        md:px-6 lg:px-8 lg:pt-10
      "
    >

      {/* ================= TITLE ================= */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
          Kenapa Pilih Cicilan Umrah?
        </h2>
        <p className="mt-2 text-sm md:text-base text-slate-500">
          Solusi umrah mudah, aman & fleksibel untuk semua
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="
        grid gap-3
        grid-cols-2
        md:grid-cols-2
        xl:grid-cols-4
      ">

        {items.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="
                group
                rounded-2xl
                border border-slate-200
                bg-white

                p-4 md:p-6

                shadow-sm
                transition-all duration-300

                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              {/* ICON */}
              <div
                className="
                  mb-4
                  flex h-12 w-12 md:h-14 md:w-14
                  items-center justify-center
                  rounded-xl md:rounded-2xl

                  bg-[#dff0e1]
                  text-[#2f7d42]

                  group-hover:scale-105
                  transition
                "
              >
                <Icon className="h-5 w-5 md:h-6 md:w-6" />
              </div>

              {/* TITLE */}
              <h3 className="
                text-sm md:text-lg
                font-semibold
                text-slate-900
              ">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="
                mt-1 md:mt-2
                text-xs md:text-sm
                leading-relaxed
                text-slate-600
              ">
                {item.desc}
              </p>

            </div>
          )
        })}

      </div>

    </section>
  )
}