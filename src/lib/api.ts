import axios from "axios"
import { getAPI } from "./config"

// ===============================
// AXIOS INSTANCE
// ===============================

export const api = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
})

// ===============================
// REQUEST INTERCEPTOR
// ===============================

api.interceptors.request.use((config) => {
  config.baseURL = getAPI()

  // 🔥 AMBIL TOKEN DARI LOCALSTORAGE
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  console.log(
    "📡",
    config.method?.toUpperCase(),
    config.baseURL + config.url
  )

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
    const currentPath =
      typeof window !== "undefined" ? window.location.pathname : ""

    console.error("❌ API ERROR:", status, err.response.data)

    // 🔥 HANDLE 401
    if (status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("token")

      const publicRoutes = [
        "/",
        "/login",
        "/register",
        "/forgot-password",
        "/verify-success",
      ]

      const isPublic = publicRoutes.includes(currentPath)

      if (!isPublic) {
        window.location.href = "/login"
      }
    }

    return Promise.reject(err)
  }
)