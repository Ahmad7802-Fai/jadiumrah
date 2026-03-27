"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuthStore } from "@/modules/auth/store/authStore"
import { getUserAvatar, getUserName } from "@/modules/auth/utils/authHelpers"

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  const user = useAuthStore((s) => s.user)

  const avatar = getUserAvatar(user)
  const name = getUserName(user)

  return (
    <div
      className={`
        fixed top-0 left-0 right-0
        z-[100]

        transition-all duration-300

        ${
          isHome
            ? "bg-black/20 backdrop-blur-md text-white"
            : "bg-white text-black border-b shadow-sm"
        }
      `}
    >
      <div
        className="
          max-w-7xl mx-auto

          px-3 md:px-4

          h-[calc(48px+env(safe-area-inset-top))] 
          md:h-14

          flex items-center justify-between
        "
      >

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/logo.png"
            alt="Umrahcore"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* RIGHT */}
        {!user ? (
          <Link
            href="/login"
            className="
              text-[10px] md:text-sm

              bg-green-600 hover:bg-green-700
              text-white

              px-2.5 py-1 md:px-3 md:py-1.5
              rounded-md md:rounded-lg

              shadow-sm
              active:scale-95
              transition
            "
          >
            Login
          </Link>
        ) : (
          <div className="flex items-center gap-2">

            {/* NAME */}
            <span className="hidden md:block text-sm font-medium">
              {name}
            </span>

            {/* AVATAR */}
            <div
              className="
                w-8 h-8
                rounded-full
                overflow-hidden

                bg-gray-200
                border border-gray-200

                flex items-center justify-center
              "
            >
              {avatar ? (
                <Image
                  src={avatar}
                  alt="avatar"
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-xs font-semibold text-gray-600">
                  {name?.charAt(0)}
                </span>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  )
}