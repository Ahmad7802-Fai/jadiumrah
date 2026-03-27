"use client"

const labelMap: any = {
  fajr: "Subuh",
  dhuhr: "Dzuhur",
  asr: "Ashar",
  maghrib: "Maghrib",
  isha: "Isya",
}

export default function PrayerWeekSection({ data }: any) {
  if (!data || data.length === 0) return null

  return (
    <div className="space-y-2">

      <p className="text-xs font-semibold text-slate-500 px-1">
        Jadwal 7 Hari Kedepan
      </p>

      <div className="rounded-2xl bg-white shadow-sm overflow-x-auto">

        <div className="min-w-[720px]">

          {/* HEADER */}
          <div className="
            grid 
            grid-cols-[90px_repeat(7,minmax(80px,1fr))]
            bg-gradient-to-r from-green-50 to-white
            px-3 py-3
            text-[10px] font-semibold text-green-700
          ">
            <div className="text-slate-400">Waktu</div>

            {data.map((day: any, i: number) => (
              <div key={i} className="text-center">
                {day.readable.slice(0, 6)}
              </div>
            ))}
          </div>

          {/* CONTENT */}
          <div className="divide-y">

            {Object.keys(labelMap).map((key) => (
              <div
                key={key}
                className="
                  grid 
                  grid-cols-[90px_repeat(7,minmax(80px,1fr))]
                  px-3 py-3
                  text-[12px]
                  hover:bg-green-50/40
                  transition
                "
              >
                <div className="font-semibold text-slate-700">
                  {labelMap[key]}
                </div>

                {data.map((day: any, i: number) => (
                  <div key={i} className="text-center font-medium text-slate-800">
                    {day.timings[key]}
                  </div>
                ))}
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  )
}