import clsx from "clsx"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
  action?: ReactNode
}

export default function SectionBlock({
  children,
  className,
  title,
  subtitle,
  action,
}: Props) {
  return (
    <section
      className={clsx(
        "mt-3 md:mt-6",
        "flex flex-col",
        "gap-3 md:gap-4",
        className
      )}
    >
      {(title || subtitle || action) && (
        <div className="flex flex-col gap-2">

          {/* TOP */}
          <div className="flex items-center justify-between gap-2">

            <h2 className="text-sm md:text-lg font-semibold leading-tight">
              {title}
            </h2>

            {action && (
              <div className="shrink-0">
                {action}
              </div>
            )}

          </div>

          {/* SUBTITLE */}
          {subtitle && (
            <p className="text-[11px] md:text-sm text-text-soft">
              {subtitle}
            </p>
          )}

        </div>
      )}

      {children}
    </section>
  )
}