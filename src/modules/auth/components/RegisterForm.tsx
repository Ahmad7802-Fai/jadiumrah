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

    try {
      await authService.register(form)

      // ✅ langsung redirect ke success page
      router.push("/register/success")

    } catch (err: any) {
      setError(err?.response?.data?.message || "Register gagal")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7f4] px-4">

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
          <div className="text-red-500 text-xs text-center">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3">

          {/* NAME */}
          <input
            type="text"
            placeholder="Nama lengkap"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            placeholder="Konfirmasi password"
            value={form.password_confirmation}
            onChange={(e) =>
              setForm({
                ...form,
                password_confirmation: e.target.value,
              })
            }
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* BUTTON */}
          <button
            disabled={
              loading ||
              !form.name ||
              !form.email ||
              !form.password ||
              !form.password_confirmation
            }
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm transition disabled:opacity-50"
          >
            {loading ? "Memproses..." : "Daftar"}
          </button>

        </form>

        {/* LOGIN LINK */}
        <div className="text-center text-xs text-gray-500">
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="text-green-600 font-medium hover:underline"
          >
            Login
          </Link>
        </div>

      </div>

    </div>
  )
}