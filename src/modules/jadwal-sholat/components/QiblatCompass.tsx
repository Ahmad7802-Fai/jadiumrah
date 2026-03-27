"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  direction: number | null
}

export default function QiblatCompass({ direction }: Props) {
  const [heading, setHeading] = useState<number | null>(null)
  const [displayRotation, setDisplayRotation] = useState(0)
  const [aligned, setAligned] = useState(false)

  const targetRef = useRef(0)
  const currentRef = useRef(0)
  const vibratedRef = useRef(false)

  // ================= SENSOR =================
  useEffect(() => {
    function handleOrientation(event: DeviceOrientationEvent) {
      let deg: number | null = null

      // ✅ iOS
      if ((event as any).webkitCompassHeading) {
        deg = (event as any).webkitCompassHeading
      }
      // ✅ Android
      else if (event.alpha !== null) {
        deg = 360 - event.alpha
      }

      if (deg !== null) {
        setHeading(deg)
      }
    }

    async function init() {
      try {
        if (
          typeof DeviceOrientationEvent !== "undefined" &&
          typeof (DeviceOrientationEvent as any).requestPermission === "function"
        ) {
          const res = await (DeviceOrientationEvent as any).requestPermission()

          if (res === "granted") {
            window.addEventListener("deviceorientation", handleOrientation)
          }
        } else {
          window.addEventListener("deviceorientationabsolute", handleOrientation)
          window.addEventListener("deviceorientation", handleOrientation)
        }
      } catch (err) {
        console.log("Sensor error", err)
      }
    }

    init()

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation)
      window.removeEventListener("deviceorientationabsolute", handleOrientation)
    }
  }, [])

  // ================= TARGET =================
  useEffect(() => {
    if (heading !== null && direction !== null) {
      targetRef.current = direction - heading
    }
  }, [heading, direction])

  // ================= SMOOTH ANIMATION =================
  useEffect(() => {
    let raf: number

    function animate() {
      const current = currentRef.current
      const target = targetRef.current

      // 🔥 smooth anti goyang
      const next = current + (target - current) * 0.08

      currentRef.current = next
      setDisplayRotation(next)

      // ================= ALIGN =================
      const diff = Math.abs(next)

      if (diff < 4) {
        setAligned(true)

        if (!vibratedRef.current && "vibrate" in navigator) {
          navigator.vibrate(200)
          vibratedRef.current = true
        }
      } else {
        setAligned(false)
        vibratedRef.current = false
      }

      raf = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(raf)
  }, [])

  const showFallback = heading === null || direction === null

  // ================= 🔥 FINAL ROTATION FIX =================
  const safeDirection = direction ?? 0

  let normalized = 0

  if (showFallback) {
    // ✅ DESKTOP / NO SENSOR
    normalized = safeDirection - 180
  } else {
    // ✅ REAL COMPASS
    normalized = displayRotation - 90
  }

  // normalize biar tidak lompat
  normalized = ((normalized % 360) + 360) % 360

  return (
    <div
      className={`
        rounded-xl p-4 border text-center transition-all duration-300

        ${
          aligned
            ? "bg-green-100 border-green-400 shadow-lg"
            : "bg-white"
        }
      `}
    >
      <p className="text-xs text-slate-500">Arah Qiblat</p>

      {/* ================= COMPASS ================= */}
      <div className="relative mt-4 flex items-center justify-center">

        <div
          className={`
            relative w-44 h-44 rounded-full flex items-center justify-center

            border-[6px]

            transition-all duration-300

            ${
              aligned
                ? "border-green-500 bg-green-50 shadow-[0_0_40px_rgba(34,197,94,0.5)]"
                : "border-green-200 bg-green-50"
            }
          `}
        >
          {/* CENTER DOT */}
          <div className="absolute w-3 h-3 bg-green-700 rounded-full z-20 shadow" />

          {/* 🕋 KA'BAH */}
          <div
            className={`
              absolute top-3 text-2xl transition-all duration-300

              ${
                aligned
                  ? "scale-125 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                  : "opacity-80"
              }
            `}
          >
            🕋
          </div>

          {/* 🔥 PULSE */}
          {aligned && (
            <div className="absolute top-3 w-6 h-6 rounded-full bg-green-400 opacity-30 animate-ping" />
          )}

          {/* NEEDLE */}
          <div
            className="
              absolute w-1 h-20
              bg-gradient-to-t from-green-700 to-green-400
              origin-bottom
              rounded-full
              shadow-md
            "
            style={{
              transform: `rotate(${normalized}deg)`
            }}
          />

          {/* BACK NEEDLE */}
          <div
            className="
              absolute w-1 h-12
              bg-green-300
              origin-bottom
              rounded-full
              opacity-60
            "
            style={{
              transform: `rotate(${normalized + 180}deg)`
            }}
          />

          {/* NORTH */}
          <div className="absolute top-2 text-[10px] font-bold text-green-700">
            N
          </div>
        </div>
      </div>

      {/* ================= STATUS ================= */}
      <p
        className={`
          mt-3 text-sm font-semibold transition-all

          ${
            aligned
              ? "text-green-600"
              : "text-slate-500"
          }
        `}
      >
        {showFallback
          ? "Sensor tidak tersedia (mode statis)"
          : aligned
          ? "🕋 Arah sudah tepat"
          : "Putar perangkat hingga sejajar Ka'bah"}
      </p>
    </div>
  )
}