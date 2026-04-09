import clsx from "clsx"

type ButtonSize = "xs" | "sm" | "md"
type ButtonVariant = "primary" | "outline" | "ghost" | "soft"

type Props = {
  children: React.ReactNode
  size?: ButtonSize
  variant?: ButtonVariant
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  size = "sm",
  variant = "primary",
  className,
  ...props
}: Props) {
  const sizeClasses: Record<ButtonSize, string> = {
    xs: "text-[10px] px-2 py-[3px] rounded-md",
    sm: "text-[11px] px-3 py-[6px] rounded-lg",
    md: "text-sm px-4 py-2 rounded-lg",
  }

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white hover:bg-primary-light",

    outline: "border border-primary text-primary hover:bg-primary-soft",

    ghost: "text-primary hover:bg-primary-soft",

    // 🔥 TAMBAHKAN INI
    soft: "bg-primary-soft text-primary hover:bg-primary-soft/80",
  }


  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center font-medium",
        "leading-none whitespace-nowrap",
        "transition active:scale-[0.96]",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}