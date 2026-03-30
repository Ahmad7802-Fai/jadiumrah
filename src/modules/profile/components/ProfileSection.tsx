"use client"

import { useRouter } from "next/navigation"
import { useAuthStore } from "@/modules/auth/store/authStore"
import { authService } from "@/modules/auth/services/authService"

export default function ProfileSection({ user }: any) {
  const router = useRouter()
  const { reset } = useAuthStore() // 🔥 FIX

  const handleLogout = async () => {
    try {
      await authService.logout()
    } catch {}

    reset() // 🔥 FIX
    localStorage.removeItem("token")

    router.replace("/login")
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-4">
      <div className="text-sm font-semibold">Info Akun</div>

      <div className="space-y-1">
        <div className="text-sm font-medium">{user?.name}</div>
        <div className="text-xs text-gray-500">{user?.email}</div>
      </div>

      <button
        onClick={handleLogout}
        className="w-full mt-2 bg-red-500 text-white py-2 rounded-lg text-sm"
      >
        Logout
      </button>
    </div>
  )
}