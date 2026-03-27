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

    // 🚀 SKIP INTERNAL NEXT (INI KUNCI 🔥)
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname.includes(".")
    ) {
      return
    }

    const isPublic = PUBLIC_ROUTES.some((route) =>
      pathname === route || pathname.startsWith(route + "/")
    )

    if (!user && !isPublic) {
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`)
    }

    if (user && (pathname === "/login" || pathname === "/register")) {
      router.replace("/")
    }

  }, [user, pathname, isHydrated])

  if (!isHydrated) return null

  return <>{children}</>
}