"use client"

import type { CicilanFaq } from "../types"
import CicilanSectionTitle from "./CicilanSectionTitle"

interface Props {
  items: CicilanFaq[]
}

export default function CicilanFaqCompact({ items }: Props) {
  return (
    <section id="faq" className="space-y-3">
      <CicilanSectionTitle
        title="FAQ"
        subtitle="Pertanyaan yang sering ditanyakan."
      />

      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <h3 className="text-sm font-bold text-slate-900 md:text-base">
              {item.question}
            </h3>
            <p className="mt-1 text-xs leading-5 text-slate-500 md:text-sm">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}