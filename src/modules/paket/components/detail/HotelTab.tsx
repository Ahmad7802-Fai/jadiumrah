"use client"

export default function HotelTab({ paket }: any) {
  if (!paket.hotels?.length) {
    return (
      <div className="text-center text-gray-400 text-sm">
        Tidak ada hotel
      </div>
    )
  }

  return (
    <div className="space-y-2">

      {paket.hotels.map((hotel: any) => (
        <div
          key={hotel.id}
          className="bg-white rounded-2xl shadow-sm p-2.5 md:p-3 text-[13px]"
        >

          <div className="font-semibold text-gray-800">
            {hotel.hotel_name}
          </div>

          <div className="text-gray-600 text-xs">
            📍 {hotel.city}
          </div>

          <div className="text-yellow-500 text-xs">
            ⭐ {hotel.rating} • {hotel.distance_to_haram}
          </div>

        </div>
      ))}

    </div>
  )
}