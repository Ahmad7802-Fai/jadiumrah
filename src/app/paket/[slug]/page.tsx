import {
  getPaketDetail,
  getPakets,
} from "@/modules/paket/services/paketService"

import PaketDetailPage from "@/modules/paket/pages/PaketDetailPage"

export default async function Page({ params }: any) {
  const { slug } = await params // ✅ WAJIB (Next.js 15+ / 16)

  const [paket, pakets] = await Promise.all([
    getPaketDetail(slug),
    getPakets(),
  ])

  return (
    <PaketDetailPage
      paket={paket}
      pakets={pakets}
    />
  )
}