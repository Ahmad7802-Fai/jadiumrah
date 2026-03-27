"use client"

import { useState } from "react"
import { reverseGeocode } from "../utils/geocode"

export default function LocationSelectorPro({ onChange }: any) {
  const [loading, setLoading] = useState(false)

  const handleGPS = () => {
    if (!navigator.geolocation) {
      alert("Browser tidak support GPS")
      return
    }

    setLoading(true)

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const lat = pos.coords.latitude
          const lng = pos.coords.longitude

          // 🔥 ambil nama kota otomatis
          const name = await reverseGeocode(lat, lng)

          const loc = {
            label: name,
            lat,
            lng,
          }

          // 🔥 kirim ke parent (trigger update jadwal)
          onChange(loc)

          // 🔥 simpan biar persist
          localStorage.setItem("lokasi", JSON.stringify(loc))

        } catch (err) {
          alert("Gagal membaca lokasi")
        } finally {
          setLoading(false)
        }
      },
      (err) => {
        setLoading(false)

        if (err.code === 1) {
          alert("Izin lokasi ditolak")
        } else if (err.code === 2) {
          alert("Lokasi tidak tersedia")
        } else {
          alert("Timeout ambil lokasi")
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    )
  }

  return (
    <button
      onClick={handleGPS}
      className="
        w-full h-11

        rounded-xl
        bg-green-600 text-white

        text-sm font-semibold

        shadow-sm
        active:scale-95
        transition
      "
    >
      {loading ? "Mendeteksi lokasi..." : "📍 Gunakan Lokasi Saya"}
    </button>
  )
}