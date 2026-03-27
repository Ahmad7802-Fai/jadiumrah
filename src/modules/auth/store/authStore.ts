"use client"

import { create } from "zustand"
import { User } from "../types/types"

interface AuthState {
  user: User | null
  token: string | null
  isHydrated: boolean

  setAuth: (user: User, token: string) => void
  logout: () => void
  hydrate: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isHydrated: false,

  setAuth: (user, token) => {
    // 🔥 simpan ke localStorage
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(user))

    set({ user, token })
  },

  logout: () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    set({ user: null, token: null })
  },

  hydrate: () => {
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")

    if (token && user) {
      set({
        token,
        user: JSON.parse(user),
        isHydrated: true,
      })
    } else {
      set({ isHydrated: true })
    }
  },
}))