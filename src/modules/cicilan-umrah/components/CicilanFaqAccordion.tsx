"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import type { CicilanFaq } from "../types"
import CicilanSectionTitle from "./CicilanSectionTitle"

interface Props {
  items: CicilanFaq[]
}

export default function CicilanFaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section id="faq" className="space-y-2">
      <CicilanSectionTitle
        title="FAQ"
        subtitle="Pertanyaan yang sering ditanyakan."
      />

      <div className="space-y-2">
        {items.map((item, index) => {
          const open = index === openIndex

          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left md:px-4"
              >
                <span className="text-sm font-bold leading-5 text-slate-900">
                  {item.question}
                </span>

                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-slate-500 transition ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open ? (
                <div className="border-t border-gray-100 px-3 py-3 text-xs leading-5 text-slate-500 md:px-4 md:text-sm">
                  {item.answer}
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}