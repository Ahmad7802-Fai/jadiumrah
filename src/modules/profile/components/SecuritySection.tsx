"use client"

import { useState } from "react"
import { updatePassword } from "../services/profileService"

export default function SecuritySection() {
  const [oldPass, setOldPass] = useState("")
  const [newPass, setNewPass] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = async () => {
    try {
      setLoading(true)

      await updatePassword(oldPass, newPass)

      alert("Password berhasil diubah")
      setOldPass("")
      setNewPass("")
    } catch {
      alert("Gagal ubah password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-2">

      <div className="text-sm font-semibold">
        Keamanan
      </div>

      <input
        type="password"
        placeholder="Password lama"
        value={oldPass}
        onChange={(e) => setOldPass(e.target.value)}
        className="w-full border p-2 rounded text-sm"
      />

      <input
        type="password"
        placeholder="Password baru"
        value={newPass}
        onChange={(e) => setNewPass(e.target.value)}
        className="w-full border p-2 rounded text-sm"
      />

      <button
        onClick={handleChange}
        disabled={loading}
        className="bg-green-600 text-white px-3 py-2 rounded text-sm"
      >
        {loading ? "Loading..." : "Ubah Password"}
      </button>

    </div>
  )
}