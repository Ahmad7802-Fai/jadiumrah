"use client"

import { useState } from "react"
import PaketCard from "../components/PaketCard"
import PaketPagination from "../components/PaketPagination"
import PaketSorting from "../components/PaketSorting"
import PaketFilter from "../components/PaketFilter"
import PaketSearch from "../components/PaketSearch"

import { PageContainer, SectionBlock } from "@/components"

export default function PaketListPage({ pakets }: any) {
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState("termurah")
  const [filters, setFilters] = useState<any>({})
  const [search, setSearch] = useState("")

  const PER_PAGE = 6
  const safePakets = Array.isArray(pakets) ? pakets : []

  const searched = safePakets.filter((item) => {
    if (!search) return true
    return item.name.toLowerCase().includes(search.toLowerCase())
  })

  const filtered = searched.filter((item) => {
  if (
        filters.departure_city &&
        item.departure_city !== filters.departure_city
      )
        return false

      if (filters.min_price && item.price < filters.min_price)
        return false

      if (filters.max_price && item.price > filters.max_price)
        return false

      return true
    })


  const sorted = [...filtered].sort((a, b) => {
    if (sort === "termurah") return a.price - b.price
    if (sort === "termahal") return b.price - a.price
    return 0
  })

  const start = (page - 1) * PER_PAGE
  const currentData = sorted.slice(start, start + PER_PAGE)
  const totalPage = Math.ceil(sorted.length / PER_PAGE)

  return (
    <PageContainer>

      {/* ================= HEADER ================= */}
      <div
        className="
          sticky top-[var(--nav-h)] z-30

          bg-white/95 backdrop-blur
          border-b border-border

          px-2 py-2
          space-y-2
          rounded-b-xl
        "
      >

        {/* MINI HERO */}
        <div className="px-1">
          <div className="rounded-xl px-3 py-2 bg-primary text-white shadow-sm">
            <div className="text-[11px] opacity-90">
              ✈️ 1000+ Jamaah Berangkat
            </div>
            <div className="text-sm font-semibold">
              Pilih Paket Umrah Terbaik
            </div>
          </div>
        </div>

        <PaketSearch onChange={setSearch} />

        <div className="flex items-center justify-between gap-2">
          <PaketFilter
            onApply={(val) => {
              setFilters(val)
              setPage(1)
            }}
          />

          <PaketSorting
            value={sort}
            onChange={(val) => {
              setSort(val)
              setPage(1)
            }}
          />
        </div>

      </div>

      {/* ================= RESULT ================= */}
      <SectionBlock
          title="Daftar Paket Umrah"
          subtitle={`${sorted.length} paket tersedia`}
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 md:p-4">

            {/* MOBILE */}
            <div className="flex flex-col gap-2 md:hidden">
              {currentData.map((item: any) => (
                <div key={item.id} className="scale-[0.98]">
                  <PaketCard paket={item} variant="compact" />
                </div>
              ))}
            </div>

            {/* DESKTOP */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentData.map((item: any) => (
                <PaketCard key={item.id} paket={item} />
              ))}
            </div>

            {/* PAGINATION */}
            <div className="pt-2">
              <PaketPagination
                page={page}
                totalPage={totalPage}
                onChange={setPage}
              />
            </div>

          </div>
        </SectionBlock>

    </PageContainer>
  )
}