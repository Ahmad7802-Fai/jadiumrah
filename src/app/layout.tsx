import "./globals.css"
import ClientLayout from "@/components/layout/ClientLayout"
import BootstrapClient from "@/components/layout/BootstrapClient"

export const metadata = {
  title: "JadiUmrah",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <BootstrapClient /> {/* 🔥 client logic pindah sini */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}