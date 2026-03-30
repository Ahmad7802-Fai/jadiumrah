import { useAuthStore } from "@/modules/auth/store/authStore"

export default function SettingsSection() {
  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-2">

      <div className="text-sm font-semibold">
        Pengaturan
      </div>

      <button className="text-sm">
        ⚙️ Preferensi
      </button>

    </div>
  )
}