// ===============================
// APP CONFIG
// ===============================
export const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME || "jadiumrah.com"

export const APP_ENV =
  process.env.NEXT_PUBLIC_APP_ENV || "local"

// ===============================
// API CONFIG
// ===============================
export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api/v1"

export const STORAGE_URL =
  process.env.NEXT_PUBLIC_STORAGE_URL || "http://127.0.0.1:8000"

// ===============================
// SAFETY CHECK
// ===============================
if (!BASE_URL) {
  throw new Error("❌ NEXT_PUBLIC_API_URL belum diset")
}

// ===============================
// DEBUG
// ===============================
if (APP_ENV === "local") {
  console.log("🌍 API:", BASE_URL)
}