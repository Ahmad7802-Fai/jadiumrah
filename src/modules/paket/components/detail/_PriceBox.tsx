"use client"

export default function PriceBox({ paket }: any) {
  return (
    <div className="
      bg-white rounded-2xl shadow p-4
      flex justify-between items-center
    ">

      <div>

        <div className="text-xs text-gray-400">
          Mulai dari
        </div>

        {/* CORET */}
        {paket.originalPriceLabel && paket.savingLabel && (
          <div className="text-xs text-gray-400 line-through">
            {paket.originalPriceLabel}
          </div>
        )}

        {/* FINAL */}
        <div className="text-green-500 font-bold text-lg md:text-2xl">
          {paket.priceLabel}
        </div>

        {/* HEMAT */}
        {paket.savingLabel && (
          <div className="text-xs text-red-500 font-medium">
            🔥 {paket.savingLabel}
          </div>
        )}

      </div>

      <button className="
        bg-green-600 hover:bg-green-700
        text-white px-4 py-2 md:px-6 md:py-3
        rounded-xl font-semibold shadow
      ">
        Booking Sekarang
      </button>

    </div>
  )
}