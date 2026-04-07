"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { authService } from "../services/authService"

export default function RegisterForm() {
  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (form.password !== form.password_confirmation) {
      setError("Password tidak sama")
      setLoading(false)
      return
    }

    try {
      await authService.register(form)
      router.push("/register/success")
    } catch (err: any) {
      const res = err?.response?.data
      if (res?.errors) {
        const firstError = Object.values(res.errors)[0] as any
        setError(firstError?.message || "Validasi gagal")
      } else {
        setError(res?.message || "Register gagal")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-sm space-y-4">

      {/* TITLE */}
      <div className="text-center">
        <h1 className="text-lg font-semibold">Daftar Akun</h1>
        <p className="text-xs text-gray-500">
          Buat akun untuk mulai perjalanan umroh
        </p>
      </div>

      {/* ERROR */}
      {error && (
        <div className="bg-red-50 text-red-500 text-xs text-center p-2 rounded-lg">
          {error}
        </div>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          type="text"
          placeholder="Nama lengkap"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
        />

        <input
          type="password"
          placeholder="Konfirmasi password"
          value={form.password_confirmation}
          onChange={(e) =>
            setForm({ ...form, password_confirmation: e.target.value })
          }
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
        />

        <button
          disabled={
            loading ||
            !form.name ||
            !form.email ||
            !form.password ||
            !form.password_confirmation
          }
          className="w-full bg-green-600 text-white py-2 rounded-lg text-sm disabled:opacity-50"
        >
          {loading ? "Memproses..." : "Daftar"}
        </button>

      </form>

      {/* LOGIN LINK */}
      <div className="text-center text-xs text-gray-500">
        Sudah punya akun?{" "}
        <Link href="/login" className="text-green-600 font-medium">
          Login
        </Link>
      </div>

    </div>
  )
}