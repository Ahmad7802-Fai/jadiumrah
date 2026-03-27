export function getQiblatDirection(lat: number, lng: number) {
  const toRad = (deg: number) => (deg * Math.PI) / 180
  const toDeg = (rad: number) => (rad * 180) / Math.PI

  const kaaba = {
    lat: toRad(21.4225),
    lng: toRad(39.8262),
  }

  const user = {
    lat: toRad(lat),
    lng: toRad(lng),
  }

  const dLng = kaaba.lng - user.lng

  const y = Math.sin(dLng)
  const x =
    Math.cos(user.lat) * Math.tan(kaaba.lat) -
    Math.sin(user.lat) * Math.cos(dLng)

  let bearing = toDeg(Math.atan2(y, x))

  return (bearing + 360) % 360
}