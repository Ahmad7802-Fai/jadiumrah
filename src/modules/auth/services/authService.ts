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

type VerifyPayload = {
  email: string
  token: string
}

// ===============================
// AUTH API
// ===============================

export const authService = {
  // ================= LOGIN
  login: async (data: LoginPayload) => {
    const res = await api.post(API_ROUTES.auth.login, data)
    return res.data
  },

  // ================= REGISTER
  register: async (data: RegisterPayload) => {
    const res = await api.post(API_ROUTES.auth.register, data)
    return res.data
  },

  // ================= VERIFY EMAIL
  verifyEmail: async (data: VerifyPayload) => {
    const res = await api.post(API_ROUTES.auth.verifyEmail, data)
    return res.data
  },

  // ================= RESEND VERIFICATION 🔥
  resendVerification: async (email: string) => {
    const res = await api.post(API_ROUTES.auth.resendVerification, { email })
    return res.data
  },

  // ================= ME
  me: async () => {
    const res = await api.get(API_ROUTES.auth.me)
    return res.data
  },

  // ================= LOGOUT
  logout: async () => {
    const res = await api.post(API_ROUTES.auth.logout)
    return res.data
  },

  // ================= FORGOT PASSWORD
  forgotPassword: async (email: string) => {
    const res = await api.post(API_ROUTES.auth.forgotPassword, { email })
    return res.data
  },

  // ================= RESET PASSWORD
  resetPassword: async (data: any) => {
    const res = await api.post(API_ROUTES.auth.resetPassword, data)
    return res.data
  },
}