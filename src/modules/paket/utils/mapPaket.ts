import { PaketApi, Paket, PaketDetailApi } from "../types/types"

export function mapPaket(item: PaketApi): Paket {
  const departure = item.next_departure

  const promo = departure?.prices?.find(p => p.has_promo)

  return {
    id: item.id,
    name: item.name,
    slug: item.slug,

    image: item.thumbnail,

    duration: item.duration_label,
    airline: item.airline,

    price: item.price_start_from,
    priceLabel: item.price_label,

    originalPrice: item.original_price,
    originalPriceLabel: item.original_price_label,

    seat: departure?.quota_remaining ?? 0,
    totalSeat: departure?.quota ?? 0,

    isPromo: item.has_discount,
    discount: item.discount_percent,

    savingLabel: item.saving_label,

    promoLabel: promo?.promo_label ?? null,

    departureDate: departure?.departure_date ?? null,
    availability: departure?.availability_label ?? null,
  }
}

export function mapPaketDetail(data: PaketDetailApi) {
  return {
    id: data.id,
    name: data.name,
    slug: data.slug,

    description: data.description,
    shortDesc: data.short_description,

    duration: data.duration_label,
    airline: data.airline,
    city: data.departure_city,

    // 🔥 INI YANG DIPAKAI UI
    image: data.thumbnail,
    gallery: data.gallery ?? [],

    priceLabel: data.price_label,
    originalPriceLabel: data.original_price_label,
    savingLabel: data.saving_label,

    hotels: data.hotels ?? [],
    itinerary: data.itinerary ?? [],
    departures: data.departures ?? [],
  }
}