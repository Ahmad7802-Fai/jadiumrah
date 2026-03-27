"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuthStore } from "@/modules/auth/store/authStore"

const PUBLIC_ROUTES = [
  "/",
  "/paket",
  "/login",
  "/register",
  "/tabungan-umrah",
  "/cicilan-umrah",
  "/jadwal-sholat",
  "/alquran",
]

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  const { user, isHydrated } = useAuthStore()

  useEffect(() => {
    if (!isHydrated) return

    const isPublic = PUBLIC_ROUTES.some((route) => {
      if (route === "/") return pathname === "/"
      return pathname === route || pathname.startsWith(route + "/")
    })

    // 🔒 belum login → redirect kalau private
    if (!user && !isPublic) {
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`)
      return
    }

    // 🔒 sudah login → blok login/register
    if (user && (pathname === "/login" || pathname === "/register")) {
      router.replace("/")
      return
    }

  }, [user, pathname, isHydrated, router])

  if (!isHydrated) return null

  return <>{children}</>
}