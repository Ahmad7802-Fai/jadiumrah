"use client"

import { Button } from "@/components/ui"

interface Props {
  page: number
  totalPage: number
  onChange: (page: number) => void
}

export default function PaketPagination({
  page,
  totalPage,
  onChange,
}: Props) {
  if (totalPage <= 1) return null

  return (
    <div className="flex justify-center items-center gap-2 mt-6">

      {/* PREV */}
      <Button
        size="sm"
        variant="outline"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        ←
      </Button>

      {/* NUMBER */}
      {Array.from({ length: totalPage }).map((_, i) => {
        const p = i + 1
        const active = page === p

        return (
          <Button
            key={p}
            size="sm"
            variant={active ? "primary" : "outline"}
            onClick={() => onChange(p)}
          >
            {p}
          </Button>

        )
      })}

      {/* NEXT */}
      <Button
        size="sm"
        variant="outline"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPage}
      >
        →
      </Button>

    </div>
  )
}