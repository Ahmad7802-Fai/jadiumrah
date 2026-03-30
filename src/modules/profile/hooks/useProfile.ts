"use client"

import { useEffect, useState } from "react"
import { getProfile } from "../services/profileService"

export function useProfile() {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    const init = async () => {
      try {
        const data = await getProfile()

        if (data) {
          setProfile(data)
        }
      } catch (err) {
        console.error("PROFILE ERROR", err)
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [])

  return {
    profile,
    loading,
  }
}