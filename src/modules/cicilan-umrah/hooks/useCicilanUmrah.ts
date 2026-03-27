"use client"

import { useEffect, useMemo, useState } from "react"
import { getCicilanLandingData } from "../services/cicilanUmrahService"
import type {
  CicilanFaq,
  CicilanFeature,
  CicilanPackage,
  CicilanSimulationResult,
} from "../types"

export function useCicilanUmrah() {
  const [features, setFeatures] = useState<CicilanFeature[]>([])
  const [packages, setPackages] = useState<CicilanPackage[]>([])
  const [faqs, setFaqs] = useState<CicilanFaq[]>([])
  const [tenors, setTenors] = useState<number[]>([])

  const [selectedPackageId, setSelectedPackageId] = useState<number>(0)
  const [selectedTenor, setSelectedTenor] = useState<number>(12)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    let mounted = true

    async function load() {
      try {
        setLoading(true)
        setError("")

        const data = await getCicilanLandingData()

        if (!mounted) return

        setFeatures(data.features ?? [])
        setPackages(data.packages ?? [])
        setFaqs(data.faqs ?? [])
        setTenors(data.tenors ?? [6, 12, 18, 24, 36])

        if (data.packages?.length > 0) {
          setSelectedPackageId(data.packages[0].id)
        }
      } catch (err: any) {
        console.error(err)
        if (!mounted) return
        setError(err?.message || "Gagal memuat data cicilan")
      } finally {
        if (!mounted) return
        setLoading(false)
      }
    }

    load()

    return () => {
      mounted = false
    }
  }, [])

  const selectedPackage =
    packages.find((item) => item.id === selectedPackageId) ?? null

  const simulation: CicilanSimulationResult | null = useMemo(() => {
    if (!selectedPackage) return null

    const total = Number(selectedPackage.price || 0)
    const perMonth = Math.ceil(total / selectedTenor)
    const perWeek = Math.ceil(perMonth / 4)
    const perDay = Math.ceil(perMonth / 30)

    return {
      packageName: selectedPackage.name,
      total,
      perMonth,
      perWeek,
      perDay,
    }
  }, [selectedPackage, selectedTenor])

  return {
    features,
    packages,
    faqs,
    tenors,
    selectedPackageId,
    setSelectedPackageId,
    selectedTenor,
    setSelectedTenor,
    simulation,
    loading,
    error,
  }
}