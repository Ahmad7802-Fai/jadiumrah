// ================= PRAYER =================
export type PrayerTime = {
  fajr: string
  dhuhr: string
  asr: string
  maghrib: string
  isha: string
}

// ================= RESPONSE =================
export interface PrayerResponse {
  timings: PrayerTime
  date: string
  location: string
}

// ================= LOCATION =================
export interface LocationOption {
  label: string
  lat: number
  lng: number
}

// ================= SIMPLE TYPE =================
export type QiblatDirection = number 

// ================= JADWAL SHOLAT 7 HARI =================
export interface PrayerDay {
  date: string
  readable: string
  timings: {
    fajr: string
    dhuhr: string
    asr: string
    maghrib: string
    isha: string
  }
}