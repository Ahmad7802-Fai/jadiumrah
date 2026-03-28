"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { register } from "../services/authService"
import { useAuthStore } from "../store/authStore"

export default function RegisterForm() {
  const router = useRouter()
  const { setAuth } = useAuthStore()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  })

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 🔥 VALIDASI CEPAT
    if (form.password !== form.confirm) {
      setErrorMsg("Password tidak sama ❌")
      return
    }

    try {
      setLoading(true)
      setErrorMsg("")

      const res = await register(
        form.name,
        form.email,
        form.password,
        form.confirm // 🔥 TAMBAHKAN INI
      )

      setAuth(res.user, res.token)

      // 🔥 redirect sukses
      router.replace("/register/success")

    } catch (error: any) {
      const msg =
        error.response?.data?.message ||
        "Register gagal ❌"

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
          <h1 className="text-lg font-semibold">Daftar</h1>
          <p className="text-xs text-gray-500">
            Mulai perjalanan umrahmu ✨
          </p>
        </div>

        {/* ERROR */}
        {errorMsg && (
          <div className="bg-red-100 text-red-600 text-xs p-2 rounded-lg text-center">
            {errorMsg}
          </div>
        )}

        {/* NAME */}
        <input
          name="name"
          placeholder="Nama lengkap"
          value={form.name}
          onChange={handleChange}
          autoFocus
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* EMAIL */}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
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

        {/* CONFIRM */}
        <input
          name="confirm"
          type="password"
          placeholder="Konfirmasi Password"
          value={form.confirm}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={
            loading ||
            !form.name ||
            !form.email ||
            !form.password ||
            !form.confirm
          }
          className="w-full bg-green-600 text-white rounded-lg py-2 text-sm font-medium disabled:opacity-50"
        >
          {loading ? "Loading..." : "Daftar"}
        </button>

        {/* FOOTER */}
        <div className="text-center text-xs text-gray-500 pt-2">
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="text-green-600 font-medium"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  )
}