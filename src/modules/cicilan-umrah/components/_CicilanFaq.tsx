import type { CicilanFaq as CicilanFaqType } from "../types"

interface Props {
  items: CicilanFaqType[]
}

export default function CicilanFaq({ items }: Props) {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 pb-14 md:px-6 lg:px-8 lg:pb-20">
      <div className="rounded-[32px] bg-white p-6 shadow-xl shadow-slate-200 md:p-8">
        <h2 className="text-2xl font-extrabold text-slate-900 md:text-4xl">
          FAQ Singkat
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="text-lg font-bold text-slate-900">
                {item.question}
              </div>

              <div className="mt-2 text-base leading-7 text-slate-600">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}