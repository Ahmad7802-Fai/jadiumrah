"use client"

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
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="
          px-3 py-1 rounded-lg text-sm
          bg-gray-100 disabled:opacity-40
        "
      >
        ←
      </button>

      {/* NUMBER */}
      {Array.from({ length: totalPage }).map((_, i) => {
        const p = i + 1

        return (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`
              px-3 py-1 rounded-lg text-sm
              transition
              ${
                page === p
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }
            `}
          >
            {p}
          </button>
        )
      })}

      {/* NEXT */}
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPage}
        className="
          px-3 py-1 rounded-lg text-sm
          bg-gray-100 disabled:opacity-40
        "
      >
        →
      </button>

    </div>
  )
}