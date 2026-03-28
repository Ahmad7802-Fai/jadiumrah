import axios from "axios"
import { getAPI } from "./config"

// ===============================
// AXIOS INSTANCE
// ===============================

export const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
})

// ===============================
// REQUEST INTERCEPTOR
// ===============================

api.interceptors.request.use((config) => {
  config.baseURL = getAPI()

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }

  console.log("📡", config.method?.toUpperCase(), config.baseURL + config.url)

  return config
})

// ===============================
// RESPONSE INTERCEPTOR
// ===============================

api.interceptors.response.use(
  (res) => {
    console.log("✅", res.config.url, res.status)
    return res
  },
  (err) => {
    if (!err.response) {
      console.error("🌐 NETWORK ERROR:", err.message)
      return Promise.reject(err)
    }

    const status = err.response.status

    console.error("❌ API ERROR:", status, err.response.data)

    if (status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token")
        window.location.href = "/login"
      }
    }

    return Promise.reject(err)
  }
)