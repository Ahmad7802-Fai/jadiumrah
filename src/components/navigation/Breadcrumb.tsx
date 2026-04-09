"use client"

import Link from "next/link"

type Item = {
  label: string
  href?: string
}

export default function Breadcrumb({ items }: { items: Item[] }) {
  return (
    <div className="flex items-center gap-1 text-xs text-text-soft">

      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1">

          {item.href ? (
            <Link href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span className="text-text">{item.label}</span>
          )}

          {i < items.length - 1 && <span>/</span>}

        </div>
      ))}

    </div>
  )
}