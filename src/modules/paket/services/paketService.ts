import { api } from "@/lib/api"

import { PaketApi, PaketDetailApi } from "../types/types"
import { mapPaket, mapPaketDetail } from "../utils/mapPaket"

// ===============================
// 🔥 LIST PAKET
// ===============================
export async function getPakets() {
  try {
    const res = await api.get("/pakets")

    const data: PaketApi[] = res.data.data

    return data.map(mapPaket)
  } catch (error) {
    console.error("❌ ERROR getPakets:", error)
    return []
  }
}

// ===============================
// 🔥 DETAIL PAKET
// ===============================
export async function getPaketDetail(slug: string) {
  try {
    const res = await api.get(`/pakets/${slug}`)

    const data: PaketDetailApi = res.data.data

    return mapPaketDetail(data)
  } catch (error: any) {
    console.error(
      "❌ DETAIL ERROR:",
      error?.response?.data || error.message
    )
    return null
  }
}