"use client"

import clsx from "clsx"

type Variant = "text" | "title" | "avatar" | "image"

type Props = {
  className?: string
  variant?: Variant
}

export default function Skeleton({
  className,
  variant = "text",
}: Props) {
  const variants: Record<Variant, string> = {
    text: "h-3 w-full",
    title: "h-5 w-2/3",
    avatar: "h-10 w-10 rounded-full",
    image: "aspect-[4/3]",
  }

  return (
    <div
      className={clsx(
        "animate-pulse bg-gray-200 rounded-md",
        variants[variant],
        className
      )}
    />
  )
}