'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GameMark } from './brand'

type Slide = { id: string; content: React.ReactNode }

const slides: Slide[] = [
  {
    id: 'new-game',
    content: (
      <div className="flex h-full items-center gap-4 bg-gradient-to-b from-brand-blue to-white p-5">
        <div className="flex-1">
          <span className="rounded border border-white px-1 text-[10px] font-bold uppercase text-white">
            Just launched
          </span>
          <h2 className="mt-1 text-2xl font-extrabold leading-tight text-white text-balance">
            Meet the all-new Mega Jackpot
          </h2>
          <p className="mt-2 text-sm font-semibold leading-snug">
            Bigger jackpot, more prize tiers and two draws a week, every Wednesday and Saturday.
            Tickets are just ₦500.
          </p>
        </div>
        <div className="flex flex-col items-end justify-between gap-6 self-stretch">
          <GameMark title="Jackpot" balls={['7', '45']} />
          <Link
            href="#draw-games"
            className="rounded-md border-2 border-brand-ink bg-white px-2 py-0.5 text-sm font-bold shadow-[0_2px_0_var(--color-brand-ink)]"
          >
            Play now
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: 'winner',
    content: (
      <div className="flex h-full items-stretch bg-gradient-to-r from-white to-brand-ink/10">
        <div className="relative w-2/5 overflow-hidden rounded-tr-[3rem] bg-brand-yellow">
          <Image
            src="/images/winner-hero.png"
            alt="Smiling NairaLuck winner Chidi"
            fill
            sizes="200px"
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-1 flex-col items-end justify-center gap-2 p-5 text-right">
          <p className="text-lg font-extrabold">Winner Chidi</p>
          <p className="text-sm font-semibold">He won ₦1 million and we topped it up to</p>
          <p className="text-3xl font-extrabold text-brand-yellow">₦10,000,000</p>
          <Link
            href="#winners"
            className="rounded-md border-2 border-brand-ink bg-brand-yellow px-2 py-0.5 text-sm font-bold shadow-[0_2px_0_var(--color-brand-ink)]"
          >
            Read his story
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: 'instant',
    content: (
      <div className="flex h-full items-center justify-between gap-4 bg-gradient-to-b from-brand-orange to-white p-5">
        <div>
          <h2 className="text-2xl font-extrabold leading-tight text-white text-balance">
            Instant games, instant wins
          </h2>
          <p className="mt-2 text-sm font-semibold">Scratch, tap and win up to ₦1M in seconds.</p>
        </div>
        <GameMark title="Flash" subtitle="Win" balls={['4', '40']} />
      </div>
    ),
  },
]

export function PromoCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [active])

  return (
    <section aria-roledescription="carousel" aria-label="Promotions" className="mx-auto mt-10 max-w-xl px-4">
      <div className="relative h-48 overflow-hidden rounded-lg shadow-[0_8px_24px_rgba(11,59,51,0.12)]">
        {slides.map((s, i) => (
          <div
            key={s.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            aria-hidden={i !== active}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === active ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            {s.content}
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === active}
            className={`size-2.5 rounded-full border-2 border-brand-ink ${i === active ? 'bg-brand-ink' : 'bg-white'}`}
          />
        ))}
      </div>
    </section>
  )
}
