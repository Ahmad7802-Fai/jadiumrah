import PaketListPage from "@/modules/paket/pages/PaketListPage"
import PaketRekomendasi from "@/modules/paket/components/PaketRekomendasi"
import { getPakets } from "@/modules/paket/services/paketService"

export default async function Page() {
  const pakets = await getPakets()

  return (
    <div className="space-y-8">

      {/* 📦 LIST */}
      <PaketListPage pakets={pakets} />

      {/* 🔥 SECTION REKOMENDASI */}
      <div className="max-w-6xl mx-auto px-4">
        <PaketRekomendasi pakets={pakets} />
      </div>

    </div>



  )
}