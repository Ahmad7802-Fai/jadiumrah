export type PanduanUmrahItem = {
  id: string
  title: string
  subtitle?: string
  arabic?: string
  latin?: string
  meaning?: string
  points: string[]
  badge?: string
  step?: number
}

export type PanduanUmrahQuickLink = {
  id: string
  label: string
  href: string
  step?: number
}