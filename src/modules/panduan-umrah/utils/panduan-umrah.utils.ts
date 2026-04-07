import type {
  PanduanUmrahItem,
  PanduanUmrahQuickLink,
} from "../types/panduan-umrah.types"

export function getPanduanQuickLinks(
  items: PanduanUmrahItem[]
): PanduanUmrahQuickLink[] {
  return items.map((item) => ({
    id: item.id,
    label: item.title,
    href: `#${item.id}`,
    step: item.step,
  }))
}