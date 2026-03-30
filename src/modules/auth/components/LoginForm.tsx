"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { authService } from "../services/authService"
import { useAuthStore } from "../store/authStore"

export default function LoginForm() {
  const router = useRouter()
  const { setUser } = useAuthStore()

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await authService.login(form)

      if (!res?.token) throw new Error("Token tidak ada")

      localStorage.setItem("token", res.token)

      const me = await authService.me()
      setUser(me.data)

      router.push("/") // tetap di homepage

    } catch (err: any) {
      setError(err?.response?.data?.message || "Login gagal")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">

      {/* ERROR */}
      {error && (
        <div className="text-red-500 text-sm text-center">
          {error}
        </div>
      )}

      {/* EMAIL */}
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* PASSWORD */}
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* FORGOT */}
      <div className="text-right text-xs">
        <Link href="/forgot-password" className="text-green-600 hover:underline">
          Lupa password?
        </Link>
      </div>

      {/* BUTTON */}
      <button
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm transition"
      >
        {loading ? "Memproses..." : "Login"}
      </button>

      {/* REGISTER */}
      <div className="text-center text-xs text-gray-500">
        Belum punya akun?{" "}
        <Link href="/register" className="text-green-600 font-medium hover:underline">
          Daftar
        </Link>
      </div>

    </form>
  )
}