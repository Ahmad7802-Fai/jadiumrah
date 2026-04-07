"use client"

import Navbar from "./Navbar"
import BottomNav from "./BottomNav"
import { usePathname } from "next/navigation"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <div className="min-h-screen bg-[#f5f7f4]">

      <Navbar />

      {/* 🔥 CONDITIONAL OFFSET */}
      <main className={`${isHome ? "" : "pt-[var(--nav-h)]"} pb-[100px]`}>
        {children}
      </main>

      <BottomNav />

    </div>
  )
}