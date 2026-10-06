"use client"
import { useEffect } from 'react'

export function ScrollToMobileForm({ id }: { id: string }) {
  useEffect(() => {
    if (window.innerWidth < 1024)
      document.getElementById(id)?.scrollIntoView()
  }, [id])
  return null
}
