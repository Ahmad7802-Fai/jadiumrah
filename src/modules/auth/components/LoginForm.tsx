"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { login } from "../services/authService"
import { useAuthStore } from "../store/authStore"

export default function LoginForm() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const { setAuth } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)

      const res = await login(email, password)

      setAuth(res.user, res.token)

      // 🔥 redirect (ganti alert)
      router.push("/")

    } catch (error) {
      alert("Login gagal ❌")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">

      {/* EMAIL */}
      <input
        className="w-full border rounded-lg px-3 py-2 text-sm"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* PASSWORD */}
      <input
        className="w-full border rounded-lg px-3 py-2 text-sm"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white rounded-lg py-2 text-sm disabled:opacity-50"
      >
        {loading ? "Loading..." : "Login"}
      </button>

      {/* REGISTER LINK */}
      <div className="text-center text-sm pt-2">
        Belum punya akun?{" "}
        <Link href="/register" className="text-green-600 font-medium">
          Daftar sekarang
        </Link>
      </div>

    </form>
  )
}