"use client"

import { useState } from "react"
import { TABUNGAN_FAQ } from "../constants/faq"

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="space-y-3">

      {/* <h2 className="text-center text-sm md:text-lg font-semibold">
        FAQ Tabungan
      </h2> */}

      <div className="space-y-2">

        {TABUNGAN_FAQ.map((item, i) => {
          const isOpen = open === i

          return (
            <div
              key={item.id}
              className="
                bg-white
                rounded-lg
                border border-gray-100
                shadow-sm
                overflow-hidden
              "
            >

              {/* QUESTION */}
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="
                  w-full
                  flex justify-between items-center
                  px-3 py-2
                  text-[11px] md:text-sm
                  font-medium
                "
              >
                {item.q}
                <span className="text-green-600 text-xs">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              {isOpen && (
                <div className="px-3 pb-2 text-[10px] md:text-xs text-gray-500">
                  {item.a}
                </div>
              )}

            </div>
          )
        })}

      </div>

    </section>
  )
}