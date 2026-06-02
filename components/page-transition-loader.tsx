'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export function PageTransitionLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleStop = () => setIsLoading(false)

    // Intercept router navigation
    const originalPush = router.push
    router.push = function (...args) {
      setIsLoading(true)
      return originalPush.apply(router, args)
    }

    return () => {
      router.push = originalPush
    }
  }, [router])

  // Auto-hide loader after page transition completes
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 1500)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/95 backdrop-blur-sm transition-opacity duration-300 ease-out">
      <div className="flex flex-col items-center gap-6">
        {/* AcdyOn Logo */}
        <div className="relative h-16 w-16 animate-pulse">
          <Image
            src="/acdyon-logo.png"
            alt="AcdyOn"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Loading indicator */}
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-[#1E40FF] animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="h-2 w-2 rounded-full bg-[#1E40FF] animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="h-2 w-2 rounded-full bg-[#1E40FF] animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>

        {/* Premium text */}
        <p className="text-sm font-medium text-slate-600 tracking-wide">Loading...</p>
      </div>
    </div>
  )
}
