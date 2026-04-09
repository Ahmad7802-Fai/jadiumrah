import Hero from "../components/Hero"
import Benefit from "../components/Benefit"
import Simulation from "../components/Simulation"
import Faq from "../components/Faq"

import PageContainer from "@/components/layout/PageContainer"
import SectionBlock from "@/components/layout/SectionBlock"

import { getPakets } from "@/modules/paket/services/paketService"

export default async function TabunganUmrahSection() {
  const pakets = await getPakets()

  return (
    <div className="bg-bg">

      {/* HERO (FULL WIDTH) */}
      <Hero />

      <PageContainer>

        <div className="space-y-section md:space-y-section-lg">

          {/* BENEFIT */}
          <SectionBlock
            title="Keuntungan Tabungan Umrah"
          >
            <Benefit />
          </SectionBlock>

          {/* SIMULATION */}
          <SectionBlock
            title="Simulasi Tabungan Umrah"
          >
            <Simulation pakets={pakets} />
          </SectionBlock>

          {/* FAQ */}
          <SectionBlock
            title="FAQ Tabungan Umrah"
          >
            <Faq />
          </SectionBlock>

        </div>

      </PageContainer>

    </div>
  )
}