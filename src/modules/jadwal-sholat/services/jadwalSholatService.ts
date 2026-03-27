import axios from "axios"
import type { PrayerResponse } from "../types/types"

// ================= TODAY =================
export async function getPrayerTimes(
  lat: number,
  lng: number
): Promise<PrayerResponse> {
  const res = await axios.get(
    "https://api.aladhan.com/v1/timings",
    {
      params: {
        latitude: lat,
        longitude: lng,
        method: 2,
      },
    }
  )

  const data = res.data.data

  return {
    timings: {
      fajr: data.timings.Fajr,
      dhuhr: data.timings.Dhuhr,
      asr: data.timings.Asr,
      maghrib: data.timings.Maghrib,
      isha: data.timings.Isha,
    },
    date: data.date.readable,
    location: data.meta.timezone,
  }
}

// ================= 7 DAYS AHEAD =================
export async function getPrayerTimes7Days(lat: number, lng: number) {
  const now = new Date()
  const month = now.getMonth() + 1
  const year = now.getFullYear()
  const today = now.getDate()

  const parseDate = (str: string) => {
    const [day, month, year] = str.split("-")
    return new Date(`${year}-${month}-${day}`)
  }

  // ===== BULAN INI =====
  const res = await fetch(
    `https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lng}&method=2&month=${month}&year=${year}`,
    { cache: "no-store" } // 🔥 anti cache
  )
  const json = await res.json()

  // 🔥 START DARI BESOK
  let result = json.data.slice(today)

  // ===== HANDLE NEXT MONTH =====
  if (result.length < 7) {
    const nextMonth = month === 12 ? 1 : month + 1
    const nextYear = month === 12 ? year + 1 : year

    const res2 = await fetch(
      `https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lng}&method=2&month=${nextMonth}&year=${nextYear}`,
      { cache: "no-store" }
    )

    const json2 = await res2.json()

    const remaining = 7 - result.length

    result = [
      ...result,
      ...json2.data.slice(0, remaining),
    ]
  }

  // ===== SORT AMAN =====
  result = result.sort((a: any, b: any) => {
    const da = parseDate(a.date.gregorian.date)
    const db = parseDate(b.date.gregorian.date)
    return da.getTime() - db.getTime()
  })

  // ===== FINAL MAP =====
  return result.slice(0, 7).map((d: any) => ({
    date: d.date.gregorian.date,
    readable: d.date.readable,
    timings: {
      fajr: d.timings.Fajr,
      dhuhr: d.timings.Dhuhr,
      asr: d.timings.Asr,
      maghrib: d.timings.Maghrib,
      isha: d.timings.Isha,
    },
  }))
}