"use client"

import { Navbar, BottomNav } from "@/components"
import { usePathname } from "next/navigation"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <div className="min-h-screen bg-bg">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main
        className={`
          min-h-screen

          ${isHome ? "" : "pt-[var(--nav-h)]"}

          pb-[90px] md:pb-0
        `}
      >
        {children}
      </main>

      {/* BOTTOM NAV */}
      <BottomNav />

    </div>
  )
}