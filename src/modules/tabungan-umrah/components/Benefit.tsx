import {
  Wallet,
  ShieldCheck,
  CalendarCheck,
  Users,
} from "lucide-react"

const items = [
  {
    title: "Ringan & Fleksibel",
    desc: "Setoran sesuai kemampuan",
    icon: Wallet,
  },
  {
    title: "Aman & Terverifikasi",
    desc: "Dana dikelola terpercaya",
    icon: ShieldCheck,
  },
  {
    title: "Rencana Jelas",
    desc: "Estimasi lengkap tersedia",
    icon: CalendarCheck,
  },
  {
    title: "Pendampingan",
    desc: "Didampingi sampai berangkat",
    icon: Users,
  },
]

export default function Benefit() {
  return (
    <section className="space-y-6">

      {/* <h2 className="text-center text-sm md:text-xl font-semibold">
        Keuntungan Tabungan Umrah
      </h2> */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">

        {items.map(({ title, desc, icon: Icon }, i) => (
          <div
            key={i}
            className="
              bg-white
              p-3 md:p-5
              rounded-xl md:rounded-2xl
              border border-gray-100
              shadow-sm
              flex flex-col gap-2
            "
          >

            {/* ICON */}
            <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Icon className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
            </div>

            {/* TEXT */}
            <div className="text-[11px] md:text-sm font-semibold leading-tight">
              {title}
            </div>

            <div className="text-[10px] md:text-xs text-gray-500 leading-tight">
              {desc}
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}