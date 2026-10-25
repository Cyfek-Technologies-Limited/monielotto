'use client'

import { useEffect, useState } from 'react'

const pad = (n: number) => String(n).padStart(2, '0')

export function Countdown({ minutes }: { minutes: number }) {
  const [left, setLeft] = useState(minutes * 60)

  useEffect(() => {
    const t = setInterval(() => setLeft((s) => (s <= 0 ? minutes * 60 : s - 1)), 1000)
    return () => clearInterval(t)
  }, [minutes])

  const h = Math.floor(left / 3600)
  const m = Math.floor((left % 3600) / 60)
  const s = left % 60

  return (
    <span className="absolute right-2 top-2 rotate-6 rounded border-2 border-white bg-brand-orange px-1.5 text-center font-mono text-xs font-bold leading-tight text-white">
      <span className="block font-sans text-[9px] uppercase">Closing</span>
      <span aria-live="off">
        {pad(h)}:{pad(m)}:{pad(s)}
      </span>
    </span>
  )
}
