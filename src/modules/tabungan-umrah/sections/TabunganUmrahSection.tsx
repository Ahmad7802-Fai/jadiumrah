import Hero from "../components/Hero"
import Benefit from "../components/Benefit"
import Simulation from "../components/Simulation"
import Faq from "../components/Faq"
import { getPakets } from "@/modules/paket/services/paketService"


export default async function TabunganUmrahSection() {
  const pakets = await getPakets()

  return (
    <div className="bg-[#f5f7f4]">

      <Hero />

      <div className="max-w-6xl mx-auto px-3 md:px-6 py-6 md:py-10 space-y-10 md:space-y-14">
        <Benefit />
        <Simulation pakets={pakets} />
        <Faq />
      </div>

    </div>
  )
}