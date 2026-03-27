"use client"

import { useEffect } from "react"
import { useAuthStore } from "@/modules/auth/store/authStore"

import Navbar from "./Navbar"
import BottomNav from "./BottomNav"
import AuthGuard from "@/components/auth/AuthGuard"

export default function ClientLayout({
  children,
  cta,
}: {
  children: React.ReactNode
  cta?: React.ReactNode
}) {
  const hydrate = useAuthStore((s) => s.hydrate)

  useEffect(() => {
    hydrate()
  }, [])

  return (
    <AuthGuard>
      <div className="min-h-screen bg-[#f5f7f4] isolate overflow-x-hidden">

        {/* ================= NAVBAR ================= */}
        <Navbar />

        {/* ================= MAIN ================= */}
        <main
          className="
            pt-[calc(48px+env(safe-area-inset-top))]   /* 🔥 FINAL FIX */
            md:pt-[56px]

            pb-[110px] md:pb-[130px]

            min-h-screen
          "
        >
          {children}
        </main>

        {/* ================= CTA ================= */}
        {cta}

        {/* ================= BOTTOM NAV ================= */}
        <BottomNav />

      </div>
    </AuthGuard>
  )
}