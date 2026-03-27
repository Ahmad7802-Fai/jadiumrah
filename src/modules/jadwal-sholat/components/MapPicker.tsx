"use client"

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet"
import "leaflet/dist/leaflet.css"

import { useState } from "react"
import type { LatLng, LeafletMouseEvent } from "leaflet"

// ================= MARKER HANDLER =================
function LocationMarker({
  onPick,
}: {
  onPick: (latlng: LatLng) => void
}) {
  const [position, setPosition] = useState<LatLng | null>(null)

  useMapEvents({
    click(e: LeafletMouseEvent) {
      setPosition(e.latlng)
      onPick(e.latlng)
    },
  })

  return position ? <Marker position={position} /> : null
}

// ================= MAIN COMPONENT =================
export default function MapPicker({
  onSelect,
}: {
  onSelect: (latlng: LatLng) => void
}) {
  return (
    <div className="h-52 w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">

      <MapContainer
        center={[-6.2, 106.8]} // default Jakarta
        zoom={11}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker
          onPick={(latlng) => {
            onSelect(latlng)
          }}
        />
      </MapContainer>

    </div>
  )
}