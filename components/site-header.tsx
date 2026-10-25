'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Logo, PatternStrip } from './brand'

const links = ['Draw Games', 'Instant Games', 'Results', 'Winners', 'Help']

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="mx-auto flex h-14 max-w-xl items-center justify-between px-4">
        <Link href="/" aria-label="NairaLuck home">
          <Logo />
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="rounded-md border-2 border-brand-ink bg-brand-lime px-2.5 py-0.5 text-sm font-bold shadow-[0_2px_0_var(--color-brand-ink)] transition-transform active:translate-y-0.5 active:shadow-none"
          >
            Sign up
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-md p-1 hover:bg-brand-ink/5"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="site-menu" className="border-t-2 border-brand-ink bg-white">
          <ul className="mx-auto max-w-xl px-4 py-2">
            {links.map((l) => (
              <li key={l}>
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block border-b border-brand-ink/10 py-3 text-lg font-bold last:border-0"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <PatternStrip />
    </header>
  )
}
