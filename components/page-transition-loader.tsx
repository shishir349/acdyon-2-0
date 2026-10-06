'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function PageTransitionLoader() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const prevPath = useRef(pathname)
  // ponytail: only hide when pathname actually changes — never on a timer
  // timer-based hide was the bug: it uncovered the old page before the new one was ready

  useEffect(() => {
    if (pathname !== prevPath.current) {
      prevPath.current = pathname
      setVisible(false)
    }
  }, [pathname])

  const handleClick = useCallback((e: MouseEvent) => {
    const a = (e.target as HTMLElement).closest('a')
    if (!a) return
    const href = a.getAttribute('href') ?? ''
    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:')
    ) return
    if (a.target === '_blank' || a.hasAttribute('download')) return
    if (href === pathname) return
    // show immediately — cover the old page so user never sees it "stuck"
    setVisible(true)
  }, [pathname])

  useEffect(() => {
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [handleClick])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/98 dark:bg-slate-950/98 animate-in fade-in duration-100">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12 animate-pulse">
          <Image src="/acdyon-logo.webp" alt="AcdyOn" fill className="object-contain" priority />
        </div>
        <div className="h-0.5 w-24 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="h-full w-1/2 rounded-full bg-[#1e40ff] animate-[loader-slide_0.7s_ease-in-out_infinite]" />
        </div>
      </div>
      <style>{`
        @keyframes loader-slide {
          0%   { transform: translateX(-100%) }
          100% { transform: translateX(300%) }
        }
      `}</style>
    </div>
  )
}
