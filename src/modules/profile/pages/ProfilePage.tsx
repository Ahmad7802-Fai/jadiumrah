"use client"

import { useAuthStore } from "@/modules/auth/store/authStore"

import ProfileHeader from "../components/ProfileHeader"
import ProfileSection from "../components/ProfileSection"
import SecuritySection from "../components/SecuritySection"
import BookingSection from "../components/BookingSection"
import AgentSection from "../components/AgentSection"
import SettingsSection from "../components/SettingsSection"

export default function ProfilePage() {
  const user = useAuthStore((s) => s.user)

  // ❌ NOT LOGIN
  if (!user) {
    return (
      <div className="p-4 text-center text-sm text-gray-500">
        Silakan login
      </div>
    )
  }

  const isAgent = user.is_agent

  return (
    <div className="bg-gray-50 min-h-screen pb-24 space-y-3">

      <ProfileHeader user={user} />

      <div className="max-w-4xl mx-auto px-3 space-y-3">

        <ProfileSection user={user} />
        <SecuritySection />
        <BookingSection />

        {isAgent && <AgentSection user={user} />}

        <SettingsSection />

      </div>
    </div>
  )
}