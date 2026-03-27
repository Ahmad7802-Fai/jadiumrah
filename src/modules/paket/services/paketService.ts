import axios from "axios"
import { BASE_URL } from "@/lib/config"

import { PaketApi, PaketDetailApi } from "../types/types"
import { mapPaket, mapPaketDetail } from "../utils/mapPaket"

// 🔥 LIST
export async function getPakets() {
  try {
    const res = await axios.get(`${BASE_URL}/pakets`)

    const data: PaketApi[] = res.data.data

    return data.map(mapPaket)
  } catch (error) {
    console.error("ERROR getPakets:", error)
    return []
  }
}

// 🔥 DETAIL
export async function getPaketDetail(slug: string) {
  try {
    const res = await axios.get(`${BASE_URL}/pakets/${slug}`)
    return res.data.data ?? null
  } catch (error: any) {
    console.error("DETAIL ERROR:", error?.response?.data || error.message)
    return null
  }
}