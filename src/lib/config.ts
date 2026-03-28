// ===============================
// APP CONFIG
// ===============================

export const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME || "jadiumrah.com"

export const APP_ENV =
  process.env.NEXT_PUBLIC_APP_ENV || "local"

// ===============================
// API CONFIG (SAFE)
// ===============================

const baseUrl = process.env.NEXT_PUBLIC_API_URL

if (!baseUrl) {
  throw new Error("❌ NEXT_PUBLIC_API_URL belum diset di .env")
}

export const BASE_URL = baseUrl

export const STORAGE_URL =
  process.env.NEXT_PUBLIC_STORAGE_URL || "http://127.0.0.1:8000"

// ===============================
// DEBUG (optional)
// ===============================

if (APP_ENV === "local") {
  console.log("🌍 API:", BASE_URL)
}