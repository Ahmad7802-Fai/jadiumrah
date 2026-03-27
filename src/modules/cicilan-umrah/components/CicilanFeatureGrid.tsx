"use client"

import type { CicilanFeature } from "../types"

interface Props {
  items: CicilanFeature[]
}

const colorMap = [
  "from-green-500/10 to-green-500/0 text-green-600",
  "from-blue-500/10 to-blue-500/0 text-blue-600",
  "from-emerald-500/10 to-emerald-500/0 text-emerald-600",
  "from-orange-500/10 to-orange-500/0 text-orange-600",
]

export default function CicilanFeatureGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-3">
      {items.map((item, i) => {
        const Icon = item.icon
        const color = colorMap[i % colorMap.length]

        return (
          <div
            key={item.title}
            className="
              group

              rounded-xl md:rounded-2xl
              border border-gray-100

              bg-white

              px-3 py-2.5 md:px-4 md:py-3

              shadow-[0_2px_10px_rgba(0,0,0,0.04)]

              transition
              active:scale-[0.98]
              hover:shadow-md
            "
          >
            {/* ICON */}
            <div
              className={`
                mb-2

                flex items-center justify-center

                w-8 h-8 md:w-10 md:h-10
                rounded-lg md:rounded-xl

                bg-gradient-to-br ${color}

                transition
                group-hover:scale-110
              `}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
            </div>

            {/* TITLE */}
            <h3 className="text-[12px] md:text-sm font-semibold text-slate-900 leading-tight">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="mt-0.5 text-[10px] md:text-xs text-slate-500 leading-snug">
              {item.desc}
            </p>
          </div>
        )
      })}
    </div>
  )
}