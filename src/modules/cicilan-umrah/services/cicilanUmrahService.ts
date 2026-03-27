import { getPakets } from "@/modules/paket/services/paketService"
import type {
  CicilanFaq,
  CicilanFeature,
  CicilanPackage,
} from "../types"

import {
  Wallet,
  Calendar,
  Shield,
  Users,
} from "lucide-react"

// ===============================
// 📦 PACKAGES
// ===============================
export async function getCicilanPackages(): Promise<CicilanPackage[]> {
  const pakets = await getPakets()

  return (pakets ?? [])
    .map((item: any) => ({
      id: Number(item.id),
      name: item.name ?? "Paket Umrah",
      slug: item.slug,
      price: Number(
        item.price ??
          item.price_start_from ??
          item.start_from ??
          item.base_price ??
          0
      ),
    }))
    .filter((item) => item.price > 0)
    .sort((a, b) => a.price - b.price)
}

// ===============================
// 🎯 LANDING DATA
// ===============================
export async function getCicilanLandingData() {
  const packages = await getCicilanPackages()

  // ✅ FIX ICON → COMPONENT
  const features: CicilanFeature[] = [
    {
      title: "Tanpa DP Berat",
      desc: "Mulai lebih ringan.",
      icon: Wallet,
    },
    {
      title: "Tenor Fleksibel",
      desc: "Pilih sesuai kemampuan.",
      icon: Calendar,
    },
    {
      title: "Aman & Jelas",
      desc: "Skema resmi dan rapi.",
      icon: Shield,
    },
    {
      title: "Didampingi",
      desc: "Dibantu sampai berangkat.",
      icon: Users,
    },
  ]

  const faqs: CicilanFaq[] = [
    {
      question: "Apakah semua paket bisa dicicil?",
      answer:
        "Paket yang tampil di simulasi adalah paket yang bisa dihitung estimasi cicilannya.",
    },
    {
      question: "Tenor tersedia berapa lama?",
      answer:
        "Tenor tersedia mulai 6, 12, 18, 24, sampai 36 bulan.",
    },
    {
      question: "Apakah nominal simulasi ini final?",
      answer:
        "Belum. Ini estimasi awal agar jamaah punya gambaran cicilan sebelum konsultasi.",
    },
    {
      question: "Bagaimana cara lanjut konsultasi?",
      answer:
        "Klik tombol WhatsApp, lalu tim akan bantu hitungkan skema terbaik sesuai paket pilihan.",
    },
  ]

  const tenors = [6, 12, 18, 24, 36]

  return {
    packages,
    features,
    faqs,
    tenors,
  }
}