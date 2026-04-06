export function toCDNImage(path?: string, width = 800) {
  if (!path) return "/images/fallback.png"

  let cleanPath = path

  // kalau full url
  if (path.startsWith("http")) {
    const url = new URL(path)
    cleanPath = url.pathname
  }

  // ubah ke resize
  cleanPath = cleanPath.replace("/storage/", "")

  return `https://cdn.jadiumrah.cloud/resize/${cleanPath}?w=${width}`
}