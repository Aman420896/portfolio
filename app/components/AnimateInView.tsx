'use client'

import { inView } from "@motionone/dom"
import { useEffect, useRef, ReactNode } from "react"

export default function AnimateInView({ children, className = '' }: { children: ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      inView(ref.current, ({ target }) => {
        target.classList.add('animate-in')
        return () => target.classList.remove('animate-in')
      })
    }
  }, [])

  return (
    <div ref={ref} className={`opacity-0 translate-y-4 ${className}`}>
      {children}
    </div>
  )
} 