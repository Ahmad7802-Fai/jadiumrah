"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { roleMenus, UserRole } from "./menu-role"

export default function Sidebar({
  role = "jamaah",
}: {
  role?: UserRole
}) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const menus = roleMenus[role]

  return (
    <aside
      className={`
        hidden md:flex flex-col
        h-screen sticky top-0

        border-r border-border
        bg-card

        transition-all duration-300

        ${collapsed ? "w-[72px]" : "w-[240px]"}
      `}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-3">

        {!collapsed && (
          <div className="font-semibold text-sm">
            {role === "agent" ? "Agent Panel" : "Akun Saya"}
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-xs px-2 py-1 rounded-md hover:bg-primary-soft"
        >
          {collapsed ? "→" : "←"}
        </button>

      </div>

      {/* MENU */}
      <div className="flex flex-col gap-1 px-2">

        {menus.map((item) => {
          const active = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-2

                px-3 py-2 rounded-md text-sm
                transition

                ${
                  active
                    ? "bg-primary text-white"
                    : "text-text-soft hover:bg-primary-soft"
                }
              `}
            >
              {/* ICON PLACEHOLDER */}
              <div className="w-5 h-5 flex items-center justify-center">
                •
              </div>

              {!collapsed && <span>{item.label}</span>}
            </Link>
          )
        })}

      </div>
    </aside>
  )
}