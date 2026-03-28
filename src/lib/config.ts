// ===============================
// ENV CONFIG
// ===============================

export const APP_ENV =
  process.env.NEXT_PUBLIC_APP_ENV || "local"

const ENV_API =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://app.jadiumrah.cloud/api/v1"

const ENV_STORAGE =
  process.env.NEXT_PUBLIC_STORAGE_URL ||
  "https://app.jadiumrah.cloud"

// ===============================
// RUNTIME CONFIG (REMOTE)
// ===============================

type RuntimeConfig = {
  api: string
  storage: string
  feature: Record<string, boolean>
}

let runtimeConfig: RuntimeConfig = {
  api: ENV_API,
  storage: ENV_STORAGE,
  feature: {},
}

// ===============================
// SETTER
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

export function getAPI() {
  return runtimeConfig.api
}

export function getStorage() {
  return runtimeConfig.storage
}

export function getFeature(name: string) {
  return runtimeConfig.feature?.[name] ?? false
}

// ===============================
// DEBUG
// ===============================

if (typeof window !== "undefined") {
  console.log("🌍 ENV:", APP_ENV)
  console.log("🚀 API:", runtimeConfig.api)
}