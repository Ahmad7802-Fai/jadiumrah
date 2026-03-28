import { api } from "@/lib/api"
import {
  AuthResponse,
  AuthResponseAPI,
  User,
} from "../types/types"

// ===============================
// 🔥 MAP USER
// ===============================
function mapUser(data: any): User {
  return {
    id: data.id,
    name: data.name,
    email: data.email,

    role: data.profile_type === "agent" ? "agent" : "jamaah",

    agent: data.agent_profile
      ? {
          id: data.agent_profile.id,
          nama: data.agent_profile.nama,
          kode_agent: data.agent_profile.kode_agent,
          phone: data.agent_profile.phone,
          avatar: data.agent_profile.avatar ?? null,
        }
      : null,

    jamaah: data.jamaah_profile
      ? {
          id: data.jamaah_profile.id,
          jamaah_code: data.jamaah_profile.jamaah_code,
          nama_lengkap: data.jamaah_profile.nama_lengkap,
          phone: data.jamaah_profile.phone,
          avatar: data.jamaah_profile.avatar ?? null,
        }
      : null,
  }
}

// ===============================
// 🔐 LOGIN
// ===============================
export async function login(
  email: string,
  password: string
): Promise<AuthResponse> {
  const res = await api.post<AuthResponseAPI>("/login", {
    email,
    password,
  })

  // 🔥 simpan token
  if (typeof window !== "undefined") {
    localStorage.setItem("token", res.data.token)
  }

  return {
    token: res.data.token,
    user: mapUser(res.data.user),
  }
}

// ===============================
// 📝 REGISTER (FIX VALIDASI)
// ===============================
export async function register(
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> {
  const res = await api.post<AuthResponseAPI>("/register", {
    name,
    email,
    password,
    password_confirmation: password, // 🔥 WAJIB
  })

  // 🔥 auto login setelah register
  if (typeof window !== "undefined") {
    localStorage.setItem("token", res.data.token)
  }

  return {
    token: res.data.token,
    user: mapUser(res.data.user),
  }
}

// ===============================
// 👤 GET ME
// ===============================
export async function getMe(): Promise<User> {
  const res = await api.get("/me")
  return mapUser(res.data)
}

// ===============================
// 🚪 LOGOUT
// ===============================
export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token")
    window.location.href = "/login"
  }
}