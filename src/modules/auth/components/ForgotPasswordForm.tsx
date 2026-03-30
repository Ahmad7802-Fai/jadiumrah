"use client"

import { useState } from "react"
import Link from "next/link"
import { authService } from "@/modules/auth/services/authService"

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const res = await authService.forgotPassword(email)

      setSuccess(res?.message || "Link reset dikirim")

    } catch (err: any) {
      setError(err?.response?.data?.message || "Gagal kirim email")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">

      {/* SUCCESS */}
      {success && (
        <div className="text-green-600 text-sm text-center">
          {success}
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div className="text-red-500 text-sm text-center">
          {error}
        </div>
      )}

      {/* EMAIL */}
      <input
        type="email"
        placeholder="Masukkan email kamu"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* BUTTON */}
      <button
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm transition"
      >
        {loading ? "Mengirim..." : "Kirim Link Reset"}
      </button>

      {/* BACK TO LOGIN */}
      <div className="text-center text-xs text-gray-500">
        Ingat password?{" "}
        <Link href="/login" className="text-green-600 font-medium hover:underline">
          Login
        </Link>
      </div>

    </form>
  )
}