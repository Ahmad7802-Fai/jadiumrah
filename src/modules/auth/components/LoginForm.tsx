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

  const [showResend, setShowResend] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)
  const [resendSuccess, setResendSuccess] = useState(false)

  // ===============================
  // 🔐 LOGIN
  // ===============================
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    setLoading(true)
    setError("")
    setShowResend(false)
    setResendSuccess(false)

    try {
      const res = await authService.login(form)

      if (!res?.token) throw new Error()

      localStorage.setItem("token", res.token)

      const me = await authService.me()
      setUser(me.data)

      router.push("/")
    } catch (err: any) {
      const message =
        err?.response?.data?.message || "Login gagal"

      setError(message)

      // 🔥 email belum verify
      if (err?.response?.status === 403) {
        setShowResend(true)
      }
    } finally {
      setLoading(false)
    }
  }

  // ===============================
  // 📩 RESEND EMAIL VERIFICATION
  // ===============================
  const handleResend = async () => {
    if (!form.email) return

    setResendLoading(true)
    setResendSuccess(false)
    setError("")

    try {
      await authService.resendVerification(form.email)
      setResendSuccess(true)

    } catch (err: any) {
      const msg =
        err?.response?.data?.errors?.email?.message ||
        err?.response?.data?.message ||
        "Gagal kirim ulang email"

      setError(msg)
    } finally {
      setResendLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">

      {/* ERROR */}
      {error && (
        <div className="text-red-500 text-xs text-center">
          {error}
        </div>
      )}

      {/* 🔥 RESEND SECTION */}
      {showResend && (
        <div className="text-center text-xs">

          {!resendSuccess ? (
            <>
              <p className="text-gray-500 mb-1">
                Email belum diverifikasi
              </p>

              <button
                type="button"
                onClick={handleResend}
                disabled={resendLoading || !form.email}
                className="text-green-600 underline"
              >
                {resendLoading
                  ? "Mengirim ulang..."
                  : "Kirim ulang email verifikasi"}
              </button>
            </>
          ) : (
            <p className="text-green-600">
              ✅ Link verifikasi sudah dikirim
            </p>
          )}

        </div>
      )}

      {/* EMAIL */}
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => {
          setForm({ ...form, email: e.target.value })
          setResendSuccess(false) // 🔥 reset kalau ganti email
        }}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
      />

      {/* PASSWORD */}
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
        className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
      />

      {/* FORGOT PASSWORD */}
      <div className="text-right text-xs">
        <Link href="/forgot-password" className="text-green-600">
          Lupa password?
        </Link>
      </div>

      {/* LOGIN BUTTON */}
      <button
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded-lg text-sm"
      >
        {loading ? "Memproses..." : "Login"}
      </button>

      {/* REGISTER */}
      <div className="text-center text-xs text-gray-500">
        Belum punya akun?{" "}
        <Link href="/register" className="text-green-600 font-medium">
          Daftar
        </Link>
      </div>

    </form>
  )
}