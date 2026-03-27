"use client"

import { useAuthStore } from "@/modules/auth/store/authStore"
import { useRouter } from "next/navigation"

export default function ProfileSection() {
  const { user, logout } = useAuthStore()
  const router = useRouter()

  if (!user) return null

  return (
    <div className="p-4 space-y-4">

      <h1 className="text-lg font-semibold">Profile</h1>

      {/* BASIC */}
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="font-medium">{user.name}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-xs text-green-600 mt-1">
          {user.role.toUpperCase()}
        </p>
      </div>

      {/* AGENT */}
      {user.role === "agent" && user.agent && (
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-sm font-semibold mb-2">
            Data Agent
          </h2>

          <p>{user.agent.nama}</p>
          <p className="text-sm text-gray-500">
            {user.agent.kode_agent}
          </p>
          <p className="text-sm text-gray-500">
            {user.agent.phone}
          </p>
        </div>
      )}

      {/* JAMAAH */}
      {user.role === "jamaah" && user.jamaah && (
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-sm font-semibold mb-2">
            Data Jamaah
          </h2>

          <p>{user.jamaah.nama_lengkap}</p>
          <p className="text-sm text-gray-500">
            {user.jamaah.jamaah_code}
          </p>
          <p className="text-sm text-gray-500">
            {user.jamaah.phone}
          </p>
        </div>
      )}

      {/* LOGOUT */}
      <button
        onClick={() => {
          logout()
          router.push("/login")
        }}
        className="w-full bg-red-500 text-white py-2 rounded-lg text-sm"
      >
        Logout
      </button>

    </div>
  )
}