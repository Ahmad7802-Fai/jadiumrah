// src/lib/api.ts

import axios from "axios"
import { getAPI } from "./config"

// ===============================
// AXIOS INSTANCE
// ===============================

export const api = axios.create({
  baseURL: getAPI(), // 🔥 otomatis https://app.jadiumrah.cloud/api/v1
  headers: {
    "Content-Type": "application/json",
  },
})

// ===============================
// REQUEST INTERCEPTOR (TOKEN)
// ===============================

api.interceptors.request.use((config) => {
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
  (response) => {
    return response
  },
  (error) => {
    // 🔥 HANDLE GLOBAL ERROR

    if (error.response) {
      const status = error.response.status

      // 🔐 UNAUTHORIZED → AUTO LOGOUT
      if (status === 401) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("token")
          window.location.href = "/login"
        }
      }

      // ❌ VALIDATION ERROR
      if (status === 422) {
        console.error("Validation Error:", error.response.data)
      }

      // 💥 SERVER ERROR
      if (status === 500) {
        console.error("Server Error:", error.response.data)
      }
    } else {
      console.error("Network Error:", error)
    }

    return Promise.reject(error)
  }
)