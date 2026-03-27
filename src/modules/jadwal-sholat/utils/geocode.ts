export async function reverseGeocode(lat: number, lng: number) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    )

    const data = await res.json()

    return (
      data.address?.city ||
      data.address?.town ||
      data.address?.village ||
      "Lokasi Saya"
    )
  } catch {
    return "Lokasi Saya"
  }
}