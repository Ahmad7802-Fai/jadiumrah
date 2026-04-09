export type UserRole = "jamaah" | "agent"

export const roleMenus = {
  jamaah: [
    { label: "Dashboard", href: "/profile" },
    { label: "Tabungan Umrah", href: "/tabungan-umrah" },
    { label: "Riwayat", href: "/riwayat" },
    { label: "Profile", href: "/profile/edit" },
  ],

  agent: [
    { label: "Dashboard", href: "/agent" },
    { label: "Jamaah", href: "/agent/jamaah" },
    { label: "Komisi", href: "/agent/komisi" },
    { label: "Profile", href: "/agent/profile" },
  ],
}