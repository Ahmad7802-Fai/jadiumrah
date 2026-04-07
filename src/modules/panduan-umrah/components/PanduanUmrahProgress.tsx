import type { PanduanUmrahQuickLink } from "../types/panduan-umrah.types"

type Props = {
  items: PanduanUmrahQuickLink[]
  activeId?: string
}

export default function PanduanUmrahProgress({ items, activeId }: Props) {
  const activeIndex = items.findIndex((item) => item.id === activeId)

  return (
    <div className="rounded-[18px] border border-gray-200 bg-white px-3 py-2 shadow-sm">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-green-700">
            Progress Umrah
          </div>
          <div className="truncate text-[12px] font-bold text-slate-900">
            Step {activeIndex > -1 ? activeIndex + 1 : 1} dari {items.length}
          </div>
        </div>

        <div className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-slate-600">
          {items.length} Step
        </div>
      </div>

      <div className="flex gap-1.5 overflow-x-auto pb-0.5">
        {items.map((item, index) => {
          const isActive = activeId === item.id
          const isPassed = activeIndex > -1 && index < activeIndex

          return (
            <a
              key={item.id}
              href={item.href}
              className={[
                "flex min-w-[96px] shrink-0 flex-col rounded-[14px] border px-2.5 py-2 transition",
                isActive
                  ? "border-green-200 bg-green-50"
                  : isPassed
                  ? "border-emerald-100 bg-emerald-50"
                  : "border-gray-200 bg-slate-50 hover:border-green-200 hover:bg-green-50",
              ].join(" ")}
            >
              <div className="mb-1.5 flex items-center gap-1.5">
                <div
                  className={[
                    "flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-black ring-1",
                    isActive
                      ? "bg-white text-green-700 ring-green-200"
                      : isPassed
                      ? "bg-white text-emerald-700 ring-emerald-200"
                      : "bg-white text-slate-900 ring-gray-200",
                  ].join(" ")}
                >
                  {item.step ?? index + 1}
                </div>

                <div
                  className={[
                    "h-px flex-1",
                    isActive
                      ? "bg-green-200"
                      : isPassed
                      ? "bg-emerald-200"
                      : "bg-gray-200",
                  ].join(" ")}
                />
              </div>

              <div
                className={[
                  "line-clamp-2 text-[10px] font-bold leading-4",
                  isActive
                    ? "text-green-700"
                    : isPassed
                    ? "text-emerald-700"
                    : "text-slate-700",
                ].join(" ")}
              >
                {item.label}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}