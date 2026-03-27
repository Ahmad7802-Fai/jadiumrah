"use client"

interface Props {
  onChange: (loc: any) => void
}

const cities = [
  { label: "Jakarta", lat: -6.2, lng: 106.8 },
  { label: "Bandung", lat: -6.9, lng: 107.6 },
  { label: "Surabaya", lat: -7.2, lng: 112.7 },
]

export default function LocationSelector({ onChange }: Props) {

  // 🔥 HANDLE GPS
  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Browser tidak support lokasi")
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = {
          label: "Lokasi Saya",
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        }

        onChange(loc)
      },
      () => {
        alert("Izin lokasi ditolak")
      }
    )
  }

  return (
    <div className="space-y-2">

      {/* 🔥 BUTTON GPS */}
      <button
        onClick={handleUseMyLocation}
        className="
          w-full h-10
          rounded-lg

          bg-green-600
          text-white
          text-xs font-semibold

          active:scale-95 transition
        "
      >
        📍 Gunakan Lokasi Saya
      </button>

      {/* SELECT KOTA */}
      <select
        onChange={(e) => onChange(JSON.parse(e.target.value))}
        className="w-full h-10 rounded-lg border px-3 text-sm"
      >
        {cities.map((c) => (
          <option key={c.label} value={JSON.stringify(c)}>
            {c.label}
          </option>
        ))}
      </select>

    </div>
  )
}