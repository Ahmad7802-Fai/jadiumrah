"use client"

import { useEffect } from "react"
import { useAuthStore } from "../store/authStore"
import { getMe } from "../services/authService"

export function useAuth() {
  const { token, setAuth } = useAuthStore()

  useEffect(() => {
    const savedToken = localStorage.getItem("token")

    if (savedToken && !token) {
      getMe(savedToken)
        .then((user) => {
          setAuth(user, savedToken)
        })
        .catch(() => {
          localStorage.removeItem("token")
        })
    }
  }, [])

  return useAuthStore()
}