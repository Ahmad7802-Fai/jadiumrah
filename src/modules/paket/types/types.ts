/* ===============================
   API TYPES (RAW FROM BACKEND)
================================ */

export interface PaketApi {
  id: number
  name: string
  slug: string
  departure_city: string
  duration_days: number
  duration_label: string
  airline: string
  short_description: string

  thumbnail: string

  price_start_from: number
  price_label: string

  original_price: number
  original_price_label: string

  has_discount: boolean
  discount_percent: number
  saving_amount: number
  saving_label: string | null

  is_active: boolean
  is_published: boolean

  next_departure: PaketDepartureApi | null

  created_at: string
  updated_at: string | null
}

/* ===============================
   DEPARTURE
================================ */

export interface PaketDepartureApi {
  id: number
  departure_code: string | null

  departure_date: string
  return_date: string

  quota: number
  booked: number
  quota_remaining: number
  quota_label: string
  occupancy_percentage: number

  is_active: boolean
  is_closed: boolean
  is_available: boolean
  availability_label: string

  price_start_from: number
  price_label: string

  prices: PaketPriceApi[]
}

/* ===============================
   PRICE
================================ */

export interface PaketPriceApi {
  id: number
  room_type: string

  price: number
  price_label: string

  final_price: number
  final_price_label: string

  discount: number
  has_promo: boolean
  promo_label: string | null

  promo_type: string | null
  promo_value: string | null

  discount_percent: number
}

/* ===============================
   FRONTEND MODEL (CLEAN)
================================ */

export interface Paket {
  id: number
  name: string
  slug: string

  image: string
  duration: string
  airline: string

  price: number
  priceLabel: string

  originalPrice?: number
  originalPriceLabel?: string

  seat: number
  totalSeat: number

  isPromo: boolean
  discount?: number

  savingLabel?: string | null
  promoLabel?: string | null

  departureDate?: string | null
  availability?: string | null
}

export interface PaketDetailApi {
  id: number
  name: string
  slug: string

  short_description: string
  description: string

  duration_label: string
  airline: string
  departure_city: string

  thumbnail: string
  gallery: string[]

  // ✅ PRICE CORE (WAJIB)
  price_start_from: number
  price_label: string

  original_price?: number
  original_price_label?: string

  has_discount?: boolean
  discount_percent?: number

  saving_amount?: number
  saving_label?: string

  // RELATIONS
  hotels: any[]
  itinerary: any[]
  departures: any[]
}