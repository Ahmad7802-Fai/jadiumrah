"use client"

import { useState, useEffect } from "react"
import { Button, Input } from "@/components"

export default function PaketFilter({
  onApply,
}: {
  onApply?: (filters: any) => void
}) {
  const [open, setOpen] = useState(false)

  const [city, setCity] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const isActive = city || minPrice || maxPrice

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const handleApply = () => {
    onApply?.({
      departure_city: city,
      min_price: minPrice,
      max_price: maxPrice,
    })
    setOpen(false)
  }

  return (
    <>
      {/* ================= BUTTON ================= */}
      <Button
        size="sm"
        onClick={() => setOpen(true)}
        className={`
          gap-1
          rounded-full border

          ${
            isActive
              ? "bg-green-50 border-green-200 text-green-600"
              : "bg-gray-100 border-gray-200 text-gray-600"
          }
        `}
      >
        ⚙️ Filter
      </Button>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-[10000]">

          {/* BACKDROP */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
          />

          {/* ================= SHEET ================= */}
          <div
            className="
              absolute bottom-0 left-0 right-0
              bg-white rounded-t-2xl
              px-3 pt-2 pb-3
              space-y-2
              max-h-[80vh]
              overflow-y-auto
              slide-up
            "
          >

            {/* HANDLE */}
            <div className="w-7 h-[3px] bg-gray-300 rounded-full mx-auto" />

            {/* TITLE */}
            <div className="text-[11px] font-semibold text-center">
              Filter
            </div>

            {/* QUICK CITY */}
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              {["Jakarta", "Surabaya"].map((c) => (
                <button
                  key={c}
                  onClick={() => setCity(c)}
                  className={`
                    px-2 py-[4px]
                    text-[9px]
                    rounded-full
                    border
                    shrink-0
                    ${
                      city === c
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-gray-100 text-gray-600 border-gray-200"
                    }
                  `}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* SELECT */}
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border rounded-md px-2 py-1 text-[10px]"
            >
              <option value="">Semua kota</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Surabaya">Surabaya</option>
            </select>

            {/* PRICE */}
            <div className="grid grid-cols-2 gap-1">
              <Input
                placeholder="Min"
                value={minPrice}
                onChange={(e: any) => setMinPrice(e.target.value)}
                className="text-[10px] py-1"
              />

              <Input
                placeholder="Max"
                value={maxPrice}
                onChange={(e: any) => setMaxPrice(e.target.value)}
                className="text-[10px] py-1"
              />
            </div>

            {/* ACTION */}
            <div className="flex gap-1 pt-1">

              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setCity("")
                  setMinPrice("")
                  setMaxPrice("")
                }}
                className="flex-1"
              >
                Reset
              </Button>

              <Button
                size="sm"
                onClick={handleApply}
                className="flex-1"
              >
                Terapkan
              </Button>

            </div>

          </div>
        </div>
      )}
    </>
  )
}