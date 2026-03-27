"use client"

import { useState } from "react"
import PaketCard from "../components/PaketCard"
import PaketPagination from "../components/PaketPagination"
import PaketSorting from "../components/PaketSorting"
import PaketFilter from "../components/PaketFilter"
import PaketSearch from "../components/PaketSearch"

export default function PaketListPage({ pakets }: any) {
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState("termurah")
  const [filters, setFilters] = useState<any>({})
  const [search, setSearch] = useState("")

  const PER_PAGE = 6
  const safePakets = Array.isArray(pakets) ? pakets : []

  // =====================================================
  // 🔍 SEARCH
  // =====================================================
  const searched = safePakets.filter((item) => {
    if (!search) return true
    return item.name.toLowerCase().includes(search.toLowerCase())
  })

  // =====================================================
  // 🎛️ FILTER
  // =====================================================
  const filtered = searched.filter((item) => {
    if (filters.departure_city && item.departure_city !== filters.departure_city) {
      return false
    }

    if (filters.min_price && item.price < Number(filters.min_price)) {
      return false
    }

    if (filters.max_price && item.price > Number(filters.max_price)) {
      return false
    }

    return true
  })

  // =====================================================
  // 🔥 SORT
  // =====================================================
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "termurah") return a.price - b.price
    if (sort === "termahal") return b.price - a.price
    return 0
  })

  // =====================================================
  // 📄 PAGINATION
  // =====================================================
  const start = (page - 1) * PER_PAGE
  const currentData = sorted.slice(start, start + PER_PAGE)
  const totalPage = Math.ceil(sorted.length / PER_PAGE)

  return (
    <div
      className="
        max-w-md md:max-w-5xl
        mx-auto w-full

        px-3 md:px-4
        py-3 md:py-6

        space-y-3 md:space-y-5
      "
    >

      {/* ================= HEADER SUPER COMPACT ================= */}
      <div
        className="
          sticky top-[64px] z-30

          bg-white/95 backdrop-blur

          px-2 py-2
          space-y-2

          border-b border-gray-100
          rounded-b-xl
        "
      >

        {/* 🔍 SEARCH */}
        <PaketSearch onChange={setSearch} />

        {/* 🎛️ FILTER + SORT */}
        <div className="flex items-center justify-between gap-2">

          <PaketFilter onApply={(val) => {
            setFilters(val)
            setPage(1)
          }} />

          <PaketSorting
            value={sort}
            onChange={(val) => {
              setSort(val)
              setPage(1)
            }}
          />

        </div>

      </div>

      {/* ================= RESULT INFO ================= */}
      <div className="text-[10px] text-gray-400 px-1">
        {sorted.length} paket
      </div>

      {/* ================= LIST ================= */}

      {/* 🔥 MOBILE (SUPER COMPACT LIST) */}
      <div className="flex flex-col gap-2 md:hidden">
        {currentData.map((item: any) => (
          <div key={item.id} className="scale-[0.98]">
            <PaketCard paket={item} variant="compact" />
          </div>
        ))}
      </div>

      {/* 🔥 DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {currentData.map((item: any) => (
          <PaketCard key={item.id} paket={item} />
        ))}
      </div>

      {/* ================= PAGINATION ================= */}
      <div className="pt-1 md:pt-2">
        <PaketPagination
          page={page}
          totalPage={totalPage}
          onChange={setPage}
        />
      </div>

    </div>
  )
}