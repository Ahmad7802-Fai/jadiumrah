"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { authService } from "../services/authService"

export default function VerifyEmail() {
  const params = useSearchParams()
  const router = useRouter()

  const email = params.get("email")
  const token = params.get("token")

  const [status, setStatus] = useState<
    "loading" | "success" | "error"
  >("loading")

  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    if (!email || !token) {
      setStatus("error")
      return
    }

    const verify = async () => {
      try {
        const res = await authService.verifyEmail({
          email,
          token,
        })

        // 🔥 SIMPAN TOKEN (SAFE)
        if (typeof window !== "undefined" && res.token) {
          localStorage.setItem("token", res.token)
        }

        setStatus("success")

        setTimeout(() => {
          router.push("/dashboard")
        }, 1500)

      } catch (err: any) {
        console.error(err)

        setErrorMessage(
          err?.response?.data?.message ||
          "Link tidak valid / expired"
        )

        setStatus("error")
      }
    }

    verify()
  }, [email, token, router])

  return (
    <div className="min-h-screen flex items-center justify-center">

      {status === "loading" && (
        <div className="text-center">
          🔄 Memverifikasi email...
        </div>
      )}

      {status === "success" && (
        <div className="text-green-600 text-center">
          ✅ Email berhasil diverifikasi! Redirect...
        </div>
      )}

      {status === "error" && (
        <div className="text-red-500 text-center">
          ❌ {errorMessage}
        </div>
      )}

    </div>
  )
}