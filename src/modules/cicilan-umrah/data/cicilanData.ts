import {
  CalendarDays,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react"

import type {
  CicilanFaq,
  CicilanFeature,
  CicilanPackage,
} from "../types"

/* ================= FEATURES ================= */

export const cicilanFeatures: CicilanFeature[] = [
  {
    title: "Tanpa DP Berat",
    desc: "Pembayaran awal ringan, memudahkan calon jamaah mulai berproses.",
    icon: WalletCards,
  },
  {
    title: "Cicilan Fleksibel",
    desc: "Pilih tenor sesuai kemampuan, mulai 6–36 bulan.",
    icon: CalendarDays,
  },
  {
    title: "Aman & Transparan",
    desc: "Tidak ada biaya tersembunyi. Semua jelas dan resmi.",
    icon: ShieldCheck,
  },
  {
    title: "Pendampingan Penuh",
    desc: "Tim siap bantu dari konsultasi sampai keberangkatan.",
    icon: Users,
  },
]

/* ================= PACKAGES ================= */

export const cicilanPackages: CicilanPackage[] = [
  { id: 1, name: "Umrah Low Budget", price: 24900000 },
  { id: 2, name: "Alhamdulillah Jadi Umrah", price: 28900000 },
  { id: 3, name: "Mekkah Merindu", price: 32900000 },
]

/* ================= TENOR ================= */

export const cicilanTenors = [6, 12, 18, 24, 36]

/* ================= FAQ ================= */

export const cicilanFaqs: CicilanFaq[] = [
  {
    question: "Apakah bisa tanpa DP besar?",
    answer: "Bisa, skema pembayaran dibuat ringan agar proses mulai lebih mudah.",
  },
  {
    question: "Tenor tersedia berapa lama?",
    answer: "Mulai dari 6 hingga 36 bulan, tergantung program.",
  },
  {
    question: "Apakah biaya transparan?",
    answer: "Ya, semua biaya dijelaskan di awal tanpa tersembunyi.",
  },
  {
    question: "Bisa konsultasi dulu?",
    answer: "Bisa, tim akan bantu simulasi sesuai budget jamaah.",
  },
]