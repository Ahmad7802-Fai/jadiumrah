"use client"

import { useState } from "react"
import { Button } from "@/components/ui"

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

      {/* ================= MOBILE ================= */}
      <div
        className="
          flex md:hidden
          bg-gray-100
          rounded-full
          p-[2px]
          gap-[2px]
        "
      >
        {OPTIONS.map((opt) => {
          const active = value === opt.value

          return (
            <button
              key={opt.value}
              onClick={() => onChange(opt.value)}
              className={`
                px-3 py-[6px]
                text-[10px]
                rounded-full
                transition

                ${
                  active
                    ? "bg-white text-primary shadow-sm"
                    : "text-gray-500"
                }
              `}
            >
              {opt.label}
            </button>
          )
        })}
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">

        {/* BUTTON UI */}
        <Button
          size="sm"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2"
        >
          🔽 {OPTIONS.find(o => o.value === value)?.label}
        </Button>

        {/* DROPDOWN */}
        {open && (
          <div
            className="
              absolute right-0 mt-2
              bg-white
              border border-gray-100
              rounded-xl
              shadow-lg
              z-50
              overflow-hidden
              min-w-[160px]
            "
          >
            {OPTIONS.map((opt) => {
              const active = value === opt.value

              return (
                <button
                  key={opt.value}
                  onClick={() => {
                    onChange(opt.value)
                    setOpen(false)
                  }}
                  className={`
                    w-full text-left px-3 py-2 text-sm transition

                    ${
                      active
                        ? "bg-green-50 text-primary font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }
                  `}
                >
                  {opt.label}
                </button>
              )
            })}
          </div>
        )}

      </div>

    </div>
  )
}