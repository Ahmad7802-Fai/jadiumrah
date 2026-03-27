import axios from "axios"
import { BASE_URL } from "@/lib/config"
import {
  AuthResponse,
  AuthResponseAPI,
  User,
} from "../types/types"

// ===============================
// 🔥 MAPPING USER (WAJIB)
// ===============================
function mapUser(data: any): User {
  return {
    id: data.id,
    name: data.name,
    email: data.email,

    // ✅ SAFE ROLE
    role: data.profile_type === "agent" ? "agent" : "jamaah",

    // ✅ AGENT
    agent: data.agent_profile
      ? {
          id: data.agent_profile.id,
          nama: data.agent_profile.nama,
          kode_agent: data.agent_profile.kode_agent,
          phone: data.agent_profile.phone,
          avatar: data.agent_profile.avatar ?? null,
        }
      : null,

    // ✅ JAMAAH
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
  const res = await axios.post<AuthResponseAPI>(`${BASE_URL}/login`, {
    email,
    password,
  })

  return {
    token: res.data.token,
    user: mapUser(res.data.user),
  }
}

// ===============================
// 📝 REGISTER
// ===============================
export async function register(
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> {
  const res = await axios.post<AuthResponseAPI>(`${BASE_URL}/register`, {
    name,
    email,
    password,
  })

  return {
    token: res.data.token,
    user: mapUser(res.data.user),
  }
}

// ===============================
// 👤 GET PROFILE
// ===============================
export async function getMe(token: string): Promise<User> {
  const res = await axios.get(`${BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return mapUser(res.data)
}