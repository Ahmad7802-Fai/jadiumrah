import { PaketApi, Paket, PaketDetailApi, PaketPriceApi } from "../types/types"

export function mapPaket(item: PaketApi): Paket {
  return {
    id: item.id,
    name: item.name,
    slug: item.slug,

    image: item.thumbnail,

    duration: item.duration_label,
    airline: item.airline,

    // 🔥 PRICE
    price: item.price_start_from,
    priceLabel: item.price_label,

    originalPrice: item.original_price,
    originalPriceLabel: item.original_price_label,

    // 🔥 SEAT (FIX TOTAL)
    seat: item.available_seats ?? 0,
    totalSeat: (item.available_seats ?? 0) + (item.bookings_count ?? 0),

    seatLabel: item.seat_label,

    // 🔥 PROMO (FIX)
    isPromo: item.has_discount,
    discount: item.discount_percent,
    promoLabel: item.promo_label,

    savingLabel: item.saving_label,

    // 🔥 STATUS
    isSoldOut: item.is_sold_out,
  }
}

export function mapPaketDetail(data: PaketDetailApi) {
  const departure = data.departures?.[0]

  const prices: PaketPriceApi[] = departure?.prices ?? []

  // 🔥 ambil harga termurah (FIX)
  const cheapest =
    prices.length > 0
      ? prices.reduce((min, p) =>
          p.final_price < min.final_price ? p : min
        , prices[0])
      : null

  const promo = prices.find((p) => p.has_promo)

  return {
    id: data.id,
    name: data.name,
    slug: data.slug,

    description: data.description,
    shortDesc: data.short_description,

    duration: data.duration_label,
    airline: data.airline,
    city: data.departure_city,

    image: data.thumbnail,
    gallery: data.gallery ?? [],

    // 🔥 PRICE
    price:
      cheapest?.final_price ??
      departure?.price_start_from ??
      data.price_start_from ??
      0,

    priceLabel:
      cheapest?.final_price_label ??
      departure?.price_label ??
      data.price_label,

    originalPrice:
      cheapest?.price ??
      departure?.original_price ??
      data.original_price,

    originalPriceLabel:
      cheapest?.price_label ??
      departure?.original_price_label ??
      data.original_price_label,

    savingLabel: data.saving_label,

    // 🔥 PROMO
    isPromo: departure?.has_discount ?? data.has_discount,
    discount: cheapest?.discount_percent ?? data.discount_percent,
    promoLabel: promo?.promo_label ?? null,

    // 🔥 SEAT
    seat: departure?.quota_remaining ?? 0,
    totalSeat: departure?.quota ?? 0,

    // 🔥 DATE
    departureDate: departure?.departure_date,
    returnDate: departure?.return_date,

    // 🔥 RELATION
    hotels: data.hotels ?? [],
    itinerary: data.itinerary ?? [],

    departures: data.departures ?? [],
    prices,

    cheapestRoom: cheapest?.room_type,
  }
}