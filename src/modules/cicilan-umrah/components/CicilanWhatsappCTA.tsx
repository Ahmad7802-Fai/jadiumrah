"use client"

interface Props {
  packageName?: string
  tenor?: number
  phone?: string
}

export default function CicilanWhatsappCTA({
  packageName,
  tenor,
  phone = "62811922952",
}: Props) {
  const text = encodeURIComponent(
    `Assalamu'alaikum, saya ingin konsultasi cicilan umrah.\nPaket: ${packageName ?? "-"}\nTenor: ${tenor ?? 0} bulan`
  )

  const href = `https://wa.me/${phone}?text=${text}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        w-full

        h-9 md:h-10

        flex items-center justify-center

        rounded-lg md:rounded-xl

        bg-white
        text-green-700

        text-[11px] md:text-sm
        font-semibold

        shadow-sm

        active:scale-[0.97]
        transition
      "
    >
      💬 Konsultasi WhatsApp
    </a>
  )
}