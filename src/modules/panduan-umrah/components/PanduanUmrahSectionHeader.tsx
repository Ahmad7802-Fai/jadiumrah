type Props = {
  title: string
  subtitle: string
}

export default function PanduanUmrahSectionHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-2 flex items-end justify-between gap-3">
      <div>
        <h2 className="text-[14px] font-black tracking-tight text-slate-900 md:text-[16px]">
          {title}
        </h2>
        <p className="mt-1 text-[11px] leading-4 text-slate-500 md:text-[12px]">
          {subtitle}
        </p>
      </div>
    </div>
  )
}