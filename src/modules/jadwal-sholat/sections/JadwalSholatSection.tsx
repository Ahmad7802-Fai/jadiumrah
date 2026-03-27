"use client"

import { useEffect, useState } from "react"
import { usePrayerTimes } from "../hooks/usePrayerTimes"
import QiblatCompass from "../components/QiblatCompass"
import LocationSelectorPro from "../components/LocationSelectorPro"
import PrayerWeekSection from "../components/PrayerWeekSection"
import PrayerCard from "../components/PrayerCard"

import {
  getCurrentPrayer,
  getNextPrayer,
  getCountdown,
} from "../utils/prayer"

// 🔥 mapping label indo
const labelMap: Record<string, string> = {
  fajr: "Subuh",
  dhuhr: "Dzuhur",
  asr: "Ashar",
  maghrib: "Maghrib",
  isha: "Isya",
}

export default function JadwalSholatSection() {
  const {
    data,
    week,
    qiblat,
    loading,
    location,
    changeLocation,
  } = usePrayerTimes()

  const [now, setNow] = useState(Date.now())
  const [scrolled, setScrolled] = useState(false)

  // 🔊 NOTIF STATE
  const [notif, setNotif] = useState<Record<string, boolean>>({
    Fajr: false,
    Dhuhr: false,
    Asr: false,
    Maghrib: false,
    Isha: false,
  })

  function toggleNotif(key: string) {
    setNotif((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  // ================= REALTIME =================
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // ================= SCROLL =================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (loading) return <div className="p-4">Loading...</div>
  if (!data) return null

  const current = getCurrentPrayer(data.timings)
  const next = getNextPrayer(data.timings)
  const countdown = getCountdown(next.time, now)

  const nowTime = new Date(now).toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div className="px-3 pb-6 space-y-3">

      {/* ================= STICKY HEADER ================= */}
      <div
        className={`
          sticky z-20
          top-12 md:top-14
          pb-2
          transition-all duration-300
          ${
            scrolled
              ? "bg-[#f5f7f4]/95 backdrop-blur shadow-sm"
              : "bg-transparent"
          }
        `}
      >
        {/* CARD */}
        <div
          className="
            rounded-xl
            bg-gradient-to-r from-green-600 to-green-500
            text-white
            p-3
            shadow-[0_8px_24px_rgba(0,0,0,0.12)]
          "
        >
          <div className="flex items-center justify-between">
            <p className="text-[10px] opacity-80 truncate">
              {location.label}
            </p>

            <span className="text-[10px] font-semibold">
              {nowTime}
            </span>
          </div>

          <h2 className="text-sm font-bold">
            Menuju {labelMap[next.name] || next.name}
          </h2>

          <p className="text-xs font-semibold tracking-wide">
            ⏳ {countdown}
          </p>
        </div>

        {/* LOCATION */}
        <div className="mt-2">
          <LocationSelectorPro onChange={changeLocation} />
        </div>
      </div>

      {/* ================= QIBLAT ================= */}
      <QiblatCompass direction={qiblat} />

      {/* ================= TODAY (PAKAI PrayerCard) ================= */}
      <div className="space-y-2">
        {Object.entries(data.timings as Record<string, string>).map(([key, val]) => {
          const isCurrent = key === current
          const isNext = key === next.name

          return (
            <PrayerCard
              key={key}
              label={labelMap[key] || key}
              time={val}
              isCurrent={isCurrent}
              isNext={isNext}
              notif={notif[key]}
              onToggleNotif={() => toggleNotif(key)}
            />
          )
        })}
      </div>

      {/* ================= WEEK ================= */}
      <div className="pt-2">
        <PrayerWeekSection data={week} />
      </div>

    </div>
  )
}