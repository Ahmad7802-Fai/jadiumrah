import clsx from "clsx"
import { ReactNode } from "react"

type Variant = "h1" | "h2" | "h3" | "h4"
type Align = "left" | "center" | "right"

type Props = {
  children: ReactNode
  variant?: Variant
  align?: Align
  className?: string
}

export default function Heading({
  children,
  variant = "h3",
  align = "left",
  className,
}: Props) {

  const variants: Record<Variant, string> = {
    h1: "text-h1",
    h2: "text-h2",
    h3: "text-h3",
    h4: "text-h4",
  }

  const aligns: Record<Align, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  // 🔥 SIMPLE & SAFE (NO JSX TYPE)
  const Tag = variant

  return (
    <Tag
      className={clsx(
        variants[variant],
        aligns[align],
        "font-semibold",
        className
      )}
    >
      {children}
    </Tag>
  )
}