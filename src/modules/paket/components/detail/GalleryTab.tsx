"use client"

export default function GalleryTab({ paket }: any) {
  const images = [
    paket.thumbnail,
    ...(paket.gallery || []),
  ].filter(Boolean)

  if (!images.length) {
    return (
      <div className="text-center text-gray-400 text-sm">
        Tidak ada foto
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-2">

      {images.map((img: string, i: number) => (
        <div
          key={i}
          className="relative h-[110px] rounded-xl overflow-hidden"
        >
          <img
            src={img}
            alt="gallery"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

    </div>
  )
}