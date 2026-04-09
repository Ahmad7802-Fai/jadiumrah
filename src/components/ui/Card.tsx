import clsx from "clsx"
import { HTMLAttributes, ReactNode } from "react"

// ================= ROOT CARD =================
export default function Card({
  children,
  className,
  variant = "default",
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "soft" | "outline"
}) {
  return (
    <div
      className={clsx(
        // 🔥 CORE SYSTEM (WAJIB)
        "flex flex-col h-full rounded-xl overflow-hidden",
        "transition-all duration-200",

        // VARIANT
        variant === "default" &&
          "bg-card border border-black/5 shadow-sm",

        variant === "soft" &&
          "bg-primary-soft",

        variant === "outline" &&
          "border border-border",

        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// ================= HEADER =================
export function CardHeader({
  title,
  subtitle,
  action,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode
  subtitle?: ReactNode
  action?: ReactNode
}) {
  return (
    <div
      className={clsx(
        "flex items-start justify-between gap-3",
        "px-3 py-3 md:px-4 md:py-4",
        "border-b border-border",
        className
      )}
      {...props}
    >
      {/* LEFT */}
      <div className="min-w-0">

        {title && (
          <div className="text-body font-semibold truncate">
            {title}
          </div>
        )}

        {subtitle && (
          <div className="text-caption text-text-soft mt-0.5">
            {subtitle}
          </div>
        )}

      </div>

      {/* RIGHT */}
      {action && (
        <div className="shrink-0">
          {action}
        </div>
      )}
    </div>
  )
}

// ================= CONTENT =================
export function CardContent({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        // 🔥 FLEX SYSTEM (PENTING BANGET)
        "flex flex-col flex-1",

        // spacing
        "px-3 py-3 md:px-4 md:py-4",

        "min-w-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// ================= FOOTER =================
export function CardFooter({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        // 🔥 LOCK DI BAWAH
        "mt-auto",

        // spacing
        "px-3 py-3 md:px-4 md:py-4",

        // border
        "border-t border-border",

        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}