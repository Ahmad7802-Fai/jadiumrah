"use client"

import { useEffect, useState } from "react"
import {
  getPrayerTimes,
  getPrayerTimes7Days,
} from "../services/jadwalSholatService"
import { getQiblatDirection } from "../utils/qiblat"
import { reverseGeocode } from "../utils/geocode"

const DEFAULT = {
  label: "Jakarta",
  lat: -6.2088,
  lng: 106.8456,
}

export function usePrayerTimes() {
  const [data, setData] = useState<any>(null)
  const [week, setWeek] = useState<any[]>([]) // ✅ PINDAH KE DALAM
  const [qiblat, setQiblat] = useState<number | null>(null)
  const [location, setLocation] = useState(DEFAULT)
  const [loading, setLoading] = useState(true)

  // ================= LOAD =================
  async function load(lat: number, lng: number, label: string) {
    try {
      const res = await getPrayerTimes(lat, lng)
      const weekRes = await getPrayerTimes7Days(lat, lng)
      const arah = getQiblatDirection(lat, lng)

      setData({ ...res, location: label })
      setWeek(weekRes) // ✅ SET WEEK DI SINI
      setQiblat(arah)
    } catch (err) {
      console.error("Load jadwal gagal", err)
    }
  }

  // ================= INIT =================
  useEffect(() => {
    async function init() {
      const saved = localStorage.getItem("lokasi")

      // 🔥 PRIORITAS STORAGE
      if (saved) {
        const loc = JSON.parse(saved)

        setLocation(loc)
        await load(loc.lat, loc.lng, loc.label)

        setLoading(false)
        return
      }

      // 🔥 GPS AUTO
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const lat = pos.coords.latitude
            const lng = pos.coords.longitude

            const name = await reverseGeocode(lat, lng)

            const loc = { label: name, lat, lng }

            localStorage.setItem("lokasi", JSON.stringify(loc))

            setLocation(loc)
            await load(lat, lng, name)

            setLoading(false)
          },
          async () => {
            setLocation(DEFAULT)
            await load(DEFAULT.lat, DEFAULT.lng, DEFAULT.label)

            setLoading(false)
          }
        )
      } else {
        setLocation(DEFAULT)
        await load(DEFAULT.lat, DEFAULT.lng, DEFAULT.label)
        setLoading(false)
      }
    }

    init()
  }, [])

  // ================= CHANGE =================
  async function changeLocation(loc: any) {
    setLoading(true)

    localStorage.setItem("lokasi", JSON.stringify(loc))
    setLocation(loc)

    await load(loc.lat, loc.lng, loc.label)

    setLoading(false)
  }

  return {
    
    data,
    week, // ✅ RETURN WEEK
    qiblat,
    loading,
    location,
    changeLocation,
  }
}