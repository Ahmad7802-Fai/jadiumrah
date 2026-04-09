import axios from "axios"
import { getAPI } from "./config"

// ===============================
// AXIOS INSTANCE
// ===============================

export const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
})

// ===============================
// REQUEST INTERCEPTOR (🔥 CORE FIX)
// ===============================

api.interceptors.request.use((config) => {
  // 🔥 IMPORTANT: dynamic baseURL (ANTI STALE CONFIG)
  config.baseURL = getAPI()

  // 🔐 TOKEN
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }

  return config
})

// ===============================
// RESPONSE INTERCEPTOR
// ===============================

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (error.response) {
      const status = error.response.status

      // 🔐 401 → AUTO LOGOUT
      if (status === 401) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("token")

          // 🔥 prevent infinite redirect loop
          if (window.location.pathname !== "/login") {
            window.location.href = "/login"
          }
        }
      }

      // ❌ VALIDATION ERROR
      if (status === 422) {
        console.error("❌ Validation Error:", error.response.data)
      }

      // 💥 SERVER ERROR
      if (status >= 500) {
        console.error("💥 Server Error:", error.response.data)
      }
    } else {
      console.error("🌐 Network Error:", error)
    }

    return Promise.reject(error)
  }
)