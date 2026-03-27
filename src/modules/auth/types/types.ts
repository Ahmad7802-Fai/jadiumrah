// ===============================
// 🧾 PROFILE TYPES
// ===============================
export interface AgentProfile {
  id: number
  nama: string
  kode_agent: string
  phone?: string
  avatar?: string | null
}

export interface JamaahProfile {
  id: number
  jamaah_code: string
  nama_lengkap: string
  phone?: string
  avatar?: string | null
}

// ===============================
// 👤 USER (FRONTEND CLEAN)
// ===============================
export interface User {
  id: number
  name: string
  email: string
  role: "agent" | "jamaah"
  agent?: AgentProfile | null
  jamaah?: JamaahProfile | null
}

// ===============================
// 🔐 AUTH RESPONSE (FRONTEND)
// ===============================
export interface AuthResponse {
  token: string
  user: User
}

// ===============================
// 🌐 AUTH RESPONSE API (RAW BACKEND)
// ===============================
export interface AuthResponseAPI {
  token: string
  user: any
}