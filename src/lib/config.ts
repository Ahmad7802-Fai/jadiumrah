// ===============================
// 🌍 ENV CONFIG
// ===============================

export const APP_ENV =
  process.env.NEXT_PUBLIC_APP_ENV || "production"

// 🔥 BASE DOMAIN (NO /api/v1)
const ENV_API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://app.jadiumrah.cloud"

const ENV_STORAGE =
  process.env.NEXT_PUBLIC_STORAGE_URL ||
  "https://app.jadiumrah.cloud"

// ===============================
// ⚙️ RUNTIME CONFIG (DYNAMIC)
// ===============================

type RuntimeConfig = {
  apiBase: string
  apiVersion: string
  storage: string
  feature: Record<string, boolean>
}

let runtimeConfig: RuntimeConfig = {
  apiBase: ENV_API_BASE,
  apiVersion: "/api/v1",
  storage: ENV_STORAGE,
  feature: {},
}

// ===============================
// 🔄 SETTER (REMOTE CONFIG READY)
// ===============================

export function setRuntimeConfig(config: Partial<RuntimeConfig>) {
  runtimeConfig = {
    ...runtimeConfig,
    ...config,
  }
}

// ===============================
// 🔗 GETTERS
// ===============================

// 🔥 FULL API URL (ANTI DOUBLE SLASH)
export function getAPI() {
  return `${runtimeConfig.apiBase}${runtimeConfig.apiVersion}`
}

// 🔥 BASE DOMAIN ONLY
export function getAPIBase() {
  return runtimeConfig.apiBase
}

// 🔥 STORAGE URL
export function getStorage() {
  return runtimeConfig.storage
}

// 🔥 FEATURE FLAG
export function getFeature(name: string) {
  return runtimeConfig.feature?.[name] ?? false
}

// ===============================
// 🧠 HELPERS (🔥 BEST PRACTICE)
// ===============================

// 🔥 BUILD FULL URL
export function buildURL(path: string) {
  if (path.startsWith("http")) return path
  return `${getAPI()}${path}`
}

// 🔥 IMAGE URL (ANTI CDN ERROR)
export function toImageURL(path?: string | null) {
  if (!path) return null

  if (path.startsWith("http")) return path

  return `${getStorage()}/${path}`
}

// ===============================
// 🧭 API ROUTES (TYPE SAFE)
// ===============================

export const API_ROUTES = {
  auth: {
    register: "/auth/register",
    login: "/auth/login",
    verifyEmail: "/auth/verify-email",
    resendVerification: "/auth/resend-verification", // 🔥 INI WAJIB
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
    me: "/auth/me",
    logout: "/auth/logout",
  },

  paket: {
    list: "/pakets",
    detail: (slug: string) => `/pakets/${slug}`,
  },

} as const

// ===============================
// 🐞 DEBUG (ONLY LOCAL)
// ===============================

if (typeof window !== "undefined" && APP_ENV === "local") {
  console.log("🌍 ENV:", APP_ENV)
  console.log("🚀 API BASE:", getAPIBase())
  console.log("🚀 API FULL:", getAPI())
}