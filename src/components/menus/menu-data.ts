import {
  FaFire,
  FaCreditCard,
  FaHotel,
  FaBus,
  FaCompass,
  FaWallet,
  FaUsers,
  FaPlane,
} from "react-icons/fa"

import { FaPassport } from "react-icons/fa"
import { FaBookQuran, FaKaaba } from "react-icons/fa6"
import { MdEvent, MdMenuBook } from "react-icons/md"
import type { IconType } from "react-icons"

export type ServiceMenuItem = {
  title: string
  icon: IconType
  iconColor: string
  bg: string
  href: string
}

export const baseMenus: ServiceMenuItem[] = [
  {
    title: "Promo",
    icon: FaFire,
    iconColor: "text-red-500",
    bg: "bg-red-50",
    href: "/promo",
  },
  {
    title: "Paket Umrah",
    icon: FaKaaba,
    iconColor: "text-green-600",
    bg: "bg-green-50",
    href: "/paket",
  },
  {
    title: "Jadwal",
    icon: MdEvent,
    iconColor: "text-blue-500",
    bg: "bg-blue-50",
    href: "/jadwal",
  },
  {
    title: "Tabungan Umrah",
    icon: FaWallet,
    iconColor: "text-emerald-600",
    bg: "bg-emerald-50",
    href: "/tabungan-umrah",
  },
  {
    title: "Cicilan Umrah",
    icon: FaCreditCard,
    iconColor: "text-purple-500",
    bg: "bg-purple-50",
    href: "/cicilan-umrah",
  },
  {
    title: "Panduan",
    icon: MdMenuBook,
    iconColor: "text-indigo-500",
    bg: "bg-indigo-50",
    href: "/panduan-umrah",
  },
  {
    title: "Jadwal Sholat",
    icon: FaKaaba,
    iconColor: "text-teal-500",
    bg: "bg-teal-50",
    href: "/jadwal-sholat",
  },
  // {
  //   title: "Qiblat",
  //   icon: FaCompass,
  //   iconColor: "text-orange-500",
  //   bg: "bg-orange-50",
  //   href: "/qiblat",
  // },
  {
    title: "Al-Quran",
    icon: FaBookQuran,
    iconColor: "text-green-700",
    bg: "bg-green-100",
    href: "/alquran",
  },
  {
    title: "Tiket",
    icon: FaPlane,
    iconColor: "text-rose-500",
    bg: "bg-rose-50",
    href: "/tiket",
  },
  {
    title: "Visa",
    icon: FaPassport,
    iconColor: "text-cyan-600",
    bg: "bg-cyan-50",
    href: "/visa",
  },
  {
    title: "Hotel",
    icon: FaHotel,
    iconColor: "text-sky-500",
    bg: "bg-sky-50",
    href: "/hotel",
  },
  {
    title: "Transport",
    icon: FaBus,
    iconColor: "text-yellow-500",
    bg: "bg-yellow-50",
    href: "/transport",
  },
]