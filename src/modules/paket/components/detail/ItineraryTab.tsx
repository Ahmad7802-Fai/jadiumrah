"use client"

export default function ItineraryTab({ paket }: any) {
  if (!paket.itinerary?.length) {
    return (
      <div className="text-center text-gray-400 text-sm">
        Tidak ada itinerary
      </div>
    )
  }

  return (
    <div className="space-y-2">

      {paket.itinerary.map((item: any) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-sm p-2.5 md:p-3 text-[13px]"
        >
          <div className="font-semibold text-gray-800">
            Hari {item.day_order}
          </div>

          <div className="text-gray-600">
            {item.destination?.name}
          </div>

          {item.note && (
            <div className="text-xs text-gray-400 mt-1">
              {item.note}
            </div>
          )}
        </div>
      ))}

    </div>
  )
}