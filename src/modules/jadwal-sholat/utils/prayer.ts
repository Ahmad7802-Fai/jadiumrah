export function getCurrentPrayer(timings: any) {
  const now = new Date()

  const entries = [
    ["fajr", timings.fajr],
    ["dhuhr", timings.dhuhr],
    ["asr", timings.asr],
    ["maghrib", timings.maghrib],
    ["isha", timings.isha],
  ]

  for (let i = entries.length - 1; i >= 0; i--) {
    const [name, time] = entries[i]
    const [h, m] = time.split(":").map(Number)

    const t = new Date()
    t.setHours(h, m, 0)

    if (now >= t) return name
  }

  return "fajr"
}

export function getNextPrayer(timings: any) {
  const now = new Date()

  const entries = [
    ["fajr", timings.fajr],
    ["dhuhr", timings.dhuhr],
    ["asr", timings.asr],
    ["maghrib", timings.maghrib],
    ["isha", timings.isha],
  ]

  for (let i = 0; i < entries.length; i++) {
    const [name, time] = entries[i]
    const [h, m] = time.split(":").map(Number)

    const t = new Date()
    t.setHours(h, m, 0)

    if (now < t) return { name, time }
  }

  return { name: "fajr", time: timings.fajr }
}

export function getCountdown(time: string, now?: number) {
  const nowDate = now ? new Date(now) : new Date()

  const [hour, minute] = time.split(":").map(Number)

  const target = new Date(nowDate)
  target.setHours(hour, minute, 0, 0)

  // 🔥 kalau sudah lewat → besok
  if (target.getTime() <= nowDate.getTime()) {
    target.setDate(target.getDate() + 1)
  }

  const diff = target.getTime() - nowDate.getTime()

  const h = Math.floor(diff / (1000 * 60 * 60))
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const s = Math.floor((diff % (1000 * 60)) / 1000)

  return `${h}j ${m}m ${s}d`
}