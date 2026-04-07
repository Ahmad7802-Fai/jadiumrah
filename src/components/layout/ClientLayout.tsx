"use client"

import Navbar from "./Navbar"
import BottomNav from "./BottomNav"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f5f7f4]">
      <Navbar />

      <main className="pb-[100px]">
        {children}
      </main>

      <BottomNav />
    </div>
  )
}