import { api } from "@/lib/api"
import { API_ROUTES } from "@/lib/config"

// ===============================
// TYPES
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
    const res = await api.post(API_ROUTES.auth.login, data)
    return res.data
  },

  register: async (data: RegisterPayload) => {
    const res = await api.post(API_ROUTES.auth.register, data)
    return res.data
  },

  me: async () => {
    const res = await api.get(API_ROUTES.auth.me)
    return res.data
  },

  logout: async () => {
    const res = await api.post(API_ROUTES.auth.logout)
    return res.data
  },

  forgotPassword: async (email: string) => {
    const res = await api.post(API_ROUTES.auth.forgotPassword, { email })
    return res.data
  },

  resetPassword: async (data: any) => {
    const res = await api.post(API_ROUTES.auth.resetPassword, data)
    return res.data
  },
}