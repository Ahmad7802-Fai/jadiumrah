import { api } from "@/lib/api"

// ===============================
// TYPES
// ===============================
export interface ProfileResponse {
  id: number
  name: string
  email: string
  role: string
  agent?: {
    nama: string
    kode_agent: string
    phone: string
  }
}

// ===============================
// 👤 GET PROFILE
// ===============================
export async function getProfile(): Promise<ProfileResponse | null> {
  try {
    const res = await api.get("/me")
    return res.data.data
  } catch (err: any) {
    console.error("❌ GET PROFILE:", err?.response?.data)
    return null
  }
}

// ===============================
// 🔐 UPDATE PASSWORD
// ===============================
export async function updatePassword(
  oldPassword: string,
  newPassword: string
): Promise<boolean> {
  try {
    await api.post("/change-password", {
      old_password: oldPassword,
      password: newPassword,
    })

    return true
  } catch (err: any) {
    console.error("❌ UPDATE PASSWORD:", err?.response?.data)
    throw err
  }
}

// ===============================
// 👤 UPDATE PROFILE
// ===============================
export async function updateProfile(payload: {
  name?: string
  phone?: string
}): Promise<ProfileResponse | null> {
  try {
    const res = await api.put("/update-profile", payload)
    return res.data.data
  } catch (err: any) {
    console.error("❌ UPDATE PROFILE:", err?.response?.data)
    return null
  }
}