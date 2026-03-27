"use client"

import { useState } from "react"

const OPTIONS = [
  { label: "Termurah", value: "termurah" },
  { label: "Termahal", value: "termahal" },
]

export default function PaketSorting({
  value,
  onChange,
}: {
  value: string
  onChange: (val: string) => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">

      {/* ================= MOBILE (SUPER COMPACT) ================= */}
      <div
        className="
          flex md:hidden

          bg-gray-100
          rounded-full

          p-[2px]
          gap-[2px]

          shadow-inner
        "
      >
        {OPTIONS.map((opt) => {
          const active = value === opt.value

          return (
            <button
              key={opt.value}
              onClick={() => onChange(opt.value)}
              className={`
                relative

                px-3 py-[6px]
                text-[10px]
                rounded-full

                transition-all duration-200

                ${
                  active
                    ? "bg-white text-green-600 shadow-sm"
                    : "text-gray-500"
                }

                active:scale-95
              `}
            >
              {opt.label}

              {/* INDICATOR DOT */}
              {active && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-600 rounded-full" />
              )}
            </button>
          )
        })}
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">

        <button
          onClick={() => setOpen(!open)}
          className="
            flex items-center gap-2

            border border-gray-200
            bg-white

            px-3 py-2
            rounded-lg

            text-sm

            shadow-sm
            hover:bg-gray-50

            active:scale-95
            transition
          "
        >
          🔽 {OPTIONS.find(o => o.value === value)?.label}
        </button>

        {open && (
          <div
            className="
              absolute right-0 mt-2

              bg-white
              border border-gray-100
              rounded-xl

              shadow-[0_10px_30px_rgba(0,0,0,0.1)]

              z-50
              overflow-hidden
              min-w-[160px]
            "
          >
            {OPTIONS.map((opt) => (
              <div
                key={opt.value}
                onClick={() => {
                  onChange(opt.value)
                  setOpen(false)
                }}
                className={`
                  px-3 py-2 text-sm cursor-pointer

                  hover:bg-gray-50

                  ${
                    value === opt.value
                      ? "text-green-600 font-medium"
                      : "text-gray-600"
                  }
                `}
              >
                {opt.label}
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  )
}