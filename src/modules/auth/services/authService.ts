import { api } from "@/lib/api"

// ===============================
// TYPES (optional nanti bisa dipindah ke types/)
// ===============================
type LoginPayload = {
  email: string
  password: string
}

type RegisterPayload = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

// ===============================
// AUTH API
// ===============================

export const authService = {
  login: async (data: LoginPayload) => {
    const res = await api.post("/login", data)
    return res.data
  },

  register: async (data: RegisterPayload) => {
    const res = await api.post("/register", data)
    return res.data
  },

  me: async () => {
    const res = await api.get("/me")
    return res.data
  },

  logout: async () => {
    const res = await api.post("/logout")
    return res.data
  },

  forgotPassword: async (email: string) => {
    const res = await api.post("/forgot-password", { email })
    return res.data
  },

  resetPassword: async (data: any) => {
    const res = await api.post("/reset-password", data)
    return res.data
  },
}