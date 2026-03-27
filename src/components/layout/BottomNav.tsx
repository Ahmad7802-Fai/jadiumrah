"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaHome, FaBox, FaUser } from "react-icons/fa"
import { useAuthStore } from "@/modules/auth/store/authStore"

export default function BottomNav() {
  const pathname = usePathname()
  const user = useAuthStore((s) => s.user)

  const menus = [
    { label: "Home", icon: FaHome, href: "/" },
    { label: "Paket", icon: FaBox, href: "/paket" },
  ]

  const profileMenu = user
    ? { label: "Profile", icon: FaUser, href: "/profile" }
    : { label: "Login", icon: FaUser, href: "/login" }

  const finalMenus = [...menus, profileMenu]

  return (
    <div
      className="
        md:hidden
        fixed inset-x-0 bottom-0
        z-[9999]

        flex justify-center
        pointer-events-none
      "
    >
      <div
        className="
          w-full max-w-md
          px-3

          pb-[calc(env(safe-area-inset-bottom)+2px)]

          pointer-events-auto
        "
      >
        <div
          className="
            flex justify-between items-center

            h-[56px]

            bg-white/95 backdrop-blur

            rounded-2xl
            border border-gray-100

            shadow-[0_8px_25px_rgba(0,0,0,0.12)]

            px-4
          "
        >
          {finalMenus.map((menu) => {
            const Icon = menu.icon
            const active = pathname === menu.href

            return (
              <Link
                key={menu.href}
                href={menu.href}
                className="
                  flex flex-col items-center justify-center
                  flex-1

                  text-[10px]

                  active:scale-95
                  transition
                "
              >
                {/* ICON */}
                <div
                  className={`
                    flex items-center justify-center
                    w-7 h-7 rounded-lg

                    transition-all duration-200

                    ${
                      active
                        ? "bg-green-100 text-green-600"
                        : "text-gray-400"
                    }
                  `}
                >
                  <Icon className="text-[14px]" />
                </div>

                {/* LABEL */}
                <span
                  className={`
                    mt-[2px]
                    ${
                      active
                        ? "text-green-600 font-medium"
                        : "text-gray-400"
                    }
                  `}
                >
                  {menu.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}