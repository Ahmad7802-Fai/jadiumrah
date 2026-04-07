"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { authService } from "../services/authService"
import { useAuthStore } from "../store/authStore"

export default function LoginForm() {
  const router = useRouter()
  const { setUser } = useAuthStore()

  const [form, setForm] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await authService.login(form)
      if (!res?.token) throw new Error()

      localStorage.setItem("token", res.token)

      const me = await authService.me()
      setUser(me.data)

      router.push("/")
    } catch (err: any) {
      setError(err?.response?.data?.message || "Login gagal")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">

      {error && (
        <div className="text-red-500 text-xs text-center">
          {error}
        </div>
      )}

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
      />

      <div className="text-right text-xs">
        <Link href="/forgot-password" className="text-green-600">
          Lupa password?
        </Link>
      </div>

      <button
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded-lg text-sm"
      >
        {loading ? "Memproses..." : "Login"}
      </button>

      <div className="text-center text-xs text-gray-500">
        Belum punya akun?{" "}
        <Link href="/register" className="text-green-600 font-medium">
          Daftar
        </Link>
      </div>

    </form>
  )
}