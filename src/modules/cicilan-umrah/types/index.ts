import { LucideIcon } from "lucide-react"

export interface CicilanFeature {
  title: string
  desc: string
  icon: LucideIcon
}

export interface CicilanFaq {
  question: string
  answer: string
}

export interface CicilanPackage {
  id: number
  name: string
  slug?: string
  price: number
}

export interface CicilanSimulationResult {
  packageName: string
  total: number
  perMonth: number
  perWeek: number
  perDay: number
}