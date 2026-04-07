import type { PanduanUmrahItem } from "../types/panduan-umrah.types"

type Props = {
  item: PanduanUmrahItem
  isActive?: boolean
}

function BlockTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-green-700">
      {children}
    </div>
  )
}

export default function PanduanUmrahCard({ item, isActive }: Props) {
  return (
    <article
      id={item.id}
      className={[
        "scroll-mt-[190px] rounded-[22px] border bg-white p-3 shadow-sm transition",
        isActive
          ? "border-green-200 shadow-md ring-1 ring-green-100"
          : "border-gray-200 hover:-translate-y-[2px] hover:shadow-md",
      ].join(" ")}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {typeof item.step === "number" ? (
              <div
                className={[
                  "flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-black ring-1",
                  isActive
                    ? "bg-green-100 text-green-700 ring-green-200"
                    : "bg-green-50 text-green-700 ring-green-100",
                ].join(" ")}
              >
                {item.step}
              </div>
            ) : null}

            {item.badge ? (
              <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-slate-600">
                {item.badge}
              </div>
            ) : null}
          </div>

          <h3 className="text-[15px] font-black leading-[1.25] text-slate-900 md:text-[16px]">
            {item.title}
          </h3>

          {item.subtitle ? (
            <p className="mt-1 text-[11px] leading-5 text-slate-500 md:text-[12px]">
              {item.subtitle}
            </p>
          ) : null}
        </div>
      </div>

      {item.arabic ? (
        <div className="mb-2.5 rounded-[18px] border border-gray-100 bg-gradient-to-b from-slate-50 to-white p-3">
          <BlockTitle>Arab</BlockTitle>
          <div className="text-right text-[18px] leading-[2] text-slate-900 md:text-[20px]">
            {item.arabic}
          </div>
        </div>
      ) : null}

      {item.latin ? (
        <div className="mb-2.5 rounded-[18px] border border-gray-100 bg-slate-50/80 p-3">
          <BlockTitle>Latin</BlockTitle>
          <p className="text-[11px] leading-5 text-slate-600 md:text-[12px] md:leading-6">
            {item.latin}
          </p>
        </div>
      ) : null}

      {item.meaning ? (
        <div className="mb-2.5 rounded-[18px] border border-gray-100 bg-slate-50/80 p-3">
          <BlockTitle>Arti</BlockTitle>
          <p className="text-[11px] leading-5 text-slate-600 md:text-[12px] md:leading-6">
            {item.meaning}
          </p>
        </div>
      ) : null}

      <div className="rounded-[18px] border border-gray-100 bg-slate-50/80 p-3">
        <BlockTitle>Panduan Singkat</BlockTitle>
        <ul className="space-y-1.5 pl-4 text-[11px] leading-5 text-slate-700 md:text-[12px] md:leading-6">
          {item.points.map((point, index) => (
            <li key={index} className="list-disc">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}