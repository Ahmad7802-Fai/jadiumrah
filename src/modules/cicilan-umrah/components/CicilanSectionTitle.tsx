interface Props {
  title: string
  subtitle?: string
}

export default function CicilanSectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-1.5 md:mb-2 leading-tight">

      {/* TITLE */}
      <h2 className="text-[14px] md:text-lg font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      {/* SUBTITLE */}
      {subtitle ? (
        <p className="mt-0.5 text-[10px] md:text-xs text-slate-500">
          {subtitle}
        </p>
      ) : null}

    </div>
  )
}