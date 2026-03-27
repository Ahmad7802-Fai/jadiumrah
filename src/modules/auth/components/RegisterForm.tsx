"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { register } from "../services/authService"
import { useAuthStore } from "../store/authStore"

export default function RegisterForm() {
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const { setAuth } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)
      setErrorMsg("")

      const res = await register(name, email, password)

      setAuth(res.user, res.token)

      // 🔥 redirect ke halaman sukses
      router.push("/register/success")

    } catch (error: any) {
      const msg =
        error.response?.data?.message ||
        "Register gagal ❌"

      setErrorMsg(msg)
      console.error(error.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">

      {/* ERROR */}
      {errorMsg && (
        <div className="bg-red-100 text-red-600 text-sm p-2 rounded-lg">
          {errorMsg}
        </div>
      )}

      <input
        className="w-full border rounded-lg px-3 py-2 text-sm"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full border rounded-lg px-3 py-2 text-sm"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full border rounded-lg px-3 py-2 text-sm"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white rounded-lg py-2 text-sm disabled:opacity-50"
      >
        {loading ? "Loading..." : "Register"}
      </button>

      <div className="text-center text-sm pt-2">
        Sudah punya akun?{" "}
        <Link href="/login" className="text-green-600 font-medium">
          Login sekarang
        </Link>
      </div>

    </form>
  )
}