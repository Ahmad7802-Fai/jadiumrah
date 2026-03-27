"use client"

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default function DepartureSelector({ paket }: any) {
  const departures = paket.departures || []

  return (
    <div className="space-y-3">

      {departures.map((d: any) => (
        <div
          key={d.id}
          className="
            border rounded-xl p-3
            flex justify-between items-center
          "
        >

          <div>
            <div className="font-medium">
              {formatDate(d.departure_date)}
            </div>

            <div className="text-xs text-gray-500">
              {d.quota_label}
            </div>
          </div>

          <div className="text-green-600 font-semibold text-sm">
            {d.price_label}
          </div>

        </div>
      ))}

    </div>
  )
}