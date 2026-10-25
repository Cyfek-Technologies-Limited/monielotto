import Link from 'next/link'
import { GameMark } from './brand'

const highlighted = new Set([3, 9, 11, 18])

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-xl px-4 pt-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <GameMark title="Mega Jackpot" subtitle="Naira" balls={['7', '45']} size="lg" />
        <div>
          <h1 id="hero-title" className="text-3xl font-extrabold leading-none">
            ₦1 Billion
          </h1>
          <p className="mt-1 font-semibold">One ticket. One billion reasons to dream.</p>
        </div>
      </div>

      <div className="relative mt-5 overflow-hidden pb-2">
        <ol className="grid grid-cols-10 gap-1.5" aria-label="Sample number grid">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
            <li
              key={n}
              className={`flex aspect-square items-center justify-center rounded-full border-[3px] border-brand-yellow text-sm font-bold ${
                highlighted.has(n) ? 'bg-brand-yellow' : 'bg-white'
              }`}
            >
              {n}
            </li>
          ))}
        </ol>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-6 h-16 origin-bottom-left -skew-y-3 border-t-[3px] border-brand-ink bg-white"
        />
        <Link
          href="#draw-games"
          className="absolute bottom-2 right-0 rounded-md border-[3px] border-brand-ink bg-brand-lime px-3 py-1.5 text-sm font-bold shadow-[0_3px_0_var(--color-brand-ink)] transition-transform active:translate-y-0.5 active:shadow-none"
        >
          Get your tickets!
        </Link>
      </div>
    </section>
  )
}
