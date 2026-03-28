"use client"

import { useEffect, useState } from "react"
import { useAuthStore } from "../store/authStore"
import { getMe } from "../services/authService"

export function useAuth() {
  const { token, setAuth, logout } = useAuthStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedToken =
      typeof window !== "undefined"
        ? localStorage.getItem("token")
        : null

    if (savedToken && !token) {
      getMe()
        .then((user) => {
          setAuth(user, savedToken)
        })
        .catch(() => {
          logout()
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [])

  return {
    ...useAuthStore(),
    loading,
  }
}