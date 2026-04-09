import { ReactNode } from "react"
import clsx from "clsx"

type Props = {
  children: ReactNode
  className?: string
}

export default function PageContainer({ children, className }: Props) {
  return (
    <div
      className={clsx(
        "pt-[calc(var(--nav-h)+12px)]",
        "min-h-screen",
        "bg-bg",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {children}
      </div>
    </div>
  )
}