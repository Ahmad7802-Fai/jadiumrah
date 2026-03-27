"use client"

interface Props {
  label: string
  time: string
  isCurrent?: boolean
  isNext?: boolean
  notif?: boolean
  onToggleNotif?: () => void
}

export default function PrayerCard({
  label,
  time,
  isCurrent,
  isNext,
  notif,
  onToggleNotif,
}: Props) {
  return (
    <div
      className={`
        rounded-xl border px-3 py-2.5
        flex items-center justify-between

        transition-all duration-200

        ${
          isCurrent
            ? "bg-green-600 text-white border-green-600 shadow"
            : isNext
            ? "bg-green-50 border-green-200"
            : "bg-white border-gray-200"
        }
      `}
    >
      {/* LEFT */}
      <div className="flex flex-col leading-tight">
        <span className="text-[12px] font-semibold">
          {label}
        </span>

        {isNext && (
          <span className="text-[10px] text-green-600 font-medium">
            Selanjutnya
          </span>
        )}

        {isCurrent && (
          <span className="text-[10px] text-white/80 font-medium">
            Sedang berlangsung
          </span>
        )}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">

        {/* 🔊 NOTIF */}
        <button
          onClick={onToggleNotif}
          className={`
            text-sm transition active:scale-90
            ${notif ? "text-green-600" : "text-slate-400"}
          `}
        >
          {notif ? "🔊" : "🔕"}
        </button>

        {/* TIME */}
        <span
          className={`
            text-[13px] font-extrabold
            ${isCurrent ? "text-white" : "text-slate-900"}
          `}
        >
          {time}
        </span>

      </div>
    </div>
  )
}