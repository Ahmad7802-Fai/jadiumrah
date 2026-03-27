import "./globals.css"
import ClientLayout from "@/components/layout/ClientLayout"
import type { Metadata, Viewport } from "next"

/* =====================================================
   VIEWPORT (🔥 PALING PENTING UNTUK MOBILE FIX)
===================================================== */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover", // 🔥 support notch iPhone
}

/* =====================================================
   METADATA (SEO + APP CONFIG)
===================================================== */
export const metadata: Metadata = {
  metadataBase: new URL("https://jadiumrah.com"),

  title: {
    default: "JadiUmrah",
    template: "%s | JadiUmrah",
  },

  description:
    "Travel Umrah terpercaya, paket umrah terbaik untuk keluarga & milenial.",

  keywords: [
    "umrah",
    "travel umrah",
    "paket umrah",
    "umrah murah",
    "jadiumrah",
  ],

  authors: [{ name: "JadiUmrah" }],
  creator: "JadiUmrah",
  publisher: "JadiUmrah",

  /* ================= OPEN GRAPH ================= */
  openGraph: {
    title: "JadiUmrah",
    description:
      "Travel Umrah terpercaya dengan paket terbaik untuk keluarga & milenial.",
    url: "https://jadiumrah.com",
    siteName: "JadiUmrah",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "JadiUmrah",
      },
    ],
  },

  /* ================= TWITTER ================= */
  twitter: {
    card: "summary_large_image",
    title: "JadiUmrah",
    description: "Travel Umrah terpercaya & modern",
    images: ["/images/og.jpg"],
  },

  /* ================= MOBILE / PWA ================= */
  applicationName: "JadiUmrah",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "JadiUmrah",
  },

  formatDetection: {
    telephone: false,
  },

  /* ================= ICON ================= */
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },

  /* ================= ROBOTS ================= */
  robots: {
    index: true,
    follow: true,
  },
}

/* =====================================================
   ROOT LAYOUT
===================================================== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
    >
      <head />

      <body
        className="
          min-h-screen
          bg-white

          antialiased
          text-gray-900

          overflow-x-hidden
        "
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}