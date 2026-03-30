"use client"

import { useEffect, useState } from "react"
import { authService } from "../services/authService"
import { useAuthStore } from "../store/authStore"

export function useAuth() {
  const { user, setUser, reset } = useAuthStore() // 🔥 FIX
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      try {
        const token = localStorage.getItem("token")

        if (!token) {
          reset() // 🔥 FIX
          return
        }

        const res = await authService.me()

        setUser(res.data)

      } catch (err) {
        reset() // 🔥 FIX
        localStorage.removeItem("token")
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [])

  return { user, loading }
}