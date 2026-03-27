"use client"

export default function RoomSelector({ paket }: any) {
  const prices = paket.departures?.[0]?.prices || []

  return (
    <div className="space-y-3">

      {prices.map((p: any) => (
        <div
          key={p.id}
          className="
            border rounded-xl p-3
            flex justify-between items-center
            hover:shadow-sm transition
          "
        >

          <div>

            <div className="font-medium capitalize">
              {p.room_type}
            </div>

            {/* CORET */}
            {p.price_label && p.discount > 0 && (
              <div className="text-xs line-through text-gray-400">
                {p.price_label}
              </div>
            )}

            {/* FINAL */}
            <div className="text-green-600 font-bold">
              {p.final_price_label}
            </div>

            {/* PROMO */}
            {p.promo_label && (
              <div className="text-xs text-red-500">
                🔥 {p.promo_label}
              </div>
            )}

          </div>

          <button className="
            text-xs bg-green-600 text-white
            px-3 py-1.5 rounded-lg
          ">
            Pilih
          </button>

        </div>
      ))}

    </div>
  )
}