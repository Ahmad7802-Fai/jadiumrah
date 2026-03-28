import axios from "axios"
import { setRuntimeConfig } from "./config"

export async function bootstrapApp() {
  try {
    const res = await axios.get(
      "https://app.jadiumrah.cloud/api/v1/config"
    )

    // 🔥 ambil hanya data
    const config = res.data?.data || {}

    setRuntimeConfig(config)

    // 🔥 log hanya di dev
    if (process.env.NODE_ENV === "development") {
      console.log("🔥 REMOTE CONFIG LOADED:", config)
    }
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      console.warn("⚠️ Gagal load remote config → pakai ENV")
    }
  }
}