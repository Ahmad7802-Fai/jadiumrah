import clsx from "clsx"

type BadgeSize = "xs" | "sm" | "md"
type BadgeVariant = "default" | "soft" | "outline"

type Props = {
  children: React.ReactNode
  size?: BadgeSize
  variant?: BadgeVariant
  className?: string
}

export default function Badge({
  children,
  size = "xs",
  variant = "default",
  className,
}: Props) {
  const sizeClasses: Record<BadgeSize, string> = {
    xs: "text-[8px] px-1.5 py-[2px] leading-none",
    sm: "text-[10px] px-2 py-[3px] leading-none",
    md: "text-xs px-2.5 py-1 leading-none",
  }

  const variantClasses: Record<BadgeVariant, string> = {
    default: "bg-red-500 text-white",
    soft: "bg-primary-soft text-primary",
    outline: "border border-primary text-primary",
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full font-medium whitespace-nowrap",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}