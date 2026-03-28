"use client"

import { useEffect } from "react"
import { bootstrapApp } from "./bootstrap"

export function useBootstrap() {
  useEffect(() => {
    bootstrapApp()
  }, [])
}