// ===============================
// ENV CONFIG
// ===============================

export const APP_ENV =
  process.env.NEXT_PUBLIC_APP_ENV || "local"

// 🔥 BASE DOMAIN SAJA (TANPA /api/v1)
const ENV_API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://app.jadiumrah.cloud"

const ENV_STORAGE =
  process.env.NEXT_PUBLIC_STORAGE_URL ||
  "https://app.jadiumrah.cloud"

// ===============================
// RUNTIME CONFIG (REMOTE SUPPORT)
// ===============================

type RuntimeConfig = {
  apiBase: string
  apiVersion: string
  storage: string
  feature: Record<string, boolean>
}

let runtimeConfig: RuntimeConfig = {
  apiBase: ENV_API_BASE,
  apiVersion: "/api/v1", // 🔥 DI SINI VERSIONING
  storage: ENV_STORAGE,
  feature: {},
}

// ===============================
// SETTER (OPTIONAL - REMOTE CONFIG)
// ===============================

export function setRuntimeConfig(config: Partial<RuntimeConfig>) {
  runtimeConfig = {
    ...runtimeConfig,
    ...config,
  }
}

// ===============================
// GETTERS
// ===============================

// 🔥 FULL API URL (AMAN, ANTI DOUBLE)
export function getAPI() {
  return `${runtimeConfig.apiBase}${runtimeConfig.apiVersion}`
}

// 🔥 BASE DOMAIN ONLY
export function getAPIBase() {
  return runtimeConfig.apiBase
}

export function getStorage() {
  return runtimeConfig.storage
}

export function getFeature(name: string) {
  return runtimeConfig.feature?.[name] ?? false
}

// ===============================
// API ROUTES (BEST PRACTICE)
// ===============================

export const API_ROUTES = {
  auth: {
    register: "/auth/register",
    login: "/auth/login",
    verifyEmail: "/auth/verify-email",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
    me: "/auth/me",
    logout: "/auth/logout",
  },
}

// ===============================
// DEBUG (DEV ONLY)
// ===============================

if (typeof window !== "undefined") {
  console.log("🌍 ENV:", APP_ENV)
  console.log("🚀 API BASE:", runtimeConfig.apiBase)
  console.log("🚀 API FULL:", getAPI())
}

