// ================= CDN IMAGE =================
export function toCDNImage(path?: string, width = 800, quality = 75) {
  if (!path) return "/images/fallback.png"

  try {
    let cleanPath = path

    // ✅ kalau sudah full URL
    if (path.startsWith("http")) {
      const url = new URL(path)
      cleanPath = url.pathname
    }

    // ✅ bersihin prefix storage
    cleanPath = cleanPath.replace(/^\/?storage\//, "")

    return `https://cdn.jadiumrah.cloud/resize/${cleanPath}?w=${width}&q=${quality}`
  } catch {
    return "/images/fallback.png"
  }
}

// ================= SHIMMER =================
export function shimmer(w: number, h: number) {
  return `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#eee" offset="20%" />
          <stop stop-color="#ddd" offset="50%" />
          <stop stop-color="#eee" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#eee" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
    </svg>`
}

// ================= BASE64 =================
export function toBase64(str: string) {
  if (typeof window === "undefined") {
    return Buffer.from(str).toString("base64")
  }
  return window.btoa(str)
}