export function toCDNImage(path?: string, width = 800, quality = 75) {
  if (!path) return "/images/fallback.png"

  let cleanPath = path

  if (path.startsWith("http")) {
    const url = new URL(path)
    cleanPath = url.pathname
  }

  cleanPath = cleanPath.replace("/storage/", "")

  return `https://cdn.jadiumrah.cloud/resize/${cleanPath}?w=${width}&q=${quality}`
}