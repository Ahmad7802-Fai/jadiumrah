"use client"

import clsx from "clsx"

export default function Input({
  className,
  variant = "default",
  ...props
}: any) {
  return (
    <input
      {...props}
      className={clsx(
        "w-full rounded-md border px-3 py-2 text-body",
        "focus:outline-none focus:ring-2",
        variant === "default" &&
          "border-border focus:ring-primary-soft",
        variant === "error" &&
          "border-red-300 focus:ring-red-100",
        className
      )}
    />
  )
}

export function FormField({ label, error, children }: any) {
  return (
    <div className="space-y-1.5">
      {label && <label className="text-caption">{label}</label>}
      {children}
      {error && <div className="text-xs text-red-500">{error}</div>}
    </div>
  )
}