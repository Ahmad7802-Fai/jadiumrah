"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"

import { login } from "../services/authService"
import { useAuthStore } from "../store/authStore"

export default function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const redirectTo = searchParams.get("redirect") || "/"

  const { setAuth } = useAuthStore()

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)
      setErrorMsg("")

      const res = await login(form.email, form.password)

      setAuth(res.user, res.token)

      // 🔥 redirect dinamis
      router.replace(redirectTo)

    } catch (error: any) {
      const msg =
        error.response?.data?.message ||
        "Email / password salah ❌"

      setErrorMsg(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-3 bg-white p-4 rounded-2xl shadow-sm border"
      >
        {/* TITLE */}
        <div className="text-center">
          <h1 className="text-lg font-semibold">Masuk</h1>
          <p className="text-xs text-gray-500">
            Lanjutkan ibadahmu ✨
          </p>
        </div>

        {/* ERROR */}
        {errorMsg && (
          <div className="bg-red-100 text-red-600 text-xs p-2 rounded-lg text-center">
            {errorMsg}
          </div>
        )}

        {/* EMAIL */}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          autoFocus
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* PASSWORD */}
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={
            loading || !form.email || !form.password
          }
          className="w-full bg-green-600 text-white rounded-lg py-2 text-sm font-medium disabled:opacity-50"
        >
          {loading ? "Loading..." : "Login"}
        </button>

        {/* FOOTER */}
        <div className="text-center text-xs text-gray-500 pt-2">
          Belum punya akun?{" "}
          <Link
            href="/register"
            className="text-green-600 font-medium"
          >
            Daftar
          </Link>
        </div>
      </form>
    </div>
  )
}