"use client"

export default function ItineraryTab({ paket }: any) {
  const list = paket.itinerary ?? []

  if (!list.length) {
    return (
      <div className="text-center text-gray-400 text-sm py-6">
        Tidak ada itinerary
      </div>
    )
  }

  return (
    <div className="relative pl-3 space-y-3">

      {/* 🔥 vertical line */}
      <div className="absolute left-[6px] top-0 bottom-0 w-[2px] bg-gray-200" />

      {list.map((item: any, i: number) => (
        <div key={item.id} className="relative">

          {/* 🔥 dot */}
          <div className="absolute left-0 top-[6px] w-[12px] h-[12px] rounded-full bg-green-600 border-2 border-white shadow" />

          {/* CARD */}
          <div className="ml-4 bg-white rounded-xl shadow-sm border border-gray-100 p-3 text-[12px] space-y-1">

            {/* HEADER */}
            <div className="flex justify-between items-center">
              <div className="font-semibold text-gray-800">
                Hari {item.day_order}
              </div>

              {i === 0 && (
                <div className="text-[9px] bg-green-100 text-green-600 px-2 py-[2px] rounded-full">
                  Start
                </div>
              )}
            </div>

            {/* DESTINATION */}
            <div className="text-gray-700 font-medium text-[12px]">
              📍 {item.destination?.name || "-"}
            </div>

            {/* NOTE */}
            {item.note && (
              <div className="text-[11px] text-gray-500 leading-relaxed">
                {item.note}
              </div>
            )}

          </div>
        </div>
      ))}

    </div>
  )
}