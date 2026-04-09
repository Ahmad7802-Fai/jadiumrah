"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { authService } from "../services/authService"

type Status = "loading" | "success" | "error"

export default function VerifyEmail() {
  const params = useSearchParams()
  const router = useRouter()

  const email = params.get("email")
  const token = params.get("token")

  const [status, setStatus] = useState<Status>("loading")
  const [errorMessage, setErrorMessage] = useState("")
  const [resendLoading, setResendLoading] = useState(false)
  const [resendSuccess, setResendSuccess] = useState(false)

  useEffect(() => {
    if (!email || !token) {
      setErrorMessage("Link tidak valid")
      setStatus("error")
      return
    }

    const verify = async () => {
      try {
        const res = await authService.verifyEmail({
          email,
          token,
        })

        // ✅ AUTO LOGIN (kalau backend kirim token)
        if (res?.token && typeof window !== "undefined") {
          localStorage.setItem("token", res.token)
        }

        setStatus("success")

        // 🔥 redirect lebih smooth
        setTimeout(() => {
          router.push(res?.token ? "/dashboard" : "/login")
        }, 1500)

      } catch (err: any) {
        const msg =
          err?.response?.data?.message ||
          "Link sudah tidak valid atau sudah digunakan"

        setErrorMessage(msg)
        setStatus("error")
      }
    }

    verify()
  }, [email, token, router])

  // ===============================
  // 🔥 RESEND
  // ===============================
  const handleResend = async () => {
    if (!email) return

    setResendLoading(true)
    setResendSuccess(false)

    try {
      await authService.resendVerification(email)
      setResendSuccess(true)
    } catch (err: any) {
      setErrorMessage(
        err?.response?.data?.message ||
        "Gagal kirim ulang email"
      )
    } finally {
      setResendLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="text-center max-w-sm w-full">

        {/* ================= LOADING ================= */}
        {status === "loading" && (
          <>
            <p className="text-gray-600 text-sm">
              🔄 Memverifikasi email...
            </p>
          </>
        )}

        {/* ================= SUCCESS ================= */}
        {status === "success" && (
          <>
            <p className="text-green-600 font-medium">
              ✅ Email berhasil diverifikasi!
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Mengalihkan ke dashboard...
            </p>
          </>
        )}

        {/* ================= ERROR ================= */}
        {status === "error" && (
          <>
            <p className="text-red-500 font-medium">
              ❌ {errorMessage}
            </p>

            {/* 🔥 RESEND ACTION */}
            <div className="mt-3 text-sm">

              {!resendSuccess ? (
                <button
                  onClick={handleResend}
                  disabled={resendLoading}
                  className="text-green-600 underline"
                >
                  {resendLoading
                    ? "Mengirim ulang..."
                    : "Kirim ulang email verifikasi"}
                </button>
              ) : (
                <p className="text-green-600">
                  ✅ Email baru sudah dikirim
                </p>
              )}

            </div>

            {/* 🔥 BACK TO LOGIN */}
            <div className="mt-4">
              <button
                onClick={() => router.push("/login")}
                className="text-xs text-gray-500 underline"
              >
                Kembali ke login
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  )
}